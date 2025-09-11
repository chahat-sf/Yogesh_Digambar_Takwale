import {  ArrowRightLeftIcon } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className=" relative w-full h-[80vh] sm:h-[120vh] py-10  justify-center items-center"
      style={{
        backgroundImage: "url('/img/about-bc.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.6)", // black overlay
        backgroundBlendMode: "multiply",
      }}
    >
        <div className="w-full h-[90%]  relative max-w-6xl mx-auto">

    <h1 className="absolute top-1/2 left-1/2  -translate-x-1/2 sm:translate-x-0 transform -translate-y-1/2 sm:left-1 text-4xl sm:text-[70px] max-w-7xl mx-auto font-bold text-white/80 ">About US</h1>
  <p
            className=" absolute bottom-0 right-0 w-100  md:text-[18px] mx-auto  text-white/80 font-[600] hidden md:block"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
            We are a top 25 builder and developer fully invested in our
            customers’ success and improving the communities we serve.
          </p>
          
          <p className="absolute bottom-0 left-1/2 sm:translate-x-0 transform -translate-x-1/2 sm:left-0 text-white/80 font-medium flex flex-row items-center gap-2">
            <Link href='/' className="hover:text-gray-400">Home</Link> <ArrowRightLeftIcon size={12}/> <Link href='/about' className="underline hover:text-gray-400">About</Link>
            </p>        </div>
    </section>
  );
}
