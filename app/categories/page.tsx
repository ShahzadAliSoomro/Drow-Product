import React from "react";
import Image from "next/image";
import {SellerCard, ProductCard, MaleCard, KidzCard} from "../data/Category";
export default function Page() {
  return (
    <div className="w-full bg-[#fff]">
      <div className="w-full bg-[#F5F5F5]">
          <div className="mx-auto container flex justify-center items-center text-center">
            <div className="p-5 space-y-8  text-[#404040]">
              <h2 className="lg:text-5xl text-3xl font-bold">Our New Arrivals</h2>
              <div className="flex justify-center items-center">
                <p className="w-5/12">
              Avoid overwhelm when it comes to planning your website with our free content planner. 
              Learn how to create a plan to creating a successful website for your business.</p>
              </div>
              <div className="">
                <button className="bg-[#fff] p-3 font-semibold text-lg rounded shadow-md hover:-translate-y-3 transition-all duration-500">
                  Get Free Trial</button>
              </div>
            </div>
          </div>
        </div>
      <div className="container mx-auto space-y-10 lg:p-0 p-5">
        <div className="flex justify-center items-center pt-5 lg:text-5xl text-2xl font-bold text-[#404040]">
          <h2>Season Collections Female</h2>
        </div>
        
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
          {SellerCard.map((item) => (
            <div className="flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
                src={item.image}
                alt="5Image"
                width={400}
                height={400}
                className="h-full"
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {ProductCard.map((item) => (
            <div className="flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
                src={item.image}
                alt="5Image"
                width={400}
                height={400}
                className="h-full"
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Season Collections Male</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {MaleCard.map((item) => (
            <div className="flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
                src={item.image}
                alt="5Image"
                width={400}
                height={400}
                className="h-full"
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Season Collections Kids</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {KidzCard.map((item) => (
            <div className="flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
                src={item.image}
                alt="5Image"
                width={400}
                height={400}
                className="h-full"
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
