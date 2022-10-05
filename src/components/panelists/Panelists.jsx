import React from 'react'
import panelist from "../assets/panelist.png"

const Panelists = () => {
  return (
    <div className='px-12 pt-20 pb-8'>
      <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>PANELISTS</p>
      <div className='flex items-center'>
        <div className='h-[2px] w-24 bg-gradient-to-r from-[#C385F1] to-[#7A91D6] mr-2'></div>
        <p className='font-bold text-2xl'>Who is conducting?</p>
      </div>

      <div className='mt-16'>
        <p className='text-2xl'>TECH PANELISTS</p>
        
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 flex-wrap md:grid-cols-5 gap-y-8'>
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
        </div>
      </div>


      <div className='mt-16'>
        <p className='text-2xl'>HR PANELISTS</p>
        
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 flex-wrap md:grid-cols-5 gap-y-8'>
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
            <img src={panelist} alt="panelist" />
        </div>
      </div>
    </div>
  )
}

export default Panelists
