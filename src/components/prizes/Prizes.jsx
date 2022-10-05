import React from 'react'
import bluecup from "../assets/bluecup.png"
import purplecup from "../assets/purplecup.png"
import greencup from "../assets/greencup.png"
import orangecup from "../assets/orangecup.png"

const Prizes = () => {
  return (
    <div className='px-12 pt-20 pb-8'>
       <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>PRIZES</p>
       <div className='flex items-center'>
        <div className='h-[2px] w-24 bg-gradient-to-r from-[#C385F1] to-[#7A91D6] mr-2'></div>
        <p className='font-bold text-2xl'>Cash prizes and goodies</p>
       </div>

       {/* Actual prizes and goodies */}
       <div className='flex justify-between items-center md:px-12 mt-16 flex-wrap'>

        <div className='flex flex-col p-12 my-3 bg-[#242424] items-center'>
            <img src={bluecup} alt="bluecup" className='h-20 w-16' />
            <h2 className='font-bold mt-6 text-xl'>Top 5</h2>
            <h2 className='font-bold mb-6 text-xl'>Tecchnical Mock</h2>
            <p>2K each + Tshirt + Goodies</p>
        </div>

        <div className='flex flex-col p-12 my-3 bg-[#242424] items-center'>
            <img src={purplecup} alt="purplecup" className='h-20 w-16' />
            <h2 className='font-bold mt-6 text-xl'>Top 5</h2>
            <h2 className='font-bold mb-6 text-xl'>Tecchnical Mock</h2>
            <p>2K each + Tshirt + Goodies</p>
        </div>

        <div className='flex flex-col p-12 my-3 bg-[#242424] items-center'>
            <img src={greencup} alt="greencup" className='h-20 w-16' />
            <h2 className='font-bold mt-6 text-xl'>Top 5</h2>
            <h2 className='font-bold mb-6 text-xl'>Tecchnical Mock</h2>
            <p>2K each + Tshirt + Goodies</p>
        </div>

        <div className='flex flex-col p-12 my-3 bg-[#242424] items-center'>
            <img src={orangecup} alt="orangecup" className='h-20 w-16' />
            <h2 className='font-bold mt-6 text-xl'>Top 5</h2>
            <h2 className='font-bold mb-6 text-xl'>Tecchnical Mock</h2>
            <p>2K each + Tshirt + Goodies</p>
        </div>

       </div>

    </div>
  )
}

export default Prizes
