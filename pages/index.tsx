import React, { useState } from 'react'
import Header from '../components/Header'
import HomeHero from '../sections/HomeHero'
import PersonalizedTraining from '../sections/PersonalizedTraining'
import ExploreGyms from '../sections/ExploreGyms'
import Nutrition from '../sections/Nutrition'
import Community from '../sections/Community'
import Plans from '../sections/Plans'
import Roadmap from '../sections/Roadmap'
import Footer from '../sections/Footer'
import { Dashboard } from '../components/Dashboard'

export default function Home() {
  const [currentView, setCurrentView] = useState('home')

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 pb-20">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="pt-20 md:pt-24">
        {currentView === 'home' ? (
          <>
            <HomeHero />
            <PersonalizedTraining />
            <ExploreGyms />
            <Nutrition />
            <Community />
            <Plans />
            <Roadmap />
            <Footer />
          </>
        ) : (
          <Dashboard />
        )}
      </main>
    </div>
  )
}

