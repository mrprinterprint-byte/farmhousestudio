import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="font-sans">
      <TopBar />
      <Navbar />
      <HeroSection src="/second.jpg" alt="Hero Image" />
      <HeroSection src="/First.jpg" alt="Second Hero Image" />
    </div>
  );
}
