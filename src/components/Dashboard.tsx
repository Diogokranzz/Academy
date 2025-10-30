import React, { useState } from 'react'

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const userStats = {
    name: 'João Silva',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    currentWeight: 75,
    targetWeight: 70,
    height: 175,
    bmi: 24.5,
    workoutsThisWeek: 4,
    caloriesBurned: 1200,
    streak: 12
  }

  const weeklyProgress = [
    { day: 'Seg', calories: 300, workouts: 1 },
    { day: 'Ter', calories: 450, workouts: 1 },
    { day: 'Qua', calories: 200, workouts: 0 },
    { day: 'Qui', calories: 600, workouts: 2 },
    { day: 'Sex', calories: 350, workouts: 1 },
    { day: 'Sáb', calories: 500, workouts: 1 },
    { day: 'Dom', calories: 400, workouts: 1 }
  ]

  const upcomingWorkouts = [
    { time: '08:00', type: 'Musculação', gym: 'Pulse Gym' },
    { time: '19:00', type: 'Cardio', gym: 'UrbanBox' },
    { time: '20:30', type: 'Yoga', gym: 'Zen Fitness' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Dashboard Pessoal
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeTab === 'overview'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Visão Geral
                  </button>
                  <button
                    onClick={() => setActiveTab('progress')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeTab === 'progress'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Progresso
                  </button>
                </div>
              </div>

              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-4 text-white">
                      <div className="text-sm opacity-90">Peso Atual</div>
                      <div className="text-2xl font-bold">{userStats.currentWeight}kg</div>
                    </div>
                    <div className="bg-gradient-to-r from-success-500 to-success-600 rounded-xl p-4 text-white">
                      <div className="text-sm opacity-90">Meta</div>
                      <div className="text-2xl font-bold">{userStats.targetWeight}kg</div>
                    </div>
                    <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-4 text-white">
                      <div className="text-sm opacity-90">Sequência</div>
                      <div className="text-2xl font-bold">{userStats.streak} dias</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Progresso Semanal
                      </h3>
                      <div className="space-y-3">
                        {weeklyProgress.map((day, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">{day.day}</span>
                            <div className="flex items-center space-x-4">
                              <div className="w-20 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                                <div 
                                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${(day.calories / 600) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {day.calories}cal
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Próximos Treinos
                      </h3>
                      <div className="space-y-3">
                        {upcomingWorkouts.map((workout, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {workout.type}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {workout.gym}
                              </div>
                            </div>
                            <div className="text-primary-600 dark:text-primary-400 font-medium">
                              {workout.time}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'progress' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {userStats.bmi}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">IMC Atual</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl p-6">
                      <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                        Calorias Queimadas
                      </h4>
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                        {userStats.caloriesBurned}
                      </div>
                      <div className="text-sm text-primary-700 dark:text-primary-300">
                        Esta semana
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900 dark:to-success-800 rounded-xl p-6">
                      <h4 className="font-semibold text-success-900 dark:text-success-100 mb-2">
                        Treinos Realizados
                      </h4>
                      <div className="text-3xl font-bold text-success-600 dark:text-success-400">
                        {userStats.workoutsThisWeek}
                      </div>
                      <div className="text-sm text-success-700 dark:text-success-300">
                        Esta semana
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={userStats.avatar}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {userStats.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Membro desde Jan 2024
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Altura</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {userStats.height}cm
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Peso Atual</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {userStats.currentWeight}kg
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Meta</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {userStats.targetWeight}kg
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Conquistas
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      Primeira Semana
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Complete 7 dias consecutivos
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">💪</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      Maratonista
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Queime 1000 calorias
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
