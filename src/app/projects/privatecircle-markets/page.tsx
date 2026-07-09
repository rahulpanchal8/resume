"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { 
  ArrowLeft, 
  Briefcase, 
  Award, 
  Lightbulb, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

// Define the groups of images for the lightbox navigation
const IMAGE_GROUPS = {
  brainstorming: [
    { src: "/assets/images/brainstorm0.jpg", alt: "Whiteboard Session 1" },
    { src: "/assets/images/brainstorm1.jpg", alt: "Whiteboard Session 2" },
    { src: "/assets/images/brainstorm3.png", alt: "Whiteboard Session 3" },
    { src: "/assets/images/brainstorm4.jpg", alt: "Whiteboard Session 4" }
  ],
  wireframes: [
    { src: "/assets/images/Prototype2.png", alt: "Prototype Flow Map", title: "Prototype Flow Map", desc: "Conceptual wireframe user journey mapping out investor dashboard flows and startup profiles." },
    { src: "/assets/images/before1.png", alt: "Low Fidelity Screen Concept", title: "Low Fidelity Screen Concept", desc: "Early layout mockups validating criteria-matching visual cards." }
  ],
  gallery: [
    { src: "/assets/images/Final1.png", alt: "HNI Investor Home Dashboard", title: "Investor Dashboard", desc: "Houses active connection logs, portfolio tracking, and matching parameters." },
    { src: "/assets/images/Final2.png", alt: "Criteria Match popover details", title: "Interactive Match popover", desc: "Shows detailed match checkmarks and connect CTAs." },
    { src: "/assets/images/Final3.png", alt: "Discovery list carousels", title: "Fundraising Lists", desc: "Segmented scroll lists for super lists and AI-driven suggestions." },
    { src: "/assets/images/Final4.png", alt: "Investor Profiles lists", title: "Investor grid", desc: "Organized folders separating individual super angels and institutional venture funds." },
    { src: "/assets/images/Final5.png", alt: "Explore Network with node visualizer", title: "Explore Network Feed", desc: "Interactive network visualization graph paired with live corporate news streams." },
    { src: "/assets/images/Final6.png", alt: "Mobile Dashboard Layouts", title: "Mobile Responsive Dashboard", desc: "Visual stacks and custom bottom dock navigation shortcuts optimized for compact screens." },
    { src: "/assets/images/Final7.png", alt: "Automated Slot Coordination and booking calendar", title: "Automated Booking Flow", desc: "Unified time slot selection and calendar scheduling layout." }
  ]
};

type GroupName = keyof typeof IMAGE_GROUPS;

