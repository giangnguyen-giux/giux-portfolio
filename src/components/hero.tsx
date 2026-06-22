import React from "react";
import Image from "next/image";
import ButtonCTA from "./button-cta";

const tags = ["Under-2s Load Times", "High Conversion", "Clean Code"];

function Hero() {
  return (
    <section className="relative py-14 md:py-16 xl:py-32 overflow-hidden">
      <div className="container-page flex flex-col gap-8 md:gap-12">
        {/* Content Block (Text + CTA) */}
        <h1 className="font-heading font-medium text-2xl md:text-4xl xl:text-6xl xl:max-w-3xl text-foreground">
          Professional Web Design <br />
          for <span className="text-brand-primary">SMEs</span> and{" "}
          <span className="text-brand-primary">F&B</span>
        </h1>

        {/* Tag Group */}
        <div className="flex flex-col gap-4 md:gap-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-brand-primary/20 rounded-lg text-base text-foreground font-body w-fit"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <ButtonCTA className="px-8 md:px-12 py-3 text-base md:text-lg w-fit">
          Get Your Site
        </ButtonCTA>

        {/* Image Block Laptop */}
        <div className="relative w-full pt-2">
          <div className="relative md:absolute w-full md:w-3/4 md:-translate-y-2/3 z-0 aspect-326/172">
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
    </section>
  );
}

export default Hero;
