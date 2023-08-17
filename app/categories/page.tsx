"use client";
import React, {useState} from "react";
import Image from "next/image";
import {SellerCard, ProductCard, MaleCard, KidzCard} from "../data/Category";
import { BsCart2, BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
export default function Page() {
  const [hovered, setHovered] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full bg-[#fff] relative">
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
          {SellerCard.map((itemee) => (
            <div className="relative flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
                 src={
                  hovered === itemee.id
                    ? ((itemee.image || itemee.image) as string)
                    : itemee.image
                } // Change image based on hovered state
                alt="5Image"
                width={400}
                height={400}
                className="h-[500px]"
                onMouseEnter={() => setHovered(itemee.id)} // Set hovered state to data id on mouse enter
                onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                <p>{itemee.title}</p>
                <p>{itemee.price}</p>
              </div>
              <div
                    className={`absolute top-0 w-full ${
                      hovered === itemee.id ? "visible" : "invisible"
                    } text-white`}
                  >
                    <div className="absolute top-[450px] left-0 flex justify-center items-center bg-black p-2 w-[400px]">
                      <BsCart2
                        className={`h-10 w-10`}
                        onMouseEnter={() => setHovered(itemee.id)} // Set hovered state to itemee id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                      />
                    </div>
                    <div className="absolute top-5 left-[340px]">
                      <BsSuitHeart
                        className={`h-10 w-10 ${liked ? "" : "text-red-500"}`}
                        onClick={() => setLiked(!liked)}
                        onMouseEnter={() => setHovered(itemee.id)}
                        onMouseLeave={() => setHovered(0)}
                      />
                      <div className="absolute top-0 left-[px]">
                      {liked && (
                        
                        <BsSuitHeartFill
                          className={`h-10 w-10 text-red-500 ${
                            hovered === itemee.id ? "text-red-500" : ""
                          }`}
                          onClick={() => setLiked(!liked)}
                          onMouseEnter={() => setHovered(itemee.id)}
                          onMouseLeave={() => setHovered(0)}
                        />
                      )}
                      </div>
                    </div>
                  </div>
            </div>
          ))}
        </div>
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {ProductCard.map((items) => (
            <div className="relative flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
                src={
                  hovered === items.id
                    ? ((items.image || items.image) as string)
                    : items.image
                } // Change image based on hovered state
                alt="5Image"
                width={400}
                height={400}
                className="h-full"
                onMouseEnter={() => setHovered(items.id)} // Set hovered state to data id on mouse enter
                onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                <p>{items.title}</p>
                <p>{items.price}</p>
              </div>
              <div
                    className={`absolute top-0 w-full ${
                      hovered === items.id ? "visible" : "invisible"
                    } text-white`}
                  >
                    <div className="absolute top-[450px] left-0 flex justify-center items-center bg-black p-2 w-[400px]">
                      <BsCart2
                        className={`h-10 w-10`}
                        onMouseEnter={() => setHovered(items.id)} // Set hovered state to items id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                      />
                    </div>
                    <div className="absolute top-5 left-[340px]">
                      <BsSuitHeart
                        className={`h-10 w-10 ${liked ? "" : "text-red-500"}`}
                        onClick={() => setLiked(!liked)}
                        onMouseEnter={() => setHovered(items.id)}
                        onMouseLeave={() => setHovered(0)}
                      />
                      <div className="absolute top-0 left-[px]">
                      {liked && (
                        
                        <BsSuitHeartFill
                          className={`h-10 w-10 text-red-500 ${
                            hovered === items.id ? "text-red-500" : ""
                          }`}
                          onClick={() => setLiked(!liked)}
                          onMouseEnter={() => setHovered(items.id)}
                          onMouseLeave={() => setHovered(0)}
                        />
                      )}
                      </div>
                    </div>
                  </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Season Collections Male</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {MaleCard.map((item) => (
            <div className="relative flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
                src={
                  hovered === item.id
                    ? ((item.image || item.image) as string)
                    : item.image
                } // Change image based on hovered state
                alt="5Image"
                width={400}
                height={400}
                className="h-[500px]"
                onMouseEnter={() => setHovered(item.id)} // Set hovered state to items id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
              <div
                    className={`absolute top-0 w-full ${
                      hovered === item.id ? "visible" : "invisible"
                    } text-white`}
                  >
                    <div className="absolute top-[450px] left-0 flex justify-center items-center bg-black p-2 w-[400px]">
                      <BsCart2
                        className={`h-10 w-10`}
                        onMouseEnter={() => setHovered(item.id)} // Set hovered state to items id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                      />
                    </div>
                    <div className="absolute top-5 left-[340px]">
                      <BsSuitHeart
                        className={`h-10 w-10 ${liked ? "" : "text-red-500"}`}
                        onClick={() => setLiked(!liked)}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(0)}
                      />
                      <div className="absolute top-0 left-[px]">
                      {liked && (
                        
                        <BsSuitHeartFill
                          className={`h-10 w-10 text-red-500 ${
                            hovered === item.id ? "text-red-500" : ""
                          }`}
                          onClick={() => setLiked(!liked)}
                          onMouseEnter={() => setHovered(item.id)}
                          onMouseLeave={() => setHovered(0)}
                        />
                      )}
                      </div>
                    </div>
                  </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Season Collections Kids</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {KidzCard.map((item) => (
            <div className="relative flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
               src={
                hovered === item.id
                  ? ((item.image || item.image) as string)
                  : item.image
              } // Change image based on hovered state
                alt="5Image"
                width={400}
                height={400}
                className="h-[500px]"
                onMouseEnter={() => setHovered(item.id)} // Set hovered state to items id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
              <div
                    className={`absolute top-0 w-full ${
                      hovered === item.id ? "visible" : "invisible"
                    } text-white`}
                  >
                    <div className="absolute top-[450px] left-0 flex justify-center items-center bg-black p-2 w-[400px]">
                      <BsCart2
                        className={`h-10 w-10`}
                        onMouseEnter={() => setHovered(item.id)} // Set hovered state to items id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                      />
                    </div>
                    <div className="absolute top-5 left-[340px]">
                      <BsSuitHeart
                        className={`h-10 w-10 ${liked ? "" : "text-red-500"}`}
                        onClick={() => setLiked(!liked)}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(0)}
                      />
                      <div className="absolute top-0 left-[px]">
                      {liked && (
                        
                        <BsSuitHeartFill
                          className={`h-10 w-10 text-red-500 ${
                            hovered === item.id ? "text-red-500" : ""
                          }`}
                          onClick={() => setLiked(!liked)}
                          onMouseEnter={() => setHovered(item.id)}
                          onMouseLeave={() => setHovered(0)}
                        />
                      )}
                      </div>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
