"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectVar = {
  id: number;
  title: string;
  image: string;
  client: string;
  categories: string;
  stats: string[];
};

const projectData: ProjectVar[] = [
  {
    id: 1,
    title: "Prediction Network",
    image: "/project.webp",
    client: "Client Versus",
    categories: "Landing Page",
    stats: ["98/100 Mobile", "conversionRate: +25%"],
  },
  {
    id: 2,
    title: "Prediction Network",
    image: "/project.webp",
    client: "Client Versus",
    categories: "Landing Page",
    stats: ["98/100 Mobile", "conversionRate: +25%"],
  },
  {
    id: 3,
    title: "Prediction Network",
    image: "/project.webp",
    client: "Client Versus",
    categories: "Landing Page",
    stats: ["98/100 Mobile", "conversionRate: +25%"],
  },
  {
    id: 4,
    title: "Prediction Network",
    image: "/project.webp",
    client: "Client Versus",
    categories: "Landing Page",
    stats: ["98/100 Mobile", "conversionRate: +25%"],
  },
  {
    id: 5,
    title: "Prediction Network",
    image: "/project.webp",
    client: "Client Versus",
    categories: "Landing Page",
    stats: ["98/100 Mobile", "conversionRate: +25%"],
  },
];

// Component Project Card (Desktop)
function ProjectCard({ project }: { project: ProjectVar }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 md:w-72 h-72 md:h-80 shrink-0 cursor-pointer bg-brand-card rounded-2xl overflow-hidden flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ảnh project - chiếm % chiều cao card */}
      <div
        className={`
          relative w-full transition-all duration-500 ease-out
          ${isHovered ? "h-[55%]" : "h-[75%]"}
        `}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Phần dưới - chứa title và nội dung chi tiết */}
      <div className="flex-1 p-4 flex flex-col justify-center overflow-hidden">
        {/* Title - luôn hiển thị */}
        <h3 className="font-heading font-medium text-lg text-foreground text-center">
          {project.title}
        </h3>

        {/* Nội dung chi tiết - chỉ hiện khi hover */}
        <div
          className={`
            transition-all duration-300 overflow-hidden
            ${isHovered ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div>
              <p className="text-xs text-slate-500 font-body uppercase tracking-wider">
                Client
              </p>
              <p className="text-sm text-foreground font-medium">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-body uppercase tracking-wider">
                Categories
              </p>
              <p className="text-sm text-foreground font-medium">
                {project.categories}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-body uppercase tracking-wider">
                Stats
              </p>
              <p className="text-sm text-foreground font-medium">
                {project.stats[0]}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-body uppercase tracking-wider">
                Conversion Rate
              </p>
              <p className="text-sm text-brand-primary font-medium">
                {project.stats[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component Marquee Effect
function Marquee({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // State cho kéo thả
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Auto-scroll (chạy khi không paused, không dragging)
  useEffect(() => {
    if (isPaused || isDragging) return;
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!container || isPaused || isDragging) return;
      container.scrollLeft += 1;
      // Vòng lặp vô hạn
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }
    };

    intervalRef.current = setInterval(scroll, 20);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isDragging]);

  // Handlers kéo thả
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    setIsPaused(true); // dừng auto khi kéo
    dragStart.current = {
      x: e.clientX,
      scrollLeft: container.scrollLeft,
    };
    container.style.cursor = "grabbing";
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    containerRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsPaused(false); // cho phép auto chạy lại
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  // Khi chuột rời vùng cũng kết thúc kéo
  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-auto mask-marquee scrollbar-hide cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-6 w-max">
        {children}
        {children}
      </div>
    </div>
  );
}

function MobileSwiper() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="block md:hidden relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
      >
        {projectData.map((project) => (
          <div key={project.id} className="snap-center flex shrink-0 w-70">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-brand-card p-2 rounded-full border border-slate-700"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-brand-card p-2 rounded-full border border-slate-700"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </div>
  );
}

function Project() {
  return (
    <section className=" padding-section">
      <div className=" container-page flex flex-col gap-8 md:gap-12">
        {/* Header */}
        <div>
          <h2 className=" font-heading font-medium text-2xl md:text-5xl text-foreground">
            Our <span className="text-brand-primary">Work</span>
          </h2>

          <p className="font-body text-base text-slate-400 mt-2 max-w-2xl">
            Explore how we transform user experiences into high-performing
            digital products with proven metrics.
          </p>
        </div>

        {/* Desktop: Marquee */}
        <div className=" hidden md:block">
          <Marquee>
            {projectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Marquee>
        </div>

        {/* Mobile: Swiper */}
        <MobileSwiper />
      </div>
    </section>
  );
}

export default Project;
