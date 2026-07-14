"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { 
  ArrowLeft, 
  ArrowRight,
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

const IMAGE_GROUPS = {
  hero: {
    title: "PrivateCircle Research",
    images: [
      { src: "/assets/images/research-title hero.png", alt: "PrivateCircle Research Dashboard Preview" }
    ]
  },
  brainstorming: {
    title: "Brainstorming",
    images: [
      { src: "/assets/images/research-branstorm1.png", alt: "Research workflow exploration and filter behavior sketches" },
      { src: "/assets/images/research-brainstorm3.png", alt: "Company info and data architecture whiteboard diagram" }
    ]
  },
  wireframes: {
    title: "Wireframes & Prototype",
    images: [
      { src: "/assets/images/research-wireframe1.png", alt: "Financial data dashboard wireframe layout" },
      { src: "/assets/images/research-wireframe2.png", alt: "Company list database layout with sidebar filters" }
    ]
  },
  gallery: {
    title: "Final UI Gallery",
    images: [
      { src: "/assets/images/research-final1.png", alt: "Company Master List: Customizable table and query layout" },
      { src: "/assets/images/research-final2.png", alt: "Search Filters Panel: Side drawer showing advanced filters" },
      { src: "/assets/images/research-final3.png", alt: "Custom Column Selector: Column ordering configuration drawer" },
      { src: "/assets/images/research-final4.png", alt: "Company Profile Overview: Dashboard presenting Ather Energy key metrics" },
      { src: "/assets/images/research-final5.png", alt: "Valuation Performance Chart: Valuation trend line graph" },
      { src: "/assets/images/research-final6.png", alt: "Search History Log: Database of previous search queries" },
      { src: "/assets/images/research-final7.png", alt: "Regulatory Feed Alerts: In-app listings for MCA/audit filings" },
      { src: "/assets/images/research-final8.png", alt: "Workspace Feed: Insights feed carousel dashboard view" },
      { src: "/assets/images/research-final9.png", alt: "Investment Deals: Curated VC rounds list view" },
      { src: "/assets/images/research-final10.png", alt: "Workspace Management: Real-time company categorizer sidebar" },
      { src: "/assets/images/research-final11.png", alt: "Team Notes: Real-time collaborative annotations drawer" },
      { src: "/assets/images/research-final12.png", alt: "Portfolio Overview: Sector distribution and asset trackers" },
      { src: "/assets/images/research-final13.png", alt: "Portfolio Companies: Detailed transactions tracker ledger" }
    ]
  }
};

type GroupName = keyof typeof IMAGE_GROUPS;

