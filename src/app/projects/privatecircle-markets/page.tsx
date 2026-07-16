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
import { ChallengesSolutionsItem } from "@/components/challenges-solutions-item";
import { RolesResponsibilitiesPills } from "@/components/roles-responsibilities-pills";
import Image from "next/image";

// Define the groups of images for the lightbox navigation with mapped section titles
const IMAGE_GROUPS = {
  brainstorming: {
    title: "Brainstorming",
    images: [
      { src: "/assets/images/brainstorm0.webp", alt: "Whiteboard Session 1" },
      { src: "/assets/images/brainstorm1.webp", alt: "Whiteboard Session 2" },
      { src: "/assets/images/brainstorm3.webp", alt: "Whiteboard Session 3" },
      { src: "/assets/images/brainstorm4.webp", alt: "Whiteboard Session 4" }
    ]
  },
  wireframes: {
    title: "Wireframes & Prototype",
    images: [
      { src: "/assets/images/Prototype2.webp", alt: "Prototype Flow Map" },
      { src: "/assets/images/before1.webp", alt: "Low Fidelity Screen Concept" }
    ]
  },
  beforeAfter: {
    title: "Before & After UX",
    images: [
      { src: "/assets/images/before1.webp", alt: "Before: Static company lists" },
      { src: "/assets/images/Final2.webp", alt: "After: Unified investor matches layout" },
      { src: "/assets/images/Before2.webp", alt: "Before: Complex investor search forms" },
      { src: "/assets/images/Final3.webp", alt: "After: Card Discovery Layout" }
    ]
  },
  gallery: {
    title: "Final UI Gallery",
    images: [
      { src: "/assets/images/Final1.webp", alt: "HNI Investor Home Dashboard" },
      { src: "/assets/images/Final2.webp", alt: "Criteria Match details" },
      { src: "/assets/images/Final3.webp", alt: "Startup Discovery lanes" },
      { src: "/assets/images/Final4.webp", alt: "Investor Connection Profiles" },
      { src: "/assets/images/Final5.webp", alt: "Explore Network node mapping visualizer" },
      { src: "/assets/images/Final6.webp", alt: "Mobile Dashboard Layouts" },
      { src: "/assets/images/Final7.webp", alt: "Automated Slot Coordination and booking calendar" }
    ]
  }
};

type GroupName = keyof typeof IMAGE_GROUPS;

