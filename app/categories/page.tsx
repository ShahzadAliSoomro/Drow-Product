import React from "react";
import Image from "next/image";
import { PiArrowBendUpRightLight } from "react-icons/pi";

const SellerCard = [
  {
    id: 1,
    image: "/images/8.png",
    title: "Euphoria Crop Blouse",
    price: "Rp. 125.000",
  },
  {
    id: 2,
    image: "/images/9.png",
    title: "Venus Halter Dress",
    price: "Rp. 180.000",
  },
  {
    id: 3,
    image: "/images/10.png",
    title: "Snap Pure Blouse",
    price: "Rp. 129.000",
  },
  {
    id: 4,
    image: "/images/11.png",
    title: "West Bootscut Denim",
    price: "Rp. 229.000",
  },
  {
    id: 5,
    image: "/images/12.png",
    title: "Ribbon Check Long",
    price: "Rp. 175.000",
  },
  {
    id: 6,
    image: "/images/13.png",
    title: "Shouldcut Knit",
    price: "Rp. 149.000",
  },
];

const ProductCard = [
  {
    id: 1,
    image: "/images/17.png",
    title: "Eto V Neck Yellow",
    price: "Rp. 129.000",
  },
  {
    id: 2,
    image: "/images/18.png",
    title: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    id: 3,
    image: "/images/19.png",
    title: "Wave Stripe Hally",
    price: "Rp. 130.000",
  },
  {
    id: 4,
    image: "/images/20.png",
    title: "Eve Punching Floral",
    price: "Rp. 229.000",
  },
  {
    id: 5,
    image: "/images/21.png",
    title: "Floral Waffle Tee",
    price: "Rp. 119.000",
  },
  {
    id: 6,
    image: "/images/22.png",
    title: "Snap Pure Blouse",
    price: "Rp. 225.000",
  },
];
const MaleCard = [
    {
      id: 1,
      image: "/images/17.png",
      title: "Eto V Neck Yellow",
      price: "Rp. 129.000",
    },
    {
      id: 2,
      image: "/images/18.png",
      title: "Macaroon Dry Half",
      price: "Rp. 139.000",
    },
    {
      id: 3,
      image: "/images/19.png",
      title: "Wave Stripe Hally",
      price: "Rp. 130.000",
    },
    {
      id: 4,
      image: "/images/20.png",
      title: "Eve Punching Floral",
      price: "Rp. 229.000",
    },
    {
      id: 5,
      image: "/images/21.png",
      title: "Floral Waffle Tee",
      price: "Rp. 119.000",
    },
    {
      id: 6,
      image: "/images/male-2.jpg",
      title: "Snap Pure Blouse",
      price: "Rp. 225.000",
    },
    {
        id: 7,
        image: "/images/male9.jpg",
        title: "Euphoria Crop Blouse",
        price: "Rp. 125.000",
      },
      {
        id: 8,
        image: "/images/male3.jpg",
        title: "Venus Halter Dress",
        price: "Rp. 180.000",
      },
      {
        id: 9,
        image: "/images/male4.jpg",
        title: "Snap Pure Blouse",
        price: "Rp. 129.000",
      },
      {
        id: 10,
        image: "/images/male8.jpg",
        title: "West Bootscut Denim",
        price: "Rp. 229.000",
      },
      {
        id: 11,
        image: "/images/male7.jpg",
        title: "Ribbon Check Long",
        price: "Rp. 175.000",
      },
      {
        id: 12,
        image: "/images/male6.jpg",
        title: "Shouldcut Knit",
        price: "Rp. 149.000",
      },
  ];


export default function Page() {
  return (
    <div className="w-full bg-[#fff] pt-10">
      <div className="container mx-auto space-y-10">
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Season Collections Female</h2>
        </div>
        
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {SellerCard.map((item) => (
            <div className="flex gap-4 flex-col">
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
            <div className="flex gap-4 flex-col">
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
            <div className="flex gap-4 flex-col">
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