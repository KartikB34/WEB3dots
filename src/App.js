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
      <Landing id="home"/>
      <Schedule id="schedule" />
      <Faq id="faq"/>
      <Panelists id="panelist"/>
      <Sponsor id="sponsor"/>
      <Prizes id="prizes"/>
      <Webinar id="webinar"/>
    </div>
  )
}

export default App