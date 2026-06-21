import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
