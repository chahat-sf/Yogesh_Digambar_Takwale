"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white  pt-12 pb-6 rounded-4xl max-w-6xl mx-2 sm:mx-auto ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 rounded-4xl border border-gray-200 py-12">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2">
            {/* <Image src="/img/logo.png" alt="Spaciaz Logo" width={40} height={40} /> */}
            <span className="text-2xl font-bold">Yogesh Digambar <br/>
Takwale</span>
          </div>
          <p className="mt-4 text-gray-500 max-w-xs">
            We are creators of transformative spaces that inspire, innovate, and endure.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li><Link href="#" className="hover:text-[var(--primary)]">About Us</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">Why Choose Us</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">Our Team</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">Solutions</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">Partners</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">Core Values</Link></li>
          </ul>
          <ul className="space-y-3">
            <li><Link href="#" className="hover:text-[var(--primary)]">Our Projects</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">News & Updates</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">Support Center</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <p className="font-bold text-lg">
            <span className="border-b-2 border-[var(--primary)] pb-1">+(084) 123 - 45688</span>
          </p>
          <p className="font-bold text-lg">
            <span className="border-b-2 border-[var(--primary)] pb-1">spaciaz@example.com</span>
          </p>

          {/* Social Links */}
          <div className="flex gap-4 text-sm text-gray-500 pt-20">
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Youtube</Link>
            <Link href="#">Twitter</Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="  border-gray-200 pt-6 text-center text-gray-500 text-sm">
        © 2025 <span className="font-bold">Yogesh Digambar
Takwale.</span> All Rights Reserved.
      </div>
    </footer>
  );
}
