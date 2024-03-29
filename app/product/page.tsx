"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiArrowBendUpRightLight } from "react-icons/pi";
import { BsCart2, BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
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

const TestiCard = [
  {
    id: 1,
    image: "/images/28.png",
    title: "Essence Long Denim",
    mantitle: "-Lisa-",
    text: "“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”",
  },
  {
    id: 2,
    image: "/images/29.png",
    title: "Andcable Knit Top",
    mantitle: "-Celine-",
    text: "“I like knitted materials. I bought this shirt because the design is very pretty and comfortable to wear casually. The material is also neat and good. I love shopping here and I’ll be a frequent customer at this store.”",
  },
  {
    id: 3,
    image: "/images/30.png",
    title: "Candy Stripe Boxy",
    mantitle: "-Tiffany-",
    text: "“This shirt is very pretty and nice. The color is cute too. At first I bought it as a present for my friend but I also wanted it so we ended up going out wearing twin clothes haha.”",
  },
  {
    id: 4,
    image: "/images/31.png",
    title: "Summer Cheese Slacks",
    mantitle: "-Mona-",
    text: "“This pants are very comfortable to wear in the office all day. The material is breathable and stretchy. I also bought this cardigan because I like the beautiful pattern. It goes very well with the pants.”",
  },
  {
    id: 5,
    image: "/images/32.png",
    title: "Tinkerbell Chiffon",
    mantitle: "-Hana-",
    text: "“I bought this one set of this pretty cardigan and skirt. I really like the Korean style. It's very trendy and comfortable to use when hanging out. I’m happy to be a regular customer at this store.”",
  },
  {
    id: 6,
    image: "/images/33.png",
    title: "Sweet Serendipity Cardigan",
    // icon: "<svgxmlns="http://www.w3.org/2000/svg"className="h-5 w-5 text-yellow-400"viewBox="0 0 20 20"fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svgxmlns=>",
    mantitle: "-Bella-",
    text: "“I really like this cardigan. I like the material because its very soft and comfortable to use. I also bought 2 different colors because they are really good to use and pretty.” ",
  },
];

export default function Page() {
  const [hovered, setHovered] = useState(0);
  const [liked, setLiked] = useState(false);
  return (
    <div className="w-full bg-[#fff]">
      <div className="w-full bg-[#F5F5F5]">
        <div className="mx-auto container flex justify-center items-center text-center">
          <div className="p-5 space-y-8 text-[#404040]">
            <h2 className="lg:text-5xl text-3xl font-bold">Our New Arrivals</h2>
            <div className="flex justify-center items-center">
              <p className="w-full lg:w-5/12">
                Avoid overwhelm when it comes to planning your website with our
                free content planner. Learn how to create a plan to creating a
                successful website for your business.
              </p>
            </div>
            <div className="">
              <button className="bg-[#fff] p-3 font-semibold text-lg rounded shadow-md hover:-translate-y-3 transition-all duration-500">
                Get Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-10 p-5">
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>Season Collections</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto flex gap-5 justify-center flex-wrap lg:flex-nowrap ">
          {SeasonCard.map((data) => (
            <div className="relative flex gap-4 flex-col hover:-translate-y-3 transition-all duration-500">
              <Image
                src={
                  hovered === data.id
                    ? ((data.image || data.image) as string)
                    : data.image
                } // Change image based on hovered state
                alt="5Image"
                width={400}
                height={400}
                className=""
                onMouseEnter={() => setHovered(data.id)} // Set hovered state to data id on mouse enter
                onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
              />
              <div
                className={`absolute top-0 w-full ${
                  hovered === data.id ? "visible" : "invisible"
                } text-white`}
              >
                <div className="absolute top-[450px] left-0 flex justify-center items-center bg-black p-2 w-full lg:w-[400px]">
                  <BsCart2
                    className={`h-10 w-10`}
                    onMouseEnter={() => setHovered(data.id)} // Set hovered state to data id on mouse enter
                    onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                  />
                </div>
                <div className="absolute top-5 lg:left-[340px] left-[330px]">
                  <BsSuitHeart
                    className={`h-10 w-10 ${liked ? "" : "text-red-500"}`}
                    onClick={() => setLiked(!liked)}
                    onMouseEnter={() => setHovered(data.id)}
                    onMouseLeave={() => setHovered(0)}
                  />
                  <div className="absolute top-0 left-[px]">
                    {liked && (
                      <BsSuitHeartFill
                        className={`h-10 w-10 text-red-500 ${
                          hovered === data.id ? "text-red-500" : ""
                        }`}
                        onClick={() => setLiked(!liked)}
                        onMouseEnter={() => setHovered(data.id)}
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
          <h2>Our Best Seller</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {SellerCard.map((item) => (
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
                className="h-full"
                onMouseEnter={() => setHovered(item.id)} // Set hovered state to item id on mouse enter
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
                <div className="absolute top-[460px] left-0 flex justify-center items-center bg-black p-2 w-full lg:w-[400px]">
                  <BsCart2
                    className={`h-10 w-10`}
                    onMouseEnter={() => setHovered(item.id)} // Set hovered state to item id on mouse enter
                    onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                  />
                </div>
                <div className="absolute top-5 lg:left-[340px] left-[330px]">
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
          <h2>Our Products</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {ProductCard.map((item) => (
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
                className="h-full"
                onMouseEnter={() => setHovered(item.id)} // Set hovered state to item id on mouse enter
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
                <div className="absolute top-[450px] left-0 flex justify-center items-center bg-black p-2 w-full lg:w-[400px]">
                  <BsCart2
                    className={`h-10 w-10`}
                    onMouseEnter={() => setHovered(item.id)} // Set hovered state to item id on mouse enter
                    onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                  />
                </div>
                <div className="absolute top-5 lg:left-[340px] left-[330px]">
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
        <div className="flex justify-center items-center lg:text-5xl text-2xl font-bold text-[#404040]">
          <h2>Our Featured Collections</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto flex justify-center relative gap-5 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
              <div className="">
                <Image src="/images/23.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute right-0 lg:gap-44 gap-[156px]">
                <div className="flex flex-col p-2 lg:text-sm text-xs font-semibold">
                  <h5>COLORFU KNITWEAR</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] lg:w-14 w-12 rounded-t-lg">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
              <div className="">
                <Image src="/images/24.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute right-0 lg:gap-44 gap-[156px] ">
                <div className="flex flex-col p-2 lg:text-sm text-xs font-semibold">
                  <h5>PANT MADE SPECIAL</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
            <div className="h-full ">
              <Image
                src="/images/25.png"
                alt=""
                width={400}
                height={400}
                className="h-full"
              />
            </div>
            <div className="flex text-[#404040] absolute right-0 lg:gap-44 gap-[156px]">
              <div className="flex flex-col p-2 lg:text-sm text-xs font-semibold">
                <h5>JIWO MADE SPECIAL</h5>
                <h5>SERIES</h5>
              </div>
              <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
                <PiArrowBendUpRightLight className="w-12 h-12" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
              <div className="">
                <Image src="/images/26.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute right-0 lg:gap-44 gap-[156px]">
                <div className="flex flex-col p-2 lg:text-sm text-xs font-semibold">
                  <h5>FRESHIDE TOP MADE</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] w-14 rounded-t-lg">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end hover:-translate-y-3 transition-all duration-500 relative">
              <div className="">
                <Image src="/images/27.png" alt="" width={400} height={400} />
              </div>
              <div className="flex text-[#404040] absolute right-0 lg:gap-44 gap-[156px]">
                <div className="flex flex-col p-2 lg:text-sm text-xs font-semibold">
                  <h5>SWEETESTES DRESS</h5>
                  <h5>SERIES</h5>
                </div>
                <div className="bg-[#F7F6F0] lg:w-14 rounded-t-lg">
                  <PiArrowBendUpRightLight className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]">
          <h2>What They Said</h2>
        </div>

        <div className="lg:w-[1240px] w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {TestiCard.map((item) => (
            <div key={item.id} className=" lg:bg-[#fff] relative">
              <div className="flex justify-center flex-wrap lg:flex-nowrap rounded-lg ">
                <div className="flex gap-2  flex-col hover:-translate-y-3 transition-all duration-500 ">
                  <Image
                    className=""
                    src={
                      hovered === item.id
                        ? ((item.image || item.image) as string)
                        : item.image
                    } // Change image based on hovered state
                    alt=""
                    width={400}
                    height={400}
                    onMouseEnter={() => setHovered(item.id)} // Set hovered state to item id on mouse enter
                    onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                  />
                  <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                    <p>{item.title}</p>
                    <div className="flex gap-1">
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
                    <p>{item.mantitle}</p>
                    <p className="text-sm text-justify lg:w-96 w-80 flex justify-center">
                      {item.text}
                    </p>
                  </div>
                  <div
                    className={`absolute top-0 w-full ${
                      hovered === item.id ? "visible" : "invisible"
                    } text-white`}
                  >
                    <div className="absolute top-[450px] left-0 flex justify-center items-center bg-black p-2 w-full lg:w-[400px]">
                      <BsCart2
                        className={`h-10 w-10`}
                        onMouseEnter={() => setHovered(item.id)} // Set hovered state to item id on mouse enter
                        onMouseLeave={() => setHovered(0)} // Reset hovered state to 0 on mouse leave
                      />
                    </div>
                    <div className="absolute top-5 lg:left-[340px] left-[330px]">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
