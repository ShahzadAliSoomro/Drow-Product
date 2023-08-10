"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";

interface NavbarProps {
  activeRoute: string;
}
export default function Navbar({ activeRoute }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link

  const handleLinkClick = (route: string) => {
    setActiveLink(route); // Update the active link when a link is clicked
    setOpen(false);
  };

  return (
    <div className="w-full bg-[#fff]">
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
              className="h-6 w-6 text-black"
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
                  className={`${
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
            <div className="hover:-translate-x-1 transition-all duration-500">
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
                </div>
              </Link>
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
