import React, { useState } from "react"

interface CheckoutProps {
  planType: 'FREE' | 'PRO' | 'PRO+'
  price: number
  onClose: () => void
}

export default function Checkout({ planType, price, onClose }: CheckoutProps) {
  const [email, setEmail] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showPaymentDetails, setShowPaymentDetails] = useState(false)
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && paymentMethod) {
      setShowPaymentDetails(true)
    } else if (price === 0) {
      try {
        const response = await fetch('/api/plans/activate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, planType: 'FREE' })
        })
        const data = await response.json()
        if (response.ok) {
          alert(`✅ Plano ativado com sucesso!\n\n📧 Código de ativação enviado para: ${email}\n\n🎉 Bem-vindo ao GymVerse FREE!`)
          onClose()
        }
      } catch (error) {
        console.error('Error activating plan:', error)
      }
    }
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    
    try {
      const response = await fetch('/api/payments/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          planType,
          price,
          paymentMethod,
          cardData: paymentMethod === 'credit' ? cardData : undefined
        })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        alert(`✅ Pagamento processado com sucesso!\n\n📧 Código de ativação enviado para: ${email}\n\n🎉 Bem-vindo ao GymVerse ${planType}!`)
        setIsProcessing(false)
        onClose()
      } else {
        alert(`Erro ao processar pagamento: ${data.error}`)
        setIsProcessing(false)
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('Erro ao processar pagamento. Tente novamente.')
      setIsProcessing(false)
    }
  }

  const generatePixQR = () => {
    const pixData = {
      chave: 'contato@gymverse.com.br',
      valor: price,
      descricao: `GymVerse ${planType} - Mensalidade`,
      merchant: 'GymVerse Fitness LTDA',
      cidade: 'São Paulo - SP'
    }
    return `00020126580014BR.GOV.BCB.PIX0114${pixData.chave}520400005303986540${price.toFixed(2)}5802BR5913${pixData.merchant}6009${pixData.cidade}62070503***6304`
  }

  const generateBoleto = () => {
    const boletoData = {
      banco: '341 - Itaú Unibanco S.A.',
      agencia: '1234',
      conta: '56789-0',
      nossoNumero: '12345678901',
      valor: price,
      vencimento: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR'),
      beneficiario: 'GymVerse Fitness LTDA',
      cnpj: '12.345.678/0001-90',
      endereco: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100'
    }
    return boletoData
  }

  const getPlanFeatures = () => {
    switch(planType) {
      case 'FREE':
        return ['Acesso a treinos básicos', 'Busca de academias', 'Check-in ilimitado', 'Feed social']
      case 'PRO':
        return ['IA personalizada', 'Nutrição inteligente', 'Treinos sob medida', 'Análise biomecânica', 'Relatórios detalhados']
      case 'PRO+':
        return ['Academias parceiras', 'Coaches 1:1', 'GymPass style', 'Videochamadas', 'Suporte priority']
      default:
        return []
    }
  }

  if (showPaymentDetails) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-[#1d263d] rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-2xl font-bold">Finalizar Pagamento</h2>
            <button 
              onClick={() => setShowPaymentDetails(false)}
              className="text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="bg-[#232e4c] rounded-2xl p-6 mb-6">
            <div className="text-center">
              <div className="text-cyan-300 text-2xl font-bold mb-2">GymVerse {planType}</div>
              <div className="text-white text-3xl font-bold mb-2">
                R$ {price.toFixed(2)}
                <span className="text-lg text-gray-400">/mês</span>
              </div>
              <div className="text-[#b9e6fc] text-sm">Pagamento via {paymentMethod}</div>
            </div>
          </div>

          {paymentMethod === 'pix' && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4 text-center">Pague com PIX</h3>
              <div className="bg-white p-6 rounded-2xl mb-4">
                <div className="text-center">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(generatePixQR())}`}
                    alt="QR Code PIX"
                    className="w-48 h-48 mx-auto rounded-lg mb-4"
                  />
                  <div className="text-gray-700 text-sm mb-2">Escaneie o QR Code com seu app do banco</div>
                  <div className="text-gray-500 text-xs">Ou copie o código PIX abaixo:</div>
                </div>
              </div>
              <div className="bg-[#232e4c] rounded-xl p-4">
                <div className="text-white text-xs mb-2">Código PIX:</div>
                <div className="bg-black text-green-400 text-xs p-2 rounded font-mono break-all">
                  {generatePixQR()}
                </div>
                <button 
                  className="w-full mt-3 bg-green-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
                  onClick={() => navigator.clipboard.writeText(generatePixQR())}
                >
                  Copiar Código PIX
                </button>
              </div>
            </div>
          )}

          {paymentMethod === 'credit' && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">Dados do Cartão</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Número do Cartão</label>
                  <input
                    type="text"
                    value={cardData.number}
                    onChange={(e) => setCardData({...cardData, number: e.target.value})}
                    className="w-full bg-[#232e4c] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Nome no Cartão</label>
                  <input
                    type="text"
                    value={cardData.name}
                    onChange={(e) => setCardData({...cardData, name: e.target.value})}
                    className="w-full bg-[#232e4c] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="JOÃO DA SILVA"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Validade</label>
                    <input
                      type="text"
                      value={cardData.expiry}
                      onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                      className="w-full bg-[#232e4c] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="MM/AA"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">CVV</label>
                    <input
                      type="text"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                      className="w-full bg-[#232e4c] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'boleto' && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">Boleto Bancário</h3>
              <div className="bg-white p-6 rounded-2xl">
                <div className="text-center mb-4">
                  <div className="text-gray-700 font-bold text-lg mb-2">GymVerse Fitness LTDA</div>
                  <div className="text-gray-600 text-sm">CNPJ: 12.345.678/0001-90</div>
                </div>
                
                {(() => {
                  const boleto = generateBoleto()
                  return (
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Banco:</span>
                        <span className="text-gray-800 font-semibold">{boleto.banco}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Agência:</span>
                        <span className="text-gray-800 font-semibold">{boleto.agencia}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Conta:</span>
                        <span className="text-gray-800 font-semibold">{boleto.conta}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nosso Número:</span>
                        <span className="text-gray-800 font-semibold">{boleto.nossoNumero}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Valor:</span>
                        <span className="text-gray-800 font-bold text-lg">R$ {boleto.valor.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vencimento:</span>
                        <span className="text-gray-800 font-semibold">{boleto.vencimento}</span>
                      </div>
                    </div>
                  )
                })()}
                
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <div className="text-gray-600 text-xs text-center">
                    {generateBoleto().endereco}
                  </div>
                </div>
              </div>
              <button 
                className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                onClick={() => window.print()}
              >
                Imprimir Boleto
              </button>
            </div>
          )}

          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              isProcessing 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:scale-105 transform shadow-lg'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processando pagamento...
              </div>
            ) : (
              `Confirmar Pagamento - R$ ${price.toFixed(2)}`
            )}
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs">
              🔒 Pagamento 100% seguro • Cancele quando quiser
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1d263d] rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-bold">Finalizar Compra</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="bg-[#232e4c] rounded-2xl p-6 mb-6">
          <div className="text-center">
            <div className="text-cyan-300 text-3xl font-bold mb-2">GymVerse {planType}</div>
            <div className="text-white text-4xl font-bold mb-4">
              {price === 0 ? 'GRÁTIS' : `R$ ${price.toFixed(2)}`}
              {price > 0 && <span className="text-lg text-gray-400">/mês</span>}
            </div>
            <div className="text-[#b9e6fc] text-sm">
              {price === 0 ? 'Sempre gratuito' : 'Cobrança mensal automática'}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-semibold mb-3">O que você recebe:</h3>
          <ul className="space-y-2">
            {getPlanFeatures().map((feature, index) => (
              <li key={index} className="flex items-center text-[#b9e6fc] text-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email para receber o código de ativação
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#232e4c] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="seu@email.com"
              required
            />
          </div>

          {price > 0 && (
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Forma de pagamento
              </label>
              <div className="space-y-2">
                <label className="flex items-center bg-[#232e4c] rounded-xl p-3 cursor-pointer hover:bg-[#2a3a5a] transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 text-cyan-400"
                    required
                  />
                  <span className="text-white">💳 Cartão de Crédito</span>
                </label>
                <label className="flex items-center bg-[#232e4c] rounded-xl p-3 cursor-pointer hover:bg-[#2a3a5a] transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="pix"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 text-cyan-400"
                    required
                  />
                  <span className="text-white">📱 PIX</span>
                </label>
                <label className="flex items-center bg-[#232e4c] rounded-xl p-3 cursor-pointer hover:bg-[#2a3a5a] transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="boleto"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 text-cyan-400"
                    required
                  />
                  <span className="text-white">📄 Boleto Bancário</span>
                </label>
              </div>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              price === 0 
                ? 'bg-gradient-to-r from-green-400 to-green-500 text-white hover:scale-105 transform shadow-lg'
                : 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:scale-105 transform shadow-lg'
            }`}
          >
            {price === 0 ? 'Ativar Plano Gratuito' : 'Continuar para Pagamento'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs">
            🔒 Pagamento 100% seguro • Cancele quando quiser
          </p>
        </div>
      </div>
    </div>
  )
}

