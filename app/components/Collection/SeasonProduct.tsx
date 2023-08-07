import React from 'react'
import Image from 'next/image'

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

export default function SeasonProduct() {
  return (
    <div className='mx-auto w-full bg-[#fff]'>
      <div className='p-5 flex-wrap lg:flex-nowrap space-y-5'>
        <div className='flex justify-center items-center lg:text-5xl text-3xl font-bold text-[#404040]'>
          <h2>Season Collections</h2>
        </div>
        <div className="lg:w-[1240px] w-full mx-auto flex gap-5 justify-center flex-wrap lg:flex-nowrap">
          {SeasonCard.map((item) => (
            <div className="flex gap-4 flex-col">
              <Image
                src={item.image}
                alt="5Image"
                width={400}
                height={400}
                className=""
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}
