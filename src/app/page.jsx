// import Navbar from "@/components/Navbar";
import HeroSection from "../components/Landing/HeroSection";
import FeaturesSection from "../components/Landing/FeaturesSection";
import DemoVideoSection from "../components/Landing/DemoVideoSection";
import CTASection from "../components/Landing/CTASection";
import Footer from "../components/Landing/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturesSection />
      <DemoVideoSection />
      <CTASection />
      <Footer />
    </main>
  );
}
