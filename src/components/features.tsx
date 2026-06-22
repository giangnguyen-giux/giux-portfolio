import React from "react";
import { Hourglass, TriangleAlert, EyeOff, LucideIcon } from "lucide-react";
import { features } from "process";

type Feature = {
  id: number;
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
};

const featuresData: Feature[] = [
  {
    id: 1,
    icon: Hourglass,
    title: "Poor Page Load Speed",
    problem:
      "80% of users leave if a site takes over 3 seconds to load, wasting your ad budget directly.",
    solution:
      "Powered by Next.js for sub-1-second load times, maximizing retention and Google Lighthouse scores.",
  },

  {
    id: 2,
    icon: TriangleAlert,
    title: "Mobile Display Issues",
    problem:
      "Tiny buttons, broken text, or a clumsy mobile checkout irritate users and drive them straight away.",
    solution:
      "100% custom-tailored on Figma based on user behavior, ensuring every tap, swipe, and click on mobile is flawlessly smooth.",
  },

  {
    id: 3,
    icon: EyeOff,
    title: '"Invisible" on Google',
    problem:
      "Without SEO, your site stays invisible, handing your market share over to competitors.",
    solution:
      "We optimize the code structure from day one, making your website Google-friendly for long-term, sustainable rankings.",
  },
];

function FeatureCard({icon: Icon, title, problem, solution}:Feature){
  return(
    <div>
       {/* Icon */}
      <Icon className="w-12 h-12 mb-4 text-brand-primary" strokeWidth={1} />

      {/* Title */}
      <h3 className="font-heading font-medium text-xl md:text-2xl text-foreground mb-3">
        {title}
      </h3>

      {/* Problem */}
      <p className="font-body text-slate-400 mb-4">{problem}</p>

      {/* Solution */}
      <div className="pt-4 border-t border-slate-400/20">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
          Our Solution
        </span>
        <p className="font-body text-sm text-slate-300">{solution}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="container-section">
      <div className="container-page flex flex-col gap-8 md:gap-16">
        {/* Headline */}
        <div>
          <h2
            className="
            font-heading
            font-medium
            text-2xl
            md:text-3xl
            xl:text-5xl
            text-foreground"
          >
            Why your website gets traffic <br />
            but <span className="text-brand-primary">NO CONVERSION?</span>
          </h2>
          <p className="font-body text-base text-slate-400">
            Discover the UI and speed flaws that are quietly driving{" "}
            <br className="hidden sm:block" />
            your customers to competitors.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} {...feature}/>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;