export default function PrivateCircleMarketsPage() {
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
          <div className="flex flex-col case-study-hero-gap">
            <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/80">
              Fintech • Private Markets • Investment Platform
            </span>
            <h1 className="case-study-hero-title font-bold tracking-tight text-foreground leading-tight">
              AI-Powered Fundraising & Deal-Flow Marketplace
            </h1>
            <p className="text-[16px] sm:text-xl font-medium text-muted-foreground">
              PrivateCircle Markets
            </p>
          </div>
        </BlurFade>

        {/* Large Featured Product Preview - Opens Final UI Gallery */}
        <BlurFade delay={0.15}>
          <div 
            onClick={() => openLightbox("gallery", 0)}
            className="overflow-hidden border rounded-xl shadow-md bg-muted cursor-zoom-in relative aspect-[16/10] w-full"
          >
            <Image
              src="/assets/images/Final1.webp"
              alt="PrivateCircle Markets Dashboard Preview"
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
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Product Design | UX/UI</span>
            </div>

            {/* Card 2: Industry */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1 snap-start flex-shrink-0 w-[85%] sm:w-auto">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Industry</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Fintech | Private Markets</span>
            </div>

            {/* Card 3: Platform */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1 snap-start flex-shrink-0 w-[85%] sm:w-auto">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Platform</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Website, Web and Mobile Application</span>
            </div>

            {/* Card 4: Users */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1 snap-start flex-shrink-0 w-[85%] sm:w-auto">
              <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>Users</span>
              <span className="font-semibold text-slate-800" style={{ fontSize: "0.875rem" }}>Founders, HNIs, VCs, PEs, Wealth Managers, Investment Bankers</span>
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
              PrivateCircle Markets is a premium investment and deal-flow discovery marketplace connecting founders directly with capital allocators. The traditional private market fundraising ecosystem is highly fragmented, relying on manual network relationships and offline data sheets that create massive information silos.
            </p>
            <p>
              The platform solves these problems by providing structured corporate profiles and automated calendars. This allows founders to target matching criteria directly, while investors, wealth managers, and investment bankers discover opportunities and schedule meetings in one central location to drive efficient capital allocation.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Roles & Responsibilities Section - Added consistent gap below paragraph */}
      <BlurFade delay={0.3}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Roles & Responsibilities</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-3">
            As the principal designer, I led the user experience and interface design from strategic positioning down to engineering handoff. I worked directly with product managers and developers to architect the database-matching layouts, user flows, and interaction patterns.
          </p>

          <RolesResponsibilitiesPills
            skills={[
              "Product Strategy",
              "UX Research",
              "User Flows",
              "Wireframing",
              "UI Design",
              "Design Systems",
              "Prototyping",
            ]}
          />
        </div>
      </BlurFade>

      {/* Brainstorming Section - Added consistent gap below paragraph */}
      <BlurFade delay={0.35}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Brainstorming</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-3">
            Analyzing user pain points and mapping workflows. We aligned investor discovery lanes, match parameter logic, and meeting coordination triggers on whiteboard planning sessions.
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

      {/* Wireframes & Prototype Section - Added consistent gap below paragraph */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Wireframes & Prototype</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-3">
            Visualizing grid cards and modular navigation widgets. Early wireframe explorations focused on validating quick-connect alerts and match rating tags before moving to high-fidelity visual production.
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
            <ChallengesSolutionsItem
              number="01"
              challenge="Initially, only a mobile version was planned for the product experience."
              solution="Created a complete desktop experience and redesigned the mobile version to maintain consistency across platforms with unified user flows and interactions."
            />
            <ChallengesSolutionsItem
              number="02"
              challenge="The product initially focused only on fundraising and investing workflows for HNIs, with plans to expand to other user profiles."
              solution="Expanded the platform experience to support multiple user types including VCs, PEs, Wealth Managers, Investment Bankers, Portfolio Managers and Deal Scouts. Created dedicated profiles and workflows for each user type, including internal transactions and meeting journeys."
            />
            <ChallengesSolutionsItem
              number="03"
              challenge="Previously, meetings, data sharing, and transaction-related activities were happening outside the platform."
              solution="Introduced in-platform workflows including meeting management between connections, pitch deck uploads, data/file sharing and fund commitment functionality to bring the complete investment journey into one platform."
            />
            <ChallengesSolutionsItem
              number="04"
              challenge="Users needed an easier way to share profiles and deals beyond the platform."
              solution="Integrated profile and deal-sharing functionality within the platform and enabled sharing across external services such as WhatsApp to improve discoverability and collaboration."
            />
          </div>
        </div>
      </BlurFade>

      {/* Before & After UX Section */}
      <BlurFade delay={0.5}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Before & After UX</h2>
          
          <div className="flex flex-col gap-8 mt-2">
            {/* Compare Group 1 */}
            <div className="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-2 snap-start flex-shrink-0 w-[85%] md:w-auto">
                <div 
                  onClick={() => openLightbox("beforeAfter", 0)} 
                  className="overflow-hidden border border-rose-100 rounded-lg shadow-xs relative cursor-zoom-in aspect-[16/10]"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-rose-500 text-[9px] font-bold text-white uppercase rounded-md z-10">Before</span>
                  <img src="/assets/images/before1.webp" alt="Static company lists" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed px-1 mt-1">
                  <strong>Before:</strong> Flat text rows showing static company listings. Users had to manually click into details to see matched parameters.
                </p>
              </div>
              <div className="flex flex-col gap-2 snap-start flex-shrink-0 w-[85%] md:w-auto">
                <div 
                  onClick={() => openLightbox("beforeAfter", 1)} 
                  className="overflow-hidden border border-emerald-100 rounded-lg shadow-xs relative cursor-zoom-in aspect-[16/10]"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-500 text-[9px] font-bold text-white uppercase rounded-md z-10">After</span>
                  <img src="/assets/images/Final2.webp" alt="Unified investor matches layout" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed px-1 mt-1">
                  <strong>After:</strong> Unified layout with a popover showing criteria matching and direct Connect CTAs in one click.
                </p>
              </div>
            </div>

            {/* Compare Group 2 */}
            <div className="flex flex-row overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-2 snap-start flex-shrink-0 w-[85%] md:w-auto">
                <div 
                  onClick={() => openLightbox("beforeAfter", 2)} 
                  className="overflow-hidden border border-rose-100 rounded-lg shadow-xs relative cursor-zoom-in aspect-[16/10]"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-rose-500 text-[9px] font-bold text-white uppercase rounded-md z-10">Before</span>
                  <img src="/assets/images/Before2.webp" alt="Complex investor search forms" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed px-1 mt-1">
                  <strong>Before:</strong> Bulky search inputs requiring precise query matches, leading to high friction and cognitive load.
                </p>
              </div>
              <div className="flex flex-col gap-2 snap-start flex-shrink-0 w-[85%] md:w-auto">
                <div 
                  onClick={() => openLightbox("beforeAfter", 3)} 
                  className="overflow-hidden border border-emerald-100 rounded-lg shadow-xs relative cursor-zoom-in aspect-[16/10]"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-500 text-[9px] font-bold text-white uppercase rounded-md z-10">After</span>
                  <img src="/assets/images/Final3.webp" alt="Card Discovery Layout" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed px-1 mt-1">
                  <strong>After:</strong> Horizontal scroll lanes grouping categories (Super lists, AI-suggestions) and clear, structured cards.
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
              <span className="text-[22px] font-extrabold text-primary tracking-tight">200+</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Companies onboarded</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-[22px] font-extrabold text-primary tracking-tight">300+</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Funds, HNIs & Family Office</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-[22px] font-extrabold text-primary tracking-tight">50% Faster</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Deal closure process</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-[22px] font-extrabold text-primary tracking-tight">80% Faster</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Onboarding experience</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-[22px] font-extrabold text-primary tracking-tight">30% Increase</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active session time</span>
            </div>
            <div className="snap-start flex-shrink-0 w-[85%] sm:w-auto border rounded-xl bg-slate-50/40 text-center flex flex-col items-center justify-center gap-2" style={{ padding: '16px' }}>
              <span className="text-[22px] font-extrabold text-primary tracking-tight">Increased</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Referral traffic</span>
            </div>
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
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>{img.alt.split(":")[0]}:</strong> {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>      {/* Final Output Section */}
      <BlurFade delay={0.65}>
        <div className="flex flex-col gap-2 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground text-left">Final Output</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mb-3 text-left">
            PrivateCircle Markets evolved into a unified private market platform that helps founders, investors, and financial professionals discover opportunities, manage connections, and streamline investment workflows.
          </p>
          <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl list-disc pl-5 flex flex-col gap-2 mb-8 text-left">
            <li>Simplified fundraising and investment journeys through structured user flows.</li>
            <li>Enabled investor discovery, deal sharing, meetings, and collaboration in one platform.</li>
            <li>Created scalable experiences for multiple user profiles and future product expansion.</li>
          </ul>

          {/* Case Study Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-border/60 w-full">
            <Link 
              href="/projects/privatecircle-networks" 
              className="inline-flex items-center justify-center gap-2 h-11 px-6 font-semibold text-sm border rounded-lg bg-background text-foreground hover:bg-muted border-border transition-all w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <ArrowLeft className="size-4" />
              Previous Project
            </Link>
            <Link 
              href="/projects/askpc" 
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
