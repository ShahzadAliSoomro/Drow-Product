"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CardData = [
      {
        id: 1,
        image: "/images/8.png",
        title: "Business Insurance",
        price: "Rs: 200",
      },
      {
        id: 2,
        image: "/images/9.png",
        title: "Business Insurance",
        price: "Rs: 200",
      },
      {
        id: 3,
        image: "/images/10.png",
        title: "Business Insurance",
        price: "Rs: 200",
      },
      {
        id: 4,
        image: "/images/8.png",
        title: "Business Insurance",
        price: "Rs: 200",
      },
      {
        id: 5,
        image: "/images/9.png",
        title: "Business Insurance",
        price: "Rs: 200",
      },
      {
        id: 6,
        image: "/images/10.png",
        title: "Business Insurance",
        price: "Rs: 200",
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
            // borderRadius: "10px",
            padding: "10px",
            
          }}
        >
          <ul style={{ margin: "0px",  }}> {dots} </ul>
        </div>
      ),

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="mx-auto max-w-screen-2xl bg-[#fff] ">
        
        <div className="flex justify-center items-center text-5xl font-bold text-[#404040] p-5">
           <h2>Our Best Seller</h2>
        </div>
      <Slider {...settings} >
        {CardData.map((data) => (
          <div key={data.id} className="p-5 flex-wrap lg:flex-nowrap ">
             
            <div className="flex gap-5 justify-center flex-wrap lg:flex-nowrap">
              <div className="flex gap-2 flex-col">
                <Image
                  className=""
                  src={data.image}
                  alt=""
                  width={420}
                  height={420}
                />
                <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
                   <p>{data.title}</p>
                   <p>{data.price}</p>
                 </div>
              </div>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;


// import React from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const CardData = [
//   {
//     id: 1,
//     image: "/images/8.png",
//     title: "Business Insurance",
//     price: "Rs: 200",
//   },
//   {
//     id: 2,
//     image: "/images/9.png",
//     title: "Business Insurance",
//     price: "Rs: 200",
//   },
//   {
//     id: 3,
//     image: "/images/10.png",
//     title: "Business Insurance",
//     price: "Rs: 200",
//   },
//   {
//     id: 4,
//     image: "/images/8.png",
//     title: "Business Insurance",
//     price: "Rs: 200",
//   },
//   {
//     id: 5,
//     image: "/images/9.png",
//     title: "Business Insurance",
//     price: "Rs: 200",
//   },
//   {
//     id: 6,
//     image: "/images/10.png",
//     title: "Business Insurance",
//     price: "Rs: 200",
//   },
// ];

// const BestSeller = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
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
//     <div className="mx-auto w-full bg-[#fff]">
//       <div className="p-5 flex-wrap lg:flex-nowrap">
//         <div className="flex justify-center items-center text-5xl font-bold text-[#404040] p-5">
//           <h2>Our Best Seller</h2>
//         </div>
//         <div className="flex gap-5 justify-center flex-wrap lg:flex-nowrap">
//           <Slider {...settings}>
//             {CardData.map((data) => (
//               <div className="flex gap-2 flex-col">
//                 <Image
//                   src={data.image}
//                   alt="5Image"
//                   width={400}
//                   height={400}
//                 />
//                 <div className="flex justify-center flex-col items-center text-lg text-[#404040]">
//                   <p>{data.title}</p>
//                   <p>{data.price}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           {/* <div className='flex gap-2 flex-col'>
//              <Image src="/images/9.png" alt='5Image' width={400} height={400}/>
//              <div className='flex justify-center flex-col items-center text-lg text-[#404040]'>
//                 <p>Snap Pure Blouse</p>
//                 <p>Rp. 129.000</p>
             
//              </div>
//           </div>
//           <div className='flex gap-2 flex-col'>
//              <Image src="/images/10.png" alt='5Image' width={400} height={400}/>
//              <div className='flex justify-center flex-col items-center text-lg text-[#404040]'>
//                 <p>Snap Pure Blouse</p>
//                 <p>Rp. 129.000</p>
             
//              </div>
//           </div> */}
//         </div>
//       </div>
//     </div>

//   );
// }
// export default BestSeller;