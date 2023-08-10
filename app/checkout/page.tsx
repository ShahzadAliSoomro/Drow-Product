import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full  bg-[#F7F6F0]">
      <div className="container mx-auto py-10 w-full lg:w-12/12">
        <div className="mb-2 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#404040]">
            Checkout
          </h1>
        </div>

        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="-mx-3 md:flex items-start">
              <div className="w-full px-5 lg:w-8/12">
                <div className="w-full text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="w-full flex items-center">
                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                    <Image src="/images/8.png" alt="8" width={160} height={160} className="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-semibold uppercase text-[#404040]">
                        Euphoria Crop Blouse
                      </h6>
                      <p className="text-gray-400">x 1</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#404040] text-xl">
                        Rp. 125.000
                      </span>
                      <span className="font-semibold text-[#404040] text-sm">
                        
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="w-full flex items-center">
                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                    <Image src="/images/9.png" alt="8" width={160} height={160} className="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-semibold uppercase text-[#404040]">
                        Ray Ban Sunglasses.
                      </h6>
                      <p className="text-gray-400">x 1</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#404040] text-xl">
                        $200
                      </span>
                      <span className="font-semibold text-[#404040] text-sm">
                        .00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="w-full flex items-center">
                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                      <img
                        src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-semibold uppercase text-[#404040]">
                        Ray Ban Sunglasses.
                      </h6>
                      <p className="text-gray-400">x 1</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#404040] text-xl">
                        $200
                      </span>
                      <span className="font-semibold text-[#404040] text-sm">
                        .00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="w-full flex items-center">
                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                      <img
                        src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-semibold uppercase text-[#404040]">
                        Ray Ban Sunglasses.
                      </h6>
                      <p className="text-gray-400">x 1</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#404040] text-xl">
                        $200
                      </span>
                      <span className="font-semibold text-[#404040] text-sm">
                        .00
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-5 lg:w-4/12 space-y-12 border-l-2 border-gray-300">
                <div className="pb-10 border-b border-gray-200">
                  <div className="-mx-2 flex items-end justify-end">
                    <div className="flex-grow px-2">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Discount code
                      </label>
                      <div className="w-full">
                        <input
                          className="w-full px-3 py-2 border border-gray-200 bg-[#F7F6F0] rounded-md"
                          placeholder="XXXXXX"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <button className="block w-full max-w-xs mx-auto border border-transparent hover:text-[#404040] hover:-translate-y-1 transition-all duration-500 text-[#404040] bg-[#F7F6F0] rounded-md shadow px-5 py-2 font-semibold">
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pb-10 border-b border-gray-200 text-gray-800">
                  <div className="w-full flex mb-8 items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Subtotal</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">$190.91</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Taxes (GST)</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">$19.09</span>
                    </div>
                  </div>
                </div>
                <div className="pb-10 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Total</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold text-gray-400 text-sm">
                        AUD
                      </span>{" "}
                      <span className="font-semibold text-[#404040]">
                        $810.00
                      </span>
                    </div>
                  </div>
                </div>
                <Link href="/payorder">
                  <button className="text-center w-full hover:text-[#404040] hover:-translate-y-1 transition-all duration-500 text-[#404040] bg-[#F7F6F0] rounded-md shadow px-3 py-2 font-semibold">
                    <i className="mdi mdi-lock-outline mr-1"></i>PLACE ORDER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
