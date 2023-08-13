import React from "react";
import Image from "next/image";
import { PiArrowBendUpRightLight } from "react-icons/pi";
export default function FeatureCollection() {
  return (
    <div className="mx-auto w-full container">
      <div className="p-5">
        <div className="flex justify-center items-center lg:text-5xl text-2xl font-bold text-[#404040] p-5">
          <h2>Our Featured Collections</h2>
        </div>

        <div className="flex justify-center relative gap-5 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-end hover:-translate-y-2 transition-all duration-500 relative">
              <div className="">
                <Image src="/images/23.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-40 lg:top-[283px]">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5>COLORFUL KNITWEAR</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 h-14 rounded-t-lg absolute lg:left-[344px] left-[281px]">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
              <div className="">
                <Image src="/images/24.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-40 lg:top-[283px]">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5>PANTS MADE SPECIAL</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 h-14 rounded-t-lg absolute lg:left-[344px] left-[281px]">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
            <div className="w-full h-full ">
              <Image src="/images/25.png" alt="" width={400} height={400} className="h-full"/>
            </div>
            <div className="flex text-[#404040] absolute gap-40 top-end">
              <div className="flex flex-col p-2 text-sm font-semibold">
                <h5>JIWOO MADE SPECIAL</h5>
                <h5>SERIES</h5>
              </div>
              <div className="bg-[#F7F6F0] w-14 h-14 rounded-t-lg absolute lg:left-[344px] left-[281px]">
                <PiArrowBendUpRightLight className="w-12 h-12" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
              {/* <div className=' '> */}
              <div className="">
                <Image src="/images/26.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-40 lg:top-[283px]">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5>FRESHIDER TOP MADE</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 h-14 rounded-t-lg absolute lg:left-[344px] left-[281px]">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
              <div className="">
                <Image src="/images/27.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-40 lg:top-[283px]">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5 >SWEETESTS DRESSES</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 h-14 rounded-t-lg absolute lg:left-[344px] left-[281px]"> 
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
