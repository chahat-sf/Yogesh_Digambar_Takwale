import { ArrowRightLeftIcon } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className=" relative w-full  justify-center items-center pb-20"
      style={{
        backgroundImage: "url('/img/telhara.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.6)", // black overlay
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="w-full relative max-w-6xl mx-auto ">
        <h1 className="text-4xl text-center sm:text-left sm:text-[70px] max-w-7xl mx-auto font-bold text-white/80 pt-70 pb-30">
          About US
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr]  items-end">
 
        <p className=" text-white/80 font-medium flex flex-row items-center justify-center md:justify-start gap-2">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>{" "}
          <ArrowRightLeftIcon size={12} />{" "}
          <Link href="/about" className="underline hover:text-gray-400">
            About
          </Link>
        </p>
        <p
          className="w-100 hidden  md:text-[18px] mx-auto  text-white/80 font-[600]  md:block"
          style={{ fontFamily: "var(--font-switzer)" }}
        >
          We are a top 25 builder and developer fully invested in our customers’
          success and improving the communities we serve.
        </p>

        </div>
       {" "}
      </div>
    </section>
  );
}
