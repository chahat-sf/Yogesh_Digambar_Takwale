import { FaArrowRight } from "react-icons/fa6";
import CardGrid from "./CardGrid";
import { ArrowDownLeftIcon, ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section
      className=" relative w-full min-h-fit pb-10  justify-center items-center"
      style={{
        backgroundImage: "url('/img/hero bg img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.6)", // black overlay
        backgroundBlendMode: "multiply",
        
      }}
    >
      <div className="w-full px-3 md:max-w-6xl   text-center flex flex-col gap-6 mx-auto  text-white z-[10] ">
        <div className="max-w-3xl mx-auto py-30 mt-60 md:mt-50">
          <h1
            className={` text-3xl sm:text-4xl md:text-[68px] font-extrabold leading-[1.1] mt-10 drop-shadow-lg`}
            style={{ fontFamily: "var(--font-involve)" }}
          >
            Shaping future through excellence
          </h1>
          <p
            className=" mt-4  md:text-[22px] mx-auto text-[var(--text_light)] font-[600]"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
            We are a top 25 builder and developer fully invested in our
            customers’ success and improving the communities we serve.
          </p>
        </div>

        <div className=" grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr] mx-auto items-center py-15 border-t border-white/30 md:max-w-6xl">
          <p
            className=" mt-4 text-xl md:text-[36px] mx-auto text-white text-center md:text-left font-semibold leading-[1.3] md:leading-[1.1]"
            style={{ fontFamily: "var(--font-involve)" }}
          >
            We developed landmark real estate projects that deliver lasting
            value to investors and communities.{" "}
          </p>
          <div className="flex justify-center md:justify-end">
            <button className="flex items-center justify-center border border-gray-500 px-2 py-2 gap-2 rounded-full pl-6 text-sm font-bold bg-white text-black  ">
              View service
              <span className="btn" style={{ padding: "10px" }}>
                <ArrowUpRight/>
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
    </section>
  );
}
