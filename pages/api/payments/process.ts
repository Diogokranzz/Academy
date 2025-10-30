import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success: boolean
  transactionId?: string
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

  const { email, planType, price, paymentMethod, cardData } = req.body

  if (!email || !planType || price === undefined || !paymentMethod) {
    return res.status(400).json({ success: false, error: 'Missing required fields' })
  }

  if (paymentMethod === 'credit' && (!cardData || !cardData.number || !cardData.name || !cardData.expiry || !cardData.cvv)) {
    return res.status(400).json({ success: false, error: 'Invalid card data' })
  }

  const transactionId = `TXN${Date.now().toString()}`
  const activationCode = `GYM${Date.now().toString().slice(-8)}`

  console.log(`Processing payment:
    Email: ${email}
    Plan: ${planType}
    Price: R$ ${price}
    Method: ${paymentMethod}
    Transaction ID: ${transactionId}
    Activation Code: ${activationCode}
  `)

  await new Promise(resolve => setTimeout(resolve, 2000))

  return res.status(200).json({
    success: true,
    transactionId,
    activationCode,
    message: `Pagamento processado com sucesso! Código de ativação enviado para ${email}`
  })
}

