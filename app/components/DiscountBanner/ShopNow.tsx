"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const textColors = [
  "text-green-600",
  "text-red-600",
  "text-blue-600",
  "text-yellow-600",
  "text-purple-600",
];

const colorOptions = [
  "bg-green-500",
  "bg-red-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
];

export default function ShopNow() {
  const [currentTextColor, setCurrentTextColor] = useState("");
  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor =
        textColors[Math.floor(Math.random() * textColors.length)];
      setCurrentTextColor(randomColor);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
      setCurrentColor(randomColor);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
            <p className={`shimmer ${currentTextColor} `}>Get 50% Off</p>
          </div>
          <div className='text-[#404040] text-xs  '>
            <p className='w-48 text-center'>For all new product purchases min. purchase Rp. 350.000</p>
          </div>
          <div className='flex justify-center items-center text-base'>
             <button className={`text-[#fff] font-semibold p-2 rounded-xl ${currentColor} shimmer`}>SHOP NOW</button>
             </div>
            </div>
            <div className='hover:-translate-y-3 transition-all duration-500'>
                <Image src='/images/16.png' alt='' width={450} height={450}/>
            </div>
            
        </div>
    </div>
  )
}
