import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success: boolean
  token?: string
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

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'Email and password are required' })
  }

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${Buffer.from(JSON.stringify({ email, timestamp: Date.now() })).toString('base64')}`

  console.log(`User login: ${email}`)

  return res.status(200).json({
    success: true,
    token,
    user: {
      id: '1',
      email,
      name: 'João Silva'
    }
  })
}