export default function PrivateCircleResearchPage() {
  const [activeGroup, setActiveGroup] = useState<GroupName | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Opens lightbox for a specific image group and index
  const openLightbox = (group: GroupName, index: number) => {
    document.body.style.overflow = "hidden";
    setActiveGroup(group);
    setActiveIndex(index);
    setIsZoomed(false);
  };

  // Closes the lightbox and restores scroll
  const closeLightbox = () => {
    document.body.style.overflow = "";
    setActiveGroup(null);
    setIsZoomed(false);
  };

  const navigateNext = useCallback(() => {
    if (!activeGroup) return;
    setIsZoomed(false);
    setActiveIndex((prev) => (prev + 1) % IMAGE_GROUPS[activeGroup].images.length);
  }, [activeGroup]);

  const navigatePrev = useCallback(() => {
    if (!activeGroup) return;
    setIsZoomed(false);
    setActiveIndex((prev) => (prev - 1 + IMAGE_GROUPS[activeGroup].images.length) % IMAGE_GROUPS[activeGroup].images.length);
  }, [activeGroup]);

  // Handle keyboard events (ESC to close, Left/Right arrow keys to navigate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeGroup) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGroup, navigateNext, navigatePrev]);

  // Handle Touch Swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    if (diff > 50) {
      navigateNext();
      setTouchStart(null);
    } else if (diff < -50) {
      navigatePrev();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16">
      {/* Back Link */}
      <BlurFade delay={0.05}>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground group transition-colors"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to portfolio
        </Link>
      </BlurFade>

      {/* Hero Section */}
      <div className="flex flex-col gap-6">
        <BlurFade delay={0.1}>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/80">
              Fintech • Private Market Intelligence • SaaS
            </span>
            <h1 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              PrivateCircle Research
            </h1>
            <p className="text-[16px] sm:text-xl font-medium text-muted-foreground">
              Private Market Intelligence & Company Research Platform
            </p>
          </div>
        </BlurFade>

        {/* Large Featured Product Preview - Opens Final UI Gallery */}
        <BlurFade delay={0.15}>
          <div 
            onClick={() => openLightbox("hero", 0)}
            className="overflow-hidden border rounded-xl shadow-md bg-muted cursor-zoom-in relative aspect-[16/10] w-full"
          >
            <Image
              src="/assets/images/research-title hero.png"
              alt="PrivateCircle Research Dashboard Preview"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 gap-4 mt-2">            
            {/* Card 1: Role */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1 snap-start flex-shrink-0 w-[85%] sm:w-auto">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Role</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Product Design | UX/UI Design</span>
            </div>

            {/* Card 2: Industry */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1 snap-start flex-shrink-0 w-[85%] sm:w-auto">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Industry</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Fintech | Private Market Intelligence</span>
            </div>

            {/* Card 3: Platform */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1 snap-start flex-shrink-0 w-[85%] sm:w-auto">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Platform</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Website, Web Application</span>
            </div>

            {/* Card 4: Users */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1 snap-start flex-shrink-0 w-[85%] sm:w-auto">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Users</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Investors, Analysts, Founders, Business Teams</span>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Overview Section */}
      <BlurFade delay={0.25}>
        <div className="flex flex-col gap-2 max-w-3xl pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Overview</h2>
          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              PrivateCircle Research helps users discover and analyze private company intelligence including company profiles, financial information, funding details, and business insights.
            </p>
            <p>
              The goal was to improve the research experience by making complex private market information easier to discover, understand, and explore online.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Roles & Responsibilities Section */}
      <BlurFade delay={0.3}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Roles & Responsibilities</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-3">
            As the lead product designer, I owned the UX/UI execution, structuring content discovery layers, validating wireframes, aligning information hierarchy, and collaborating with developers to implement interactive, clean research dashboard elements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { skill: "Product Strategy" },
              { skill: "UX Research" },
              { skill: "User Flows" },
              { skill: "Wireframing" },
              { skill: "UI Design" },
              { skill: "Design Systems" },
              { skill: "Prototyping" },
              { skill: "Design QA" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="border border-slate-100 rounded-lg bg-slate-50/40 flex items-center cursor-default"
                style={{ padding: "0.4rem", gap: "0.5rem" }}
              >
                <span className="text-xs font-semibold text-slate-700 leading-none pl-2">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Brainstorming Section */}
      <BlurFade delay={0.35}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Brainstorming</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-3">
            Analyzing user pain points and mapping workflows. We explored research workflow pathways, company profile content structures, information architecture, search experience criteria, and user journey flows on whiteboard planning sessions.
          </p>
          <div className="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 gap-4">
            {IMAGE_GROUPS.brainstorming.images.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox("brainstorming", idx)}
                className="snap-start flex-shrink-0 w-[85%] sm:w-auto overflow-hidden border rounded-lg bg-muted shadow-xs aspect-video cursor-zoom-in"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Wireframes & Prototype Section */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Wireframes & Prototype</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-3">
            Visualizing structured design layouts. Modular concepts and wireframes were drafted to establish clean structures for company profiles, advanced search experiences, research dashboards, information architecture schemes, and navigation concepts.
          </p>
          
          <div className="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-col gap-4 sm:gap-6">
            {IMAGE_GROUPS.wireframes.images.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox("wireframes", idx)}
                className="snap-start flex-shrink-0 w-[85%] sm:w-auto overflow-hidden border rounded-lg bg-slate-50 cursor-zoom-in"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover filter grayscale" />
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Challenges & Solutions Section */}
      <BlurFade delay={0.45}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Challenges & Solutions</h2>
          <div className="flex flex-col gap-8 mt-2">
            
            {/* Item 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Challenge 01</span>
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  Users relied heavily on downloading reports instead of exploring information online.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Solution</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Redesigned company profiles into richer online experiences with better content hierarchy and discoverability.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Challenge 02</span>
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  Large amounts of company information were difficult to scan.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Solution</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Created structured sections, improved information hierarchy, and simplified content discovery.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Challenge 03</span>
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  Users needed faster ways to discover relevant company insights.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Solution</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Improved navigation, search experience, and related information discovery.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Challenge 04</span>
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  Users needed more reasons to continue exploring the platform.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Solution</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Created connected research journeys that encouraged deeper exploration of company data and features.
                </p>
              </div>
            </div>

          </div>
        </div>
      </BlurFade>

      {/* Impact Section */}
      <BlurFade delay={0.55}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Impact
          </h2>
          
          <div className="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-2xl font-extrabold text-primary tracking-tight">Improved</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Online research experience</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-2xl font-extrabold text-primary tracking-tight">Increased</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">User engagement</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-2xl font-extrabold text-primary tracking-tight">Higher</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company profile exploration</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-2xl font-extrabold text-primary tracking-tight">Improved</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subscription retention</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-2xl font-extrabold text-primary tracking-tight">30% Increase</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active session time</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-2xl font-extrabold text-primary tracking-tight">Increased</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Referral traffic</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed text-sm max-w-3xl mt-4">
            <p>
              Users shifted from downloading company reports to consuming information directly online.
            </p>
            <p>
              Users spent more time exploring company profiles and additional platform features.
            </p>
            <p>
              The improved experience contributed to higher subscription renewals and increased referral traffic.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Final UI Gallery Section */}
      <BlurFade delay={0.6}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Final UI Gallery</h2>
          
          <div className="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-col gap-4 sm:gap-10 mt-2">
            {IMAGE_GROUPS.gallery.images.map((img, idx) => (
              <div key={idx} className="snap-start flex-shrink-0 w-[85%] sm:w-auto flex flex-col gap-2 group">
                <div 
                  onClick={() => openLightbox("gallery", idx)}
                  className="overflow-hidden border rounded-lg bg-muted cursor-zoom-in"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>{img.alt.split(":")[0]}:</strong> {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Final Output Section */}
      <BlurFade delay={0.65}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground text-left">Final Output</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mb-3 text-left">
            PrivateCircle Research evolved into a unified company intelligence platform that helps investors, founders, and analysts explore private market data directly online.
          </p>
          <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl list-disc pl-5 flex flex-col gap-2 mb-8 text-left">
            <li>Replaced manual and static report downloads with rich, interactive web dashboard profiles.</li>
            <li>Organized heavy datasets into structured, easy-to-scan, and highly discoverable layouts.</li>
            <li>Created connected research pathways to enhance user engagement and session duration.</li>
          </ul>

          {/* Case Study Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-border/60 w-full">
            <Link 
              href="/projects/askpc" 
              className="inline-flex items-center justify-center gap-2 h-11 px-6 font-semibold text-sm border rounded-lg bg-background text-foreground hover:bg-muted border-border transition-all w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <ArrowLeft className="size-4" />
              Previous Project
            </Link>
            <Link 
              href="/projects/privatecircle-networks" 
              className="inline-flex items-center justify-center gap-2 h-11 px-6 font-semibold text-sm rounded-lg bg-foreground text-background hover:opacity-90 transition-all w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              Next Project
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </BlurFade>

      {/* Lightbox / Modal Component */}
      {activeGroup && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Modal Header containing Section Title and Counter */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-sm font-bold tracking-tight text-white/90">
                {IMAGE_GROUPS[activeGroup].title}
              </span>
              <span className="text-xs font-mono opacity-60 hidden sm:inline">|</span>
              <span className="text-xs font-mono tracking-wider opacity-75">
                {activeIndex + 1} / {IMAGE_GROUPS[activeGroup].images.length}
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono tracking-wider opacity-75 sm:hidden">
                {activeIndex + 1} / {IMAGE_GROUPS[activeGroup].images.length}
              </span>
              <button 
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? <ZoomOut className="size-5" /> : <ZoomIn className="size-5" />}
              </button>
              <button 
                onClick={closeLightbox}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Close"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button 
            onClick={navigatePrev}
            className="absolute left-4 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 z-50 hidden sm:block"
            title="Previous"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Image Canvas with Click to Toggle Zoom & Close on canvas click */}
          <div 
            className="w-full h-full flex items-center justify-center p-4 overflow-auto cursor-zoom-out"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <img
              src={IMAGE_GROUPS[activeGroup].images[activeIndex].src}
              alt={IMAGE_GROUPS[activeGroup].images[activeIndex].alt}
              onClick={() => setIsZoomed(!isZoomed)}
              className={`max-h-[85vh] max-w-[90vw] object-contain transition-all duration-300 ${
                isZoomed 
                  ? "scale-150 cursor-zoom-out max-h-none max-w-none shadow-2xl" 
                  : "scale-100 cursor-zoom-in"
              }`}
            />
          </div>

          {/* Next Button */}
          <button 
            onClick={navigateNext}
            className="absolute right-4 p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 z-50 hidden sm:block"
            title="Next"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Helper caption for mobile swipe */}
          <div className="absolute bottom-4 text-center text-xs text-white/50 w-full px-4 select-none pointer-events-none block sm:hidden">
            Swipe left or right to navigate
          </div>
        </div>
      )}
    </div>
  );
}
