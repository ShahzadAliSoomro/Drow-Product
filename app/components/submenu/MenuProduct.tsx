import React from 'react'
import Link from 'next/link'
import TopProduct from './TopProduct'

export default function MenuProduct() {
  return (
    <div className='mx-auto w-full bg-[#fff]'>
        <div className='p-5'>
        <div className="flex justify-center items-center text-5xl font-bold text-[#404040] p-5">
           <h2>Our Products</h2>
        </div>
        <ul className='flex justify-center items-center lg:gap-10 gap-5 text-[#404040] lg:text-2xl text-lg font-semibold'>
             <li><Link href="/submenu/TopProduct">Top</Link></li>
             <li><Link href="">Bottom</Link></li>
             <li><Link href="">Dress</Link></li>
             <li><Link href="">Set</Link></li>
             <li><Link href="">Knit</Link></li>
             <li><Link href="">Outer</Link></li>
        </ul>
        <TopProduct />
        </div>
    </div>
  )
}
