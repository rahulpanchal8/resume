/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="hidden sm:block size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="hidden sm:block size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

function formatMobileDate(start: string, end?: string) {
  const mapDate = (dateStr: string) => {
    if (!dateStr || dateStr.toLowerCase() === "present") return "Present";
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length < 2) return dateStr;
    const month = parts[0].substring(0, 3);
    const year = parts[1].substring(2);
    return `${month} ${year}`;
  };

  return `${mapDate(start)} – ${mapDate(end ?? "Present")}`;
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible defaultValue="PrivateCircle" className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-1 flex flex-col">
                  {/* Job Title (16px) with toggle icon beside it */}
                  <div className="font-semibold text-base text-foreground flex items-center gap-2">
                    {work.title}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  {/* Company Name + Location (14px) */}
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.company} &bull; {work.location}
                  </div>
                </div>
              </div>
              {/* Duration (14px) */}
              <div className="flex items-center gap-1 text-sm tabular-nums text-muted-foreground text-right flex-none">
                {/* Desktop Date Format */}
                <span className="hidden sm:inline">
                  {work.start} - {work.end ?? "Present"}
                </span>
                {/* Mobile Date Format */}
                <span className="inline sm:hidden">
                  {formatMobileDate(work.start, work.end)}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 pl-0 sm:pl-11 md:pl-13 text-sm text-muted-foreground">
            {/* Domain / Industry information (plain text, no bullet, same style as description) */}
            <div className="text-sm text-muted-foreground leading-relaxed mt-2">
              {work.domain}
            </div>
            <ul className="list-disc pl-4 space-y-1.5 mt-2">
              {work.points.map((point, idx) => (
                <li key={idx} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

