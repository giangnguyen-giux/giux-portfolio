import React from "react";
import Image from "next/image";
import ButtonCTA from "./button-cta";

function Hero() {
  return (
    <div className="relative w-full h-auto py-14 md:py-16 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col items-start justify-start gap-8 sm:gap-12">
        {/* Content Block (Text + CTA) */}
        <div className="w-full flex flex-col items-start text-left">
          <h1 className="font-heading font-medium text-2xl sm:text-4xl lg:text-6xl max-w-none lg:max-w-3xl text-foreground">
            Professional Web Design <br />
            for <span className="text-brand-primary">SMEs</span> and{" "}
            <span className="text-brand-primary">F&B</span>
          </h1>
        </div>

        {/* Tag Group */}
        <div className="flex flex-col items-start w-full gap-4 sm:gap-6">
          <span className="px-2 py-1 bg-brand-primary/20 rounded-lg text-base text-foreground font-body">
            Under-2s Load Times
          </span>
          <span className="px-2 py-1 bg-brand-primary/20 rounded-lg text-base text-foreground font-body">
            High Conversion
          </span>
          <span className="px-2 py-1 bg-brand-primary/20 rounded-lg text-base text-foreground font-body">
            Clean Code
          </span>
        </div>

        {/* CTA Button */}
        <div className="w-full sm:w-auto">
          <ButtonCTA className="px-8 sm:px-12 py-3 text-base sm:text-lg font-body">
            Get Your Site
          </ButtonCTA>
        </div>

        {/* Image Block Laptop */}
      <div className="relative w-full py-2 flex items-start justify-start sm:justify-end">
        <div className="relative sm:absolute w-full sm:w-3/4 sm:-translate-y-2/3 z-0 aspect-326/172">
          <Image
            src="/mockup-desktop.png"
            alt="GiUX Premium Web Interface Showcase"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

        
      </div>
      
      
    </div>
  );
}

export default Hero;
