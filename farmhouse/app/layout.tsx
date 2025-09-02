import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
export const metadata: Metadata = {
  title: "Farmhouse Studio",
  description: "Photo studio booking & gallery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <TopBar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
