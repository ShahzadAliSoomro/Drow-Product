import React from "react";
import {BsFillSuitDiamondFill, BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

export default function ContactForm() {
  return (
    <div className="mx-auto w-full  bg-[#F5F5F5] p-10 ">
      <div className="max-w-6xl mx-auto ">
        <div className="flex gap-16 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col w-full lg:w-6/12 p-5 gap-8">
            <div className="flex justify-center items-center text-5xl font-bold text-[#404040] ">
              <h2>Get more benefits by Sign Up & Join DrowPro Community!</h2>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex text-[#404040] font-semibold">
                <BsFillSuitDiamondFill className="w-6 h-6"/>
                <p>FREE Special Gift to a new member</p>
              </div>
              <div className="flex text-[#404040] font-semibold">
                <BsFillSuitDiamondFill className="w-6 h-6"/>
                <p>Get 2x JIWOO Points to purchase items</p>
              </div>
              <div className="flex text-[#404040] font-semibold">
                <BsFillSuitDiamondFill className="w-6 h-6"/>
                <p>Get special voucher code every month </p>
              </div>
              <div className="flex text-[#404040] font-semibold">
                <BsFillSuitDiamondFill className="w-6 h-6"/>
                <p>Claim Voucher Disc. Up To 50% </p>
              </div>
            </div>
          </div>

          <div className="border-r-2 border-black "></div>

          <div className="flex flex-col w-full lg:w-6/12 p-5 justify-center ">
            <div className="w-full lg:w-10/12 text-center flex flex-col gap-5">
            <div className="bg-[#FFFFFF] text-[#404040]">
              <p>Full Name</p>
            </div>
            <div className="bg-[#FFFFFF] text-[#404040]">
              <p>Email Adress</p>
            </div>
            <div className="bg-[#FFFFFF] text-[#404040]">
              <p>Password</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-xs font-semibold text-gray-500">I agree to all the Terms and Privacy Policy</label>
            </div>

            <div className=" flex flex-col justify-center items-center gap-5">
            <div className='flex justify-center items-center text-base'>
             <button className='text-[#404040] p-2 bg-[#FFFFFF] rounded-xl'>SIGN UP</button>
             
             </div>
             <div className="flex gap-1 w-full lg:w-12/12 text-[#404040] justify-center items-center">
             <div className="border-b-2 w-1/2 border-black"></div>
             <p>Or</p>
             <div className="border-b-2 w-1/2 border-black"></div>
             </div>
            </div>
            <div className='flex justify-center text-base '>
              <div className="bg-[#FFFFFF] px-3 flex rounded-full items-center">
              <FcGoogle className="w-5 h-5"/>
             <button className='text-[#404040] p-2'>SIGN UP WITH GOOGLE</button>
             </div>
             </div>
             <div className='flex justify-center text-base '>
              <div className="bg-[#FFFFFF] px-3 flex rounded-full items-center">
             <BsFacebook className="w-5 h-5 text-blue-700"/>
             <button className='text-[#404040] p-2  '>SIGN UP WITH FACEBOOK</button>
             </div>
             </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
