"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BsCart2, BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
// import Image from "next/image";

const CardData = [
  {
    id: 1,
    image: "/images/28.png",
    hoveredImage: "/images/33.png",
    title: "Essence Long Denim",
    mantitle: "-Lisa-",
    text: "“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”",
  },
  {
    id: 2,
    image: "/images/29.png",
    hoveredImage: "/images/32.png",
    title: "Andcable Knit Top",
    mantitle: "-Celine-",
    text: "“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”",
  },
  {
    id: 3,
    image: "/images/30.png",
    hoveredImage: "/images/31.png",
    title: "Candy Stripe Boxy",
    mantitle: "-Tiffany-",
    text: "“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”",
  },
  {
    id: 4,
    image: "/images/31.png",
    hoveredImage: "/images/28.png",
    title: "Summer Cheese Slacks",
    mantitle: "-Mona-",
    text: "“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”",
  },
  {
    id: 5,
    image: "/images/32.png",
    hoveredImage: "/images/29.png",
    title: "Tinkerbell Chiffon",
    mantitle: "-Hana-",
    text: "“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”",
  },
  {
    id: 6,
    image: "/images/33.png",
    hoveredImage: "/images/30.png",
    title: "Sweet Serendipity Cardigan",
    // icon: "<svgxmlns="http://www.w3.org/2000/svg"className="h-5 w-5 text-yellow-400"viewBox="0 0 20 20"fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svgxmlns=>",
    mantitle: "-Bella-",
    text: "“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”",
  },
];

const TestiCard = () => {
  const [hovered, setHovered] = useState(0);
  const [liked, setLiked] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | React.PromiseLikeOfReactNode
        | null
        | undefined
    ) => (
      <div
        style={{
          backgroundColor: "#ffff",
          // borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
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
    <div className="mx-auto w-full container bg-[#fff] space-y-2 lg:p-0 p-6">
        <div className="flex justify-center items-center lg:text-5xl text-4xl font-bold text-[#404040]">
          <h2>What They Said</h2>
        </div>
        <div className="lg:w-[1240px] mx-auto">
        <Slider {...settings}>
          {CardData.map((data) => (
            <div key={data.id} className="lg:p-2 p-0">
              <div className="flex justify-center">
                <div className="bg-[#F7F6F0] p-2 rounded-lg shadow-md hover:-translate-y-3 transition-all duration-500">
                  <Image
                    className="mx-auto"
                    src={
                      hovered === data.id
                        ? (data.hoveredImage || data.image) as string
                        : data.image
                    } // Change image based on hovered state
                    
                    alt=""
                    width={500}
                    height={500}
                    onMouseEnter={() => setHovered(data.id)} // Set hovered state to data id on mouse enter
                    onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                    
                  />
                  <div className="absolute hidden md:block top-[433px] left-2 bg-black p-2 w-[383px]">
                    <div className="flex justify-center">
                      <BsCart2
                        className={`h-10 w-10 `}
                        onMouseEnter={() => setHovered(data.id)} // Set hovered state to data id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                      />
                      </div>
                    </div>
                  <div className="absolute top-5 left-[340px]">
                      <BsSuitHeart
                        className={`h-10 w-10 ${liked ? "" : "text-white"}`}
                        onClick={() => setLiked(!liked)}
                        onMouseEnter={() => setHovered(data.id)}
                        onMouseLeave={() => setHovered(0)}
                      />
                      <div className="absolute top-0 left-[px]">
                      {liked && (
                        
                        <BsSuitHeartFill
                          className={`h-10 w-10 text-red-500 ${
                            hovered === data.id ? "text-yellow-400" : ""
                          }`}
                          onClick={() => setLiked(!liked)}
                          onMouseEnter={() => setHovered(data.id)}
                          onMouseLeave={() => setHovered(0)}
                        />
                      )}
                      </div>
                    </div>
                  <div className="text-center mt-2">
                    <p className="text-lg text-[#404040] font-semibold">{data.title}</p>
                    <div className="flex justify-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold mt-2 text-[#404040]">{data.mantitle}</p>
                    <p className="text-sm text-justify lg:w-96 w-full text-[#404040] mx-auto pb-5">
                      {data.text}
                    </p>
                    
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

export default TestiCard;
