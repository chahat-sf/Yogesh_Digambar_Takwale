"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const inputClass =
  "text-[16px] bg-[#f2f2f2] px-[30px] py-[15px] rounded-[30px] outline-none w-full";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftXRaw = useTransform(scrollYProgress, [0, 1], ["20%", "-80%"]);
  const rightXRaw = useTransform(scrollYProgress, [0, 1], ["-20%", "80%"]);

  // Smooth spring applied
  const leftX = useSpring(leftXRaw, { stiffness: 50, damping: 20 });
  const rightX = useSpring(rightXRaw, { stiffness: 50, damping: 20 });

  // 🔹 EmailJS form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  });
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
setSubmitError("");
    setSuccess("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          inquiry: formData.inquiry,
        },
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(() => {
        setLoading(false);
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", inquiry: "" });
      })
      .catch((err) => {
        setLoading(false);
        console.error("EmailJS Error:", err);
        setSubmitError("Failed to send message. Try again.");
      });
  };

  return (
    <section
      ref={ref}
      className="rounded-2xl py-16 sm:py-20 max-w-6xl -mt-4 mx-auto sm:my-10 z-10 relative"
      style={{
        backgroundImage: "url('/img/contact bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div
        className="relative flex flex-col gap-10 sm:gap-16 py-8 pt-10 sm:py-24 max-w-5xl mx-2 md:mx-auto bg-white rounded-3xl overflow-hidden"
        style={{ fontFamily: "var(--font-switzer)" }}
      >
        <h2
          className="text-center text-[20px] sm:text-[36px] text-black font-bold leading-[1] px-1 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-involve)" }}
        >
          Get specialist advice for residential, commercial or property
        </h2>

        <form
          onSubmit={handleSubmit}
          className="relative grid grid-cols-2 items-center sm:grid-cols-2 px-2 gap-4 sm:gap-8 mx-auto w-fit z-40"
          style={{ fontFamily: "var(--font-switzer)" }}
        >
          <div className=" flex flex-col relative">
 <input
            type="text"
            name="name"
            placeholder="Your Name*"
            className={inputClass}
            value={formData.name}
            onChange={handleChange}
            />
          {errors.name && (
            <span className="text-red-500 text-sm pl-6 absolute -bottom-6 ">{errors.name}</span>
          )}
          </div>
         
          <div className=" flex flex-col relative">

          <input
            type="email"
            name="email"
            placeholder="Email*"
            className={inputClass}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500 text-sm pl-6 absolute -bottom-6">{errors.email}</span>
          )}
</div>
          <div className=" flex flex-col relative">

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            className={inputClass}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm pl-6 absolute -bottom-6">{errors.phone}</span>
          )}
</div>
          <div className=" flex flex-col">

          <input
            type="text"
            name="inquiry"
            placeholder="Your inquiry about..."
            className={inputClass}
            value={formData.inquiry}
            onChange={handleChange}
          />
</div>
          <p className="text-sm sm:text-[18px] w-50 sm:w-80 px-2 text-[#4b4b4b] ">
            We are excited to connect with you! Required fields are marked
          </p>

          <button
            type="submit"
            disabled={loading}
            className="relative bg-[var(--primary)] hover:bg-black hover:text-white w-fit rounded-full mx-auto sm:mx-0 sm:ml-auto flex px-2 gap-3 items-center justify-center group duration-300 font-bold capitalize pl-6 py-2"
            style={{ fontFamily: "var(--font-involve)" }}
          >
            {loading ? "Sending..." : "get a call back"}
            <span className="relative flex justify-center w-10 h-10 items-center bg-white rounded-full overflow-hidden">
              <ArrowUpRight className="absolute transform transition-transform duration-600 group-hover:translate-x-8 group-hover:-translate-y-8" />
              <ArrowUpRight className="absolute transform text-black translate-x-[-24px] translate-y-[24px] transition-transform duration-600 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--primary)]" />
            </span>
          </button>

          {success && (
            <span className="text-green-600 text-center col-span-2">{success}</span>
          )}
           {submitError && (
            <span className="text-red-600 text-center col-span-2">{submitError}</span>
          )}
        </form>

        {/* Left building */}
        <motion.div
          style={{ x: leftX }}
          className="absolute bottom-0 sm:bottom-0 -left-1/2 sm:left-0 sm:scale-[2] z-1 duration-300"
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
          className="absolute bottom-0 sm:bottom-0 -right-1/2 sm:right-0 sm:scale-[2] z-1 duration-300"
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
