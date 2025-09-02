"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Studio Booking", path: "/studio" },
  { name: "Pet Booking", path: "/pet" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="border-b shadow-sm py-4 sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-10">
        {/* Logo */}
        <div className="text-2xl font-bold uppercase">FarmhouseStudio</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path} className="relative group">
                <Link
                  href={link.path}
                  className={`hover:text-black relative ${
                    isActive ? "text-black font-semibold" : ""
                  }`}
                >
                  {link.name}

                  {/* Only show hover underline if NOT active */}
                  {!isActive && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>

                {/* Active underline (always visible, no animation) */}
                {isActive && (
                  <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black"></div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side: icons */}
        <div className="flex gap-4 items-center">
          <Search className="w-5 h-5 cursor-pointer hidden md:block" />
          <User className="w-5 h-5 cursor-pointer hidden md:block" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hidden md:block" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
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
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <li key={link.path} className="relative group">
                    <Link
                      href={link.path}
                      className={`block relative ${
                        isActive ? "text-black font-semibold" : "hover:text-black"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}

                      {/* Hover underline only if not active */}
                      {!isActive && (
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </Link>

                    {/* Active underline */}
                    {isActive && (
                      <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black"></div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile icons */}
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
