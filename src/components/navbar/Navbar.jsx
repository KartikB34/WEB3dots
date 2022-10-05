import React,{useState} from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className='flex h-24 pt-8 px-12 items-center flex-row justify-between'>
      <div>
        <p className='text-2xl font-bold'>WEB3DOTS</p>
      </div>

      <div className='md:flex hidden items-center flex-row justify-between'>
        <a href='/' className='mr-8'>Home</a>
        <a href='/' className='mr-8'>Schedule</a>
        <a href='/' className='mr-8'>FAQs</a>
        <a href='/' className='mr-8'>Panelists</a>
        <a href='/' className='mr-8'>Prizes</a>
        <a href='/' className='mr-8 h-10 flex border rounded-lg items-center w-20 justify-center'>Login</a>
        <a href='/' className='h-10 flex border-transparent rounded-lg items-center w-24 bg-gradient-to-r from-[#F678F0] to-[#00E8FF] justify-center'>Register</a>
      </div>

      <div className='md:hidden relative'>
        <div onClick={handleClick} className='hover:cursor-pointer'>
          <div className='w-[2rem] h-[1px] bg-white'></div>
          <div className='w-[2rem] h-[1px] my-2 bg-white'></div>
          <div className='w-[2rem] h-[1px] bg-white'></div>
        </div>

        <div className={` ${open? 'block' : 'hidden'} z-50 absolute bg-[#242424] px-4 py-2 right-1 items-center justify-center flex flex-col`}>
          <a href='/' className='my-2'>Home</a>
          <a href='/#schedule' className='my-2'>Schedule</a>
          <a href='/#faq' className='my-2'>FAQs</a>
          <a href='/#panelist' className='my-2'>Panelists</a>
          <a href='/#prizes' className='my-2'>Prizes</a>
          <a href='/' className='my-2 h-10 flex border rounded-lg items-center w-20 justify-center'>Login</a>
          <a href='/' className='h-10 my-2 flex border-transparent rounded-lg items-center w-20 bg-gradient-to-r from-[#F678F0] to-[#00E8FF] justify-center'>Register</a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
