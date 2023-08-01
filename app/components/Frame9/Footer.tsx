import React from 'react'
import { BsFacebook} from 'react-icons/bs'
import {SlSocialInstagram} from 'react-icons/sl'
import {CiTwitter} from 'react-icons/ci'
import {AiOutlineYoutube, AiOutlineTrademark} from "react-icons/ai"

export default function Footer() {
  return (
    <div className=''>
<div className="w-full container mx-auto bg-grey-lighter p-10 text-[#404040]">
    <div className="sm:flex mb-4">
  <div className="sm:w-1/4 h-auto flex justify-center items-center">
  <div className="text-[#404040] flex items-center text-2xl font-bold">
            <p>DROWPRO</p>
          </div>
    
  </div>
  <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
      <div className="text-blue mb-2 text-lg font-semibold">About Us</div>
      <ul className="list-reset leading-normal">
          <li className="hover:text-blue text-grey-darker">News</li>
          <li className="hover:text-blue text-grey-darker">Official Store</li>
          <li className="hover:text-blue text-grey-darker">Company</li>
          <li className="hover:text-blue text-grey-darker">Careers</li>
      </ul>
  </div>
  <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
  <div className="text-blue mb-2 text-lg font-semibold">Get Help</div>
      <ul className="list-reset leading-normal">
          <li className="hover:text-blue text-grey-darker">FAQ</li>
          <li className="hover:text-blue text-grey-darker">Shipping</li>
          <li className="hover:text-blue text-grey-darker">Payment</li>
          <li className="hover:text-blue text-grey-darker">Returns</li>
          <li className="hover:text-blue text-grey-darker">Contact Us</li>
      </ul>
  </div>
    <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
    <div className="text-blue mb-2 text-lg font-semibold">Follow Us</div>
    <div className='flex gap-2'>
       <div className='bg-[#F5F5F5] p-2 rounded-full'>
       <BsFacebook className="w-6 h-6 text-blue-700"/>
       </div>
       <div className='bg-[#F5F5F5] p-2 rounded-full'>
       <SlSocialInstagram className="w-6 h-6 text-orange-400"/>
       </div>
       <div className='bg-[#F5F5F5] p-2 rounded-full'>
       <CiTwitter className="w-6 h-6 text-blue-500"/>
       </div>
       <div className='bg-[#F5F5F5] p-2 rounded-full'>
       <AiOutlineYoutube className="w-6 h-6 text-red-600"/>
       </div>
    </div>
        
    </div>
</div>
<div className='flex justify-end'>
    <ul className='flex gap-5 text-lg font-semibold'>
        <li>Guide</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
    </ul>
</div>
</div>
<div className='bg-black text-white flex justify-center p-3 w-full'>
    <AiOutlineTrademark className="w-6 h-6"/>
   <p className='text-base'>2023 DROWPRO. All Rights Reserved</p>
</div>
    </div>
  )
}
