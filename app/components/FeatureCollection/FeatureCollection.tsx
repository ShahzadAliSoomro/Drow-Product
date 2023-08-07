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
            <div className="flex flex-col justify-end">
              <div>
                <Image src="/images/23.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-44 ">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5>COLORFUL KNITWEAR</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div>
                <Image src="/images/24.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-44 ">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5>PANTS MADE SPECIAL</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="w-full h-full">
              <Image src="/images/25.png" alt="" width={400} height={400} className="h-full"/>
            </div>
            <div className="flex text-[#404040] absolute gap-44 ">
              <div className="flex flex-col p-2 text-sm font-semibold">
                <h5>JIWOO MADE SPECIAL</h5>
                <h5>SERIES</h5>
              </div>
              <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
                <PiArrowBendUpRightLight className="w-12 h-12" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-end">
              {/* <div className=' '> */}
              <div>
                <Image src="/images/26.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-44 ">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5>FRESHIDER TOP MADE</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="flex flex-col justify-end">
              <div>
                <Image src="/images/27.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-44 ">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5 className="">SWEETESTS DRESSES</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] lg:w-14 rounded-t-lg"> 
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
