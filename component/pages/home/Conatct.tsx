"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const inputClass =
  "text-[16px] bg-[#f2f2f2] px-[30px] py-[15px] rounded-[30px] outline-none w-full";

export default function Contact() {
  const { scrollYProgress } = useScroll();

const leftX = useTransform(scrollYProgress, [0, 1], ["150%", "-40%"]);

// Right building: bahar se andar
const rightX = useTransform(scrollYProgress, [0, 1], ["-150%", "40%"]);

  return (
    <section
      className="rounded-2xl pt-60  sm:py-30 max-w-6xl mx-2 sm:mx-auto my-10 "
      style={{
        backgroundImage: "url('/img/contact bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div
        className="relative max-w-5xl mx-auto bg-white sm:rounded-3xl py-30 overflow-hidden"
        style={{ fontFamily: "var(--font-switzer)" }}
      >
        <h2
          className="text-center text-[20px] sm:text-[36px] text-black font-bold leading-[1] px-1 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-involve)" }}
        >
          Get specialist advice for residential,
           commercial or property
        </h2>

        <form
          className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto w-fit py-16 z-40 "
          style={{ fontFamily: "var(--font-switzer)" }}
        >
          <input
            type="text"
            required
            placeholder="Your Name*"
            className={inputClass}
          />
          <input
            type="email"
            required
            placeholder="Email*"
            className={inputClass}
          />
          <input
            type="number"
            required
            placeholder="Phone Number*"
            className={inputClass}
          />
          <input
            placeholder="Your inquiry about..."
            className={`${inputClass} `}
          />
          <p className="text-sm sm:text-[18px] text-[#4b4b4b] ">
            We are excited to connect with you! <br /> Required fields are marked
          </p>
          <button
            className=" relative bg-[var(--primary)] hover:bg-black hover:text-white w-fit rounded-full mx-auto sm:mx-0 sm:ml-auto flex px-2 gap-3 items-center justify-center group duration-300 font-bold capitalize pl-6 py-2 "
            style={{ fontFamily: "var(--font-involve)" }}
          >
            get a call back
            <span className="relative flex  justify-center w-10 h-10 items-center bg-white rounded-full overflow-hidden  ">
              {/* Default Arrow (top-right exit) */}
              <ArrowUpRight className="absolute transform transition-transform duration-600 group-hover:translate-x-8 group-hover:-translate-y-8" />
              {/* New Arrow (bottom-left enter) */}
              <ArrowUpRight className="absolute transform text-black translate-x-[-24px] translate-y-[24px] transition-transform duration-600 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--primary)]" />
            </span>
          </button>
        </form>

        {/* Left building */}
        <motion.div
          style={{ x: leftX }}
          className="absolute bottom-0 -left-1/2 sm:left-0  sm:scale-[2] z-1 duration-300"
        >
          <Image
            src="/img/right side bg.png"
            width={400}
            height={100}
            alt="left building"
            className="object-center object-cover"
          />
        </motion.div>

        {/* Right building */}
        <motion.div
          style={{ x: rightX }}
          className="absolute bottom-0 -right-1/2 sm:right-0  sm:scale-[2] z-1 duration-300"
        >
          <Image
            src="/img/right side bg.png"
            width={400}
            height={100}
            alt="right building"
            className="object-center object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
