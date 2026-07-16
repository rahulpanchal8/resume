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
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="hidden sm:block size-8 md:size-10 border border-border rounded-full flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="hidden sm:block size-8 md:size-10 border border-border rounded-full overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

function formatWorkDate(start: string, end?: string) {
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
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center justify-between w-full text-left">
              <div className="flex items-center gap-x-0 sm:gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-1 flex flex-col">
                  {/* Job Title (16px) with toggle icon beside it */}
                  <div className="font-semibold text-base text-foreground flex items-center gap-2">
                    {work.title}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground/70 stroke-2 transition-all duration-200",
                        "group-hover:text-muted-foreground",
                        "group-data-[state=open]:rotate-180 group-data-[state=open]:text-muted-foreground"
                      )}
                    />
                  </div>
                  {/* Company Name + Location (14px) */}
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.company} &bull; {work.location}
                  </div>
                </div>
              </div>
              {/* Duration (14px) */}
              <div className="flex items-center gap-1 text-sm tabular-nums text-muted-foreground text-right flex-none">
                <span>{formatWorkDate(work.start, work.end)}</span>
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
                  <Markdown components={{ p: ({ children }) => <>{children}</> }}>{point}</Markdown>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

