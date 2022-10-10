import React,{useState} from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className='flex h-24 pt-8 px-12 items-center flex-row justify-between'>
      <div className='relative'>
        <a href='/' className='transform transition duration-500 hover:scale-125 text-2xl font-bold'>WEB3DOT</a>
      </div>

      <div className='md:flex hidden items-center flex-row justify-between'>
        <a href='/' className='mr-8 relative group'>
          <span>Home</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <a href='/#schedule' className='mr-8 relative group'>
          <span>Schedule</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <a href='/#faq' className='mr-8 relative group'>
          <span>FAQs</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <a href='/#panelist' className='mr-8 relative group'>
          <span>Panelists</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <a href='/#prizes' className='mr-8 relative group'>
          <span>Prizes</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <span className="absolute left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
        <a href='/' className='transform transition duration-500 hover:scale-125 mr-8 h-10 flex border rounded-lg items-center w-20 justify-center'>Login</a>
        <a href='/' className='transform transition duration-500 hover:scale-125 h-10 flex border-transparent rounded-lg items-center w-24 bg-gradient-to-r from-[#F678F0] to-[#00E8FF] justify-center'>Register</a>
      
      </div>

      <div className='md:hidden relative'>
        <div onClick={handleClick} className='hover:cursor-pointer'>
          <div className='w-[2rem] h-[1px] bg-white'></div>
          <div className='w-[2rem] h-[1px] my-2 bg-white'></div>
          <div className='w-[2rem] h-[1px] bg-white'></div>
        </div>

        <div className={` ${open? 'block' : 'hidden'} z-50 absolute bg-[#242424] px-4 py-2 right-1 items-center justify-center flex flex-col`}>
        <a href='/' className='mr-8 relative group'>
          <span>Home</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <a href='/#schedule' className='mr-8 relative group'>
          <span>Schedule</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <a href='/#faq' className='mr-8 relative group'>
          <span>FAQs</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <a href='/#panelist' className='mr-8 relative group'>
          <span>Panelists</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>

        <a href='/#prizes' className='mr-8 relative group'>
          <span>Prizes</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#EB7EF1] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>
          <a href='/' className='my-2 h-10 flex border rounded-lg items-center w-20 justify-center'>Login</a>
          <a href='/' className='h-10  transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-20 bg-gradient-to-r from-[#C385F1] to-[#7A91D6] justify-center'>Register</a>
        </div>

      </div>
    </div>
  )
}

export default Navbar