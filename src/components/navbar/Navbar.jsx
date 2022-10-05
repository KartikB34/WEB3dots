import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-24 pt-8 px-12 items-center flex-row justify-between'>
      <div>
        <p className='text-2xl font-bold'>WEB3DOTS</p>
      </div>

      <div className='md:flex hidden items-center flex-row justify-between'>
        <a href='/' className='mr-8'>Home</a>
        <a href='/' className='mr-8'>About us</a>
        <a href='/' className='mr-8'>Timeline</a>
        <a href='/' className='mr-8'>Leaderboard</a>
        <a href='/' className='mr-8'>Contact</a>
        <a href='/' className='mr-8 h-10 flex border rounded-lg items-center w-20 justify-center'>Login</a>
        <a href='/' className='h-10 flex border-transparent rounded-lg items-center w-24 bg-gradient-to-r from-[#F678F0] to-[#00E8FF] justify-center'>Register</a>
      </div>
    </div>
  )
}

export default Navbar
