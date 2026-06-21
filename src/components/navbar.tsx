import React from "react";
import Image from "next/image";
import ButtonCTA from "./button-cta";

function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 pb-4 sm:py-6 h-20 sm:h-24 flex items-center justify-between">
        {/* Left Corner: Logo */}
        <div className="relative h-4 sm:h-7 aspect-66/17">
          <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
        </div>

        {/* Center: Logo */}
        <div className="relative h-9 sm:h-14 aspect-82/36">
          <Image
            src="/logo-center.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Corner: CTA Button */}
        <div className="flex items-center">
          <ButtonCTA className="px-2 py-1 sm:px-12 sm:py-3">
            Contact Us
          </ButtonCTA>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
