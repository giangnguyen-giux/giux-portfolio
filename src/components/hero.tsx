import React from "react";
import Image from "next/image";
import ButtonCTA from "./button-cta";

const tags = ["Under-2s Load Times", "High Conversion", "Clean Code"];

function Hero() {
  return (
    <section className="padding-section">
      <div className="container-page flex flex-col gap-8 md:gap-12">
        {/* Content Block (Text + CTA) */}
        <h1 className="font-heading font-medium text-2xl md:text-4xl xl:text-6xl text-foreground">
          Professional Web Design <br />
          for <span className="text-brand-primary">SMEs</span> and{" "}
          <span className="text-brand-primary">F&B</span>
        </h1>

        {/* Tag Group */}
        <div className="flex flex-col gap-4 xl:gap-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-brand-primary/20 rounded-full text-base text-foreground font-body w-fit"
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
          <div className="relative md:absolute w-full md:w-auto md:h-[70%] lg:h-[80%] md:right-0 z-0 aspect-video">
            <Image
              src="/mockup-desktop.webp"
              alt="GiUX Premium Web Interface Showcase"
              fill
              priority
              className="object-contain"
            />
          </div>
      </div>
    </section>
  );
}

export default Hero;
