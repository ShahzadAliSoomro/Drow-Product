import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function Page() {
  return (
    <div>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-[#404040] bg-[#F7F6F0] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <Link href="/">Drow-Pro</Link>
            </div>
            <p className="mt-6 font-normal text-center text-[#404040] md:mt-0">
              With the power of Drow-Pro, you can now focus only on
              functionaries for your digital products, while leaving the UI
              design on us!
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <Link
                href="/signup"
                className="underline cursor-pointer hover:-translate-x-1"
              >
                Signup Now!
              </Link>
            </p>
            <p className="mt-6 text-sm text-center text-[#404040]">
              Read our{" "}
              <Link href="#" className="underline">
                terms
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                conditions
              </Link>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-[#404040]">
              Account Login
            </h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#404040]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className="px-4 py-2 text-[#404040] bg-[#F7F6F0] transition duration-300 border border-gray-300 rounded  "
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-[#404040]"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-sm text-[#404040] hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="px-4 py-2 bg-[#F7F6F0] text-[#404040] transition duration-300 border border-gray-300 rounded focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-semibold text-[#404040]"
                >
                  Remember me
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold hover:text-[#404040] hover:-translate-y-1 transition-all duration-500 text-[#404040] bg-[#F7F6F0] rounded-md shadow hover:bg-[#F7F6F0] focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-36"></span>
                  <span className="font-normal text-[#404040]">
                    or login with
                  </span>
                  <span className="h-px bg-gray-400 w-36"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <Link
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 hover:-translate-y-1 transition-colors duration-300 bg-[#F7F6F0] rounded-md group hover:bg-[#F7F6F0] focus:outline-none"
                  >
                    <FcGoogle className="w-5 h-5" />
                    <span className="text-sm font-medium text-[#404040] group-hover:text-[#404040]">
                      Google
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="flex hover:-translate-y-1 items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 bg-[#F7F6F0] rounded-md group hover:bg-[#F7F6F0] focus:outline-none"
                  >
                    <span>
                      <BsFacebook className="w-5 h-5 text-blue-700" />
                    </span>
                    <span className="text-sm font-medium text-[#404040] group-hover:text-[#404040]">
                      Facebook
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
