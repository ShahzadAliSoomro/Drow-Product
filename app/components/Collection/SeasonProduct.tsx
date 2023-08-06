import React from 'react'
import Image from 'next/image'

export default function SeasonProduct() {
  return (
    <div className='mx-auto w-full bg-[#fff]'>
      <div className='p-5 flex-wrap lg:flex-nowrap'>
        <div className='flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040] p-5'>
          <h2>Season Collections</h2>
        </div>
        <div className='flex gap-5 justify-center flex-wrap lg:flex-nowrap'>
          <div className='flex gap-4 flex-col'>
             <Image src="/images/5.png" alt='5Image' width={400} height={400}/>
             <div className='flex justify-center items-center text-lg'>
             <button className='w-20 text-[#404040] p-1 bg-[#F7F6F0] rounded-xl'>More</button>
             </div>
          </div>
          <div className='flex gap-4 flex-col'>
             <Image src="/images/6.png" alt='5Image' width={400} height={400}/>
             <div className='flex justify-center items-center text-lg'>
             <button className='w-20 text-[#404040] p-1 bg-[#F7F6F0] rounded-xl'>More</button>
             </div>
          </div>
          <div className='flex gap-4 flex-col'>
             <Image src="/images/7.png" alt='5Image' width={400} height={400}/>
             <div className='flex justify-center items-center text-lg'>
             <button className='w-20 text-[#404040] p-1 bg-[#F7F6F0] rounded-xl'>More</button>
             </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
