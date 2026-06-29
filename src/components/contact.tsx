"use client";

import React, { useState } from "react";

// Dữ liệu các bước lựa chọn
const BUSINESS_MODELS = [
  "F&B (Cafe / Restaurant)",
  "Spa / Salon / Personal Services",
  "SME / Corporate Services",
  "Other (Please specify)",
];

const MAIN_GOALS = [
  "SEO Growth Site",
  "F&B Brand & QR Menu",
  "Speed & UI Redesign",
  "Campaign Landing Page",
];

const ESTIMATED_BUDGETS = [
  "Under $200: Basic Landing Page",
  "$200 - $400: Standard Web / QR Menu",
  "$400 - $800: Premium Custom Site",
  "Over $800: Enterprise / Large Scale Project",
];

// Component Radio tái sử dụng
const RadioOption = ({
  value,
  label,
  selected,
  onChange,
  children,
}: {
  value: string;
  label: string;
  selected: string | null;
  onChange: (val: string) => void;
  children?: React.ReactNode;
}) => {
  const isSelected = selected === value;
  return (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={`flex items-center gap-4 w-full text-left cursor-pointer group transition-colors duration-300 ${
        isSelected ? "text-brand-primary" : "text-foreground/60"
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 shrink-0 ${
          isSelected
            ? "border-brand-primary"
            : "border-white/30 group-hover:border-white/60"
        }`}
      >
        {isSelected && (
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
        )}
      </div>
      <span className="text-base font-medium flex-1">{label}</span>
      {children}
    </button>
  );
};

const Contact = () => {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Bước 1
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Bước 2
  const [businessModel, setBusinessModel] = useState<string | null>(null);
  const [otherBusiness, setOtherBusiness] = useState("");

  // Bước 3
  const [goal, setGoal] = useState<string | null>(null);

  // Bước 4
  const [budget, setBudget] = useState<string | null>(null);

  // Input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Chuyển bước với fade
  const changeStep = (newStep: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(newStep);
      setIsTransitioning(false);
    }, 200);
  };

  const handleNext = () => {
    if (step < 4) changeStep(step + 1);
    else handleSubmit();
  };

  const handlePrev = () => {
    if (step > 1) changeStep(step - 1);
  };

  const handleSubmit = () => {
    const finalData = {
      ...formData,
      businessModel:
        businessModel === "Other (Please specify)"
          ? otherBusiness
          : businessModel,
      goal,
      budget,
    };
    console.log("🚀 Full Contact Form Data:", finalData);
    // Gọi API gửi mail ở đây
  };

  return (
    <section className="padding-section container-page">
      <div className="max-w-2xl mx-auto w-full bg-brand-card rounded-4xl p-6 md:p-10 shadow-2xl relative min-h-137.5 flex flex-col">
        {/* ===================== BƯỚC 1 ===================== */}
        <div
          className={`flex flex-col flex-1 transition-all duration-300 ${
            step === 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 absolute inset-0 p-6 md:p-10 pointer-events-none"
          }`}
        >
          <h2 className="text-2xl md:text-3xl text-center text-foreground font-bold font-heading mb-8 md:mb-10">
            Send a Message
          </h2>
          <div className="flex flex-col flex-1 gap-5 md:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-white/15 focus:border-brand-primary outline-none py-2.5 text-foreground placeholder:text-foreground/50 transition-colors text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-white/15 focus:border-brand-primary outline-none py-2.5 text-foreground placeholder:text-foreground/50 transition-colors text-base"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-white/15 focus:border-brand-primary outline-none py-2.5 text-foreground placeholder:text-foreground/50 transition-colors text-base"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={1}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-white/15 focus:border-brand-primary outline-none py-2.5 text-foreground placeholder:text-foreground/50 transition-colors text-base resize-none"
            />
          </div>
          <div className="flex flex-row gap-4 mt-auto pt-4">
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-3 md:py-4 rounded-xl border border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary/10 transition-colors text-sm md:text-base"
            >
              Get Solution
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 py-3 md:py-4 rounded-xl bg-brand-primary text-background font-bold hover:brightness-90 transition-all text-sm md:text-base"
            >
              Send
            </button>
          </div>
        </div>

        {/* ===================== BƯỚC 2,3,4 ===================== */}
        {[2, 3, 4].map((s) => (
          <div
            key={s}
            className={`flex flex-col flex-1 transition-all duration-300 ${
              step === s
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute inset-0 p-6 md:p-10 pointer-events-none"
            }`}
          >
            {/* Indicator */}
            <div className="flex justify-center gap-2.5 mb-8 md:mb-10">
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    dot === s - 1 ? "bg-brand-primary" : "bg-white/25"
                  }`}
                />
              ))}
            </div>

            {/* Tiêu đề */}
            <h2 className="text-2xl md:text-3xl text-center text-foreground font-bold font-heading mb-6 md:mb-8">
              {s === 2 && "Your Business Model"}
              {s === 3 && "Your Main Goal"}
              {s === 4 && "Estimated Budget"}
            </h2>

            {/* Options */}
            <div className="flex flex-col flex-1 gap-4 md:gap-5">
              {s === 2 &&
                BUSINESS_MODELS.map((model) => (
                  <RadioOption
                    key={model}
                    value={model}
                    label={model}
                    selected={businessModel}
                    onChange={setBusinessModel}
                  >
                    {model === "Other (Please specify)" &&
                      businessModel === model && (
                        <input
                          type="text"
                          value={otherBusiness}
                          onChange={(e) => setOtherBusiness(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="ml-2 bg-transparent border-b border-white/30 focus:border-brand-primary outline-none py-1 px-2 text-sm text-foreground placeholder:text-foreground/40 w-36 md:w-44"
                          placeholder="Type here..."
                        />
                      )}
                  </RadioOption>
                ))}
              {s === 3 &&
                MAIN_GOALS.map((g) => (
                  <RadioOption
                    key={g}
                    value={g}
                    label={g}
                    selected={goal}
                    onChange={setGoal}
                  />
                ))}
              {s === 4 &&
                ESTIMATED_BUDGETS.map((b) => (
                  <RadioOption
                    key={b}
                    value={b}
                    label={b}
                    selected={budget}
                    onChange={setBudget}
                  />
                ))}
            </div>

            {/* Nút điều hướng */}
            <div className="flex flex-row gap-4 mt-auto pt-4 md:pt-6">
              <button
                onClick={handlePrev}
                className="flex-1 py-3 md:py-4 rounded-xl border border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary/10 transition-colors text-sm md:text-base"
              >
                Preview
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3 md:py-4 rounded-xl bg-brand-primary text-background font-bold hover:brightness-90 transition-all text-sm md:text-base"
              >
                {s === 4 ? "Send" : "Next"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
