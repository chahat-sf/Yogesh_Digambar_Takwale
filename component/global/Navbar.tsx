"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react"; // icons from lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-2 border border-gray-400 rounded-sm md:rounded-full shadow-sm my-6 lg:mx-auto px-6 py-4 bg-white text-black sticky top-6 z-50">
      <div className="flex items-center justify-between md:justify-between">
       
         {/* left: Menu Toggle (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="text-center font-bold leading-[1.2] flex  items-center gap-4">
          <h2 className="px-6">
            Yogesh Digambar <br /> Takwale
          </h2>
           <div className=" hidden md:flex items-center  gap-4  font-medium text-[16px] capitalize ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Contact Us</Link>
        </div>
        </div>

       
  {/* right: Contact Icon (mobile only) */}
        <div className="md:hidden">
          <a href="tel:+919876512345" className="flex items-center gap-1">
            <Phone className="w-6 h-6" />
          </a>
        </div>
        {/* Right: Desktop Contact + Button */}
        <div className="hidden md:flex gap-6 items-center font-medium text-[16px] capitalize">
          <p>Call US: +(91) 9876512345</p>
          <button className="btn">Get In Touch</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 w-full left-0 flex flex-col items-center  gap-4 md:hidden font-medium text-[16px] capitalize bg-white p-10 rounded-sm">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
