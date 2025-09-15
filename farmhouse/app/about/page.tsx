"use client";

import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Our Farmhouse Story",
    image: "/farmhouse1.jpg",
    description:
      "Nestled in the heart of nature, our farmhouse studio blends rustic charm with modern aesthetics. Every corner tells a story.",
  },
  {
    id: 2,
    title: "Handcrafted Decor",
    image: "/farmhouse2.jpg",
    description:
      "From wall art to photo frames, each piece is carefully crafted to capture warmth and authenticity.",
  },
  {
    id: 3,
    title: "Studio Experience",
    image: "/farmhouse3.jpg",
    description:
      "Step inside our studio and feel the cozy atmosphere where creativity and comfort meet. Perfect for photoshoots and workshops.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-gray-900">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/farmhouse-hero.jpg')" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-black drop-shadow-lg text-center">
          About Our Farmhouse Studio
        </h1>
      </motion.header>

      <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-20">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col md:flex-row items-center md:gap-12"
          >
            <div className="md:w-1/2 overflow-hidden rounded-lg shadow-lg">
              <motion.img
                src={section.image}
                alt={section.title}
                className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-700 text-lg">{section.description}</p>
            </div>
          </motion.section>
        ))}

        {/* Optional Blog / Articles Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Latest Blogs</h2>
          <div className="space-y-8">
            <div className="border rounded-lg p-6 shadow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Creating Rustic Decor</h3>
              <p className="text-gray-700">
                Tips and stories on how we craft our signature rustic decor pieces for your home.
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Studio Photography Tips</h3>
              <p className="text-gray-700">
                How we capture the perfect shot inside our farmhouse studio, blending light, space, and emotion.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
