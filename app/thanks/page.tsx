import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";

export default function Page() {
  return (
    <div className="w-full mx-auto bg-[#F7F6F0] lg:p-5 p-3">
      <div className="w-full lg:w-6/12 mx-auto bg-white lg:p-20 p-5">
        <div className="flex flex-col items-center space-y-10 justify-center">
          <div className="text-[#404040] text-6xl">
            <BiShoppingBag className="w-10 h-10"/>
          </div>
          <div className="text-[#404040] text-6xl">
            <h2>Thank You!</h2>
          </div>
          <div className="text-[#404040] text-2xl ">
            <p>A confirmation as been sent to your email.</p>
            <p>Since your here, join our list for discounts!</p>
          </div>
          <div className="-mx-2 flex items-end lg:justify-end lg:flex-nowrap flex-wrap lg:gap-0 gap-5 ">
            <div className="flex-grow px-2">
              <div className="w-full">
                <input
                  className="w-full px-3 py-2 border border-gray-200 bg-[#F7F6F0] rounded-md"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
            </div>
            <div className="px-2 ">
              <button className="block w-full max-w-xs mx-auto border border-transparent hover:text-[#404040] hover:-translate-y-1 transition-all duration-500 text-[#404040] bg-[#F7F6F0] rounded-md shadow px-5 py-2 font-semibold">
                Yes, Sign Me Up!
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-7">
            <div className="text-black text-lg font-semibold">
              Lets Be Friends!
            </div>
            <div className="flex gap-2">
              <div className="bg-[#F5F5F5] p-2 rounded-full hover:-translate-y-2 transition-all duration-500">
                <BsFacebook className="w-6 h-6 text-blue-700" />
              </div>
              <div className="bg-[#F5F5F5] p-2 rounded-full hover:-translate-y-2 transition-all duration-500">
                <SlSocialInstagram className="w-6 h-6 text-orange-400" />
              </div>
              <div className="bg-[#F5F5F5] p-2 rounded-full hover:-translate-y-2 transition-all duration-500">
                <CiTwitter className="w-6 h-6 text-blue-500" />
              </div>
              <div className="bg-[#F5F5F5] p-2 rounded-full hover:-translate-y-2 transition-all duration-500">
                <AiOutlineYoutube className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
