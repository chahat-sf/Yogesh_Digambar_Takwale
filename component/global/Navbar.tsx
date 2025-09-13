"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; 
import PopupForm from "./popupform";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const pathname = usePathname();

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

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav className="max-w-6xl mx-2 rounded-2xl md:rounded-full shadow-sm my-6 lg:mx-auto px-6 py-4 bg-white text-black sticky top-6 z-50">
        <div className="flex items-center justify-between md:justify-between">
          {/* left: Menu Toggle (mobile) */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Center: Logo + Links */}
          <div className="text-center font-bold leading-[1.2] flex z-10 items-center gap-4">
            <h2 className="px-6">
              Yogesh Digambar <br /> Takwale
            </h2>
            <div className="hidden md:flex items-center gap-6 font-normal text-[16px] capitalize">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-[var(--black)] font-medium"
                      : "text-black hover:text-[var(--primary)]"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--primary)] rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* right: Contact Icon (mobile only) */}
          <div className="md:hidden z-50">
            <a href="tel:+919876512345" className="flex items-center gap-1">
              <Phone className="w-6 h-6" />
            </a>
          </div>

          {/* Right: Desktop Contact + Button */}
          <div className="hidden md:flex gap-6 items-center font-medium text-[16px] capitalize">
            <p>Call US: +(91) 9096-822-384</p>
            <button className="btn" onClick={() => setIsFormOpen(true)}>
              Get In Touch
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-8 w-full left-0 flex flex-col items-center gap-4 md:hidden font-medium text-[16px] capitalize bg-white p-10 py-20 rounded-4xl z-0">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 ${
                  pathname === link.href
                    ? "text-[var(--primary)] font-medium"
                    : "text-black hover:text-[var(--primary)]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--primary)] rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* 🔹 Popup Form with props */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
