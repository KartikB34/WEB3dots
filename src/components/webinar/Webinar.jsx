import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

import dhairya from "../assets/dhairya.png"
import time from "../assets/time.png"
import date from "../assets/date.png"
import instagram from "../assets/instagram.png"
import youtube from "../assets/youtube.png"

import sehaj from "../assets/sehaj.png"
import navdeesh from "../assets/navdeesh.png"
import meet from "../assets/meet.png"
import roshan from "../assets/roshan.png"
import vinit from "../assets/vinit.png"

const Webinar = () => {

    useEffect(() => {
        Aos.init({duration: 800});
    },[])

  return (
    <div className='px-12 pt-20 pb-16'>
      <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>WEBINAR</p>
       <div className='flex items-center'>
        <div className='h-[2px] w-24 bg-gradient-to-r from-[#C385F1] to-[#7A91D6] mr-2'></div>
        <p data-Aos="fade-left" className='font-bold text-2xl'>and pannel discussion</p>
       </div>

       <div className='bg-[#242424] md:flex justify-center items-center mt-16 p-8'>
        <img src={dhairya} alt="Dhairya Gangwani" />
        <div className='ml-[10%]'>
            <p className='text-xl md:text-3xl mb-8 mt-8 font-semibold'><span className='text-transparent text-3xl md:text-5xl md:mr-4 font-bold bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>RESUME.PDF</span>  by Dhairya Gangwani</p>
            <p className='flex text-xl md:text-3xl items-center'><img src={instagram} alt="instagram" className='w-8 h-8 mr-8' /> Live on Instagram</p>
            <p className='flex text-xl md:text-3xl my-6'><img src={date} alt="date" className='w-8 h-8 mr-8' /> 20st July</p>
            <p className='flex text-xl md:text-3xl'><img src={time} alt="time" className='w-8 h-8 mr-8' /> 8 PM</p>
        </div>
       </div>

       {/* Place-ment div */}
       <div className='bg-[#242424] flex flex-col justify-center items-center mt-16 p-8'>
        <p className=' text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>A place-ment to be</p>
        <p className=' text-2xl md:text-3xl mt-3 font-semibold'>1 placement : 5 different scenerio</p>

        <div className='flex justify-between flex-wrap my-8 items-center '>

            <div className='my-4 md:px-8 text-center items-center transform transition duration-500 hover:scale-110'>
                <img src={sehaj} alt="sehaj" className='h-[10rem]' />
                <p>Sehaj Maheshwari</p>
                <p>Data Science Engineer</p>
                <p>Wipro</p>
            </div>

            <div className='my-4 md:px-8 text-center items-center transform transition duration-500 hover:scale-110'>
                <img src={navdeesh} alt="navdeesh" className='h-[10rem]' />
                <p>Navdeesh Ahuja</p>
                <p>co-founder</p>
                <p>Pocketly</p>
            </div>

            <div className='my-4 md:px-8 text-center items-center transform transition duration-500 hover:scale-110'>
                <img src={meet} alt="meet" className='h-[10rem]' />
                <p>Meet Shukla</p>
                <p>technology analyst</p>
                <p>Deutsche Bank</p>
            </div>

            <div className='my-4 md:px-8 text-center items-center transform transition duration-500 hover:scale-110'>
                <img src={roshan} alt="roshan" className='h-[10rem]' />
                <p>Roshan Shah</p>
                <p>Software Engineer</p>
                <p>Baa</p>
            </div>

            <div className='my-4 md:px-8 text-center items-center transform transition duration-500 hover:scale-110'>
                <img src={vinit} alt="vinit" className='h-[10rem]' />
                <p>Vinit Shahdeo</p>
                <p>SDE-II</p>
                <p>Postman</p>
            </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-xl'>

            <div className='flex items-center col-span-2'>
                <img src={youtube} alt="youtube" className='mr-3'/>
                <p>Live on Vinnovate IT VIT</p>
            </div>

            <div className='flex items-center'>
                <img src={date} alt="date" className='mr-3'/>
                <p>21st July</p>
            </div>

            <div className='flex items-center'>
                <img src={time} alt="time" className='mr-3'/>
                <p>8pm</p>
            </div>

        </div>
       </div>
    </div>
  )
}

export default Webinar
