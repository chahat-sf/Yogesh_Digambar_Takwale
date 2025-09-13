"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

interface Testimonial {
  name: string;
  position: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    position: "Project Manager",
    message:
      "Yogesh Digambar Takwale and team delivered our road project on time with exceptional quality!",
    avatar: "/img/avatar1.jpg",
  },
  {
    name: "Sneha Gupta",
    position: "Structural Engineer",
    message:
      "Their retrofitting solutions are top-notch and truly improved the safety of our buildings.",
    avatar: "/img/avatar2.jpg",
  },
  {
    name: "Amit Verma",
    position: "Contractor",
    message:
      "Highly professional, reliable, and their project management is flawless.",
    avatar: "/img/avatar3.jpg",
  },
  {
    name: "Priya Singh",
    position: "Client",
    message:
      "Amazing experience working with their team. Quality and timelines were perfect.",
    avatar: "/img/avatar4.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex">
  <div className="bg-[var(--primary)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-full">
    {/* Testimonial message */}
    <p className="text-gray-700 mb-6 flex-1 text-justify">
      {testimonial.message}
    </p>

    {/* Client info */}
    <div className="flex items-center gap-4 mt-auto">
      <Image
        src={testimonial.avatar}
        width={60}
        height={60}
        alt={testimonial.name}
        className="rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-[var(--black)]">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
}
