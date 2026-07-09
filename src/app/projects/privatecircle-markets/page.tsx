import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Briefcase, 
  Award, 
  Lightbulb, 
  Eye, 
  Target, 
  Users, 
  Layers2, 
  Sparkles, 
  Code, 
  Monitor
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "PrivateCircle Markets Case Study | Rahul Panchal",
  description: "AI-Powered Fundraising & Deal-Flow Marketplace case study.",
};

export default function PrivateCircleMarketsPage() {
  return (
    <div className="w-full flex flex-col gap-16 sm:gap-24 pb-24">
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
      <div className="flex flex-col gap-8">
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

        {/* Large Featured Product Preview */}
        <BlurFade delay={0.15}>
          <div className="overflow-hidden border rounded-3xl shadow-lg bg-muted">
            <img
              src="/assets/images/Final1.png"
              alt="PrivateCircle Markets Dashboard Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </BlurFade>

        {/* Hero Description & stacked layout */}
        <BlurFade delay={0.2}>
          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed text-sm sm:text-base max-w-3xl">
            <p>
              PrivateCircle Markets is a premium investment and deal-flow discovery marketplace. The platform connects high-growth startup founders directly with private market investors, high-net-worth individuals (HNIs), and venture capital directors. By combining audited financial profiles with automated scheduling, the platform aims to reduce fundraising friction and drive efficient capital deployment.
            </p>
          </div>
        </BlurFade>

        {/* Minimal Metadata Cards (No icons, no hover translates/shadows) */}
        <BlurFade delay={0.22}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            
            {/* Card 1: Role */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role</span>
              <span className="text-xs font-semibold text-slate-800">Product Design | UX/UI</span>
            </div>

            {/* Card 2: Industry */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry</span>
              <span className="text-xs font-semibold text-slate-800">Fintech | Private Markets</span>
            </div>

            {/* Card 3: Platform */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform</span>
              <span className="text-xs font-semibold text-slate-800">Web Application</span>
            </div>

            {/* Card 4: Users */}
            <div className="p-4 border rounded-xl bg-white flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Users</span>
              <span className="text-xs font-semibold text-slate-800">Founders, HNIs, VCs</span>
            </div>

          </div>
        </BlurFade>
      </div>

      {/* Overview Section - Reduced to short summary of 2 paragraphs (~120 words) */}
      <BlurFade delay={0.25}>
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Overview</h2>
          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              PrivateCircle Markets connects startup founders directly with private market investors, Venture Capitalists, and HNIs. The traditional fundraising process is highly fragmented, relying on manual relationship discovery and offline reports that create massive information silos and delay decision-making.
            </p>
            <p>
              To solve these problems, the platform provides audited corporate profiles and integrated tools. Startup founders can target matching investment parameters directly, while investors can discover investment opportunities and schedule meetings in one central location.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Roles & Responsibilities Section - 3 column grid, reduced height skill cards, 8 skills */}
      <BlurFade delay={0.3}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Briefcase className="size-5 text-primary" />
            Roles & Responsibilities
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            As the principal designer, I led the user experience and interface design from strategic positioning down to engineering handoff. I worked directly with product managers and developers to architect the database-matching layouts, user flows, and interaction patterns.
          </p>

          {/* 3 Column Grid with minimal styling, reduced height cards (padding 0.4rem, gap 0.5rem) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {[
              { skill: "Product Strategy", icon: <Target className="size-3.5 text-indigo-500" /> },
              { skill: "UX Research", icon: <Users className="size-3.5 text-emerald-500" /> },
              { skill: "User Flows", icon: <Users className="size-3.5 text-amber-500" /> },
              { skill: "Wireframing", icon: <Layers2 className="size-3.5 text-rose-500" /> },
              { skill: "UI Design", icon: <Sparkles className="size-3.5 text-teal-500" /> },
              { skill: "Design Systems", icon: <Code className="size-3.5 text-slate-500" /> },
              { skill: "High-Fidelity Prototyping", icon: <Monitor className="size-3.5 text-emerald-500" /> },
              { skill: "Design QA", icon: <CheckCircle2 className="size-3.5 text-emerald-500" /> }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-1.5 border border-slate-100 rounded-lg bg-slate-50/40 flex items-center gap-2 transition-colors duration-200 cursor-default"
                style={{ padding: "0.4rem", gap: "0.5rem" }}
              >
                <div className="size-7 rounded-md bg-white flex items-center justify-center shadow-2xs">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-slate-700 leading-none">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Brainstorming Section - Subtitle removed */}
      <BlurFade delay={0.35}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Lightbulb className="size-5 text-primary" />
            Brainstorming
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Analyzing user pain points and mapping workflows. We aligned investor discovery lanes, match parameter logic, and meeting coordination triggers on whiteboard planning sessions.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="overflow-hidden border rounded-xl bg-muted shadow-xs">
              <img src="/assets/images/brainstorm0.jpg" alt="Whiteboard Session 1" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden border rounded-xl bg-muted shadow-xs">
              <img src="/assets/images/brainstorm1.jpg" alt="Whiteboard Session 2" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden border rounded-xl bg-muted shadow-xs">
              <img src="/assets/images/brainstorm3.png" alt="Whiteboard Session 3" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden border rounded-xl bg-muted shadow-xs">
              <img src="/assets/images/brainstorm4.jpg" alt="Whiteboard Session 4" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Wireframes & Prototype Section - Subtitle removed */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Eye className="size-5 text-primary" />
            Wireframes & Prototype
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Visualizing grid cards and modular navigation widgets. Early wireframe explorations focused on validating quick-connect alerts and match rating tags before moving to high-fidelity visual production.
          </p>
          <div className="overflow-hidden border rounded-xl bg-slate-50 p-4 mt-2">
            <img src="/assets/images/Prototype2.png" alt="Prototype Wireframes Map" className="w-full h-auto object-cover rounded-lg filter grayscale shadow-xs" />
          </div>
        </div>
      </BlurFade>

      {/* Challenges Section - Subtitle removed */}
      <BlurFade delay={0.45}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-2">
            <div className="p-6 border rounded-2xl bg-white shadow-xs flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="size-6 rounded-full bg-rose-50 flex items-center justify-center font-bold text-xs text-rose-600">1</span>
                <h3 className="font-bold text-sm text-slate-800">Helping investors quickly identify relevant companies</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Investors were forced to open dozens of browser tabs and download multiple reports to perform simple filtering processes.
              </p>
            </div>

            <div className="p-6 border rounded-2xl bg-white shadow-xs flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="size-6 rounded-full bg-rose-50 flex items-center justify-center font-bold text-xs text-rose-600">2</span>
                <h3 className="font-bold text-sm text-slate-800">Managing large amounts of financial information</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Displaying capital allocations, cap tables, historical fund sizes, and sectors created high visual noise and cognitive overload.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Solutions Section - Subtitle removed */}
      <BlurFade delay={0.5}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-2">
            <div className="p-6 border rounded-2xl bg-white shadow-xs flex flex-col gap-3 border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="size-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-xs text-emerald-600">1</span>
                <h3 className="font-bold text-sm text-slate-800">Introduced Progressive Disclosure</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Created interactive badges displaying match criteria statistics instantly on the list card, letting users filter without reloading.
              </p>
            </div>

            <div className="p-6 border rounded-2xl bg-white shadow-xs flex flex-col gap-3 border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="size-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-xs text-emerald-600">2</span>
                <h3 className="font-bold text-sm text-slate-800">Designed Modular Dashboard Cards</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Grouped pending requests, active connections, holdings, and scheduled meetings into a tabbed layout on a single viewport.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Before & After UX Section - Subtitle removed */}
      <BlurFade delay={0.55}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground text-center">Before & After UX</h2>
          
          <div className="flex flex-col gap-12 mt-2">
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

      {/* Impact Section - Subtitle removed */}
      <BlurFade delay={0.6}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Award className="size-5 text-primary" />
            Impact
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
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

      {/* Final UI Gallery Section - Subtitle removed */}
      <BlurFade delay={0.65}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground text-center">Final UI Gallery</h2>
          
          <div className="flex flex-col gap-12 mt-2">
            {/* Gallery 1 */}
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="overflow-hidden border rounded-2xl shadow-xs bg-muted">
                <img src="/assets/images/Final1.png" alt="Unified Investor Dashboard Layout" className="w-full h-auto object-cover" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                <strong>HNI Investor Home Dashboard:</strong> Combines connect logs, active connection lists, meetings, and target match widgets.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 group cursor-pointer">
                <div className="overflow-hidden border rounded-2xl shadow-xs bg-muted">
                  <img src="/assets/images/Final2.png" alt="Match criteria popover" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>Criteria Match details:</strong> High-level checkmarks showing which parameters meet investor preferences.
                </p>
              </div>

              <div className="flex flex-col gap-2 group cursor-pointer">
                <div className="overflow-hidden border rounded-2xl shadow-xs bg-muted">
                  <img src="/assets/images/Final3.png" alt="Startup Fundraising Discovery Lists" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>Startup Discovery lanes:</strong> Categorized horizontal lists separating super lists and VC/PE investments.
                </p>
              </div>
            </div>

            {/* Gallery 4 */}
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="overflow-hidden border rounded-2xl shadow-xs bg-muted">
                <img src="/assets/images/Final4.png" alt="Investor Connection Profiles" className="w-full h-auto object-cover" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                <strong>Investor profile grids:</strong> Categorized grids showing detailed institutional funds and VC managers.
              </p>
            </div>

            {/* Gallery Grid 5 & 6 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 group cursor-pointer">
                <div className="overflow-hidden border rounded-2xl shadow-xs bg-muted">
                  <img src="/assets/images/Final5.png" alt="Explore Network with node visualizer" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>Explore Network Feed:</strong> Interactive canvas mapping relationship nodes next to corporate news feeds.
                </p>
              </div>

              <div className="flex flex-col gap-2 group cursor-pointer">
                <div className="overflow-hidden border rounded-2xl shadow-xs bg-muted">
                  <img src="/assets/images/Final6.png" alt="Mobile Dashboard Layouts" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                  <strong>Mobile Viewport Optimizations:</strong> Responsive column stacks and persistent bottom navigation shortcuts.
                </p>
              </div>
            </div>

            {/* Gallery 7 */}
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="overflow-hidden border rounded-2xl shadow-xs bg-muted">
                <img src="/assets/images/Final7.png" alt="Automated Slot Coordination and booking calendar" className="w-full h-auto object-cover" />
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed px-1">
                <strong>Automated Booking slots:</strong> Simplifies investor-founder coordinate flows with integrated calendars.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Interactive Demo Section - Subtitle removed */}
      <BlurFade delay={0.7}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Sparkles className="size-5 text-blue-500 animate-spin" />
            Interactive Demo
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            A simplified interactive investor prototype was built to validate navigation paths and screen layouts. This prototype helped test and verify dashboard widgets, horizontal carousels, and search filter responsiveness across different devices.
          </p>
        </div>
      </BlurFade>

      {/* Reflection Section - Subtitle removed */}
      <BlurFade delay={0.75}>
        <div className="flex flex-col gap-4 py-8 border-t border-border/60">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Reflection</h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed text-xs sm:text-sm mt-2">
            <p>
              <strong>Fintech UX Complexity:</strong> Designing products in the private market space requires balancing dense financial structures with clean readability. Progressive disclosure and unified component libraries allowed investors to consume details incrementally without friction.
            </p>
            <p>
              <strong>Cross-functional Engineering:</strong> Designing the match engine and booking logs highlighted that UI layouts must account for dynamic string lengths, missing states, and latency fallback indicators cleanly.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Final Outcome */}
      <BlurFade delay={0.8}>
        <div className="p-8 border rounded-3xl bg-primary text-primary-foreground text-center flex flex-col gap-4 mt-4 shadow-xl">
          <h2 className="text-2xl font-bold tracking-tight">Final Outcome</h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
            PrivateCircle Markets evolved into a comprehensive private market ecosystem enabling founders and investors to discover opportunities, build connections, manage fundraising activities, and make informed investment decisions through structured data and intelligent workflows.
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              href="/#projects"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-background px-6 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors shadow"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
