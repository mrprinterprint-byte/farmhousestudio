"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b shadow-sm py-4 sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-10">
        {/* Left: Logo */}
        <div className="text-2xl font-bold uppercase">FarmhouseStudio</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
          {["Home", "Studio Booking", "Pet Booking", "Services", "Gallery"].map(
            (item) => (
              <li
                key={item}
                className="relative cursor-pointer hover:text-black
                           after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 
                           after:bg-black after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Right: Icons + Mobile Menu Button */}
        <div className="flex gap-4 items-center">
          <Search className="w-5 h-5 cursor-pointer hidden md:block" />
          <User className="w-5 h-5 cursor-pointer hidden md:block" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hidden md:block" />

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-50 border-t px-6 py-4 space-y-4"
          >
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              {["Home", "Studio Booking", "Pet Booking", "Services", "Gallery"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-black"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
            <div className="flex gap-6 pt-4 border-t">
              <Search className="w-5 h-5 cursor-pointer" />
              <User className="w-5 h-5 cursor-pointer" />
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
