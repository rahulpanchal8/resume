import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  Briefcase, 
  Award, 
  ChevronRight, 
  TrendingUp, 
  Layout, 
  Users, 
  Compass, 
  Lightbulb, 
  Search, 
  Sliders, 
  RefreshCw, 
  Sparkles, 
  Eye, 
  Layers,
  ArrowUpRight
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "PrivateCircle Markets Case Study | Rahul Panchal",
  description: "AI-Powered Fundraising & Deal-Flow Marketplace case study.",
};

export default function PrivateCircleMarketsPage() {
  return (
    <div className="w-full flex flex-col gap-16 sm:gap-20 pb-24">
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
            PrivateCircle Markets is an AI-powered private market platform designed to help startups connect with investors and enable investors to discover, evaluate, and manage investment opportunities through data-driven insights.
          </p>
        </BlurFade>

        {/* Project Metadata Grid */}
        <BlurFade delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border rounded-2xl bg-muted/40 backdrop-blur-xs ring-2 ring-border/20 mt-2">
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Role</span>
              <span className="text-sm font-medium text-foreground">Product Design | UX/UI Design</span>
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
              <span className="text-sm font-medium text-foreground">Founders, Investors, HNIs, Institutional</span>
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

        {/* Hero Product Image */}
        <BlurFade delay={0.25}>
          <div className="overflow-hidden border rounded-2xl shadow-xl ring-2 ring-border/20 mt-4 bg-muted">
            <img
              src="/fold1.png"
              alt="PrivateCircle Markets Product Overview"
              className="w-full h-auto object-cover"
            />
          </div>
        </BlurFade>
      </div>

      {/* Overview Section */}
      <BlurFade delay={0.3}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Product Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Business Context:</strong> Private equity and startup fundraising are notoriously fragmented. Unlike public exchanges, information is locked behind closed doors, relationships determine deal-flow, and manual paperwork delays critical timelines. Investors spend dozens of hours doing manual verification and searching through scattered company records.
              </p>
              <p>
                <strong>Problem Statement:</strong> Startup founders struggle to target qualified investors who match their exact industry vertical and ticket criteria. Conversely, high-net-worth investors (HNIs) and VCs suffer from extreme decision fatigue caused by unfiltered pitches and manual meeting coordination processes.
              </p>
              <p>
                <strong>Product Vision:</strong> To establish an end-to-end fundraising marketplace where founders easily present audited company profiles, while investors dynamically discover match suggestions and coordinate meetings directly in a central, trusted platform.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-5 border rounded-2xl bg-muted/20">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target Users</span>
              <ul className="space-y-2 text-sm font-medium text-slate-800">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> High-Net-Worth Individuals (HNIs)
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Venture Capitalists & PE Directors
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Startup Founders & Capital Advisors
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary"></span> Intermediary Investment Bankers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* My Role & Responsibilities */}
      <BlurFade delay={0.35}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <div className="flex items-center gap-2">
            <Briefcase className="size-5 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">My Role & Responsibilities</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            As the principal designer, I led the user experience and interface design from strategic positioning down to engineering handoff. I worked directly with product managers and developers to architect the database-matching layouts and user flows.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Product Strategy",
              "UX Research",
              "Information Architecture",
              "User Flows",
              "Wireframing",
              "Interaction Design",
              "UI Design",
              "Design System",
              "High-fidelity Prototypes",
              "Developer Handoff",
              "Design QA",
              "Cross-functional Collaboration",
              "Usability Improvements"
            ].map((skill, idx) => (
              <div key={idx} className="p-4 border rounded-xl bg-card hover:bg-muted/10 transition-colors flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Brainstorming Section (Whiteboard Planning Area) */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60 bg-slate-50/50 -mx-6 px-6 sm:-mx-0 sm:px-0 sm:rounded-3xl">
          <div className="p-6 flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Lightbulb className="size-5 text-primary animate-pulse" />
              Brainstorming & Planning
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              A recreation of our product mapping canvas. We grouped pain points, mapped out user journeys, and prioritized deal-flow characteristics before building layout grids.
            </p>
          </div>

          {/* Interactive FigJam-style Whiteboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 min-h-[450px]">
            {/* Column 1: Pain Points & Goals */}
            <div className="border border-dashed border-slate-200 rounded-2xl p-5 bg-white shadow-xs flex flex-col gap-4 relative">
              <div className="absolute top-2 right-2 text-[10px] font-bold text-slate-300 uppercase">Input</div>
              <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Business & User Inputs</h3>
              
              {/* Yellow Post-it */}
              <div className="p-4 bg-amber-100/80 border-l-4 border-amber-400 rounded-r-lg text-xs leading-relaxed text-amber-900 shadow-xs rotate-[-1deg] hover:rotate-0 transition-transform duration-200 cursor-default">
                <span className="font-bold block mb-1">User Pain Point:</span>
                "Investors are overwhelmed by multi-page financial reports. They need a modular dashboard they can read in 2 minutes."
              </div>

              {/* Green Post-it */}
              <div className="p-4 bg-emerald-100/80 border-l-4 border-emerald-400 rounded-r-lg text-xs leading-relaxed text-emerald-900 shadow-xs rotate-[1.5deg] hover:rotate-0 transition-transform duration-200 cursor-default">
                <span className="font-bold block mb-1">Business Goal:</span>
                "Transition users from traditional offline report downloads (PDFs) to native online search and discovery sessions."
              </div>
            </div>

            {/* Column 2: Journeys & Workflows */}
            <div className="border border-dashed border-slate-200 rounded-2xl p-5 bg-white shadow-xs flex flex-col gap-4 relative">
              <div className="absolute top-2 right-2 text-[10px] font-bold text-slate-300 uppercase">Architecture</div>
              <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Journeys & Workflows</h3>

              {/* Blue Post-it */}
              <div className="p-4 bg-blue-100/80 border-l-4 border-blue-400 rounded-r-lg text-xs leading-relaxed text-blue-900 shadow-xs rotate-[-1.2deg] hover:rotate-0 transition-transform duration-200 cursor-default">
                <span className="font-bold block mb-1">Investor Journey:</span>
                Explore Feed ➔ Smart Filters ➔ Direct Chat Request ➔ Automated Slot Reservation ➔ Confirmed Calendar Booking.
              </div>

              {/* Pink Post-it */}
              <div className="p-4 bg-rose-100/80 border-l-4 border-rose-400 rounded-r-lg text-xs leading-relaxed text-rose-900 shadow-xs rotate-[1deg] hover:rotate-0 transition-transform duration-200 cursor-default">
                <span className="font-bold block mb-1">Founder Journey:</span>
                KYC Completion ➔ Build Profile Card ➔ Monitor Connect Alerts ➔ Accept Meeting Invites.
              </div>
            </div>

            {/* Column 3: Features & Prioritization */}
            <div className="border border-dashed border-slate-200 rounded-2xl p-5 bg-white shadow-xs flex flex-col gap-4 relative">
              <div className="absolute top-2 right-2 text-[10px] font-bold text-slate-300 uppercase">Prioritization</div>
              <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Feature Priority</h3>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[10px] font-medium text-slate-600">
                  AI Match score (High Value)
                </span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[10px] font-medium text-slate-600">
                  Automated Scheduling (P0)
                </span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[10px] font-medium text-slate-600">
                  Intermediary Bankers (H2)
                </span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[10px] font-medium text-slate-600">
                  Token burns & telemetry (P1)
                </span>
              </div>

              <div className="mt-2 p-3 border border-slate-100 rounded-xl bg-slate-50/50 text-[11px] text-slate-500 leading-relaxed">
                <span className="font-semibold block text-slate-700 mb-1">Conclusion:</span>
                Build a unified tabbed dashboard dashboard to house connections, meetings, and investor lists on the same initial viewport.
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Wireframes & Early Exploration */}
      <BlurFade delay={0.45}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Wireframes & Early Exploration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex flex-col gap-4 justify-center">
              <h3 className="font-bold text-lg text-slate-800">Visualizing Layout Candidates</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Initially, we explored standard tabular layouts. During usability validation, however, investors struggled to distinguish between institutional funds and individual super angels. 
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We pivoted to a card-based layout featuring a dedicated, floating profile modal to check investor qualifications in a single click, without reloading the main list view.
              </p>
            </div>
            <div className="md:col-span-2 overflow-hidden border border-slate-200/80 rounded-2xl bg-slate-50 p-6 relative">
              <div className="absolute top-2 left-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">Prototype Canvas</div>
              <img 
                src="/fold7.png" 
                alt="Wireframes & Layout exploration" 
                className="w-full h-auto object-cover rounded-xl shadow-xs filter grayscale"
              />
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Challenges & Solutions */}
      <BlurFade delay={0.5}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">UX Challenges & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Challenge 1 */}
            <div className="p-6 border rounded-3xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="size-7 rounded-full bg-rose-50 flex items-center justify-center font-bold text-xs text-rose-600">C</span>
                <h3 className="font-bold text-base text-slate-800">Helping investors quickly identify relevant companies</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-9">
                Investors were forced to open dozens of browser tabs and download multiple reports to perform simple filtering processes.
              </p>
              <div className="border-t border-slate-100 pt-3 flex items-start gap-2.5 mt-2">
                <span className="size-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-xs text-emerald-600 shrink-0">S</span>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Introduced modular cards with progressive disclosure and search suggestions customized around matching criteria.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="p-6 border rounded-3xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="size-7 rounded-full bg-rose-50 flex items-center justify-center font-bold text-xs text-rose-600">C</span>
                <h3 className="font-bold text-base text-slate-800">Managing large amounts of financial information</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-9">
                Displaying capital commitments, cap tables, historical fund sizes, and sectors created significant visual noise and cognitive overload.
              </p>
              <div className="border-t border-slate-100 pt-3 flex items-start gap-2.5 mt-2">
                <span className="size-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-xs text-emerald-600 shrink-0">S</span>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Designed tabbed dashboard modules allowing users to toggle between Connect requests, Active matches, and Calendar logs.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="p-6 border rounded-3xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="size-7 rounded-full bg-rose-50 flex items-center justify-center font-bold text-xs text-rose-600">C</span>
                <h3 className="font-bold text-base text-slate-800">Reducing decision fatigue</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-9">
                Faced with hundreds of active startups raising capital, investors found it difficult to organize search outcomes.
              </p>
              <div className="border-t border-slate-100 pt-3 flex items-start gap-2.5 mt-2">
                <span className="size-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-xs text-emerald-600 shrink-0">S</span>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Created high-level matchmaking rating badges (e.g. "5 Criteria Match") right on the profile summary layout.
                </p>
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="p-6 border rounded-3xl bg-white shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="size-7 rounded-full bg-rose-50 flex items-center justify-center font-bold text-xs text-rose-600">C</span>
                <h3 className="font-bold text-base text-slate-800">Designing scalable and reusable UI patterns</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-9">
                Each product module (Deals, Meetings, Syndicates) was using non-standardized border radius settings and colors.
              </p>
              <div className="border-t border-slate-100 pt-3 flex items-start gap-2.5 mt-2">
                <span className="size-6 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-xs text-emerald-600 shrink-0">S</span>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Built a unified design token system based on slate and indigo tones, standardized around rounded cards (1.5rem) and soft shadows.
                </p>
              </div>
            </div>

          </div>
        </div>
      </BlurFade>

      {/* Before & After UX Improvements */}
      <BlurFade delay={0.55}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <h2 className="text-2xl font-bold tracking-tight text-foreground text-center">Before & After UX Improvements</h2>
          <div className="flex flex-col gap-6">
            
            {/* Table 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 border rounded-2xl bg-rose-50/10 border-rose-100 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Before</span>
                <h4 className="font-bold text-sm text-slate-800">Static financial data tables</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Data was scattered across long documents and flat text tables. Users had to do their own calculations to assess commitments.
                </p>
              </div>
              <div className="p-5 border rounded-2xl bg-emerald-50/10 border-emerald-100 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">After</span>
                <h4 className="font-bold text-sm text-slate-800">Interactive dashboards with hierarchy</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Capital commitments are displayed inside visual progress tracking bars, paired with automated PC recommendations and live notifications.
                </p>
              </div>
            </div>

            {/* Table 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 border rounded-2xl bg-rose-50/10 border-rose-100 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Before</span>
                <h4 className="font-bold text-sm text-slate-800">Complex investor search</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Finding specific profiles required inputting dozens of precise strings in search fields, with high risk of returning empty matches.
                </p>
              </div>
              <div className="p-5 border rounded-2xl bg-emerald-50/10 border-emerald-100 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">After</span>
                <h4 className="font-bold text-sm text-slate-800">Filtered discovery experience</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Introduced autocomplete queries and a visual Network mapping canvas, driving discovery through interactive relational nodes.
                </p>
              </div>
            </div>

            {/* Table 3 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 border rounded-2xl bg-rose-50/10 border-rose-100 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Before</span>
                <h4 className="font-bold text-sm text-slate-800">Scattered workflows</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Users navigated multiple screens to manage pending connect requests, deal statuses, and active chats.
                </p>
              </div>
              <div className="p-5 border rounded-2xl bg-emerald-50/10 border-emerald-100 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">After</span>
                <h4 className="font-bold text-sm text-slate-800">Centralized dashboard</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Connect Requests, Active Connections, Portfolio holdings, and Meetings are unified into a four-column grid on the home viewport.
                </p>
              </div>
            </div>

          </div>
        </div>
      </BlurFade>

      {/* Design Impact (KPIs) */}
      <BlurFade delay={0.6}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <div className="flex items-center gap-2">
            <Award className="size-5 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">Design Impact</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="p-5 border rounded-2xl bg-muted/20 text-center">
              <span className="block text-3xl font-extrabold text-primary mb-1">100+</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">User flows designed</span>
            </div>
            <div className="p-5 border rounded-2xl bg-muted/20 text-center">
              <span className="block text-3xl font-extrabold text-primary mb-1">50+</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Product enhancements</span>
            </div>
            <div className="p-5 border rounded-2xl bg-muted/20 text-center">
              <span className="block text-3xl font-extrabold text-primary mb-1">5+</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Platform versions</span>
            </div>
            <div className="p-5 border rounded-2xl bg-muted/20 text-center">
              <span className="block text-xl font-extrabold text-primary mt-1.5 mb-1.5 leading-none">B2B + B2C</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">SaaS Marketplace</span>
            </div>
            <div className="p-5 border rounded-2xl bg-muted/20 text-center col-span-2 md:col-span-1">
              <span className="block text-3xl font-extrabold text-primary mb-1">13+</span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Years Design Exp.</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-4 text-muted-foreground leading-relaxed text-sm">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="size-2 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                <p>Following the company profile redesign, users shifted from downloading heavy PDF company reports to consuming financial metrics and business insights directly online.</p>
              </div>
              <div className="flex gap-2">
                <span className="size-2 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                <p>The streamlined meeting scheduling and connection workflow significantly increased daily active time spent on the platform.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="size-2 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                <p>Improved navigation and a consolidated dashboard allowed subscribers to discover and explore more features during each active session, leading to higher subscription renewals.</p>
              </div>
              <div className="flex gap-2">
                <span className="size-2 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                <p>Better content discoverability and richer company profiles contributed to an increase in platform referral traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Final UI Gallery */}
      <BlurFade delay={0.65}>
        <div className="flex flex-col gap-8 py-8 border-t border-border/60">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-center">Product Showcase</h2>
          <p className="text-sm text-center text-muted-foreground max-w-2xl mx-auto -mt-4">
            High-fidelity final designs mapping the investor dashboard, profiling flow, connect actions, and network mapping features.
          </p>

          <div className="flex flex-col gap-16">
            
            {/* Gallery Item 1 */}
            <div className="flex flex-col gap-3 group">
              <div className="overflow-hidden border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 bg-muted">
                <img 
                  src="/fold1.png" 
                  alt="Unified HNI Investor Dashboard" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="px-2">
                <h4 className="font-bold text-sm text-slate-800">Unified HNI Investor Dashboard</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Houses Connect requests, Active connections, My portfolio, and Meetings cards inside a clean grid container, providing instant task tracking.
                </p>
              </div>
            </div>

            {/* Gallery Item 2 & 3 Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3 group">
                <div className="overflow-hidden border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 bg-muted">
                  <img 
                    src="/fold2.png" 
                    alt="Investor Match Criteria & Connect Action" 
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
                <div className="px-2">
                  <h4 className="font-bold text-sm text-slate-800">Interactive Match Qualifications</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    A clean detail popover card displaying average ticket sizes, active investments, and match scores when hovering over specific profiles.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 group">
                <div className="overflow-hidden border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 bg-muted">
                  <img 
                    src="/fold5.png" 
                    alt="Explore Network & News" 
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
                <div className="px-2">
                  <h4 className="font-bold text-sm text-slate-800">Explore Network Interface</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Houses the autocomplete search filter, dynamic node-based network visualizer, and a private market news updates column.
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="flex flex-col gap-3 group">
              <div className="overflow-hidden border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 bg-muted">
                <img 
                  src="/fold6.png" 
                  alt="Startups Actively Raising Carousels" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <div className="px-2">
                <h4 className="font-bold text-sm text-slate-800">Startup Fundraising Discovery lists</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Vertically stacked horizontal scroll lanes separating Super Lists, commitment matches, and AI-suggested categories.
                </p>
              </div>
            </div>

          </div>
        </div>
      </BlurFade>

      {/* Interactive Product Demo Banner */}
      <BlurFade delay={0.7}>
        <div className="p-8 border rounded-3xl bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="font-bold text-lg text-slate-800 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="size-5 text-blue-500 animate-spin" />
              Interactive Product Demo
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl">
              Experience the visual interface of PrivateCircle Markets. We built a mock investor dashboard showing active connections, carousels, network canvas widgets, and news updates.
            </p>
          </div>
          <Link
            href="/markets-demo"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow shrink-0"
          >
            Preview Live Demo ➔
          </Link>
        </div>
      </BlurFade>

      {/* Reflection */}
      <BlurFade delay={0.75}>
        <div className="flex flex-col gap-6 py-8 border-t border-border/60">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Reflection & Learnings</h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed text-sm">
            <p>
              <strong>Fintech UX Complexity:</strong> Designing products in the private investment space requires balancing high-density financial data with visual clarity. Over-simplifying tables is as dangerous as cluttering them. Using progressive disclosure and modular cards allowed investors to consume information incrementally without breaking workflows.
            </p>
            <p>
              <strong>Cross-functional Collaboration:</strong> Rebuilding the deal matching database and booking flows required strict engineering coordination. Working with real datasets highlighted that the design must accommodate varying character lengths, empty states, and slow API loading states cleanly.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Final Outcome Box (Original Back button preserved) */}
      <BlurFade delay={0.8}>
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
