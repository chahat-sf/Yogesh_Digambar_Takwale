"use client";

import Image from "next/image";

interface CardItem {
  img: string;
  title: string;
  desc: string;
}

const cards: CardItem[] = [
  {
    img: "/img/contractor.png",
    title: "Core Construction",
    desc: "Road Construction & Maintenance Building Construction (Residential / Commercial / Institutional)",
  },
  {
    img: "/img/engineer.png",
    title: "Rehabilitation & Safety",
    desc: "Repair & Structural Strengthening of Old Structures Specialized Retrofitting for Enhanced Safety/Lifecycle",
  },
  {
    img: "/img/volunteer.png",
    title: "Materials & Delivery",
    desc: "High-quality Building Materials (structural)Road Components & Supplies Tender Bidding, Project Management & Execution",
  },
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className="text-left flex flex-col gap-6 bg-gradient-to-t from-white/20 to-black/80 backdrop-blur-[5px] px-8 py-10 border border-gray-600 rounded-[20px]  transition group"
        >
          <Image
            src={card.img}
            alt={card.title}
            width={50}
            height={50}
            className="pb-0"
          />

          {/* Full width white line + sliding colored line */}
          <div className="relative flex w-full hover:gap-10 h-[1px] mx-auto overflow-hidden group">
            {/* Yellow line (slide in from right) */}
            <div className="h-full bg-[var(--primary)] w-0 transition-all duration-500 group-hover:w-full"></div>

            {/* White line (default full, slide out to left) */}
            <div className="h-full bg-white flex-1 transition-all duration-500 group-hover:w-0"></div>
          </div>

          <h5
            className="text-[26px] font-semibold leading-[1] "
            style={{ fontFamily: "var(--font-involve)" }}
          >
            {card.title}
          </h5>
          <p
            className="text-[17px] text-[var(--text_light)] font-[500] leading-[1.3]"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
