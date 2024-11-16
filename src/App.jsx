import React, { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import HomePage from "./components/HomePage"
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="dark:bg-[#030712] dark:text-white min-h-screen">
      <Header />
      <ProgressBar />
      {/* <div> */}
        <HomePage />
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default App
