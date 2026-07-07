"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  const pathname = usePathname();
  const [isProjectsInView, setIsProjectsInView] = useState(false);

  // ScrollSpy: highlight My Projects dock item when projects section is in viewport
  useEffect(() => {
    if (pathname !== "/") {
      setIsProjectsInView(false);
      return;
    }

    const projectsSection = document.getElementById("projects");
    if (!projectsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProjectsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    observer.observe(projectsSection);
    return () => observer.disconnect();
  }, [pathname]);

  // Deep-link: on initial page load with /#projects, scroll to section after render
  useEffect(() => {
    if (pathname !== "/") return;
    if (typeof window === "undefined") return;
    if (window.location.hash !== "#projects") return;

    // Disable browser's default scroll restoration so we control the position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Start at top, then smoothly animate down after DOM is ready
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 300);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps — run once on mount only

  // Home dock click: smooth scroll to top and strip the hash fragment
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      history.pushState("", document.title, window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // My Projects dock click: push /#projects into URL, then smooth scroll with offset
  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    if (name === "Projects") {
      if (pathname === "/") {
        e.preventDefault();
        history.pushState(null, "", "/#projects");
        const section = document.getElementById("projects");
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
      // If not on the home page, the href="/#projects" takes over naturally
    }
  };

  const getNavbarItemClass = (href: string) => {
    const isActive =
      (href === "/" && pathname === "/" && !isProjectsInView) ||
      (href === "/blog" && pathname.startsWith("/blog"));

    return cn(
      "rounded-3xl cursor-pointer size-full bg-background p-0 transition-all duration-200 border border-border backdrop-blur-3xl",
      isActive
        ? "text-foreground bg-muted scale-110 shadow-sm"
        : "text-muted-foreground hover:text-foreground hover:bg-muted"
    );
  };

  const getSocialItemClass = (name: string) => {
    const isActive = name === "Projects" && pathname === "/" && isProjectsInView;

    return cn(
      "rounded-3xl cursor-pointer size-full bg-background p-0 transition-all duration-200 border border-border backdrop-blur-3xl",
      isActive
        ? "text-foreground bg-muted scale-110 shadow-sm"
        : "text-muted-foreground hover:text-foreground hover:bg-muted"
    );
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon className={getNavbarItemClass(item.href)}>
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    onClick={(e) => handleSocialClick(e, name)}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon className={getSocialItemClass(name)}>
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{social.name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
