import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Panchal",
  initials: "RP",
  url: "https://github.com/rahulpanchal8",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  description:
    "Product Designer & UX-UI Designer with 13+ years of experience creating intuitive, user-centered designs.",
  summary:
    "Experienced designer with 13 years of creating intuitive, **user-centered designs**. Proficient in design tools like Figma, Sketch, Adobe XD, and Illustrator. Working knowledge of AI tools such as Cursor, Vercel, and Lovable. Expertise in **wireframing, prototyping, and high-fidelity UI design** with a strong understanding of user research, user flows, and usability principles. Cross-team collaboration experience with product, developers, and marketers. Knowledgeable in front-end and AI-driven workflows for design feasibility.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Figma" },
    { name: "Sketch" },
    { name: "Adobe XD" },
    { name: "Illustrator" },
    { name: "Wireframing" },
    { name: "Prototyping" },
    { name: "UI Design" },
    { name: "UX Research" },
    { name: "User Flows" },
    { name: "Usability Testing" },
    { name: "Design Systems" },
    { name: "Cursor" },
    { name: "Vercel" },
    { name: "HTML/CSS" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rahull3@live.com",
    tel: "+919016178418",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rahulpanchal8",
        icon: Icons.github,
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
        url: "mailto:rahull3@live.com",
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
      description:
        "Domain: Financial data platform and app | Fundraiser & investment platform [B2B]. Led UX/UI design for PrivateCircle Markets platform. Contributed to fast product iterations with efficient, AI-assisted workflows. Designed journeys, flows, wireframes, and prototypes. Ran usability tests and improved onboarding experience. Handled design for multiple products: Markets, Networks, Research & Connect.",
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
      description:
        "Domain: UX solution provider for dentist, surgeons, vehicle sellers [B2B]. Created wireframes and prototypes for web and mobile apps. Conducted product research and crafted intuitive user interfaces. Identified and resolved UX challenges for seamless experiences. Created UI mockups that showcase product functionality and aesthetics.",
    },
    {
      company: "Odysseus Solutions",
      href: "https://www.odysseussolutions.com",
      badges: [],
      location: "Vadodara, Gujarat, India",
      title: "Web Designer | Product Designer",
      logoUrl: "",
      start: "January 2016",
      end: "March 2017",
      description:
        "Domain: Cruise booking engine | Flight & Hotel booking platform [B2B + B2C]. Designed clean and elegant E-Commerce Websites, Mobile Apps, Landing Pages, Member Areas, and Checkout Processes. Created engaging site concepts based on user flows and customer needs. Built clean and effective graphic templates and style guides.",
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
      description:
        "Domain: Website, graphic design and social media marketing [B2B]. Created website and software layouts, wireframes, and mockups. Designed flyers, posters, email flyers, merchandise, logos, web banners, business cards, icons, blog layouts, brochures, magazine covers, forms, and catalogs. Managed social media marketing and postings.",
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
      description:
        "Domain: Website, graphic design and social media marketing [B2B]. Designed website and software layouts. Created flyers, posters, logos, banners, business cards, icons, and more. Developed video presentations, flash ads, and search engine display ads. Managed and optimized social media profiles, strategy, and ads.",
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
    },
    {
      school: "Gujarat University",
      href: "https://www.gujaratuniversity.ac.in",
      degree: "Bachelor in Computer Application (BCA)",
      logoUrl: "",
      start: "2007",
      end: "2010",
    },
    {
      school: "Image Institute of Digital Technology",
      href: "#",
      degree: "Diploma in Website and Graphic Design",
      logoUrl: "",
      start: "2009",
      end: "2010",
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
