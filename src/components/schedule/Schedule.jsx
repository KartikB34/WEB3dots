import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Schedule = () => {

    useEffect(() => {
        Aos.init({duration: 800});
    },[])
    
  return (
    <div className='px-12 pt-20 pb-8'>
      <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>SCHEDULE</p>
      <div className='flex items-center'>
        <div className='h-[2px] w-24 bg-gradient-to-r from-[#C385F1] to-[#7A91D6] mr-2'></div>
        <p data-Aos="fade-left" className='font-bold text-2xl'>2022</p>
      </div>

      {/* The actual schedule */}
      <div className='flex justify-center mt-20'>
        {/* Left div */}
        <div className='hidden md:block'>
            <div data-Aos="fade-up" className='w-[335px] md:w-[400px] h-20 mb-8 text-right'><p>19th July 2021</p></div>

            <div data-Aos="fade-up" className='p-4 relative mb-8 flex flex-col w-[335px] md:w-[400px]  bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute right-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>
            </div>

            <div data-Aos="fade-up" className='w-[335px] md:w-[400px] h-20 mb-8 text-right'><p>19th July 2021</p></div>

            <div data-Aos="fade-up" className='p-4 relative flex w-[335px] md:w-[400px] mb-8 bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-20 absolute right-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                <div>
                    <p>Webinar & instructions</p>
                    <p>By Mr.shivay lamba</p>
                </div>
            </div>

            <div className='w-[335px] md:w-[400px] h-36 mb-8 text-left'></div>

            <div data-Aos="fade-up" className='p-4 relative mb-8 flex flex-col w-[335px] md:w-[400px]  bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute right-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>
            </div>
        </div>


        {/*Middle div */}

        <div className='px-4 md:px-8 relative'>
            <div className='h-[67.5rem] md:h-[63rem] w-[7px]  rounded-full bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>
                <div data-Aos="fade-up" className='h-[21px] w-[21px] absolute right-[10px] md:right-[25px] bg-[#7A91D6] rounded-full'></div>
                <div data-Aos="fade-up" className='h-[21px] w-[21px] absolute right-[10px] md:right-[25px] top-[8.5rem] md:top-28 bg-[#7A91D6] rounded-full'></div>
                <div data-Aos="fade-up" className='h-[21px] w-[21px] absolute right-[10px] md:right-[25px] top-[19.5rem] md:top-64 mt-6 bg-[#7A91D6] rounded-full'></div>
                <div data-Aos="fade-up" className='h-[21px] w-[21px] absolute right-[10px] md:right-[25px] top-[29rem] md:top-[25rem] bg-[#7A91D6] rounded-full'></div>

                <div data-Aos="fade-up" className='h-[21px] w-[21px] absolute right-[10px] md:right-[25px] bottom-[32rem] bg-[#7A91D6] rounded-full'></div>
                <div data-Aos="fade-up" className='h-[21px] w-[21px] absolute right-[10px] md:right-[25px] bottom-[21rem] bg-[#7A91D6] rounded-full'></div>
                <div data-Aos="fade-up" className='h-[21px] w-[21px] absolute right-[10px] md:right-[25px] bottom-40 bg-[#7A91D6] rounded-full'></div>
            </div>
        </div>


        {/*Right div */}
        <div>

            <div data-Aos="fade-up" className='w-[335px] md:w-[400px] md:hidden text-left'><p>19th July 2021</p></div>

            <div data-Aos="fade-up" className='p-4 relative flex w-[335px] md:w-[400px] mb-8 bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-20 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                <div>
                    <p>Webinar & instructions</p>
                    <p>By Mr.shivay lamba</p>
                </div>
            </div>

            <div data-Aos="fade-up" className='w-[335px] md:w-[400px] md:h-36 md:mb-8 text-left'><p>19th July 2021</p></div>
            
            <div data-Aos="fade-up" className='p-4 md:hidden relative mb-8 flex flex-col w-[335px] md:w-[400px] bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>
            </div>

            <div data-Aos="fade-up" className='w-[335px] md:w-[400px] md:hidden text-left'><p>19th July 2021</p></div>

            <div data-Aos="fade-up" className='p-4 relative flex w-[335px] md:w-[400px] mb-8 bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-20 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                <div>
                    <p>Webinar & instructions</p>
                    <p>By Mr.shivay lamba</p>
                </div>
            </div>

            <div data-Aos="fade-up" className='p-4 relative md:hidden flex w-[335px] md:w-[400px] mb-8 bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-20 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                <div>
                    <p>Webinar & instructions</p>
                    <p>By Mr.shivay lamba</p>
                </div>
            </div>

            <div className='w-[335px] md:w-[400px] hidden md:block h-20 mb-8 text-left'></div>

            <div data-Aos="fade-up" className='p-4 relative mb-8 flex flex-col w-[335px] md:w-[400px]  bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

            </div>

            <div className='w-[335px] md:w-[400px] hidden md:block h-36 mb-8 text-left'></div>

            <div data-Aos="fade-up" className='p-4 md:hidden relative mb-8 flex flex-col w-[335px] md:w-[400px] bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>
            </div>

            <div data-Aos="fade-up" className='p-4 relative mb-8 flex flex-col w-[335px] md:w-[400px]  bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6] font-bold'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule