import React from 'react'
import Image from 'next/image'

export default function HeroSec() {
  return (
    <div className='mx-auto w-full bg-[#F5F5F5]'>
        <div className='flex gap-16 justify-center items-center flex-wrap lg:flex-nowrap '> 
            <div className='hover:-translate-x-3 transition-all duration-500'>
                <Image src='/images/1.png' alt='' width={180} height={180}/>
            </div>
            <div className='hover:-translate-x-3 transition-all duration-500'>
                <Image src='/images/2.png' alt='' width={270} height={270}/>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
            <div className="text-[#404040] flex items-center text-4xl font-bold border-b-2 border-gray-400">
            <p >DROWPRO</p>
          </div>
          <div className='text-[#404040] text-xs flex items-center justify-center '>
            <p className='w-48'>Make your everyday look prettier with DROWPRO korean Made</p>
          </div>
            </div>
            <div className='hover:-translate-x-3 transition-all duration-500'>
                <Image src='/images/3.png' alt='' width={250} height={250}/>
            </div>
            <div className='hover:-translate-x-3 transition-all duration-500'>
                <Image src='/images/4.png' alt='' width={230} height={230}/>
            </div>
        </div>
    </div>
  )
}
