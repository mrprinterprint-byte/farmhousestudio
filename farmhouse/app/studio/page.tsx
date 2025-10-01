"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StudioBookingPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Book Your Studio Session
      </h1>

      {/* Farm Session Package Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="rounded-2xl overflow-hidden shadow-xl bg-white"
      >
        {/* Header Image */}
        <img
          src="/first.JPG" // 🔹 replace with your farm image
          alt="Farm Experience"
          className="w-full h-72 object-cover"
        />

        {/* Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-orange-700 mb-3">
            Fall Package – Capture Timeless Memories on our 50 Acre Farm
          </h2>

          <p className="text-gray-600 text-center mb-6">
            Just 1 hour from Toronto – enjoy stunning photo spots, adorable
            animals, and rustic charm during your session.
          </p>

          {/* Detailed Breakdown */}
          <div className="space-y-3 text-gray-700 mb-6">
            <p>📸 <strong>1 Hour Session</strong></p>
            <p>🌾 40 minutes exploring beautiful photo spots</p>
            <p>🐐 20 minutes with goats, ducks, and chickens for natural shots</p>
            <p>🥚 Includes <strong>1 dozen organic eggs</strong> ($10 value)</p>
            <p>💌 Includes <strong>10 Fall Folded or Holiday Cards</strong> with envelopes ($30 value)</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌾</span>
              <span>Meadows & Fields</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐐</span>
              <span>The Goat House</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚜</span>
              <span>John Deere Tractor</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍎</span>
              <span>Orchard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐓</span>
              <span>Chicken Corner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚪</span>
              <span>Rustic Wood Doors</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-6">
            <span className="text-xl font-semibold text-orange-700">
              Opening Special: $145{" "}
              <span className="line-through text-gray-400">$185</span>
            </span>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="https://tidycal.com/mrprinterprint/60-minute-meeting"
              target="_blank"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
