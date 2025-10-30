import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success: boolean
  user?: {
    id: string
    email: string
    name: string
  }
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { email, password, name } = req.body

  if (!email || !password || !name) {
    return res.status(400).json({ success: false, error: 'Name, email and password are required' })
  }

  console.log(`New user registration: ${name} (${email})`)

  return res.status(201).json({
    success: true,
    user: {
      id: Date.now().toString(),
      email,
      name
    }
  })
}

