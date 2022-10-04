import React from 'react'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import Schedule from './components/schedule/Schedule'

const App = () => {
  return (
    <div className='bg-[#1E1E1E] text-white'>
      <Navbar />
      <Landing/>
      <Schedule />
    </div>
  )
}

export default App