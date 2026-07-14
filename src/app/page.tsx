import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { SkillIcon } from "@/components/design-skill-icons";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col justify-between">
            <div className="gap-2 flex flex-col">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
      </section>


      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <p>
                Product Designer with 14 years of experience creating intuitive, <strong>user-centered digital experiences</strong> across SaaS, AI products and complex data platforms. Skilled in{" "}
                <svg viewBox="0 0 54 80" style={{ display: "inline-block", width: "0.57em", height: "0.85em", verticalAlign: "-0.08em", marginRight: "0.2em" }} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
                  <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83" />
                  <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF" />
                  <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E" />
                  <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262" />
                  <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE" />
                </svg>
                Figma,{" "}
                <svg viewBox="0 0 256 228" style={{ display: "inline-block", width: "0.95em", height: "0.85em", verticalAlign: "-0.08em", marginRight: "0.2em" }} xmlns="http://www.w3.org/2000/svg" aria-label="Sketch">
                  <path d="M128 0L32 73.5 0 196h256l-32-122.5L128 0z" fill="#FDB300"/>
                  <path d="M128 0L32 73.5H224L128 0z" fill="#FDD231"/>
                  <path d="M0 196l32-122.5L128 228 0 196z" fill="#EA6C00"/>
                  <path d="M256 196l-32-122.5L128 228l128-32z" fill="#EA6C00"/>
                  <path d="M128 228L0 196h256L128 228z" fill="#FDAD00"/>
                  <path d="M32 73.5L0 196h128L32 73.5z" fill="#FDAD00"/>
                  <path d="M224 73.5L256 196H128l96-122.5z" fill="#FDAD00"/>
                  <path d="M128 0L32 73.5h192L128 0z" fill="#FDD231"/>
                </svg>
                Sketch,{" "}
                <svg viewBox="0 0 54 42" style={{ display: "inline-block", width: "1.1em", height: "0.85em", verticalAlign: "-0.08em", marginRight: "0.2em" }} xmlns="http://www.w3.org/2000/svg" aria-label="Adobe">
                  <path d="M19 0H0v42l19-42zm16 0h19v42L35 0zM27 15.75L38.5 42h-7.5L28 35.5H20L27 15.75z" fill="#FF0000"/>
                </svg>
                Adobe Suite and modern AI design tools including{" "}
                <svg viewBox="0 0 24 24" style={{ display: "inline-block", width: "0.85em", height: "0.85em", verticalAlign: "-0.08em", marginRight: "0.2em" }} className="fill-current inline-block" xmlns="http://www.w3.org/2000/svg" aria-label="Cursor">
                  <title>Cursor</title>
                  <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
                </svg>
                Cursor,{" "}
                <svg viewBox="0 0 24 24" style={{ display: "inline-block", width: "0.85em", height: "0.85em", verticalAlign: "-0.08em", marginRight: "0.2em" }} className="fill-current inline-block" xmlns="http://www.w3.org/2000/svg" aria-label="Vercel">
                  <title>Vercel</title>
                  <path d="m12 1.475 12 21.05H0z" />
                </svg>
                Vercel,{" "}
                <svg viewBox="0 0 24 24" style={{ display: "inline-block", width: "0.85em", height: "0.85em", verticalAlign: "-0.08em", marginRight: "0.2em" }} fill="#4285F4" className="inline-block" xmlns="http://www.w3.org/2000/svg" aria-label="Antigravity">
                  <title>Antigravity</title>
                  <path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" />
                </svg>
                Antigravity and{" "}
                <svg viewBox="0 0 24 24" style={{ display: "inline-block", width: "0.85em", height: "0.85em", verticalAlign: "-0.08em", marginRight: "0.2em" }} fill="#D97752" className="inline-block" xmlns="http://www.w3.org/2000/svg" aria-label="Claude">
                  <title>Claude</title>
                  <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006" />
                </svg>
                Claude.
              </p>
              <p className="mt-4">
                Experienced in <strong>user research, UX strategy, wireframing, prototyping and high-fidelity UI design</strong>. Strong at translating complex business problems into simple, scalable product solutions through close collaboration with product, engineering and business teams. Familiar with front-end technologies and <strong>AI-powered workflows</strong> to improve design feasibility and accelerate product development.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <div className="flex items-center justify-between w-full text-left">
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    {/* Degree / Program Name */}
                    <div className="font-semibold text-base text-foreground">
                      {education.degree}
                    </div>
                    {/* Institute / School Name */}
                    <div className="font-sans text-sm text-muted-foreground">
                      {education.school}
                    </div>
                  </div>
                  {/* Completion Year */}
                  <div className="text-sm tabular-nums text-muted-foreground text-right flex-none">
                    {education.end}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                    <SkillIcon name={skill.name} />
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  </div>
                </BlurFade>
              ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
