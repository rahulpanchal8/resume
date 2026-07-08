import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, BriefcaseIcon } from "lucide-react";
import type { IconProps } from "@/components/icons";

export const DATA = {
  name: "Rahul Panchal",
  initials: "RP",
  url: "https://github.com/rahulpanchal8",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  description:
    "Product Designer | UX-UI Designer | AI Product Design — 13+ years creating intuitive, user-centered designs.",
  summary:
    "Experienced designer with 13 years of creating intuitive, **user-centered designs**. Proficient in design tools: Figma | Sketch | Adobe Suite | Illustrator. Working knowledge of AI tools: Cursor, Vercel, Antigravity, Claude etc. Expertise in **wireframing, prototyping, and high-fidelity UI design**. Strong understanding of user research, user flows, and usability principles. Cross-team collaboration experience with product, developers, and marketers. Knowledgeable in front-end and **AI-driven workflows** for design feasibility.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Figma" },
    { name: "Sketch" },
    { name: "Adobe Suite" },
    { name: "Illustrator" },
    { name: "Wireframing" },
    { name: "Prototyping" },
    { name: "High-Fidelity UI" },
    { name: "UX Research" },
    { name: "User Flows" },
    { name: "Usability Testing" },
    { name: "Design Systems" },
    { name: "Information Architecture" },
    { name: "Cursor" },
    { name: "Vercel" },
    { name: "Antigravity" },
    { name: "Claude" },
    { name: "AI-driven Workflows" },
    { name: "HTML/CSS" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rahul13@live.com",
    tel: "+919016178418",
    social: {
      Projects: {
        name: "My Projects",
        url: "/#projects",
        icon: (props: IconProps) => <BriefcaseIcon {...props} />,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rahulpanchal",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:rahul13@live.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PrivateCircle",
      href: "https://www.privatecircle.co",
      badges: [],
      location: "Bangalore, Karnataka, India",
      title: "Design Lead - User Experience Designer",
      logoUrl: "",
      start: "July 2021",
      end: "Present",
      domain: "Fintech | Financial Data Platform | Fundraising & Investment Platform | B2B & B2C",
      points: [
        "Led UX/UI design across 5+ product platforms including Markets, Research, Connect, Networks and AskPC - B2B & B2C SaaS",
        "Designed 100+ user flows, wireframes, prototypes and high-fidelity interfaces across complex financial data products",
        "Delivered 50+ feature enhancements and UX improvements through continuous product iteration and stakeholder collaboration",
        "Designed and developed AskPC, an AI-powered private market research platform, enabling users to explore company intelligence, funding data, investor insights, financial information and market analysis through conversational workflows",
        "Reduced design iteration cycles by adopting AI-assisted workflows, rapid prototyping and improved collaboration processes",
        "Conducted UX reviews, usability evaluations, and design validations to identify friction points and improve user experience",
        "Collaborated with product, engineering and business teams to deliver scalable solutions for B2B fintech users",
      ],
      description: "",
    },
    {
      company: "Vardaam Solutions",
      badges: [],
      href: "https://www.vardaam.com",
      location: "Vadodara, Gujarat, India",
      title: "Sr. User Experience Designer",
      logoUrl: "",
      start: "April 2017",
      end: "May 2021",
      domain: "B2B SaaS Solutions | Healthcare Technology | Automotive Platforms",
      points: [
        "Designed 30+ web and mobile application experiences across healthcare, automotive and business platforms",
        "Created user journeys, information architecture, wireframes, prototypes and high-fidelity UI designs",
        "Conducted UX research and usability analysis to improve product experiences",
        "Developed reusable UI patterns and design guidelines to improve consistency",
        "Collaborated with developers and stakeholders to ensure smooth implementation and design feasibility",
      ],
      description: "",
    },
    {
      company: "Odysseus Solutions",
      href: "https://www.odysseussolutions.com",
      badges: [],
      location: "Vadodara, Gujarat, India",
      title: "Product Designer | Web Designer",
      logoUrl: "",
      start: "January 2016",
      end: "March 2017",
      domain: "Travel Technology | E-commerce | Booking Platforms | B2B & B2C SaaS",
      points: [
        "Designed 15+ major digital experiences including websites, mobile interfaces, landing pages, booking flows and customer portals",
        "Designed an end-to-end cruise guest experience platform that centralized activity discovery, booking, onboard schedules, guest tracking, billing management, service requests, ordering and cruise information",
        "Created user flows and UI experiences for cruise, flight and hotel products",
        "Developed wireframes, mockups and reusable design components",
        "Improved user journeys across search, booking and checkout experiences",
      ],
      description: "",
    },
    {
      company: "VP InfoTech",
      href: "#",
      badges: [],
      location: "Vadodara, Gujarat, India",
      title: "Web - Graphic Designer",
      logoUrl: "",
      start: "September 2013",
      end: "January 2016",
      domain: "Web Design | Digital Marketing | Branding",
      points: [
        "Designed 250+ digital assets including websites, software interfaces, banners, brochures, email campaigns and marketing materials",
        "Created wireframes, UI layouts, mockups, icons, logos and visual communication assets",
        "Collaborated with clients and internal teams to translate requirements into effective design solutions",
      ],
      description: "",
    },
    {
      company: "Creative-Edge",
      href: "#",
      badges: [],
      location: "Vadodara, Gujarat, India",
      title: "Web - Graphic Designer | Social Media Strategist",
      logoUrl: "",
      start: "August 2011",
      end: "September 2013",
      domain: "Web Design | Digital Marketing | Branding",
      points: [
        "Designed 40+ websites, landing pages, and digital marketing assets for business clients",
        "Created UI layouts, banners, advertisements, presentations, logos and promotional materials",
        "Developed visual content strategies for social media platforms and digital campaigns",
      ],
      description: "",
    },
  ],
  education: [
    {
      school: "The Indian Institute of Export",
      href: "#",
      degree: "Post Graduate Diploma in Export Import Management",
      logoUrl: "",
      start: "2016",
      end: "2016",
      location: "Vadodara, Gujarat, India",
    },
    {
      school: "Gujarat University",
      href: "https://www.gujaratuniversity.ac.in",
      degree: "Bachelor in Computer Application",
      logoUrl: "",
      start: "2007",
      end: "2010",
      location: "Gujarat, India",
    },
    {
      school: "Image Institute of Digital Technology",
      href: "#",
      degree: "Diploma in Website and Graphic Design",
      logoUrl: "",
      start: "2009",
      end: "2010",
      location: "Vadodara, Gujarat, India",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    win?: string;
    links: { title: string; icon: React.ReactNode; href: string }[];
  }[],
} as const;
