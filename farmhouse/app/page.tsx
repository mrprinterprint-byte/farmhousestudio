"use client";


import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
     {/* Hero Section */}
{/* Hero Section */}
<section className="relative h-[90vh] flex items-center justify-center bg-black">
  <Image
    src="/first.JPG"
    alt="Farmhouse Studio"
    fill
    className="object-cover opacity-70"
    priority
  />

  {/* Text + Buttons Overlay */}
  <div className="relative z-10 text-center text-white px-6 translate-y-16 md:translate-y-24">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-bold"
    >
      Welcome to Farmhouse Studios
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
    >
      A peaceful retreat where creativity meets nature.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-6 flex gap-4 justify-center flex-wrap"
    >
      <Link
        href="/studio"
        className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      >
        Book Now
      </Link>
      <Link
        href="/gallery"
        className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
      >
        View Gallery
      </Link>
    </motion.div>
  </div>
</section>


      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/second.JPG"
          alt="Farmhouse About"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            Nestled in nature, Farmhouse Studio is the perfect space for
            photography, film, workshops, and creative projects. Our rustic yet
            modern environment provides the perfect atmosphere for inspiration.
          </p>
          <Link
            href="/about"
            className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Photography", desc: "Professional studio setups for portraits & branding." },
              { title: "Videography", desc: "Perfect lighting & space for video production." },
              { title: "Event Space", desc: "Book our farmhouse for private events & workshops." },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-block mt-8 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Image
              key={num}
              src={`/gallery${num}.jpg`}
              alt={`Gallery ${num}`}
              width={400}
              height={300}
              className="rounded-xl object-cover hover:scale-105 transition-transform"
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex", quote: "An amazing place for creative shoots!" },
              { name: "Sophia", quote: "The farmhouse has such peaceful vibes." },
              { name: "Liam", quote: "Highly recommend for anyone in the industry." },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-md"
              >
                <p className="text-gray-600 mb-4">“{testimonial.quote}”</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-black text-white text-center">
        <div className="absolute inset-0">
          <Image
            src="/panaroma.jpg"
            alt="Booking Background"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Session?
          </h2>
          <Link
            href="/studio-booking"
            className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
