import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface carddata {
  heading: string;
  desc: string;
  img: string;
}
const card: carddata[] = [
  {
    heading: "real estate development",
    desc: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
    img: "/img/service-1.png",
  },
  {
    heading: "real estate development",
    desc: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
    img: "/img/service-2.png",
  },
  {
    heading: "real estate development",
    desc: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
    img: "/img/service-3.png",
  },
  {
    heading: "real estate development",
    desc: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
    img: "/img/service-4.png",
  },
  {
    heading: "real estate development",
    desc: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
    img: "/img/service-5.png",
  },
];

export default function WhatweCard() {
  return (
    <section className="py-30 mx-auto bg-[#f6f3ec]">
      <h2 className="text-center text-5xl md:text-[70px] font-bold px-10 max-w-3xl mx-auto leading-[1.2]">
        Take a brief look at some of the services we offer
      </h2>

      <div className="flex flex-wrap justify-between gap-10 mx-auto my-20 px-4 sm:px-1 max-w-6xl">
        {card.map((data, index) => (
          <div
            key={index}
            className="group min-w-[300px] relative bg-white hover:bg-[var(--primary)] flex flex-1 flex-col gap-30  rounded-2xl   overflow-hidden"
      
         
         >
            <h3 className="text-left text-[32px] font-bold pt-12 pb-6 px-3   leading-[1.1] capitalize " >
              {data.heading}
            </h3>
            <p className="z-2 bg-black/70 text-white p-2 font-medium">
              {data.desc}
            </p>
            <Image
              src={data.img}
              alt={data.img}
              width={200}
              height={100}
              
              className="group-hover:scale-[2] absolute bottom-0 z-1 object-cover object-center transform scale-[1.8] transition duration-600"
            />
<Image src="/img/svgbg.png" width={100} height={100} className=" absolute -top-2 -right-2"  alt="svgbg"/>
   <button className="absolute top-1 right-1 shadow-xl overflow-hidden group  rounded-full bg-[var(--white)] p-3 group hover:bg-black transition-colors duration-300">
      {/* Wrapper for icon animation */}
      <span className="relative flex w-5 h-5 items-center ">
        {/* Default Arrow (top-right exit) */}
        <ArrowUpRight
          className="absolute  transform transition-transform duration-600 group-hover:translate-x-8 group-hover:-translate-y-8"
        />
        {/* New Arrow (bottom-left enter) */}
        <ArrowUpRight
          className="absolute  transform text-black translate-x-[-24px] translate-y-[24px] transition-transform duration-600 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--primary)]"
        />
      </span>
    </button>
            </div>
          
        ))}
      </div>
    </section>
  );
}
