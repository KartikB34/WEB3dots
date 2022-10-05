import React from 'react'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import Schedule from './components/schedule/Schedule'
import Faq from './components/faq/Faq'
import Panelists from './components/panelists/Panelists'
import Sponsor from './components/sponsor/Sponsor'
import Prizes from './components/prizes/Prizes'
import Webinar from './components/webinar/Webinar'

const App = () => {
  return (
    <div className='bg-[#1E1E1E] text-white'>
      <Navbar />
      <div id="home"><Landing /></div>
      <div id="schedule"><Schedule /></div>
      <div id="faq"><Faq /></div>
      <div id="panelist"><Panelists /></div>
      <div id="sponsor"><Sponsor /></div>
      <div id="prizes"><Prizes /></div>
      <div id="webinar"><Webinar /></div>
    </div>
  )
}

export default App