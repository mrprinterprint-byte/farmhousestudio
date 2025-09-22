import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="font-sans">
    
      <HeroSection src="/second.JPG" alt="Hero Image" />
      <HeroSection src="/first.JPG" alt="Second Hero Image" />
    </div>
  );
}
