"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

export default function PopupForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
             "service_f8etb1n", // replace with your EmailJS service ID
        "template_vwplfbp", // replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "ngHOdaoWVgYAAkiAB" // replace with your EmailJS public key
      )
      .then(() => {
        setLoading(false);
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => onClose(), 2000);
      })
      .catch((err) => {
        setLoading(false);
        setSubmitError("Failed to send message. Try again!");
        console.error("EmailJS Error:", err);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black cursor-pointer rounded-full border hover:scale-[1.1]"
        >
          <X className="w-4 h-4" />
        </button>
        <h4 className="text-lg font-semibold mb-1">Connect With Experts Who Transform Spaces</h4>
        <p className="text-sm font-semibold mb-4">
          Your vision, our expertise – let&apos;s build excellence together
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              disabled={loading}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              disabled={loading}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              disabled={loading}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              disabled={loading}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button type="submit" className="btn w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {success && <p className="text-center text-green-600 text-sm">{success}</p>}
          {submitError && <p className="text-center text-red-600 text-sm">{submitError}</p>}
        </form>
      </div>
    </div>
  );
}
