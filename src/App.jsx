import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoreSocial from './components/LoreSocial'
import ChartTokenomics from './components/ChartTokenomics'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fff7ff] text-[#2b1b2b] selection:bg-bobanad selection:text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <LoreSocial />
        <ChartTokenomics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}
