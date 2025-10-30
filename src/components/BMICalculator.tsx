import React, { useState } from 'react'

export const BMICalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h)
      setBmi(Math.round(bmiValue * 10) / 10)
      
      if (bmiValue < 18.5) {
        setCategory('Abaixo do peso')
      } else if (bmiValue < 25) {
        setCategory('Peso normal')
      } else if (bmiValue < 30) {
        setCategory('Sobrepeso')
      } else {
        setCategory('Obesidade')
      }
    }
  }

  const getCategoryColor = () => {
    if (!bmi) return ''
    if (bmi < 18.5) return 'text-blue-500'
    if (bmi < 25) return 'text-green-500'
    if (bmi < 30) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Calculadora de IMC</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Altura (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 175"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Peso (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 70"
          />
        </div>
        
        <button
          onClick={calculateBMI}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium"
        >
          Calcular IMC
        </button>
        
        {bmi && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {bmi}
              </div>
              <div className={`text-lg font-medium ${getCategoryColor()}`}>
                {category}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
