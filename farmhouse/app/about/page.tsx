"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animals = [
  {
    id: 1,
    name: "Bella the Cow",
    image: "/cow.jpg",
    description:
      "Bella is our gentle dairy cow, always ready to greet visitors with calm eyes and a friendly moo.",
  },
  {
    id: 2,
    name: "Charlie the Horse",
    image: "/horse.jpg",
    description:
      "Charlie loves open fields and enjoys giving children short rides during farm visits.",
  },
  {
    id: 3,
    name: "Daisy the Goat",
    image: "/goat.jpg",
    description:
      "Playful and curious, Daisy is the star of the farmhouse, always climbing and exploring.",
  },
  {
    id: 4,
    name: "Sunny the Chicken",
    image: "/chicken.jpg",
    description:
      "Sunny provides us with fresh eggs daily and loves to roam around the farmhouse yard.",
  },
];

export default function AboutPage() {
  const [selected, setSelected] = useState<null | typeof animals[0]>(null);

  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white text-gray-900">
      {/* Farmhouse Intro */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-[28rem] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/farmhouse-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white drop-shadow-xl text-center">
          Welcome to Our Farmhouse
        </h1>
      </motion.header>

      {/* Introduction */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-bold text-amber-900">
            Our Farmhouse Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Nestled among rolling fields and open skies, our farmhouse is more
            than just a place — it’s a way of life. Rooted in simplicity and
            warmth, it’s where rustic charm meets nature’s beauty. Here,
            tradition and care breathe life into everything we do.
          </p>
        </motion.section>

        {/* Meet Our Animals */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-900">
            Meet Our Animals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {animals.map((animal, index) => (
              <motion.div
                key={animal.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setSelected(animal)}
                className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white"
              >
                <motion.img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-amber-800 mb-2">
                    {animal.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {animal.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Modal for expanded animal view */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`animal-${selected.id}`}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-amber-900 mb-3">
                  {selected.name}
                </h3>
                <p className="text-gray-700 text-lg">{selected.description}</p>
                <button
                  className="mt-6 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
