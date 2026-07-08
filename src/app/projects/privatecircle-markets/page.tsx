import Link from "next/link";
import { ArrowLeft, CheckCircle2, Target, Briefcase, Award, ChevronRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "PrivateCircle Markets Case Study | Rahul Panchal",
  description: "AI-Powered Fundraising & Deal-Flow Marketplace case study.",
};

export default function PrivateCircleMarketsPage() {
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border rounded-2xl bg-muted/40 backdrop-blur-xs ring-2 ring-border/20 mt-4">
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

        {/* Hero Product Image */}
        <BlurFade delay={0.25}>
          <div className="overflow-hidden border rounded-2xl shadow-xl ring-2 ring-border/20 mt-4 bg-muted">
            <img
              src="/Fold 1.png"
              alt="PrivateCircle Markets Product Overview"
              className="w-full h-auto object-cover"
            />
          </div>
        </BlurFade>
      </div>

      {/* Project Overview */}
      <BlurFade delay={0.3}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-t border-border/60">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Project Overview</h2>
          </div>
          <div className="md:w-2/3 flex flex-col gap-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <p>
              Private market fundraising involves complex workflows where founders need access to relevant investors, while investors need reliable company intelligence, deal insights, and efficient ways to evaluate opportunities.
            </p>
            <p>
              The goal was to design a platform that simplifies fundraising discovery, improves investor-founder connections, and creates a seamless journey from profile discovery to meeting completion.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Product Goals & My Role */}
      <BlurFade delay={0.35}>
        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-border/60">
          {/* Goals */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Target className="size-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">Product Goals</h2>
            </div>
            <ul className="space-y-3">
              {[
                "Create an efficient marketplace connecting founders and investors",
                "Improve investor discovery and matching experience",
                "Enable data-driven investment decisions",
                "Simplify fundraising workflows",
                "Provide transparency across deal progress and communication",
              ].map((goal, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="size-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">My Role & Responsibilities</h2>
            </div>
            <p className="text-sm font-semibold text-muted-foreground">Product Design | UX/UI Design</p>
            <ul className="space-y-3">
              {[
                "Defined product features and user workflows across investor and founder journeys",
                "Designed high-fidelity interfaces and end-to-end product experiences",
                "Created user flows, wireframes, prototypes, and design systems",
                "Collaborated with product managers, developers, and business teams",
                "Conducted UX reviews and usability improvements",
                "Validated designs for feasibility and scalable implementation",
              ].map((resp, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <ChevronRight className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BlurFade>

      {/* Case Study Sections */}
      <div className="flex flex-col gap-12 sm:gap-16 py-8 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-center">Detailed Case Study</h2>

        {[
          {
            title: "AI-Powered Fundraising Marketplace",
            desc: "Designed a marketplace experience where startups can discover investors and investors can explore fundraising opportunities.",
            bullets: [
              "Investor and fundraiser profile discovery",
              "AI-powered matching between founders and investors",
              "Company intelligence and investment insights",
              "Deal-flow discovery and tracking",
              "Investment portfolio management",
            ],
            image: "/Fold 1.png",
          },
          {
            title: "Investor Profiles & Matching",
            desc: "Designed investor profile experiences to help founders identify relevant investors based on investment sectors, ticket size, portfolio history, investment preferences, and location.",
            image: "/Fold 4.png",
          },
          {
            title: "Fundraiser Dashboard",
            desc: "Created a centralized dashboard experience for founders to manage investor connections, meeting requests, deal progress, investor conversations, and fundraising activities.",
            image: "/Fold 6.png",
          },
          {
            title: "Investor Dashboard",
            desc: "Designed investor workflows to manage startup discovery, saved opportunities, portfolio tracking, active connections, and meeting schedules.",
            image: "/Fold 5.png",
          },
          {
            title: "Investor Profiles & Deal Insights",
            desc: "Created detailed investor and company profile experiences with structured information, investment history, sectors, keywords, and deal insights.",
            image: "/Fold 2.png",
          },
          {
            title: "Meeting Scheduling Experience",
            desc: "Designed a complete investor-founder meeting workflow including meeting requests, time slot selection, confirmation, calendar scheduling, and completion flow.",
            image: "/Fold 7.png",
          },
          {
            title: "Signup & Onboarding Experience",
            desc: "Redesigned onboarding to create a faster and clearer entry experience.",
            bullets: [
              "User registration flow",
              "Company information collection",
              "Founder onboarding",
              "Account completion journey",
              "Terms and verification screens",
            ],
            image: "/Fold 3.png",
          },
        ].map((section, idx) => (
          <BlurFade key={idx} delay={0.1 + idx * 0.05}>
            <div className="flex flex-col gap-6 p-6 sm:p-8 border rounded-3xl bg-card hover:shadow-lg transition-all duration-300 ring-2 ring-border/10">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider">
                  Section {idx + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {section.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {section.desc}
                </p>
                {section.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-2 mt-2">
                    {section.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="overflow-hidden border rounded-2xl bg-muted/30 mt-2">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Impact Section */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col gap-6 py-8 border-t border-border/60">
          <div className="flex items-center gap-2">
            <Award className="size-5 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">Design Impact</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Designed 100+ user flows across complex fintech workflows",
              "Delivered multiple product features and UX improvements",
              "Improved usability across investor and founder journeys",
              "Reduced design iteration cycles through AI-assisted workflows and rapid prototyping",
              "Created scalable design patterns for future product expansion",
            ].map((impact, idx) => (
              <div key={idx} className="p-5 border rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors flex flex-col gap-2">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-sm text-primary">
                  {idx + 1}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Tools & Workflows */}
      <BlurFade delay={0.45}>
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-border/60">
          <div className="p-6 border rounded-2xl bg-card">
            <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Design</span>
            <p className="text-sm text-foreground leading-relaxed">
              Figma, Design Systems, Wireframing, Prototyping, High-Fidelity UI
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
              Cursor, Claude, Antigravity, AI-assisted prototyping workflows
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Final Outcome */}
      <BlurFade delay={0.5}>
        <div className="p-8 border rounded-3xl bg-primary text-primary-foreground text-center flex flex-col gap-4 mt-4 shadow-xl">
          <h2 className="text-2xl font-bold tracking-tight">Final Outcome</h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
            PrivateCircle Markets evolved into a comprehensive private market ecosystem enabling founders and investors to discover opportunities, build connections, manage fundraising activities, and make informed investment decisions through structured data and intelligent workflows.
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
