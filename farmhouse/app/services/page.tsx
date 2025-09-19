"use client";

import { motion } from "framer-motion";
import { Camera, Shirt, Users, Plane } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Studio Booking",
    description:
      "Book our farmhouse studio for your photoshoots — rustic charm, natural lighting, and a cozy creative vibe.",
    icon: Camera,
    color: "from-amber-400 to-amber-600",
  },
  {
    id: 2,
    title: "Custom Printing",
    description:
      "We print high-quality custom designs on T-shirts, hats, and more. Perfect for events, gifts, or your personal style.",
    icon: Shirt,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    id: 3,
    title: "Family Photoshoots",
    description:
      "Capture your family’s special moments with warm, candid, and timeless photography in our farmhouse setting.",
    icon: Users,
    color: "from-sky-400 to-sky-600",
  },
  {
    id: 4,
    title: "Family Tours",
    description:
      "Experience life on the farm! Join us for guided tours with animals, fresh air, and unforgettable family memories.",
    icon: Plane,
    color: "from-rose-400 to-rose-600",
  },
];

export default function Services() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-amber-50 text-gray-900">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-72 flex items-center justify-center bg-cover bg-center relative"
      >
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-black to-amber-500 drop-shadow-xl text-center">
          Our Services
        </h1>
      </motion.header>

      {/* Services Grid */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl shadow-lg hover:shadow-2xl bg-white p-8 relative overflow-hidden group"
            >
              {/* Gradient Background Accent */}
              <div
                className={`absolute inset-0 opacity-10 bg-gradient-to-br ${service.color}`}
              ></div>

              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white mb-6`}
              >
                <service.icon size={28} />
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-3 text-amber-900">
                {service.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
