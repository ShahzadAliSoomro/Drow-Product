"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BsCart2, BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { TbCircleDotted } from "react-icons/tb";
import { useLikedProducts } from "@/app/context/LikedProductsContext";

const CardData = [
  {
    id: 1,
    image: "/images/8.png",
    hoveredImage: "/images/13.png",
    title: "Euphoria Crop Blouse",
    price: "Rp. 125.000",
  },
  {
    id: 2,
    image: "/images/9.png",
    hoveredImage: "/images/12.png",
    title: "Venus Halter Dress",
    price: "Rp. 180.000",
  },
  {
    id: 3,
    image: "/images/10.png",
    hoveredImage: "/images/11.png",
    title: "Snap Pure Blouse",
    price: "Rp. 129.000",
  },
  {
    id: 4,
    image: "/images/11.png",
    hoveredImage: "/images/8.png",
    title: "West Bootscut Denim",
    price: "Rp. 229.000",
  },
  {
    id: 5,
    image: "/images/12.png",
    hoveredImage: "/images/9.png",
    title: "Ribbon Check Long",
    price: "Rp. 175.000",
  },
  {
    id: 6,
    image: "/images/13.png",
    hoveredImage: "/images/10.png",
    title: "Shouldcut Knit",
    price: "Rp. 149.000",
  },
];

const BestSeller = () => {
  const { likedProducts, toggleLike } = useLikedProducts();
  const [hovered, setHovered] = useState(0);
  const [liked, setLiked] = useState(false);

  const isProductLiked = (productId :any) => likedProducts.includes(productId);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    customPaging: () => (
      <div>
        <TbCircleDotted className="w-12 h-12 p-4 dot-animate" />
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-full container bg-[#fff] space-y-5 lg:p-0 p-6">
      <div className="text-center lg:text-5xl text-3xl font-bold text-[#404040]">
        <h2 className="">Our Best Seller</h2>
      </div>
      <div className="lg:w-[1240px] mx-auto ">
        <Slider {...settings}>
          {CardData.map((data) => (
            <div key={data.id} className="">
              <div className="flex justify-center items-center relative">
                <div className="relative hover:-translate-y-3 transition-all duration-500">
                  <div
                    className={`relative w-[400px] h-[500px] hover:-translate-y-3 transition-all duration-500`}
                  >
                    <Image
                      className="mx-auto w-full h-full"
                      src={
                        hovered === data.id
                          ? ((data.hoveredImage || data.image) as string)
                          : data.image
                      } // Change image based on hovered state
                      alt=""
                      width={400} // Adjust this value as needed
                      height={400} // Adjust this value as needed
                      onMouseEnter={() => setHovered(data.id)} // Set hovered state to data id on mouse enter
                      onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-lg font-semibold text-[#404040]">
                      {data.title}
                    </p>
                    <p className="text-sm text-[#707070] pb-5">{data.price}</p>
                  </div>
                  <div
                    className={`absolute top-0 w-full ${
                      hovered === data.id ? "visible" : "invisible"
                    } text-white`}
                  >
                    <div className="absolute top-[440px] left-0 flex justify-center items-center bg-black p-2 w-[400px]">
                      <BsCart2
                        className={`h-10 w-10`}
                        onMouseEnter={() => setHovered(data.id)} // Set hovered state to data id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                      />
                    </div>
                    <div className="absolute top-5 left-[340px]">
                      <BsSuitHeart
                       className={`h-10 w-10 ${isProductLiked(data.id) ? "text-red-500" : ""}`}
                       onClick={() => toggleLike(data.id)}
                       onMouseEnter={() => setHovered(data.id)}
                       onMouseLeave={() => setHovered(0)}
                      />
                      <div className="absolute top-0 left-[px]">
                      {isProductLiked(data.id) && (
                          <BsSuitHeartFill
                            className={`h-10 w-10 text-red-500 ${
                              hovered === data.id ? "text-red-500" : ""
                            }`}
                            onClick={() => toggleLike(data.id)}
                            onMouseEnter={() => setHovered(data.id)}
                            onMouseLeave={() => setHovered(0)}
                          />
                        )}
                        {/* {liked && (
                          <BsSuitHeartFill
                            className={`h-10 w-10 text-red-500 ${
                              hovered === data.id ? "text-red-500" : ""
                            }`}
                            onClick={() => setLiked(!liked)}
                            onMouseEnter={() => setHovered(data.id)}
                            onMouseLeave={() => setHovered(0)}
                          />
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
