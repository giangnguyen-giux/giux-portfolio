import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stat from "@/components/stat";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <Stat />
        <Features />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
