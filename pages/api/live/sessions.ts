import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const sessions = [
    { coach: 'Coach digital', title: 'Lower Body Fire', subtitle: 'Back Squat · 4 séries', duration: 75 },
    { coach: 'Coach digital', title: 'Upper Pump Express', subtitle: 'Bench Press · 5 séries', duration: 90 },
    { coach: 'Coach digital', title: 'HIIT Core Blast', subtitle: 'Circuito · 6 blocos', duration: 60 },
  ]
  res.status(200).json({ sessions })
}


