import Link from "next/link";
import { ArrowLeft, CheckCircle2, Target, Briefcase, Award, ChevronRight, MessageSquare, ShieldAlert, Sparkles, LayoutGrid } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "AskPC Case Study | Rahul Panchal",
  description: "Your AI Analyst for Private Markets case study.",
};

export default function AskPCCaseStudyPage() {
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
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/80">
              AI Product • Fintech • Private Market Intelligence • SaaS Platform
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              AskPC
            </h1>
            <p className="text-lg sm:text-xl font-medium text-muted-foreground">
              Your AI Analyst for Private Markets
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.15}>
          <p className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed max-w-3xl">
            AskPC transforms complex private market research into a simple conversational experience. It enables users to explore company intelligence, financial data, investor insights, market analysis, and business information through AI-powered conversations.
          </p>
        </BlurFade>

        {/* Project Metadata Grid */}
        <BlurFade delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border rounded-2xl bg-muted/40 backdrop-blur-xs ring-2 ring-border/20 mt-4">
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Role</span>
              <span className="text-sm font-medium text-foreground">Product Design | UX/UI | AI Product</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Industry</span>
              <span className="text-sm font-medium text-foreground">AI | Fintech | Private Markets</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Platform</span>
              <span className="text-sm font-medium text-foreground">Web Application</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Users</span>
              <span className="text-sm font-medium text-foreground">Investors, Analysts, Founders</span>
            </div>
          </div>
        </BlurFade>

        {/* Hero Video Banner */}
        <BlurFade delay={0.25}>
          <div className="overflow-hidden border rounded-2xl shadow-xl ring-2 ring-border/20 mt-4 bg-muted aspect-video relative">
            <video
              src="/askpc-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </BlurFade>
      </div>

      {/* Project Overview & Problem Statement */}
      <BlurFade delay={0.3}>
        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-border/60">
          {/* Overview */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Project Overview</h2>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Private market research requires users to analyze information from multiple sources including company financials, funding history, investor profiles, market trends, and business intelligence.
              </p>
              <p>
                The goal was to design an AI-driven research assistant that allows users to ask questions naturally and receive structured insights without manually searching through complex datasets.
              </p>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-5 text-destructive" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Problem Statement</h2>
            </div>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Private market professionals spend significant time collecting, filtering, and analyzing fragmented company and investment data.
              </p>
              <p>
                The challenge was to create a faster way to access meaningful insights while maintaining trust, clarity, and usability.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Product Vision */}
      <BlurFade delay={0.32}>
        <div className="flex flex-col gap-4 py-8 border-t border-border/60">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 text-primary animate-pulse" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Product Vision</h2>
          </div>
          <p className="text-base text-muted-foreground">
            AskPC brings private market intelligence into a conversational workflow.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {[
              "Ask questions about companies, sectors, investors, and markets",
              "Analyze financial information and business performance",
              "Discover investment insights",
              "Compare companies and market opportunities",
              "Access structured research through AI conversations",
            ].map((vision, idx) => (
              <div key={idx} className="flex gap-2.5 p-4 border rounded-xl bg-muted/20">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-muted-foreground leading-relaxed">{vision}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Core Capabilities */}
      <BlurFade delay={0.35}>
        <div className="flex flex-col gap-6 py-8 border-t border-border/60">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Core Capabilities</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The full spectrum of private market data accessible in a unified layout.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Company Research",
                desc: "Access detailed company information including financial performance, revenue trends, EBITDA, PAT, shareholding patterns, and board information.",
              },
              {
                title: "Deals & Valuations",
                desc: "Explore funding rounds, M&A activity, IPO information, valuation multiples, and transaction insights.",
              },
              {
                title: "Investor Intelligence",
                desc: "Research VC/PE funds, family offices, and HNIs with filtering based on investment preferences, sectors, and portfolio activity.",
              },
              {
                title: "MCA & Compliance",
                desc: "Access company compliance information, MCA master data, charges, loans, insolvency status, and business records.",
              },
              {
                title: "Market & Peer Analysis",
                desc: "Compare companies, analyze competitors, identify market trends, and understand industry positioning.",
              },
              {
                title: "Governance Team",
                desc: "Explore leadership information, management teams, executive details, and company governance insights.",
              },
            ].map((cap, idx) => (
              <div key={idx} className="p-5 border rounded-2xl bg-card hover:shadow-md transition-shadow flex flex-col gap-2">
                <h3 className="font-bold text-base text-foreground">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden border rounded-2xl bg-muted/20 mt-4 shadow-sm">
            <img
              src="/askpc-spectrum.png"
              alt="The Full Spectrum of Private Market Data"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </BlurFade>

      {/* AI Chat Experience */}
      <BlurFade delay={0.38}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-t border-border/60">
          <div className="md:w-1/3 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="size-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Conversational Intelligence for Private Markets
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed an AI chat experience that allows users to interact naturally with private market data instead of navigating complex dashboards and databases.
            </p>
            <ul className="space-y-2">
              {[
                "Natural language queries",
                "Structured AI-generated responses",
                "Financial analysis",
                "Company comparisons",
                "Research summaries",
                "Data-backed insights",
              ].map((hl, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-muted-foreground font-medium">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 flex flex-col gap-4">
            <div className="overflow-hidden border rounded-2xl shadow-sm bg-muted/10">
              <img
                src="/askpc-chat1.png"
                alt="AskPC AI Chat Interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </BlurFade>

      {/* UX Design section */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col gap-6 py-8 border-t border-border/60">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Designing a Simple Research Workflow</h2>
          <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
            The experience was designed around reducing research complexity and helping users move from question to insight faster.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
            {[
              {
                title: "Reduce Information Overload",
                desc: "Present only key financial metrics and high-level context first, allowing details to unfold progressively.",
              },
              {
                title: "Clear Content Hierarchy",
                desc: "Structure complex datasets with visual groups, readable metadata grids, and explicit labels.",
              },
              {
                title: "Understandable Financials",
                desc: "Translate tabular and raw transactional database values into interactive charts and comparative cards.",
              },
              {
                title: "Conversational Exploration",
                desc: "Allow follow-up prompts to refine searches, perform calculations, or slice intelligence contextually.",
              },
              {
                title: "Trust through Structure",
                desc: "Structure answers logically with verify-able reference keys, ensuring data integrity remains transparent.",
              },
            ].map((principle, idx) => (
              <div key={idx} className="p-5 border rounded-2xl bg-muted/15 flex flex-col gap-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">0{idx + 1} • Design Rule</span>
                <h3 className="font-bold text-base text-foreground mt-1">{principle.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Product Screens Storytelling */}
      <div className="flex flex-col gap-12 py-8 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-center">Product Walkthrough</h2>

        {/* Landing Experience */}
        <BlurFade delay={0.42}>
          <div className="flex flex-col gap-4 p-6 sm:p-8 border rounded-3xl bg-card ring-2 ring-border/10">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider">Landing Experience</span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">AI Analyst Landing Experience</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The landing experience focuses on communicating AskPC&apos;s primary value proposition—removing research barriers and encouraging users to start questions immediately through an inviting and highly visible chat prompt.
              </p>
            </div>
            <div className="overflow-hidden border rounded-2xl bg-muted/30 mt-2">
              <img
                src="/askpc-landing.png"
                alt="AskPC AI Analyst Landing Experience"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </BlurFade>

        {/* Categories */}
        <BlurFade delay={0.44}>
          <div className="flex flex-col gap-4 p-6 sm:p-8 border rounded-3xl bg-card ring-2 ring-border/10">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider">Market Intelligence</span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Private Market Data Intelligence</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Provides a structured taxonomy for private market queries. Users can explore specific data divisions—financial reports, funding, MCA records, and executive structures—in a guided discovery experience.
              </p>
            </div>
            <div className="overflow-hidden border rounded-2xl bg-muted/30 mt-2">
              <img
                src="/askpc-categories.png"
                alt="Private Market Data Intelligence Explorer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </BlurFade>

        {/* Chat responses */}
        <BlurFade delay={0.46}>
          <div className="flex flex-col gap-4 p-6 sm:p-8 border rounded-3xl bg-card ring-2 ring-border/10">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider">Conversational Flow</span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">AI Research Conversation</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Allows business and research teams to ask complex queries like company benchmarking or financial breakdowns. Responses are formatted into structured UI cards, comparisons, and markdown blocks that simplify reading.
              </p>
            </div>
            <div className="overflow-hidden border rounded-2xl bg-muted/30 mt-2">
              <img
                src="/askpc-chat2.png"
                alt="AI Research Conversation View"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </BlurFade>

        {/* Dashboard and Settings Grid */}
        <BlurFade delay={0.48}>
          <div className="flex flex-col gap-6 p-6 sm:p-8 border rounded-3xl bg-card ring-2 ring-border/10">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider">Supporting Platform Experience</span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Dashboard and Account Experience</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Designed a clean and unified dashboard suite supporting core workflows, search histories, usage limits, settings, and team subscription controls.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-1.5 border rounded-2xl p-4 bg-muted/10">
                <span className="text-xs font-semibold text-muted-foreground">Token & Usage Tracking</span>
                <div className="overflow-hidden border rounded-xl">
                  <img src="/askpc-usage.png" alt="Usage Tracking" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 border rounded-2xl p-4 bg-muted/10">
                <span className="text-xs font-semibold text-muted-foreground">Search History</span>
                <div className="overflow-hidden border rounded-xl">
                  <img src="/askpc-search.png" alt="Search History" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 border rounded-2xl p-4 bg-muted/10">
                <span className="text-xs font-semibold text-muted-foreground">Billing Management</span>
                <div className="overflow-hidden border rounded-xl">
                  <img src="/askpc-billing.png" alt="Billing Management" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 border rounded-2xl p-4 bg-muted/10">
                <span className="text-xs font-semibold text-muted-foreground">Account Settings</span>
                <div className="overflow-hidden border rounded-xl">
                  <img src="/askpc-settings.png" alt="Account Settings" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* My Role & Responsibilities */}
      <BlurFade delay={0.5}>
        <div className="flex flex-col gap-4 py-8 border-t border-border/60">
          <div className="flex items-center gap-2">
            <Briefcase className="size-5 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">My Role & Responsibilities</h2>
          </div>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Product Design | UX/UI Design | AI Product Design
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mt-2">
            {[
              "Defined product experience and user workflows for AI-powered research",
              "Designed information architecture for complex financial data",
              "Created high-fidelity interfaces and interaction patterns",
              "Designed conversational AI workflows and response structures",
              "Collaborated with product and engineering teams",
              "Improved usability through iterative design validation",
              "Worked with AI-assisted design workflows for faster prototyping",
            ].map((resp, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                <ChevronRight className="size-4 text-primary shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>

      {/* Design Impact */}
      <BlurFade delay={0.52}>
        <div className="flex flex-col gap-6 py-8 border-t border-border/60">
          <div className="flex items-center gap-2">
            <Award className="size-5 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Design Impact</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Created an intuitive AI research experience for private market intelligence",
              "Simplified access to complex financial and investment data",
              "Designed scalable patterns for AI conversations and data visualization",
              "Improved research workflows by reducing manual information discovery",
              "Established a foundation for AI-driven financial products",
            ].map((impact, idx) => (
              <div key={idx} className="p-5 border rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors flex flex-col gap-2">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-sm text-primary">
                  {idx + 1}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Tools & Workflow */}
      <BlurFade delay={0.54}>
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-border/60">
          <div className="p-6 border rounded-2xl bg-card">
            <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Design</span>
            <p className="text-sm text-foreground leading-relaxed">
              Figma, Wireframing, Prototyping, Design Systems, High-Fidelity UI
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-card">
            <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Collaboration</span>
            <p className="text-sm text-foreground leading-relaxed">
              Product Managers, Engineers, Business Teams
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-card">
            <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">AI Workflow</span>
            <p className="text-sm text-foreground leading-relaxed">
              Cursor, Claude, Antigravity, AI-assisted prototyping
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Final Outcome */}
      <BlurFade delay={0.56}>
        <div className="p-8 border rounded-3xl bg-primary text-primary-foreground text-center flex flex-col gap-4 mt-4 shadow-xl">
          <h2 className="text-2xl font-bold tracking-tight">Final Outcome</h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
            AskPC transformed private market research by combining AI conversations with structured financial intelligence. The product enables investors, analysts, and business professionals to quickly discover insights, compare opportunities, and make informed decisions through a simpler and more intuitive workflow.
          </p>
          <div className="mt-4">
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
