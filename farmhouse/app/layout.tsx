import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmhouse Studio",
  description: "Creative photography studio",
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
