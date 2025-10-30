import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success: boolean
  activationCode?: string
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { email, planType } = req.body

  if (!email || !planType) {
    return res.status(400).json({ success: false, error: 'Email and plan type are required' })
  }

  const activationCode = `GYM${Date.now().toString().slice(-8)}`

  console.log(`Activating plan ${planType} for ${email} with code ${activationCode}`)

  return res.status(200).json({
    success: true,
    activationCode,
    message: `Plano ${planType} ativado com sucesso! Código enviado para ${email}`
  })
}

