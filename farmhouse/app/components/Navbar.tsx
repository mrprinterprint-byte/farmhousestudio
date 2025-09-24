"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import IconButtons from "./IconButtons";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Studio Booking", path: "/studio" },
  { name: "Product", path: "/Product" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -120 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="border-b shadow-sm sticky top-0 bg-white z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
        {/* ✅ Responsive Logo  */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Farmhouse Studio Logo"
            width={200}
            height={200}
            className="object-contain w-26 sm:w-30 md:w-35 lg:w-50"
          />
        </Link>

        {/* ✅ Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-xl font-semibold text-gray-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path} className="relative group">
                <Link
                  href={link.path}
                  className={`hover:text-black ${
                    isActive ? "text-black font-bold" : ""
                  }`}
                >
                  {link.name}
                  {!isActive && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
                {isActive && (
                  <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black"></div>
                )}
              </li>
            );
          })}
        </ul>

        {/* ✅ Right side icons + Mobile toggle */}
        <div className="flex items-center gap-4">
          <IconButtons />
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-50 border-t px-6 py-6 space-y-6"
          >
            <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-700">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path} className="relative group">
                    <Link
                      href={link.path}
                      className={`block ${
                        isActive ? "text-black font-bold" : "hover:text-black"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-6 pt-6 border-t">
              <IconButtons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
