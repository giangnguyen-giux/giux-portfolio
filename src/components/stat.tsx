import React from "react";
import ButtonCTA from "./button-cta";
import ButtonBorder from "./button-border";

function Stat() {
    return (
  <section className="container-section bg-slate-800 overflow-hidden">
    <div className="container-page flex flex-col gap-4 md:gap-6 items-center text-center">
      <h2 className="font-heading font-medium text-2xl md:text-3xl xl:text-5xl text-foreground">
        <span className="text-brand-primary">30%</span> More Conversions <br />
        <span className="text-brand-primary">Under-2-Second</span> Load Times
      </h2>

      <p className="max-w-md sm:max-w-auto font-body text-base text-slate-400">
        GiUX crafts tailor-made websites with optimized code to <br className="hidden sm:block" />
        turn your visitors into paying customers.
      </p>
      <div className="flex w-full gap-4 md:gap-6 justify-center">
        <ButtonBorder className="w-fit px-4 py-3">
            View Our Work
        </ButtonBorder>
        <ButtonCTA className="w-fit px-4 py-3">
          Get Your Web
        </ButtonCTA>
      </div>
    </div>
  </section>
    )
}

export default Stat;
