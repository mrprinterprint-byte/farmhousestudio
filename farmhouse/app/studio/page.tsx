"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const studios = [
  {
    name: "Studio A",
    desc: "Bright natural light, great for portraits.",
    img: "/studio-a.jpg", // replace with your image
    calendly: "https://tidycal.com/mrprinterprint/60-minute-meeting",
  },
  {
    name: "Studio B",
    desc: "Rustic vibes, perfect for farmhouse themes.",
    img: "/studio-b.jpg",
    calendly: "https://tidycal.com/mrprinterprint/60-minute-meeting",
  },
  {
    name: "Studio C",
    desc: "Modern setup with premium backdrops.",
    img: "/studio-c.jpg",
    calendly: "https://tidycal.com/mrprinterprint/60-minute-meeting",
  },
];

export default function StudioBookingPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Book Your Studio Session
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {studios.map((studio, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Studio Image */}
            <img
              src={studio.img}
              alt={studio.name}
              className="w-full h-72 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <Link
                href={studio.calendly}
                target="_blank"
                className="bg-white text-black px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
              >
                Book Now
              </Link>
            </div>

            {/* Details */}
            <div className="p-4 bg-white">
              <h2 className="text-xl font-bold">{studio.name}</h2>
              <p className="text-gray-600">{studio.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
