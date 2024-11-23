import React from 'react'
import WelcomePage from "./components/WelcomePage"
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="dark:bg-[#0B192C] dark:text-white min-h-screen text-xs sm:text-base">
      <Header />
      <WelcomePage />
      <Footer />
    </div>
  )
}

export default App
