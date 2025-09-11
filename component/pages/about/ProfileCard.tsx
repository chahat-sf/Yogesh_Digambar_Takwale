"use client";

import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function ProfileCard() {
  return (
    <section className="relative w-full py-30 md:py-30 rounded-4xl  bg-white  z-1 -mt-10 px-4">
      <div className="relative grid grid-cols-1 md:grid-cols-[40%_55%] max-w-5xl mx-auto  gap-16  ">
        {/* Left: Profile Image */}
        <div className=" flex justify-center md:justify-start" >
    <Image
  src="/img/service left img.jpg"
  alt="Profile"
  width={400}
  height={200}
  // style={{
  //   clipPath: "path('M0 300 H400 V0 Q300 0 275 0 H125 Q100 0 100 25 V75 Q100 100 75 100 H25 Q0 100 0 125 V475 Q0 500 25 500 H375 Q400 500 400 475 V300 Z')"
  // }}
  
// style={{
//     clipPath:
//       "path('M0 300 H400 V0 H125 Q100 0 100 25 V75 Q100 100 75 100 H25 Q0 100 0 125 V475 Q0 500 25 500 H375 Q400 500 400 475 V300 Z')",
//   }}

  //   style={{
  //   clipPath:
  //     "path('M20 0 H275 Q300 0 300 15   V100 Q300 125 325 125  V125 Q370 115 375 165  V160 Q400 500 375 500  H25 Q0 500 0 475  V25 Q0 0 25 0 Z')",
  // }}
      // "path('M20 0 H275 Q300 0 300 20 V80 Q300 100 320 100 H380 Q400 100 400 120 V500 H25 Q0 500 0 475 V25 Q0 0 25 0 Z')",

  className="rounded-2xl object-cover max-h-[380px]  sticky top-[130px] mx-5"

/>

        </div>

        {/* Right: Info */}
        <div className="flex flex-col gap-8 justify-center">
          {/* Tag */}
          <p
            className="bg-lime-300 text-black text-xs font-semibold px-3 py-1 rounded-full w-fit"
            style={{ fontFamily: "var(--font-involve)" }}
          >
            FOUNDER & CEO
          </p>

          {/* Name & Intro */}
          <div>
            <h2
              className="text-4xl py-2 sm:text-[62px] font-bold text-gray-900 leading-[1.1] "
              style={{ fontFamily: "var(--font-involve)" }}
            >
              Yogesh Digambar Takwale
            </h2>
            <p
              className="text-[var(--text)] text-[22px] font-medium leading-relaxed"
              style={{ fontFamily: "var(--font-switzer)" }}
            >
              Lorem ipsum lobortis amet sit tristique quisque id nunc eu
              consectetur velit diam id donec eu nunc laoreet cras vel tempor in
              felis lorem ipsum id non.
            </p>
          </div>

          {/* Contact */}
          <div
            className="flex flex-col gap-1 text-xl font-bold text-[16px]"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
            <p className="text-[var(--text)]">Email address:</p>
            <p>
              <a
                href="mailto:dennis@example.com"
                className="text-[var(--black)]  hover:underline"
              >
                dennis@example.com
              </a>
            </p>
          </div>

          <div className="text-[var(--text)] text-[16px] font-bold flex justify-between items-center border-y py-4">
            <p className="text-[var(--black)]"> (004) 123 - 456 88</p> {/* Social Icons */}
            <div className="flex items-center gap-4 text-[var(--text)]">
              <a href="#">
                <FaFacebook size={16} />
              </a>
              <a href="#">
                <FaTwitter size={16} />
              </a>
              <a href="#">
                <FaLinkedin size={16} />
              </a>
              <a href="#">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* About Me */}
          <div className="flex flex-col gap-4">
            <h4 className="text-4xl font-bold text-black" style={{ fontFamily: "var(--font-involve)" }}
>About me</h4>
            <p className="text-[18px] text-[var(--text)] font-[600px]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>

            {/* List */}
            <div className="font-bold text-[18px] py-6"
                        style={{ fontFamily: "var(--font-switzer)" }}

            >

              <p className="flex items-center my-2 gap-4">
              
                  <span className="min-w-2 min-h-2 rounded-full -mt-6 bg-[var(--primary)]"></span>
                
                Lecturer, Medical Malpractice and Tort Matters to Legal
                Community, New York State Trial Lawyers Institute
              </p>
               <p className="flex items-center my-2 gap-4">
              
                  <span className="min-w-2 min-h-2 rounded-full -mt-6 bg-[var(--primary)]"></span>
                
                Lecturer, Medical Malpractice and Tort Matters to Legal
                Community, New York State Trial Lawyers Institute
              </p>
               <p className="flex items-center my-2 gap-4">
              
                  <span className="min-w-2 min-h-2 rounded-full -mt-6 bg-[var(--primary)]"></span>
                
                Lecturer, Medical Malpractice and Tort Matters to Legal
                Community, New York State Trial Lawyers Institute
              </p>
               <p className="flex items-center my-2 gap-4">
              
                  <span className="min-w-2 min-h-2 rounded-full -mt-6 bg-[var(--primary)]"></span>
                
                Lecturer, Medical Malpractice and Tort Matters to Legal
                Community, New York State Trial Lawyers Institute
              </p>
            
             
              
             
            </div>

           <p className="text-[18px] text-[var(--text)] font-[600px]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
