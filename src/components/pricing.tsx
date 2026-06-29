"use client";

import React, { useState } from "react";
import ButtonCTA from "./button-cta";
import Image from "next/image";
import {
  Zap,
  Globe,
  Cpu,
  WandSparkles,
  Diamond,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

type PricingPlan = {
  id: number;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  previewImage?: string;
  price?: string;
  deliveryTime?: string;
  features?: string[];
  isPopular?: boolean;
  buttonText?: string;
};

type PlanSelectorProps = {
  plans: PricingPlan[];
  selectedTitle: string;
  onSelect: (title: string) => void;
};

const pricingData: PricingPlan[] = [
  {
    id: 1,
    title: "Landing Page",
    subtitle: "Instant Ad-to-Order Conversion",
    icon: Zap,
    previewImage: "/Landing-page.webp",
    price: "5.000.000 VND",
    deliveryTime: "Delivery time: 3 - 5 days",
    features: [
      "Run paid ads (Facebook, Google, TikTok Ads).",
      "Focus on selling a single, specific product or service.",
      "Drive fast customer decisions (Form fills, Calls, Orders).",
    ],
    buttonText: "Get Your Website",
  },
  {
    id: 2,
    title: "Brand & SEO",
    subtitle: "Build Trust & Attract Customers",
    icon: Globe,
    previewImage: "/project.webp",
    price: "10.000.000 VND",
    deliveryTime: "Delivery time: 7 - 10 days",
    features: [
      "SME companies, service businesses (Logistics, Training, Healthcare...).",
      "Build trustworthy, professional brand image.",
      "Attract organic, free traffic from Google (SEO).",
    ],
    buttonText: "Get Your Website",
  },
  {
    id: 3,
    title: "Web-App",
    subtitle: "Digitize & Automate Operations",
    icon: Cpu,
    previewImage: "/Web-app.webp",
    price: "15.000.000 VND",
    deliveryTime: "Delivery time: 10 - 14 days",
    features: [
      "F&B chains need QR digital menus for table ordering.",
      "Need appointment booking, member login, online payment.",
      "Automate operations to cut staffing costs.",
    ],
    buttonText: "Get Your Website",
  },
  {
    id: 4,
    title: "Redesign",
    subtitle: "Revamp UI & Boost Page Speed",
    icon: WandSparkles,
    previewImage: "/Dashboard.webp",
    price: "7.000.000 VND",
    deliveryTime: "Delivery time: Custom (based on system audit)",
    features: [
      "Existing website outdated, broken on mobile.",
      "Page loads too slow, sales drop, not ranking on Google.",
      "Old codebase hard to maintain and upgrade.",
    ],
    buttonText: "Get Your Website",
  },
];

function PricingCard({
  title,
  previewImage,
  icon: Icon,
  price,
  deliveryTime,
  features,
  buttonText,
}: PricingPlan) {
  return (
    <div className="flex flex-col bg-background rounded-3xl p-6 gap-4">
      <div className=" flex flex-col gap-2">
        {/* Image Preview */}
        <div className=" relative w-full aspect-16/7 overflow-hidden rounded-2xl ">
          <Image
            src={previewImage || "/project.png"}
            alt={title}
            fill
            className=" object-cover object-top"
          />
        </div>

        {/* Icon + Title */}
        <div className="flex items-center mt-2 gap-2">
          <Icon className="w-5 h-5 text-brand-primary shrink-0" />
          <h3 className="font-heading text-2xl text-brand-primary">{title}</h3>
        </div>

        {/* Price */}
        <div className="flex gap-2 items-end">
          <div className="font-body text-slate-400">From:</div>
          <div className="font-heading font-medium text-2xl text-foreground ">
            {price}
          </div>
        </div>
      </div>

      {/* Button + Delivery time */}
      <div className="flex flex-col gap-2 items-center">
        <ButtonCTA className="w-full py-3 font-body">{buttonText}</ButtonCTA>
        <p className="text-slate-400">{deliveryTime}</p>
      </div>

      {/* Features List */}
      <div className="flex flex-col gap-4 pt-4 border-t border-slate-400">
        <div className="font-heading font-medium text-lg text-foreground">
          IDEAL IF YOU NEED TO:
        </div>

        {features?.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Diamond className="w-3 h-3 text-slate-400 shrink-0 mt-1.5" />
            <p className="font-body text-slate-400">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanSelector({ plans, selectedTitle, onSelect }: PlanSelectorProps) {
  return (
    <div className="flex flex-col gap-4">
      {plans.map((plan) => {
        const isActive = plan.title === selectedTitle;
        const Icon = plan.icon;
        return (
          <button
            key={plan.id}
            onClick={() => onSelect(plan.title)}
            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 text-left w-full cursor-pointer
              ${
                isActive
                  ? "border-brand-primary bg-brand-primary/10"
                  : "hover:bg-slate-600 bg-background border-0"
              }`}
          >
            <Icon
              className={`w-6 h-6 flex shrink-0 ${isActive ? "text-brand-primary" : "text-foreground"}`}
            />
            <div>
              <div
                className={`font-heading font-medium ${isActive ? "text-brand-primary" : "text-foreground"}`}
              >
                {plan.title}
              </div>

              {plan.subtitle && (
                <div className=" text-slate-400">{plan.subtitle}</div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function Pricing() {
  const [selectedTitle, setSelectedTitle] = useState<string>("Landing Page");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const titles = pricingData.map((plan) => plan.title);
  const currentPlan = pricingData.find((plan) => plan.title === selectedTitle);

  return (
    <section className="padding-section bg-linear-to-b md:bg-linear-to-r from-slate-900 via-slate-800 to-slate-400">
      <div className="container-page flex flex-col gap-4 md:gap-16">
        {/* Headline (Mobile) */}
        <div className="text-center md:hidden">
          <h2 className="font-heading font-medium text-3xl md:text-5xl text-foreground">
            Find Your <span className="text-brand-primary">Right Plan</span>
          </h2>
        </div>

        {/* Mobile Dropdown */}
        <div className="block md:hidden mt-4 relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-background rounded-2xl px-4 py-3 flex justify-between items-center text-foreground font-body"
          >
            <span className="text-brand-primary">{selectedTitle}</span>
            <span
              className={`transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            >
              <ChevronDown className="w-5 h-5 text-brand-primary" />
            </span>
          </button>

          {isDropdownOpen && (
            <div className=" absolute left-0 right-0 mt-2 bg-background border border-slate-600 rounded-xl overflow-hidden z-10">
              {titles.map((title) => (
                <button
                  key={title}
                  onClick={() => {
                    setSelectedTitle(title);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 font-body transition-colors ${
                    title === selectedTitle
                      ? "text-brand-primary"
                      : "text-foreground"
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop: grid 2 col (selector + card), Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left: Plan Card List */}
          <div className="flex flex-col md:col-span-1 md:gap-6">
            <h2 className="font-heading font-medium md:text-3xl lg:text-5xl text-foreground">
              Find Your <span className="text-brand-primary">Right Plan</span>
            </h2>
            <PlanSelector
              plans={pricingData}
              selectedTitle={selectedTitle}
              onSelect={(title) => setSelectedTitle(title)}
            />
          </div>

          {/* Right: Pricing Card */}
          <div className="md:col-span-1">
            {currentPlan && (
              <PricingCard key={currentPlan.id} {...currentPlan} />
            )}
          </div>
        </div>

        {/* Mobile: only 1 card */}
        <div className=" block md:hidden">
          {currentPlan && <PricingCard key={currentPlan.id} {...currentPlan} />}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