export default function PrivateCircleMarketsPage() {
  const [activeGroup, setActiveGroup] = useState<GroupName | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Opens lightbox for a specific image group and index
  const openLightbox = (group: GroupName, index: number) => {
    // Lock scroll position
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
    setActiveIndex((prev) => (prev + 1) % IMAGE_GROUPS[activeGroup].length);
  }, [activeGroup]);

  const navigatePrev = useCallback(() => {
    if (!activeGroup) return;
    setIsZoomed(false);
    setActiveIndex((prev) => (prev - 1 + IMAGE_GROUPS[activeGroup].length) % IMAGE_GROUPS[activeGroup].length);
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
      // Swipe left -> Next
      navigateNext();
      setTouchStart(null);
    } else if (diff < -50) {
      // Swipe right -> Prev
      navigatePrev();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 pb-20">
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
              Fintech • Private Markets • Investment Platform
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              PrivateCircle Markets
            </h1>
            <p className="text-lg sm:text-xl font-medium text-muted-foreground">
              AI-Powered Fundraising & Deal-Flow Marketplace
            </p>
          </div>
        </BlurFade>

        {/* Large Featured Product Preview - Reduced border radius to rounded-xl */}
        <BlurFade delay={0.15}>
          <div 
            onClick={() => openLightbox("gallery", 0)}
            className="overflow-hidden border rounded-xl shadow-md bg-muted cursor-zoom-in"
          >
            <img
              src="/assets/images/Final1.png"
              alt="PrivateCircle Markets Dashboard Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </BlurFade>

        {/* Metadata Grid Layout - 2 Columns (repeat(2, 1fr)) with exact typography */}
        <BlurFade delay={0.2}>
          <div className="grid grid-cols-2 gap-4 mt-2">
            
            {/* Card 1: Role */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Role</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Product Design | UX/UI</span>
            </div>

            {/* Card 2: Industry */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Industry</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Fintech | Private Markets</span>
            </div>

            {/* Card 3: Platform */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Platform</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Website, Web and Mobile Application</span>
            </div>

            {/* Card 4: Users */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Users</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Founders, HNIs, VCs, PEs, Wealth Managers, Investment Bankers</span>
            </div>

          </div>
        </BlurFade>
      </div>

      {/* Overview Section - Merged and concise summary (100-120 words) */}
      <BlurFade delay={0.25}>
        <div className="flex flex-col gap-2 max-w-3xl pt-2 border-t border-border/60">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Overview</h2>
          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              PrivateCircle Markets is a premium investment and deal-flow discovery marketplace connecting founders directly with capital allocators. The traditional private market fundraising ecosystem is highly fragmented, relying on manual network relationships and offline data sheets that create massive information silos.
            </p>
            <p>
              The platform solves these problems by providing structured corporate profiles and automated calendars. This allows founders to target matching criteria directly, while investors, wealth managers, and investment bankers discover opportunities and schedule meetings in one central location to drive efficient capital allocation.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Roles & Responsibilities Section */}
      <BlurFade delay={0.3}>
        <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Roles & Responsibilities</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            As the principal designer, I led the user experience and interface design from strategic positioning down to engineering handoff. I worked directly with product managers and developers to architect the database-matching layouts, user flows, and interaction patterns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {[
              { skill: "Product Strategy" },
              { skill: "UX Research" },
              { skill: "User Flows" },
              { skill: "Wireframing" },
              { skill: "UI Design" },
              { skill: "Design Systems" },
              { skill: "Prototyping" }, // Renamed from High-Fidelity Prototyping
              { skill: "Design QA" }
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

      {/* Brainstorming Section - Same width/height aspect ratio grid */}
      <BlurFade delay={0.35}>
        <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Brainstorming</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Analyzing user pain points and mapping workflows. We aligned investor discovery lanes, match parameter logic, and meeting coordination triggers on whiteboard planning sessions.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {IMAGE_GROUPS.brainstorming.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox("brainstorming", idx)}
                className="overflow-hidden border rounded-lg bg-muted shadow-xs aspect-video cursor-zoom-in"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Wireframes & Prototype Section - Spanning full width one below another, Final Gallery style */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Wireframes & Prototype</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Visualizing grid cards and modular navigation widgets. Early wireframe explorations focused on validating quick-connect alerts and match rating tags before moving to high-fidelity visual production.
          </p>
          
          <div className="flex flex-col gap-8 mt-2">
            {IMAGE_GROUPS.wireframes.map((img, idx) => (
              <div key={idx} className="flex flex-col gap-2 group">
                <div 
                  onClick={() => openLightbox("wireframes", idx)}
                  className="overflow-hidden border rounded-lg bg-slate-50 cursor-zoom-in"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover filter grayscale" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>{img.title}:</strong> {img.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Challenges & Solutions Section - Stacked vertically */}
      <BlurFade delay={0.45}>
        <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Challenges & Solutions</h2>
          
          <div className="flex flex-col gap-6 mt-2">
            
            {/* Card 1 */}
            <div className="p-6 border rounded-xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Challenge 01</span>
                <h3 className="font-bold text-sm text-slate-800 leading-snug">Helping investors quickly identify relevant companies</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Investors were forced to open dozens of browser tabs and download multiple reports to perform simple filtering processes.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Solution</span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Introduced progressive disclosure with interactive badges displaying match criteria statistics instantly on the list card.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 border rounded-xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Challenge 02</span>
                <h3 className="font-bold text-sm text-slate-800 leading-snug">Managing large amounts of financial information</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Displaying capital allocations, cap tables, historical fund sizes, and sectors created high visual noise and cognitive overload.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Solution</span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Designed modular dashboard cards with a tabbed viewport grouping Connect requests, active matches, and schedule logs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 border rounded-xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Challenge 03</span>
                <h3 className="font-bold text-sm text-slate-800 leading-snug">Manual meeting scheduling friction</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Back-and-forth email/calendar sharing between founders and investors delayed connection setups by days.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Solution</span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Integrated automated slot coordination flows directly within the investor matching profile cards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </BlurFade>

      {/* Before & After UX Section */}
      <BlurFade delay={0.5}>
        <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground text-center">Before & After UX</h2>
          
          <div className="flex flex-col gap-8 mt-2">
            {/* Compare Group 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div 
                  onClick={() => openLightbox("wireframes", 1)} // before1 is at index 1 in wireframes
                  className="overflow-hidden border border-rose-100 rounded-lg shadow-xs relative cursor-zoom-in"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-rose-500 text-[9px] font-bold text-white uppercase rounded-md">Before</span>
                  <img src="/assets/images/before1.png" alt="Static company lists" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed px-1 mt-1">
                  <strong>Before:</strong> Flat text rows showing static company listings. Users had to manually click into details to see matched parameters.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div 
                  onClick={() => openLightbox("gallery", 1)} // Final2 is index 1
                  className="overflow-hidden border border-emerald-100 rounded-lg shadow-xs relative cursor-zoom-in"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-500 text-[9px] font-bold text-white uppercase rounded-md">After</span>
                  <img src="/assets/images/Final2.png" alt="Unified investor matches layout" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed px-1 mt-1">
                  <strong>After:</strong> Unified layout with a popover showing criteria matching and direct Connect CTAs in one click.
                </p>
              </div>
            </div>

            {/* Compare Group 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div 
                  onClick={() => openLightbox("wireframes", 1)} // using before2 as placeholder, let's keep Before2.png
                  className="overflow-hidden border border-rose-100 rounded-lg shadow-xs relative cursor-zoom-in"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-rose-500 text-[9px] font-bold text-white uppercase rounded-md">Before</span>
                  <img src="/assets/images/Before2.png" alt="Complex investor search forms" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed px-1 mt-1">
                  <strong>Before:</strong> Bulky search inputs requiring precise query matches, leading to high friction and cognitive load.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div 
                  onClick={() => openLightbox("gallery", 2)} // Final3 is index 2
                  className="overflow-hidden border border-emerald-100 rounded-lg shadow-xs relative cursor-zoom-in"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-500 text-[9px] font-bold text-white uppercase rounded-md">After</span>
                  <img src="/assets/images/Final3.png" alt="Card Discovery Layout" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed px-1 mt-1">
                  <strong>After:</strong> Horizontal scroll lanes grouping categories (Super lists, AI-suggestions) and clear, structured cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Impact Section */}
      <BlurFade delay={0.55}>
        <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Award className="size-5 text-primary" />
            Impact
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <div className="p-6 border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-1">
              <span className="text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">100+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Flows Designed</span>
            </div>
            <div className="p-6 border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-1">
              <span className="text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">50+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enhancements</span>
            </div>
            <div className="p-6 border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-1">
              <span className="text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">5+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Versions</span>
            </div>
            <div className="p-6 border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-1">
              <span className="text-xl lg:text-2xl font-extrabold text-primary tracking-tight py-2.5">B2B SaaS</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise Platform</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-2 text-muted-foreground leading-relaxed text-xs">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5 animate-pulse"></span>
                <p>Users transitioned from downloading offline company PDF reports to reading financial details directly online after the profile redesign.</p>
              </div>
              <div className="flex gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5 animate-pulse"></span>
                <p>The consolidated dashboard layout led to a measurable increase in active session time and exploration of matching parameters.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5 animate-pulse"></span>
                <p>Improved search capabilities drove higher discovery rates, contributing directly to platform renewals and subscription retention.</p>
              </div>
              <div className="flex gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5 animate-pulse"></span>
                <p>Richer, easily navigable pages significantly improved discovery and referral traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Final UI Gallery Section */}
      <BlurFade delay={0.6}>
        <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground text-center">Final UI Gallery</h2>
          
          <div className="flex flex-col gap-10 mt-2">
            {IMAGE_GROUPS.gallery.map((img, idx) => (
              <div key={idx} className="flex flex-col gap-2 group">
                <div 
                  onClick={() => openLightbox("gallery", idx)}
                  className="overflow-hidden border rounded-lg bg-muted cursor-zoom-in"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>{img.title}:</strong> {img.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Final Outcome */}
      <BlurFade delay={0.65}>
        <div className="p-8 border rounded-xl bg-primary text-primary-foreground text-center flex flex-col gap-4 mt-4 shadow-lg">
          <h2 className="text-2xl font-bold tracking-tight">Final Outcome</h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
            PrivateCircle Markets evolved into a comprehensive private market ecosystem enabling founders and investors to discover opportunities, build connections, manage fundraising activities, and make informed investment decisions through structured data and intelligent workflows.
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              href="/#projects"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-background px-6 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors shadow"
            >
              Back to Portfolio
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
          {/* Modal Header */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50">
            <span className="text-sm font-mono tracking-wider opacity-85">
              {activeIndex + 1} / {IMAGE_GROUPS[activeGroup].length}
            </span>
            <div className="flex items-center gap-4">
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

          {/* Image Canvas with Click to Toggle Zoom & Drag scroll when zoomed */}
          <div 
            className="w-full h-full flex items-center justify-center p-4 overflow-auto cursor-zoom-out"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <img
              src={IMAGE_GROUPS[activeGroup][activeIndex].src}
              alt={IMAGE_GROUPS[activeGroup][activeIndex].alt}
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
