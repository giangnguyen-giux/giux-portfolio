"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Brain, Palette, CodeXml } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Strategy & Planning",
    desc: "We analyze your competitors and target audience to build a custom Sitemap that directly solves your business goals.",
    icon: Brain,
  },
  {
    id: 2,
    title: "Custom UI/UX Design",
    desc: "We craft detailed Mobile & Desktop interfaces on Figma. Every button and font is optimized to boost user retention. You review and approve the design before coding begins.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Performance Development",
    desc: "We build high-performance websites directly with Next.js and Tailwind CSS. This guarantees pixel-perfect rendering, lightning-fast loading speeds, and built-in SEO foundations.",
    icon: CodeXml,
  },
];

const Process = () => {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(1);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  // Hàm cập nhật activeStep và thanh vàng dựa trên vị trí cuộn
  const updateActiveStep = useCallback(() => {
    const container = stepsContainerRef.current;
    if (!container) return;

    const steps = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (steps.length === 0) return;

    const containerTop = container.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    let currentStep = 1;
    for (let i = 0; i < steps.length; i++) {
      const rect = steps[i].getBoundingClientRect();
      const stepTop = rect.top;
      if (stepTop <= viewportHeight * 0.4) {
        currentStep = i + 1;
      }
    }
    setActiveStep(currentStep);

    // Cập nhật vị trí thanh vàng
    if (currentStep === 0) {
      setIndicatorStyle({ top: 0, height: 0 });
      return;
    }

    const stepEl = steps[currentStep - 1];
    if (stepEl) {
      const top = stepEl.offsetTop;
      let height = stepEl.offsetHeight;
      // Nếu là step cuối, kéo dài thanh vàng đến hết container
      if (currentStep === STEPS.length) {
        height = container.scrollHeight - top;
      }
      setIndicatorStyle({ top, height });
    }
  }, []);

  // Lắng nghe sự kiện scroll
  useEffect(() => {
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    updateActiveStep(); // kiểm tra ngay khi mount
    return () => window.removeEventListener("scroll", updateActiveStep);
  }, [updateActiveStep]);

  // Cập nhật khi resize
  useEffect(() => {
    window.addEventListener("resize", updateActiveStep);
    return () => window.removeEventListener("resize", updateActiveStep);
  }, [updateActiveStep]);

  // Đặt thanh vàng vào step 1 ngay khi component mount
  useEffect(() => {
    const stepEl = stepRefs.current[0]; // index 0 = step 1
    const container = stepsContainerRef.current;
    if (stepEl && container) {
      setIndicatorStyle({
        top: stepEl.offsetTop,
        height: stepEl.offsetHeight,
      });
    }
  }, []); // chỉ chạy 1 lần

  return (
    <section className="padding-section container-page">
      {/* Headline ngoài timeline */}
      <div className="mb-12 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-heading text-foreground font-bold tracking-tight select-none">
          Our 3-Step Process:
          <br />
          <div className="mt-2">From Research to Launch</div>
        </h2>
        <p className="mt-4 text-slate-400">
          From research to optimized code. We keep it transparent
          <br />
          to ensure the highest ROI for your business.
        </p>
      </div>

      {/* Container timeline + steps */}
      <div className="relative" ref={stepsContainerRef}>
        {/* Timeline nền (desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-card/50 z-0" />

        {/* Timeline active (thanh vàng) */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-brand-primary transition-all duration-500 ease-out z-0"
          style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
        />

        {/* Mobile timeline nền + active */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-brand-card/30 z-0" />
        <div
          className="md:hidden absolute left-4 w-0.5 bg-brand-primary transition-all duration-500 ease-out z-0"
          style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
        />

        {STEPS.map((step, index) => {
          const isActive = activeStep === step.id;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              data-step={step.id}
              className="relative py-10 md:py-16 last:pb-0"
            >
              {/* ========== MOBILE ========== */}
              <div className="md:hidden pl-12 flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors duration-500 ${
                      isActive
                        ? "border-brand-primary text-brand-primary bg-brand-primary/10"
                        : "border-brand-card text-foreground/30"
                    }`}
                  >
                    {step.id}
                  </div>
                  <h3
                    className={`text-lg font-bold transition-colors duration-500 ${
                      isActive ? "text-brand-primary" : "text-foreground/30"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* ========== DESKTOP ========== */}
              <div className="hidden md:grid grid-cols-12 gap-6 items-start">
                {/* Cột trái */}
                <div className="col-span-5 flex flex-col items-end pr-10">
                  {step.id % 2 !== 0 ? (
                    <>
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors duration-500 ${
                          isActive
                            ? "border-brand-primary text-brand-primary bg-brand-primary/10"
                            : "border-brand-card text-foreground/30"
                        }`}
                      >
                        {step.id}
                      </div>
                      <h3
                        className={`text-2xl font-bold text-right transition-colors duration-500 mt-2 ${
                          isActive ? "text-brand-primary" : "text-foreground/30"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-right mt-2 text-base leading-relaxed transition-colors duration-500 ${
                          isActive ? "text-foreground/80" : "text-foreground/40"
                        }`}
                      >
                        {step.desc}
                      </p>
                    </>
                  ) : (
                    <Icon
                      className={`w-14 h-14 transition-colors duration-500 ${
                        isActive ? "text-brand-primary" : "text-foreground/20"
                      }`}
                    />
                  )}
                </div>

                {/* Cột giữa */}
                <div className="col-span-2" />

                {/* Cột phải */}
                <div className="col-span-5 flex flex-col items-start pl-10">
                  {step.id % 2 !== 0 ? (
                    <Icon
                      className={`w-14 h-14 transition-colors duration-500 ${
                        isActive ? "text-brand-primary" : "text-foreground/20"
                      }`}
                    />
                  ) : (
                    <>
                      <div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors duration-500 ${
                          isActive
                            ? "border-brand-primary text-brand-primary bg-brand-primary/10"
                            : "border-brand-card text-foreground/30"
                        }`}
                      >
                        {step.id}
                      </div>
                      <h3
                        className={`text-2xl font-bold text-left transition-colors duration-500 mt-2 ${
                          isActive ? "text-brand-primary" : "text-foreground/30"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-left mt-2 text-base leading-relaxed transition-colors duration-500 ${
                          isActive ? "text-foreground/80" : "text-foreground/40"
                        }`}
                      >
                        {step.desc}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer kết luận */}
      <div className="mt-5 md:mt-8 pt-5 md:pt-8 relative">
        <div className="flex flex-col items-center text-center">
          <h3
            className={`text-xl md:text-3xl font-bold transition-colors duration-500 ${
              activeStep >= 3 ? "text-brand-primary" : "text-foreground/20"
            }`}
          >
            From Concept to Launch in Days
          </h3>
          <p className="mt-2 text-sm md:text-base text-foreground/50 max-w-lg">
            A streamlined process designed to deliver premium results without
            the usual agency headaches. Your perfect website is just a
            conversation away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
