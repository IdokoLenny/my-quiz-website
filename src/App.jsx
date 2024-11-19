import React, { useState } from 'react'
import WelcomePage from "./components/WelcomePage"
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="dark:bg-[#0B192C] dark:text-white min-h-screen">
      <Header />
      <WelcomePage />
      <Footer />
    </div>
  )
}

export default App
