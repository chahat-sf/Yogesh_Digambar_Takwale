'use client';
import {useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import { ArrowUpRight } from "lucide-react";
import PopupForm from "@/component/global/popupform";
import { motion } from "framer-motion";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);


   // ✅ scroll lock on popup open
    useEffect(() => {
      if (isFormOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isFormOpen]);
  return (
    <section
      className=" relative w-full min-h-fit pb-10  justify-center items-center"
      style={{
        backgroundImage: "url('/img/telhara.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.6)", // black overlay
        backgroundBlendMode: "multiply",
        backgroundRepeat:"no-repeat"
        
      }}
    >
      <div className="w-full px-3 md:max-w-6xl   text-center flex flex-col gap-6 mx-auto  text-white z-[10] ">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto py-30 mt-60 md:mt-50">
          <h1
            className={` text-3xl sm:text-4xl md:text-[68px] font-extrabold leading-[1.1] mt-10 drop-shadow-lg`}
            style={{ fontFamily: "var(--font-involve)" }}
          >
Design, Construct, Retrofit, Delivered Right 
        </h1>
          <p
            className=" mt-4  md:text-[22px] mx-auto text-[var(--text_light)] font-[600]"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
       Durable, compliant, and on-time infrastructure for government and private clients—backed by 10+ years of delivery
          </p>
        </motion.div>

        <div className=" grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr] mx-auto items-center py-15 border-t border-white/30 md:max-w-6xl">
          <p
            className=" mt-4 text-xl md:text-[36px] mx-auto text-white text-center md:text-left font-semibold leading-[1.3] md:leading-[1.1]"
            style={{ fontFamily: "var(--font-involve)" }}
          >
           India’s construction market (2024): ~INR 25.32 trillion; near-term CAGR ~9.4% (2024–2028).
          </p>
          <div className="flex justify-center md:justify-end">
           <button
            className=" relative bg-[var(--primary)] hover:bg-black text-black hover:text-white w-fit rounded-full mx-auto sm:mx-0 sm:ml-auto flex px-2 gap-3 items-center justify-center group duration-300 font-bold capitalize pl-6 py-2 "
            style={{ fontFamily: "var(--font-involve)" }}
            onClick={() => setIsFormOpen(true)}
          >
            get a call back
            <span className="relative flex  justify-center w-10 h-10 items-center bg-white rounded-full overflow-hidden  ">
              {/* Default Arrow (top-right exit) */}
              <ArrowUpRight className="absolute transform transition-transform duration-600 group-hover:translate-x-8 group-hover:-translate-y-8" />
              {/* New Arrow (bottom-left enter) */}
              <ArrowUpRight className="absolute transform text-black translate-x-[-24px] translate-y-[24px] transition-transform duration-600 group-hover:translate-x-0 group-hover:translate-y-0 " />
            </span>
          </button>
          
          </div>
        </div>

        <CardGrid />
      </div>
      {/* <Image
        src="/img/hero bg img.jpg"
        alt="hero image"
        fill
        className="z-[1] object-cover object-center w-[100%] h-full brightness-70 absolute top-0 left-0"
      /> */}
                <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

    </section>
  );
}
