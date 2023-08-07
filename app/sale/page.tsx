import React from "react";
import Image from "next/image";

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
