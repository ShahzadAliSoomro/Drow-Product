// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

// const CardData = [
//         {
//           id: 1,
//           image: "/images/8.png",
//           title: "Euphoria Crop Blouse",
//           price: "Rp. 125.000",
//         },
//         {
//           id: 2,
//           image: "/images/9.png",
//           title: "Venus Halter Dress",
//           price: "Rp. 180.000",
//         },
//         {
//           id: 3,
//           image: "/images/10.png",
//           title: "Snap Pure Blouse",
//           price: "Rp. 129.000",
//         },
//         {
//           id: 4,
//           image: "/images/11.png",
//           title: "West Bootscut Denim",
//           price: "Rp. 229.000",
//         },
//         {
//           id: 5,
//           image: "/images/12.png",
//           title: "Ribbon Check Long",
//           price: "Rp. 175.000",
//         },
//         {
//           id: 6,
//           image: "/images/13.png",
//           title: "Shouldcut Knit",
//           price: "Rp. 149.000",
//         },
//       ];

// const BestSeller = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Display 3 items at a time
//     slidesToScroll: 3, // Scroll 3 items at a time
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="mx-auto w-full bg-[#fff] py-10">
//       <div className="text-center py-8 text-3xl font-bold text-[#404040]">
//         <h2>Our Best Seller</h2>
//       </div>
//       <div className="px-4 lg:w-[1240px] mx-auto">
//         <Slider {...settings}>
//           {CardData.map((data) => (
//             <div key={data.id} className="p-2">
//               <div className="flex justify-center items-center">
//                 <div className="bg-white rounded-lg shadow-md p-4">
//                   <Image
//                     className="mx-auto"
//                     src={data.image}
//                     alt=""
//                     width={300} // Adjust this value as needed
//                     height={300} // Adjust this value as needed
//                   />
//                   <div className="text-center mt-2">
//                     <p className="text-lg font-semibold text-[#404040]">
//                       {data.title}
//                     </p>
//                     <p className="text-sm text-[#707070]">{data.price}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default BestSeller;


"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CardData = [
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

const BestSeller = () => {
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
                <div className=" hover:-translate-y-3 transition-all duration-500">
                  <Image
                    className="mx-auto h-full lg:w-full "
                    src={data.image}
                    alt=""
                    width={400} // Adjust this value as needed
                    height={400} // Adjust this value as needed
                  />
                  <div className="text-center mt-2">
                    <p className="text-lg font-semibold text-[#404040]">
                      {data.title}
                    </p>
                    <p className="text-sm text-[#707070] pb-5">{data.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
       
      </Slider>
      </div>
      
    </div>
  //   <div className="mx-auto w-full container bg-white p-6">
  //   <div className="text-center text-5xl font-bold text-[#404040]">
  //     <h2 className="">Our Best Seller</h2>
  //   </div>
  //   <div className="lg:w-[90%] mx-auto">
  //     <Slider {...settings}>
  //       {CardData.map((data) => (
  //         <div key={data.id} className="px-2">
  //           <div className="flex justify-center items-center">
  //             <div className="hover:-translate-y-3 transition-all duration-500">
  //               <Image
  //                 className="mx-auto"
  //                 src={data.image}
  //                 alt=""
  //                 width={500}
  //                 height={500}
                  
  //               />
  //               <div className="text-center mt-2">
  //                 <p className="text-lg font-semibold text-[#404040]">
  //                   {data.title}
  //                 </p>
  //                 <p className="text-sm text-[#707070] pb-3">{data.price}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </Slider>
  //   </div>
  // </div>
  );
};

export default BestSeller;

