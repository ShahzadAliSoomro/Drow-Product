import React from 'react'
import Image from 'next/image'
import {PiArrowBendUpRightLight} from 'react-icons/pi'
export default function FeatureCollection() {
  return (
    <div className='mx-auto w-full container'>
        <div className='p-5'>
        <div className='flex justify-center items-center text-5xl font-bold text-[#404040] p-5'>
          <h2>Our Featured Collections</h2>
        </div >
        <div className='flex relative'>
            <div className='flex flex-col '> 
            <div className='flex justify-center'>
              
                <div>
                     <Image src="/images/23.png" alt='' width={400} height={400} />
                </div>
                <div className='flex text-[#404040] absolute top-0 left-0 '>
                    <div className='flex flex-col '>
                    <h5>COLORFUL KNITWEAR</h5>
                    <h5>SERIES</h5>
                    </div>
                    <div className='bg-[#F7F6F0] '>
                        <PiArrowBendUpRightLight className="w-10 h-10"/>
                    </div>
                </div>
            
            </div>
            {/* <div className='relative'>
                <div>
                     <Image src="/images/24.png" alt='' width={400} height={400} />
                </div>
                <div className='flex text-[#404040] absolute top-0 '>
                    <div className='flex flex-col'>
                    <h5>COLORFUL KNITWEAR</h5>
                    <h5>SERIES</h5>
                    </div>
                    <div className='bg-[#F7F6F0]'>
                        <PiArrowBendUpRightLight className="w-10 h-10"/>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
        </div>
    </div>
  )
}
