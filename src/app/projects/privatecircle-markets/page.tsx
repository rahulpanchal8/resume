import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Briefcase, 
  Award, 
  Lightbulb, 
  Eye, 
  Sparkles
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "PrivateCircle Markets Case Study | Rahul Panchal",
  description: "AI-Powered Fundraising & Deal-Flow Marketplace case study.",
};

export default function PrivateCircleMarketsPage() {
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
          <div className="flex flex-col gap-2">
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

        <BlurFade delay={0.15}>
          <p className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed max-w-3xl">
            PrivateCircle Markets simplifies fundraising discovery and founder-investor matching through structured, audited corporate profiles and automated calendar schedules.
          </p>
        </BlurFade>

        {/* Project Metadata Grid */}
        <BlurFade delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border rounded-2xl bg-muted/45 mt-2">
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Role</span>
              <span className="text-sm font-medium text-foreground">Product Design | UX/UI</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Industry</span>
              <span className="text-sm font-medium text-foreground">Fintech | Private Markets</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Platform</span>
              <span className="text-sm font-medium text-foreground">Web Application</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Users</span>
              <span className="text-sm font-medium text-foreground">Founders, HNIs, VCs</span>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.22}>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/markets-demo"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow"
            >
              Preview Product Demo
            </Link>
          </div>
        </BlurFade>

        {/* Hero Cover Image */}
        <BlurFade delay={0.25}>
          <div className="overflow-hidden border rounded-2xl shadow-md bg-muted mt-4">
            <img
              src="/assets/images/Final1.png"
              alt="PrivateCircle Markets Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </BlurFade>
      </div>

      {/* Overview Section */}
      <BlurFade delay={0.3}>
        <div className="flex flex-col md:flex-row gap-8 py-8 border-t border-border/60">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Overview</h2>
          </div>
          <div className="md:w-2/3 flex flex-col gap-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              <strong>Business Context:</strong> Private equity and startup fundraising are notoriously fragmented. Relationships determine deal-flow, information is siloed, and manual paperwork delays critical timelines. Investors spend dozens of hours doing manual verification and searching through scattered company records.
            </p>
            <p>
              <strong>Problem Statement:</strong> Startup founders struggle to target qualified investors who match their exact vertical and ticket criteria, while investors suffer from decision fatigue caused by unfiltered pitches and manual meeting coordination processes.
            </p>
            <p>
              <strong>Objectives:</strong> To establish an end-to-end fundraising marketplace where founders present audited company profiles, while investors dynamically discover match suggestions and coordinate meetings directly in a central, trusted platform.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* My Role & Responsibilities */}
      <BlurFade delay={0.35}>
        <div className="flex flex-col md:flex-row gap-8 py-8 border-t border-border/60">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Briefcase className="size-5 text-primary" />
              Role & Responsibilities
            </h2>
          </div>
          <div className="md:w-2/3 flex flex-col gap-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              As the principal designer, I led the user experience and interface design from strategic positioning down to engineering handoff. I worked directly with product managers and developers to architect the database-matching layouts, user flows, and interaction patterns.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> Product Strategy</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> UX Research & IA</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> User Flows & Wireframes</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> Interaction & UI Design</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> Design System Tokens</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> Developer QA & Handoff</div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Brainstorming */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col md:flex-row gap-8 py-8 border-t border-border/60">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Lightbulb className="size-5 text-primary animate-pulse" />
              Brainstorming
            </h2>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Analyzing core user pain points and mapping workflows. We aligned investor discovery lanes, match parameter logic, and meeting coordination triggers on whiteboard planning sessions.
            </p>
          </div>
          <div className="md:w-2/3 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden border rounded-xl bg-muted shadow-xs">
                <img src="/assets/images/brainstorm0.jpg" alt="Brainstorming Session 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="overflow-hidden border rounded-xl bg-muted shadow-xs">
                <img src="/assets/images/brainstorm1.jpg" alt="Brainstorming Session 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="overflow-hidden border rounded-xl bg-muted shadow-xs">
                <img src="/assets/images/brainstorm3.png" alt="Brainstorming Session 3" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="overflow-hidden border rounded-xl bg-muted shadow-xs">
                <img src="/assets/images/brainstorm4.jpg" alt="Brainstorming Session 4" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Wireframes & Prototypes */}
      <BlurFade delay={0.45}>
        <div className="flex flex-col md:flex-row gap-8 py-8 border-t border-border/60">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Eye className="size-5 text-primary" />
              Wireframes & Prototype
            </h2>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Visualizing grid cards and modular navigation widgets. Early wireframe explorations focused on validating quick-connect alerts and match rating tags before moving to high-fidelity visual production.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="overflow-hidden border rounded-xl bg-slate-50 p-4">
              <img src="/assets/images/Prototype2.png" alt="Prototype Wireframes Map" className="w-full h-auto object-cover rounded-lg filter grayscale shadow-xs" />
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Challenges & Solutions */}
      <BlurFade delay={0.5}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <h2 className="text-xl font-bold tracking-tight text-foreground text-center">UX Challenges & Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Challenge 1 */}
            <div className="p-6 border rounded-2xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="size-7 rounded-full bg-rose-50 flex items-center justify-center font-bold text-xs text-rose-600">C</span>
                <h3 className="font-bold text-sm text-slate-800">Helping investors quickly identify relevant companies</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-9">
                Investors were forced to open dozens of browser tabs and download multiple reports to perform simple filtering processes.
              </p>
              <div className="border-t border-slate-100 pt-3 flex items-start gap-2.5 mt-2">
                <span className="size-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-xs text-emerald-600 shrink-0">S</span>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Introduced progressive disclosure with interactive badges displaying match criteria statistics instantly on the list card.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="p-6 border rounded-2xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="size-7 rounded-full bg-rose-50 flex items-center justify-center font-bold text-xs text-rose-600">C</span>
                <h3 className="font-bold text-sm text-slate-800">Managing large amounts of financial information</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-9">
                Displaying capital allocations, cap tables, historical fund sizes, and sectors created high visual noise and cognitive overload.
              </p>
              <div className="border-t border-slate-100 pt-3 flex items-start gap-2.5 mt-2">
                <span className="size-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-xs text-emerald-600 shrink-0">S</span>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Designed modular dashboard cards with a tabbed viewport grouping Connect requests, active matches, and schedule logs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Before & After UX Improvements */}
      <BlurFade delay={0.55}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <h2 className="text-xl font-bold tracking-tight text-foreground text-center">Before & After UI/UX</h2>
          
          <div className="flex flex-col gap-8">
            {/* Compare Group 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden border border-rose-100 rounded-xl shadow-xs relative">
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-rose-500 text-[9px] font-bold text-white uppercase rounded-md">Before</span>
                  <img src="/assets/images/before1.png" alt="Static company lists" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed px-1">
                  <strong>Before:</strong> Flat text rows showing static company listings. Users had to manually click into details to see matched parameters.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden border border-emerald-100 rounded-xl shadow-xs relative">
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-500 text-[9px] font-bold text-white uppercase rounded-md">After</span>
                  <img src="/assets/images/Final2.png" alt="Unified investor matches layout" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed px-1">
                  <strong>After:</strong> Unified layout with a popover showing criteria matching and direct Connect CTAs in one click.
                </p>
              </div>
            </div>

            {/* Compare Group 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden border border-rose-100 rounded-xl shadow-xs relative">
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-rose-500 text-[9px] font-bold text-white uppercase rounded-md">Before</span>
                  <img src="/assets/images/Before2.png" alt="Complex investor search forms" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed px-1">
                  <strong>Before:</strong> Bulky search inputs requiring precise query matches, leading to high friction and cognitive load.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden border border-emerald-100 rounded-xl shadow-xs relative">
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-500 text-[9px] font-bold text-white uppercase rounded-md">After</span>
                  <img src="/assets/images/Final3.png" alt="Card Discovery Layout" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed px-1">
                  <strong>After:</strong> Horizontal scroll lanes grouping categories (Super lists, AI-suggestions) and clear, structured cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Impact / Metrics */}
      <BlurFade delay={0.6}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <div className="flex items-center gap-2">
            <Award className="size-5 text-primary" />
            <h2 className="text-xl font-bold tracking-tight">Design Impact</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 border rounded-2xl bg-muted/20 text-center">
              <span className="block text-2xl font-extrabold text-primary mb-1">100+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">User flows designed</span>
            </div>
            <div className="p-5 border rounded-2xl bg-muted/20 text-center">
              <span className="block text-2xl font-extrabold text-primary mb-1">50+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Enhancements delivered</span>
            </div>
            <div className="p-5 border rounded-2xl bg-muted/20 text-center">
              <span className="block text-2xl font-extrabold text-primary mb-1">5+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Platform versions</span>
            </div>
            <div className="p-5 border rounded-2xl bg-muted/20 text-center">
              <span className="block text-lg font-extrabold text-primary mt-1 mb-1">B2B SaaS</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Enterprise Platform</span>
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

      {/* Final UI Gallery */}
      <BlurFade delay={0.65}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <h2 className="text-xl font-bold tracking-tight text-foreground text-center">Final UI Gallery</h2>
          
          <div className="flex flex-col gap-12">
            {/* Gallery 1 */}
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="overflow-hidden border rounded-2xl shadow-xs hover:shadow-md transition-all bg-muted">
                <img src="/assets/images/Final1.png" alt="Unified Investor Dashboard Layout" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                <strong>HNI Investor Home Dashboard:</strong> Combines connect logs, active connection lists, meetings, and target match widgets.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 group cursor-pointer">
                <div className="overflow-hidden border rounded-2xl shadow-xs hover:shadow-md transition-all bg-muted">
                  <img src="/assets/images/Final2.png" alt="Match criteria popover" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>Criteria Match details:</strong> High-level checkmarks showing which parameters meet investor preferences.
                </p>
              </div>

              <div className="flex flex-col gap-2 group cursor-pointer">
                <div className="overflow-hidden border rounded-2xl shadow-xs hover:shadow-md transition-all bg-muted">
                  <img src="/assets/images/Final3.png" alt="Startup Fundraising Discovery Lists" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>Startup Discovery lanes:</strong> Categorized horizontal lists separating super lists and VC/PE investments.
                </p>
              </div>
            </div>

            {/* Gallery 4 */}
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="overflow-hidden border rounded-2xl shadow-xs hover:shadow-md transition-all bg-muted">
                <img src="/assets/images/Final4.png" alt="Investor Connection Profiles" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                <strong>Investor profile grids:</strong> Categorized grids showing detailed institutional funds and VC managers.
              </p>
            </div>

            {/* Gallery Grid 5 & 6 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 group cursor-pointer">
                <div className="overflow-hidden border rounded-2xl shadow-xs hover:shadow-md transition-all bg-muted">
                  <img src="/assets/images/Final5.png" alt="Explore Network with node visualizer" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>Explore Network Feed:</strong> Interactive canvas mapping relationship nodes next to corporate news feeds.
                </p>
              </div>

              <div className="flex flex-col gap-2 group cursor-pointer">
                <div className="overflow-hidden border rounded-2xl shadow-xs hover:shadow-md transition-all bg-muted">
                  <img src="/assets/images/Final6.png" alt="Mobile Dashboard Layouts" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>Mobile Viewport Optimizations:</strong> Responsive column stacks and persistent bottom navigation shortcuts.
                </p>
              </div>
            </div>

            {/* Gallery 7 */}
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="overflow-hidden border rounded-2xl shadow-xs hover:shadow-md transition-all bg-muted">
                <img src="/assets/images/Final7.png" alt="Automated Slot Coordination and booking calendar" className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                <strong>Automated Booking slots:</strong> Simplifies investor-founder coordinate flows with integrated calendars.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Prototype Preview */}
      <BlurFade delay={0.7}>
        <div className="p-6 border rounded-2xl bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <h3 className="font-bold text-base text-slate-800 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="size-5 text-blue-500 animate-spin" />
              Interactive Product Demo
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
              Experience the visual interface of PrivateCircle Markets. We configured a mock dashboard showing news logs, connect states, and carousels.
            </p>
          </div>
          <Link
            href="/markets-demo"
            className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow shrink-0"
          >
            Preview Live Demo ➔
          </Link>
        </div>
      </BlurFade>

      {/* Final Outcome */}
      <BlurFade delay={0.75}>
        <div className="p-8 border rounded-3xl bg-primary text-primary-foreground text-center flex flex-col gap-4 mt-4 shadow-xl">
          <h2 className="text-2xl font-bold tracking-tight">Final Outcome</h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
            PrivateCircle Markets evolved into a comprehensive private market ecosystem enabling founders and investors to discover opportunities, build connections, manage fundraising activities, and make informed investment decisions through structured data and intelligent workflows.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link
              href="/markets-demo"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-background px-6 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors shadow"
            >
              Preview Product Demo
            </Link>
            <Link
              href="/#projects"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-background/20 bg-transparent px-6 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
