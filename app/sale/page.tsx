"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsCart2, BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const SellerCard = [
  {
    id: 1,
    image: "/images/k1.jpg",
    discount: "Flat 50%",
    title: "Pant Pocket Shirt",
    price: "Rp. 125.000",
  },
  {
    id: 2,
    image: "/images/d1.jpg",
    discount: "Flat 40%",
    title: "Eto V Neck Blouse",
    price: "Rp. 129.000",
  },
  {
    id: 3,
    image: "/images/m10.jpg",
    discount: "Flat 30%",
    title: "Full Sleeve Shirt",
    price: "Rp. 129.000",
  },

  {
    id: 4,
    image: "/images/11.png",
    discount: "Flat 50%",
    title: "West Bootscut Denim",
    price: "Rp. 229.000",
  },
  {
    id: 5,
    image: "/images/d2.jpg",
    discount: "Flat 50%",
    title: "Ribbon Check Long",
    price: "Rp. 175.000",
  },
  {
    id: 6,
    image: "/images/13.png",
    discount: "Flat 50%",
    title: "Shouldcut Knit",
    price: "Rp. 149.000",
  },
  {
    id: 7,
    image: "/images/9.png",
    discount: "Flat 50%",
    title: "Venus Halter Dress",
    price: "Rp. 180.000",
  },
  {
    id: 8,
    image: "/images/d3.jpg",
    discount: "Flat 40%",
    title: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    id: 9,
    image: "/images/k2.jpg",
    discount: "Flat 40%",
    title: "Wave Stripe Hally",
    price: "Rp. 130.000",
  },
  {
    id: 10,
    image: "/images/d9.jpg",
    discount: "Flat 40%",
    title: "Shirt Blouse",
    price: "Rp. 29.000",
  },
  {
    id: 11,
    image: "/images/k5.jpg",
    discount: "Flat 40%",
    title: "Children Shirt",
    price: "Rp. 19.000",
  },
  {
    id: 12,
    image: "/images/k6.jpg",
    discount: "Flat 40%",
    title: "Children Souvenir",
    price: "Rp. 25.000",
  },
  {
    id: 13,
    image: "/images/d4.jpg",
    discount: "Flat 50%",
    title: "Snap Pure Green",
    price: "Rp. 129.000",
  },
  {
    id: 14,
    image: "/images/m-11.jpg",
    discount: "Flat 30%",
    title: "Man Shirt with Pockets",
    price: "Rp. 139.000",
  },
  {
    id: 15,
    image: "/images/d8.jpg",
    discount: "Flat 30%",
    title: "Tshirt with Pockets",
    price: "Rp. 130.000",
  },
  {
    id: 16,
    image: "/images/m-13.jpg",
    discount: "Flat 30%",
    title: "Full Pant with Shirt",
    price: "Rp. 229.000",
  },
  {
    id: 17,
    image: "/images/d7.jpg",
    discount: "Flat 30%",
    title: "Tshirt Blouse",
    price: "Rp. 19.000",
  },
  {
    id: 18,
    image: "/images/male6.jpg",
    discount: "Flat 30%",
    title: "Full Sout Pure Black",
    price: "Rp. 225.000",
  },
];

const colorOptions = [
  "bg-green-500",
  "bg-red-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
];
const textColors = [
  "text-purple-600",
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-red-600",
];


export default function Page() {
  const [currentColor, setCurrentColor] = useState("");
  const [currentTextColor, setCurrentTextColor] = useState("");
  const [hovered, setHovered] = useState(0);
  const [liked, setLiked] = useState(false);


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
      <div className="container mx-auto space-y-10 lg:p-0 p-3 ">
        <div className="flex justify-center items-center pt-5 lg:text-5xl text-3xl font-bold text-[#404040]">
        <h2>
          Get Upto{""}
          <span className={`font-semibold p-2 rounded-full shimmer ${currentTextColor}`}>
            50%
          </span>
        </h2>
        </div>
        <div className="lg:w-[1240px] w-full relative mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {SellerCard.map((item) => (
            <div className="relative flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500 group">
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
                onMouseEnter={() => setHovered(item.id)} // Set hovered state to data id on mouse enter
                onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
              />
              <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
              <p className="text-green-600 font-semibold">{item.discount}</p>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
              <div className="m-3 absolute z-10">
              <p className={`text-white font-semibold p-2 rounded-full ${currentColor} shimmer`}>
                Sale
              </p>
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
