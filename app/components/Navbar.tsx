"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLock, AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-[#fff]">
      <div className="container mx-auto">
      <div className="flex justify-between p-5">
        <button
          onClick={() => setOpen(!open)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-black hover:bg-[#F7F6F0] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#F7F6F0] dark:focus:ring-gray-300 md:hidden"
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
              <p>Home</p>
            </Link>
            <Link href="/product">
              <p>Product</p>
            </Link>
            <Link href="/categories">
              <p>Categories</p>
            </Link> 
            <Link href="/sale">
              <p>Sale</p>
            </Link>
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
            <div className="absolute bottom-2 left-44">
              <AiOutlineSearch className="w-5 h-5" />
            </div>
          </div>
          <div className="hover:-translate-x-1 transition-all duration-500">
            <AiOutlineLock className="w-6 h-6 " />
          </div>
          <div className="hover:-translate-x-1 transition-all duration-500">
            <Link href="/login">
            <BiUser className="w-6 h-6" />
            </Link>
          </div>
        </div>
        {open && (
            
          <div className="lg:hidden absolute left-0 top-10 p-6 ">
            <div className="flex flex-col gap-2">
              <div className="text-[#404040] flex text-2xl font-bold">
                <Link href="/">
                <p>DROWPRO</p>
                </Link>
              </div>
              <div className=" text-[#404040] flex flex-col font-medium gap-2 text-lg">
                <Link href="/">
                  <p>Home</p>
                </Link>
                <Link href="/product">
                  <p>Product</p>
                </Link>
                <Link href="/categories">
                  <p>Categories</p>
                </Link>
                <Link href="/sale">
                  <p>Sale</p>
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
