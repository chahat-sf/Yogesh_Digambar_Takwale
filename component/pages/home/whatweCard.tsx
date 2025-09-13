
'use client';
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


interface carddata {
  heading: string;
  desc: string;
  img: string;
}
const card: carddata[] = [
  {
    heading: "Road Construction & Maintenance",
    desc: "Delivering high-quality road infrastructure with precision, durability, and timely execution.",
    img: "/img/service-1.png",
  },
  {
    heading: "Repair & Strengthening of Old Structures",
    desc: "Enhancing structural integrity and extending lifespan through expert repair and reinforcement.",
    img: "/img/service-2.png",
  },
  {
    heading: "Specialized Retrofitting for Enhanced Safety & Life",
    desc: "Implementing advanced retrofitting solutions to maximize safety, resilience, and longevity.",
    img: "/img/service-3.png",
  },
  {
    heading: "Material Supply (building & road components)",
    desc: "Providing premium-quality materials to ensure strong, reliable, and sustainable construction.",
    img: "/img/service-4.png",
  },
  {
    heading: "Tender Bidding, Project Execution & Management",
    desc: "Expertly managing projects from tender to delivery, ensuring efficiency and compliance.",
    img: "/img/service-5.png",
  },
];


export default function WhatweCard() {
  return (
    <section className="pt-20 sm:py-30 mx-auto bg-[#f6f3ec]">
    <motion.h2
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }} // triggers when 50% visible
  transition={{ duration: 1, delay:0.5 }}
  className="text-center text-3xl sm:text-5xl md:text-[70px] font-bold px-10 max-w-3xl mx-auto leading-[1.2]"
>
  Take a brief look at some of the services we offer
</motion.h2>

      <div className="flex flex-wrap justify-between gap-10 mx-auto my-20 px-4 sm:px-1 max-w-6xl">
        {card.map((data, index) => (
//           <div
//             key={index}
//             className="group min-w-[300px] relative bg-white hover:bg-[var(--primary)] flex flex-1 flex-col gap-30  rounded-2xl   overflow-hidden"
      
         
//          >
//             <h3 className="text-left text-[32px] font-bold pt-12 pb-6 px-3   leading-[1.1] capitalize " >
//               {data.heading}
//             </h3>
//             <p className="z-2 bg-black/70 text-white p-2 font-medium">
//               {data.desc}
//             </p>
//             <Image
//               src={data.img}
//               alt={data.img}
//               width={200}
//               height={100}
              
//               className="group-hover:scale-[2] absolute bottom-0 z-1 object-cover object-center transform scale-[1.8] transition duration-600"
//             />
// <Image src="/img/svgbg.png" width={100} height={100} className=" absolute -top-2 -right-2"  alt="svgbg"/>
//    <button className="absolute top-1 right-1 shadow-xl overflow-hidden group  rounded-full bg-[var(--white)] p-3 group hover:bg-black transition-colors duration-300">
//       {/* Wrapper for icon animation */}
//       <span className="relative flex w-5 h-5 items-center ">
//         {/* Default Arrow (top-right exit) */}
//         <ArrowUpRight
//           className="absolute  transform transition-transform duration-600 group-hover:translate-x-8 group-hover:-translate-y-8"
//         />
//         {/* New Arrow (bottom-left enter) */}
//         <ArrowUpRight
//           className="absolute  transform text-black translate-x-[-24px] translate-y-[24px] transition-transform duration-600 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--primary)]"
//         />
//       </span>
//     </button>
//             </div>

<Link href='#'
  key={index}
  className="group min-w-[300px] relative bg-white  flex flex-1 flex-col gap-30 rounded-2xl overflow-hidden"
>
 
 <div className="absolute inset-0 bg-[var(--primary)] 
                  [clip-path:circle(0%_at_100%_0%)] 
                  group-hover:[clip-path:circle(150%_at_100%_0%)] 
                  transition-[clip-path] duration-1500 ease-in-out" />
  <h3 className="text-left text-[24px] w-75 font-bold pt-12 pb-50 px-3 leading-[1.1] capitalize relative z-10">
    {data.heading}
  </h3>
  <p className="z-10 absolute bottom-0 left-0 bg-black/70 text-white p-2 font-medium">
    {data.desc}
  </p>

  <Image
    src={data.img}
    alt={data.img}
    width={200}
    height={100}
    className="group-hover:scale-[2] absolute bottom-0 z-0 object-cover object-center transform scale-[1.8] transition duration-600"
  />

  <Image
    src="/img/svgbg.png"
    width={100}
    height={100}
    className="absolute -top-2 -right-2 z-10"
    alt="svgbg"
  />

  <button className="absolute top-1 right-1 z-30  overflow-hidden group rounded-full bg-[var(--white)] p-3   hover:text-white transition-colors duration-300">
    <div className="absolute inset-0 bg-[var(--primary)] 
                  [clip-path:circle(0%_at_100%_0%)] 
                  group-hover:[clip-path:circle(150%_at_100%_0%)] 
                  transition-[clip-path] duration-1500 ease-in-out " />
    <span className="relative flex w-5 h-5 items-center z-50">
      <ArrowUpRight className="absolute transform transition-transform duration-600 group-hover:translate-x-8 group-hover:-translate-y-8" />
      <ArrowUpRight className="absolute transform text-black  translate-x-[-24px] translate-y-[24px] transition-transform duration-600 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--black)]" />
    </span>
  </button>
   
</Link>

          
        ))}
      </div>
    </section>
  );
}
