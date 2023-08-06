import React from "react";
import Image from "next/image";

const SellerCard = [
  {
    id: 1,
    image: "/images/8.png",
    discount: "Flat 50%",
    title: "Euphoria Crop Blouse",
    price: "Rp. 125.000",
  },
  {
    id: 2,
    image: "/images/k1.jpg",
    discount: "Flat 40%",
    title: "Eto V Neck Yellow",
    price: "Rp. 129.000",
  },
  {
    id: 3,
    image: "/images/m10.jpg",
    discount: "Flat 30%",
    title: "Eto V Neck Yellow",
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
    image: "/images/12.png",
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
    image: "/images/k3.jpg",
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
    image: "/images/k4.jpg",
    discount: "Flat 40%",
    title: "Eve Punching Floral",
    price: "Rp. 229.000",
  },
  {
    id: 11,
    image: "/images/k5.jpg",
    discount: "Flat 40%",
    title: "Floral Waffle Tee",
    price: "Rp. 119.000",
  },
  {
    id: 12,
    image: "/images/k6.jpg",
    discount: "Flat 40%",
    title: "Snap Pure Blouse",
    price: "Rp. 225.000",
  },
  {
    id: 13,
    image: "/images/10.png",
    discount: "Flat 50%",
    title: "Snap Pure Blouse",
    price: "Rp. 129.000",
  },
  {
    id: 14,
    image: "/images/m-11.jpg",
    discount: "Flat 30%",
    title: "Macaroon Dry Half",
    price: "Rp. 139.000",
  },
  {
    id: 15,
    image: "/images/m-12.jpg",
    discount: "Flat 30%",
    title: "Wave Stripe Hally",
    price: "Rp. 130.000",
  },
  {
    id: 16,
    image: "/images/m-13.jpg",
    discount: "Flat 30%",
    title: "Eve Punching Floral",
    price: "Rp. 229.000",
  },
  {
    id: 17,
    image: "/images/m-16.jpg",
    discount: "Flat 30%",
    title: "Floral Waffle Tee",
    price: "Rp. 119.000",
  },
  {
    id: 18,
    image: "/images/male6.jpg",
    discount: "Flat 30%",
    title: "Snap Pure Blouse",
    price: "Rp. 225.000",
  },
];



export default function Page() {
  return (
    <div className="w-full bg-[#fff] pt-10">
      <div className="container mx-auto space-y-10">
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Get Upto 50%</h2>
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
              <p className="text-green-600 font-semibold">{item.discount}</p>
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
