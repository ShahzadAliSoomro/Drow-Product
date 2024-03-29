"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsCart2, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useLikedProducts } from "../context/LikedProductsContext";
import Image from "next/image";

interface NavbarProps {
  activeRoute: string;
}
const textColors = [
  "text-green-600",
  "text-red-600",
  "text-blue-600",
  "text-yellow-600",
  "text-purple-600",
];
export default function Navbar({ activeRoute }: NavbarProps) {
  const { likedProducts } = useLikedProducts();
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const [currentTextColor, setCurrentTextColor] = useState("");
  // const isMobile = UseMobileSize();
  // const scroll = UseScroll();

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

  const handleLinkClick = (route: string) => {
    setActiveLink(route); // Update the active link when a link is clicked
    setOpen(false);
  };

  return (
    <div className="w-full bg-[#fff] ">
      <div className="container mx-auto">
        <div className="flex justify-between p-5">
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 -ml-3 rounded-lg text-sm text-black md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-7 w-7 text-black"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden md:block md:w-auto" id="navbar-default">
            <div className=" text-[#404040] flex gap-8 justify-center items-center font-medium text-lg">
              <Link href="/">
                <p
                  onClick={() => handleLinkClick("/")}
                  className={`${
                    activeLink === "/" ? "border-b-2 border-blue-500" : ""
                  }`}
                >
                  Home
                </p>
              </Link>

              {/* ************************* product Start ************************* */}
              <Link href="/product">
                <p
                  onClick={() => handleLinkClick("/product")}
                  className={`${
                    activeLink === "/product"
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  Product
                </p>
              </Link>
              {/* ************************** product End ************************** */}

              {/* ************************* categories Start ************************* */}
              <Link href="/categories">
                <p
                  onClick={() => handleLinkClick("/categories")}
                  className={`${
                    activeLink === "/categories"
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  Categories
                </p>
              </Link>
              {/* ************************** categories End ************************** */}

              {/* ************************* sale Start ************************* */}
              <Link href="/sale">
                <p
                  onClick={() => handleLinkClick("/sale")}
                  className={`shimmer ${currentTextColor}  ${
                    activeLink === "/sale" ? "border-b-2 border-blue-500" : ""
                  }`}
                >
                  Sale
                </p>
              </Link>
              {/* ************************** sale End ************************** */}
            </div>
          </div>
          <div className="hidden md:block md:w-auto" id="navbar-default">
            <div className="text-[#404040] flex items-center text-2xl font-bold">
              <Link href="/">
                <p>DROWPRO</p>
              </Link>
            </div>
          </div>
          <div className="flex gap-5 text-[#404040] justify-center items-center">
            <div className="relative flex justify-between">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#F7F6F0] text-sm p-2 rounded"
              />
              <div className="absolute bottom-2 left-[185px]">
                <AiOutlineSearch className="w-5 h-5" />
              </div>
            </div>
            <div className="relative group hidden md:block transition-all duration-500">
              <Link href="/">
                <div
                  onClick={() => handleLinkClick("/checkout")}
                  className={`${
                    activeLink === "/checkout"
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  <BsSuitHeart className="w-6 h-6" />
                  {/* Display the cart count as a badge */}
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
                    {likedProducts.length}
                  </span>
                </div>
              </Link>
              <div className="absolute hidden top-full right-0 bg-[#fff] text-[#404040] p-4 rounded border shadow group-hover:block w-80 h-[450px]">
                <div className="flex flex-col gap-5">
                  <div className="flex justify-center items-center flex-col gap-3 pt-3">
                    <div className="relative">
                      <BsSuitHeartFill className="w-6 h-6 text-red-500" />
                      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-300 text-white rounded-full w-5 h-5 flex justify-center items-center">
                        {likedProducts.length}
                      </span>
                    </div>
                    <h4>MY WISHLIST</h4>
                  </div>
                  {/* Display liked products */}
                  {likedProducts.length > 0 ? (
                    <div className="flex flex-col gap-2 justify-center items-center">
                      {likedProducts.map((productId) => (
                        <div
                          key={productId}
                          className="text-base font-semibold"
                        >
                          <div className="flex gap-3">
                            <div>
                              <Image
                                src="/images/8.png"
                                alt="8"
                                width={100}
                                height={100}
                                className="w-16 h-16 "
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs font-semibold">
                                Euphoria Crop Blouse
                              </p>
                              <p className="text-sm font-bold">Rp. 125.000</p>
                              <div className="flex gap-2">
                                <p>ID No: </p>
                                {productId}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center pt-5">
                      No Product in the wishlist.
                    </p>
                  )}
                </div>
              </div>
              {/* <div className="absolute hidden top-full right-0 bg-[#fff] text-[#404040] p-4 rounded  border shadow group-hover:block w-80 h-80">
                <div className="flex flex-col gap-5">
                  <div className="flex justify-center items-center flex-col gap-3 pt-3">
                    <div className="relative">
                    <BsSuitHeart className="w-6 h-6" />
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-300 text-white rounded-full w-5 h-5 flex justify-center items-center">
                    {likedProducts.length}
                  </span>
                    </div>
                    <h4>MY WISHLIST</h4>
                  </div>
                  <div className="flex pt-2 gap-3">
                      <div>
                        <Image
                          src="/images/8.png"
                          alt="8"
                          width={100}
                          height={100}
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-base font-semibold">
                          Euphoria Crop Blouse
                        </p>
                        <p className="text-base font-bold">Rp. 125.000</p>
                        <div className="flex gap-2">
                          <p>Qty: </p>
                          <button className="text-lg border w-10 text-center">
                            1
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                <p className="text-center pt-5">No Product in the wishlist.</p>
              </div> */}
            </div>
            <div className="relative group transition-all duration-500">
              <Link href="/checkout">
                <div
                  onClick={() => handleLinkClick("/checkout")}
                  className={`${
                    activeLink === "/checkout"
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                >
                  <BsCart2 className="w-6 h-6" />
                  {/* Display the cart count as a badge */}
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
                    3
                  </span>
                </div>
              </Link>
              {/* Table to show when hovered */}
              <div className="absolute hidden top-full right-0 bg-[#fff] text-[#404040] p-4 rounded  border shadow group-hover:block w-80">
                <div className="flex flex-col gap-5">
                  <div className=" ">
                    {/* <p className="text-base">Cart Subtotal:<span className="font-bold text-lg"> Rp. 125.000</span> </p> */}
                    <div className="flex pt-2 gap-3">
                      <div>
                        <Image
                          src="/images/8.png"
                          alt="8"
                          width={100}
                          height={100}
                          className="w-24 h-24 "
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-base font-semibold">
                          Euphoria Crop Blouse
                        </p>
                        <p className="text-base font-bold">Rp. 125.000</p>
                        <div className="flex gap-2">
                          <p>Qty: </p>
                          <button className="text-lg border w-10 text-center">
                            1
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    {/* <p className="text-base">Cart Subtotal:<span className="font-bold text-lg"> Rp. 180.000</span> </p> */}
                    <div className="flex pt-2 gap-3">
                      <div>
                        <Image
                          src="/images/9.png"
                          alt="8"
                          width={100}
                          height={100}
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-base font-semibold">
                          Venus Halter Dress
                        </p>
                        <p className="text-base font-bold">Rp. 180.000</p>
                        <div className="flex gap-2">
                          <p>Qty: </p>
                          <button className="text-lg border w-10 text-center">
                            1
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    {/* <p className="text-base">Cart Subtotal:<span className="font-bold text-lg"> Rp. 229.000</span> </p> */}
                    <div className="flex pt-2 gap-3">
                      <div>
                        <Image
                          src="/images/11.png"
                          alt="8"
                          width={100}
                          height={100}
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-base font-semibold">
                          West Bootscut Denim
                        </p>
                        <p className="text-base font-bold">Rp. 229.000</p>
                        <div className="flex gap-2">
                          <p>Qty: </p>
                          <button className="text-lg border w-10 text-center">
                            1
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <svg className="animate-bounce w-6 h-6 text-black">hello</svg> */}
                  <div className="flex justify-center hover:w-full">
                    <Link href="/checkout" className="flex">
                      <p className="text-blue-500 hover:underline hover:bg-[#F7F6F0] py-2 hover:text-[#404040] hover:cursor-pointer hover:shadow hover:w-40 hover:text-center">
                        View All Product
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:-translate-x-1 transition-all duration-500">
              <Link href="/login">
                <div
                  onClick={() => handleLinkClick("/login")}
                  className={`${
                    activeLink === "/login" ? "border-b-2 border-blue-500" : ""
                  }`}
                >
                  <BiUser className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </div>
          {open && (
            <div className="lg:hidden absolute left-0 top-16 p-6 bg-[#fff] w-full">
              <div className="flex flex-col gap-2">
                <div className="text-[#404040] flex text-2xl font-bold">
                  <Link href="/">
                    <p
                      onClick={() => handleLinkClick("/")}
                      className={`${activeLink === "/" ? "" : ""}`}
                    >
                      DROWPRO
                    </p>
                  </Link>
                </div>
                <div className="text-[#404040] flex flex-col font-medium gap-2 text-lg">
                  <Link href="/">
                    <p
                      onClick={() => handleLinkClick("/")}
                      className={`${
                        activeLink === "/"
                          ? "border-b-2 w-14 border-blue-500"
                          : ""
                      }`}
                    >
                      Home
                    </p>
                  </Link>
                  <Link href="/product">
                    <p
                      onClick={() => handleLinkClick("/product")}
                      className={`${
                        activeLink === "/product"
                          ? "border-b-2 w-20 border-blue-500"
                          : ""
                      }`}
                    >
                      Product
                    </p>
                  </Link>
                  <Link href="/categories">
                    <p
                      onClick={() => handleLinkClick("/categories")}
                      className={`${
                        activeLink === "/categories"
                          ? "border-b-2 w-24 border-blue-500"
                          : ""
                      }`}
                    >
                      Categories
                    </p>
                  </Link>
                  <Link href="/sale">
                    <p
                      onClick={() => handleLinkClick("/sale")}
                      className={`${
                        activeLink === "/sale"
                          ? "border-b-2 w-10 border-blue-500"
                          : ""
                      }`}
                    >
                      Sale
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
