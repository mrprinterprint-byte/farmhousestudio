import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata = {
  title: "Farmhouse Studio - Photography & Creative Space",
  description: "Book your photography or video session at Farmhouse Studio. Natural light, rustic charm, and modern equipment.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Farmhouse Studio",
    description: "Photography sessions in a rustic farmhouse setting.",
    url: "https://farmhousestudios.com",
    siteName: "Farmhouse Studio",
    images: [
      { url: "/first.JPG", width: 1200, height: 630, alt: "Farmhouse Studio Preview" },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content - grows to fill space */}
        <main className="flex-grow">{children}</main>

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
