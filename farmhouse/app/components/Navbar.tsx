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

  // Handle scroll behavior
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
      animate={{ y: showNav ? 0 : -120 }} // navbar moves out when scrolling
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="border-b shadow-sm py-6 sticky top-0 bg-white z-50" // ✅ more padding
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12">
        {/* ✅ Bigger Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Farmhouse Studio Logo"
            width={100}   // doubled
            height={100}  // doubled
            className="object-contain"
          />
        </Link>

        {/* ✅ Desktop Nav Larger */}
        <ul className="hidden md:flex gap-12 text-xl font-semibold text-gray-700 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path} className="relative group">
                <Link
                  href={link.path}
                  className={`hover:text-black relative ${
                    isActive ? "text-black font-bold" : ""
                  }`}
                >
                  {link.name}
                  {!isActive && (
                    <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
                {isActive && (
                  <div className="absolute left-0 right-0 -bottom-2 h-[3px] bg-black"></div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side icons */}
        <div className="flex gap-6 items-center">
  {/* IconButtons */}
  <IconButtons />

  {/* Mobile menu toggle */}
  <button
    className="md:hidden"
    onClick={() => setIsOpen((prev) => !prev)}
    aria-label={isOpen ? "Close menu" : "Open menu"} // ✅ ARIA label added
  >
    {isOpen ? <X size={32} /> : <Menu size={32} />}
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
            className="md:hidden bg-gray-50 border-t px-8 py-6 space-y-6"
          >
            <ul className="flex flex-col gap-6 text-xl font-semibold text-gray-700">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path} className="relative group">
                    <Link
                      href={link.path}
                      className={`block relative ${
                        isActive ? "text-black font-bold" : "hover:text-black"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      {!isActive && (
                        <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </Link>
                    {isActive && (
                      <div className="absolute left-0 right-0 -bottom-2 h-[3px] bg-black"></div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-8 pt-6 border-t">
              <IconButtons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
