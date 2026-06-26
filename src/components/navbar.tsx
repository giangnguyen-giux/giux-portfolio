import React from "react";
import Image from "next/image";
import ButtonCTA from "./button-cta";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="container-page pt-[env(safe-area-insert-top,20px)] pb-5 md:py-6 flex items-center justify-between">
        {/* Left Corner: Logo */}
        <div className="relative h-4 md:h-7 aspect-66/17">
          <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
        </div>

        {/* Right Corner: CTA Button */}
        <ButtonCTA className="px-2 md:px-12 py-1 md:py-3 text-sm md:text-base">
          Contact Us
        </ButtonCTA>
      </div>
    </nav>
  );
}
export default Navbar;
