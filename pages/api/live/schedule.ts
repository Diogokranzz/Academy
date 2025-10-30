import type { NextApiRequest, NextApiResponse } from 'next'
// Load googleapis only on the server at runtime

type ScheduleResponse = {
  success: boolean
  eventId?: string
  htmlLink?: string
  meetLink?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ScheduleResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const {
    summary,
    description,
    start,
    end,
    timeZone,
  } = req.body || {}

  if (!summary || !start || !end || !timeZone) {
    return res.status(400).json({ success: false, error: 'Missing required fields' })
  }

  try {
    const clientId = process.env.GOOGLE_CLIENT_ID as string
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN as string
    const calendarId = (process.env.GOOGLE_CALENDAR_ID as string) || 'primary'

    if (!clientId || !clientSecret || !refreshToken) {
      return res.status(500).json({ success: false, error: 'Missing Google OAuth env vars' })
    }

    const { google } = await import('googleapis')
    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret)
    oAuth2Client.setCredentials({ refresh_token: refreshToken })

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

    const requestId = `meet-${Date.now()}`
    const response = await calendar.events.insert({
      calendarId,
      conferenceDataVersion: 1,
      requestBody: {
        summary,
        description,
        start: { dateTime: start, timeZone },
        end: { dateTime: end, timeZone },
        conferenceData: {
          createRequest: {
            requestId,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
      },
    })

    const event = response.data
    const meetLink = event.conferenceData?.entryPoints?.find((e) => e.entryPointType === 'video')?.uri

    return res.status(200).json({
      success: true,
      eventId: event.id || undefined,
      htmlLink: event.htmlLink || undefined,
      meetLink: meetLink || event.hangoutLink || undefined,
    })
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message || 'Unknown error' })
  }
}


