"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

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
  const [hovered, setHovered] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined) => (
        <div
          style={{
            backgroundColor: "#ffff",
            padding: "10px",
            
          }}
        >
          <ul style={{ margin: "0px",  }}> {dots} </ul>
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
      <Slider {...settings} >
      {CardData.map((data) => (
            <div key={data.id} className="">
              <div className="flex justify-center items-center">
                <div className="relative hover:-translate-y-3 transition-all duration-500">
                  <Image
                    className="mx-auto"
                    src={
                      hovered === data.id
                        ? (data.hoveredImage || data.image) as string
                        : data.image
                    } // Change image based on hovered state
                    alt=""
                    width={400} // Adjust this value as needed
                    height={400} // Adjust this value as needed
                    onMouseEnter={() => setHovered(data.id)} // Set hovered state to data id on mouse enter
                    onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                  />
                  <div className="text-center mt-2">
                    <p className="text-lg font-semibold text-[#404040]">
                      {data.title}
                    </p>
                    <p className="text-sm text-[#707070] pb-5">{data.price}</p>
                  </div>
                  <div className={`absolute top-52 left-24 flex justify-between gap-32 ${
                    hovered === data.id ? "visible" : "invisible"
                  } text-white`}>
                    <BsCart2 className={`h-10 w-10`} />
                    <BsCart2 className={`h-10 w-10`} />
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

