"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export const metadata = {
  title: "Gallery of our farmhouse studio",
  description: "Animal, and jawdropping photos taken at our farmhouse studio. ",
}

// imagest that crossponds to gallery 
const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery8.png",
  "/gallery7.png",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        📸 Farmhouse Studio Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // click anywhere to close
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex justify-center"
            >
              <Image
                src={selectedImage}
                alt="Fullscreen"
                width={1200}
                height={800}
                className="rounded-lg object-contain"
              />
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
