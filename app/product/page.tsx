import React from "react";
import Image from "next/image";
import { PiArrowBendUpRightLight } from "react-icons/pi";

const SeasonCard = [
  {
    id: 1,
    image: "/images/5.png",
    title: "Spring",
  },
  {
    id: 2,
    image: "/images/6.png",
    title: "Summer",
  },
  {
    id: 3,
    image: "/images/7.png",
    title: "Winter",
  },
];

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

const CollectionCard = [
  {
    id: 1,
    row: false,
    image: "/images/23.png",
    mantitle: "COLOURFUL KNITWEAR",
    title: "SERIES",
    icon: PiArrowBendUpRightLight,
  },
  
  {
    id: 2,
    row: false,
    image: "/images/25.png",
    mantitle: "PANTS MADE SPECIAL",
    title: "SERIES",
    icon: PiArrowBendUpRightLight,
  },

    {
    
    id: 3,
    row: true,
    image: "/images/24.png",
    mantitle: "JIWOO MADE SPECIAL",
    title: "SERIES",
    icon: PiArrowBendUpRightLight,
  },
  
  
  {
    id: 4,
    row: false,
    image: "/images/26.png",
    mantitle: "FRESHIDER TOP MADE",
    title: "SERIES",
    icon: PiArrowBendUpRightLight,
  },
  {
    id: 5,
    row: false,
    image: "/images/27.png",
    mantitle: "FRESHIDER BOTTOM MADE",
    title: "SERIES",
    icon: PiArrowBendUpRightLight,
  }
]

export default function Page() {
  return (
    <div className="w-full bg-[#fff] pt-10">
      <div className="container mx-auto space-y-10">
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Season Collections</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto flex gap-5 justify-center flex-wrap lg:flex-nowrap">
          {SeasonCard.map((item) => (
            <div className="flex gap-4 flex-col">
              <Image
                src={item.image}
                alt="5Image"
                width={400}
                height={400}
                className=""
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Our Best Seller</h2>
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
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Our Products</h2>
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
          <h2>Our Featured Collections</h2>
        </div>
        <div className="grid grid-flow-row grid-cols-3">
            {CollectionCard.map((item) => (
                    <div className={`${item.row ? "row-span-2": ""}`}>
                <div className="flex flex-col justify-end">
          <div>
            <Image src={item.image} alt="" width={400} height={400} />
          </div>
          <div className="flex text-[#404040] absolute gap-44 ">
            <div className="flex flex-col p-2 text-sm font-semibold">
              <h5>{item.mantitle}</h5>
              <h5>{item.title}</h5>
            </div>
            <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
              <PiArrowBendUpRightLight className="w-12 h-12" />
            </div>
          </div>
        </div>
                </div>
            ))}
        </div>
         {/* <div className="lg:w-[1240px] w-full mx-auto flex justify-center relative gap-10 flex-wrap lg:flex-nowrap">
            {CollectionCard.map((item) => (
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col justify-end">
              <div>
                <Image src={item.image} alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute gap-44 ">
                <div className="flex flex-col p-2 text-sm font-semibold">
                  <h5>{item.mantitle}</h5>
                  <h5>{item.title}</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
                    </div>
            ))}
         </div> */}
      </div>
    </div>
  );
}
