import React from 'react'
import Image from 'next/image'

export default function ShopNow() {
  return (
    <div className='mx-auto w-full bg-[#F5F5F5]'>
        <div className='flex gap-16 p-16 justify-center items-center flex-wrap lg:flex-nowrap'> 
            <div className='hover:-translate-y-3 transition-all duration-500'>
                <Image src='/images/14.png' alt='' width={280} height={280}/>
            </div>
            <div className='hover:-translate-y-3 transition-all duration-500'>
                <Image src='/images/15.png' alt='' width={220} height={220}/>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center'>
            <div className="text-[#404040] flex items-center text-4xl font-bold border-b-2 border-gray-400">
            <p >Get 50% Off</p>
          </div>
          <div className='text-[#404040] text-xs flex items-center justify-center '>
            <p className='w-48'>For all new product purchases min. purchase Rp. 350.000</p>
          </div>
          <div className='flex justify-center items-center text-base'>
             <button className='text-[#404040] p-2 bg-[#FFFFFF] rounded-xl'>SHOP NOW</button>
             </div>
            </div>
            <div className='hover:-translate-y-3 transition-all duration-500'>
                <Image src='/images/16.png' alt='' width={450} height={450}/>
            </div>
            
        </div>
    </div>
  )
}
