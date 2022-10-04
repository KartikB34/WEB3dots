import React from 'react'

const Schedule = () => {
  return (
    <div className='px-12 pt-20 pb-8'>
      <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'>SCHEDULE</p>
      <div className='flex items-center'>
        <div className='h-[2px] w-24 bg-gradient-to-r from-[#C385F1] to-[#7A91D6] mr-2'></div>
        <p className='font-bold text-2xl'>2022</p>
      </div>

      {/* The actual schedule */}
      <div className='flex justify-center mt-20'>
        <div className=''>
            <div className='w-[400px] h-20 mb-8 text-right'><p>19th July 2021</p></div>

            <div className='p-4 relative mb-8 flex flex-col w-[400px]  bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute right-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>
            </div>

            <div className='w-[400px] h-20 mb-8 text-right'><p>19th July 2021</p></div>

            <div className='p-4 relative flex w-[400px] mb-8 bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-20 absolute right-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <p className='mr-4'>4:00pm-5:00pm</p>
                <div>
                    <p>Webinar & instructions</p>
                    <p>By Mr.shivay lamba</p>
                </div>
            </div>

            <div className='w-[400px] h-36 mb-8 text-left'></div>

            <div className='p-4 relative mb-8 flex flex-col w-[400px]  bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute right-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>
            </div>
        </div>


        {/*Middle div */}

        <div className='px-8'>
            <div className='h-[63rem] w-[7px] rounded-full bg-gradient-to-r from-[#C385F1] to-[#7A91D6]'></div>
        </div>


        {/*Right div */}
        <div>
            <div className='p-4 relative flex w-[400px] mb-8 bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-20 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <p className='mr-4'>4:00pm-5:00pm</p>
                <div>
                    <p>Webinar & instructions</p>
                    <p>By Mr.shivay lamba</p>
                </div>
            </div>

            <div className='w-[400px] h-36 mb-8 text-left'><p>19th July 2021</p></div>

            <div className='p-4 relative flex w-[400px] mb-8 bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-20 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <p className='mr-4'>4:00pm-5:00pm</p>
                <div>
                    <p>Webinar & instructions</p>
                    <p>By Mr.shivay lamba</p>
                </div>
            </div>

            <div className='w-[400px] h-20 mb-8 text-left'></div>

            <div className='p-4 relative mb-8 flex flex-col w-[400px]  bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

            </div>

            <div className='w-[400px] h-36 mb-8 text-left'></div>

            <div className='p-4 relative mb-8 flex flex-col w-[400px]  bg-[#242424]'>
                <div className='bg-gradient-to-b w-1 h-36 absolute left-0 top-0 from-[#C385F1] to-[#7A91D6]'></div>
                <div className='flex'>
                    <p className='mr-4'>4:00pm-5:00pm</p>
                    <div>
                        <p>Webinar & instructions</p>
                        <p>By Mr.shivay lamba</p>
                    </div>
                </div>

                <div className='flex mt-4'>
                    <p className='mr-4'>4:00pm-5:00pm</p>
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
