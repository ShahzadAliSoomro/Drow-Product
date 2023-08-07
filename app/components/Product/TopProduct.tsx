import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const CardData = [
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

export default function TopProduct() {
  return (
    <div className="mx-auto w-full container space-y-6 lg:px-32 px-0">
      <div className="lg:p-5 p-5 justify-center items-center bg-[#F5F5F5]">
      <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {CardData.map((item) => (
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
        <div className="flex justify-center items-center pt-3">
          <div className="flex justify-center gap-1 items-center text-sm p-3 font-semibold rounded-full bg-[#FFFFFF]">
            <button className="text-[#404040] rounded-xl">SEE MORE</button>

            <BsArrowRight className="w-5 h-5 text-[#404040]" />
          </div>
        </div>
      </div>
    </div>
  );
}
