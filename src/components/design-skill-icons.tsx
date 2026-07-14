import type { ComponentType, SVGProps } from "react";
import {
  Brain,
  ClipboardCheck,
  Code2,
  GitBranch,
  LayoutGrid,
  LayoutTemplate,
  MousePointerClick,
  Palette,
  Route,
  Search,
  Sparkles,
  Target,
  TestTube2,
  type LucideIcon,
} from "lucide-react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const responsibilityIconClass = "size-3.5 shrink-0 text-slate-500";
const skillIconClass = "size-3.5 shrink-0";

function makeLucideIcon(Icon: LucideIcon, className: string) {
  const Wrapped = (props: IconProps) => (
    <Icon className={className} strokeWidth={2} aria-hidden {...props} />
  );
  Wrapped.displayName = Icon.displayName;
  return Wrapped;
}

export const FigmaLogo = (props: IconProps) => (
  <svg viewBox="0 0 54 80" className={skillIconClass} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83" />
    <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF" />
    <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E" />
    <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262" />
    <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE" />
  </svg>
);

export const SketchLogo = (props: IconProps) => (
  <svg viewBox="0 0 256 228" className={skillIconClass} xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M128 0L32 73.5 0 196h256l-32-122.5L128 0z" fill="#FDB300" />
    <path d="M128 0L32 73.5H224L128 0z" fill="#FDD231" />
    <path d="M0 196l32-122.5L128 228 0 196z" fill="#EA6C00" />
    <path d="M256 196l-32-122.5L128 228l128-32z" fill="#EA6C00" />
    <path d="M128 228L0 196h256L128 228z" fill="#FDAD00" />
    <path d="M32 73.5L0 196h128L32 73.5z" fill="#FDAD00" />
    <path d="M224 73.5L256 196H128l96-122.5z" fill="#FDAD00" />
    <path d="M128 0L32 73.5h192L128 0z" fill="#FDD231" />
  </svg>
);

export const AdobeLogo = (props: IconProps) => (
  <svg viewBox="0 0 54 42" className={skillIconClass} xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M19 0H0v42l19-42zm16 0h19v42L35 0zM27 15.75L38.5 42h-7.5L28 35.5H20L27 15.75z" fill="#FF0000" />
  </svg>
);

export const CursorLogo = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${skillIconClass} fill-current`} xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
  </svg>
);

export const VercelLogo = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${skillIconClass} fill-current`} xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="m12 1.475 12 21.05H0z" />
  </svg>
);

export const AntigravityLogo = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className={skillIconClass} fill="#4285F4" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" />
  </svg>
);

export const ClaudeLogo = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className={skillIconClass} fill="#D97752" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006" />
  </svg>
);

const RESPONSIBILITY_ICON_MAP: Record<string, LucideIcon> = {
  "Product Strategy": Target,
  "UX Research": Search,
  "User Flows": Route,
  Wireframing: LayoutTemplate,
  "UI Design": Palette,
  "Design Systems": LayoutGrid,
  Prototyping: MousePointerClick,
  "AI Product Design": Sparkles,
  "Design QA": ClipboardCheck,
};

export function ResponsibilityIcon({ skill }: { skill: string }) {
  const Icon = RESPONSIBILITY_ICON_MAP[skill];
  if (!Icon) return null;
  return <Icon className={responsibilityIconClass} strokeWidth={2} aria-hidden />;
}

const SKILL_ICON_MAP: Record<string, ComponentType<IconProps>> = {
  Figma: FigmaLogo,
  Sketch: SketchLogo,
  "Adobe Suite": AdobeLogo,
  Illustrator: AdobeLogo,
  Wireframing: makeLucideIcon(LayoutTemplate, `${skillIconClass} text-muted-foreground`),
  Prototyping: makeLucideIcon(MousePointerClick, `${skillIconClass} text-muted-foreground`),
  "High-Fidelity UI": makeLucideIcon(Palette, `${skillIconClass} text-muted-foreground`),
  "UX Research": makeLucideIcon(Search, `${skillIconClass} text-muted-foreground`),
  "User Flows": makeLucideIcon(GitBranch, `${skillIconClass} text-muted-foreground`),
  "Usability Testing": makeLucideIcon(TestTube2, `${skillIconClass} text-muted-foreground`),
  "Design Systems": makeLucideIcon(LayoutGrid, `${skillIconClass} text-muted-foreground`),
  Cursor: CursorLogo,
  Vercel: VercelLogo,
  Antigravity: AntigravityLogo,
  Claude: ClaudeLogo,
  "AI-driven Workflows": makeLucideIcon(Brain, `${skillIconClass} text-muted-foreground`),
  "HTML/CSS": makeLucideIcon(Code2, `${skillIconClass} text-muted-foreground`),
};

export function SkillIcon({ name }: { name: string }) {
  const Icon = SKILL_ICON_MAP[name];
  if (!Icon) return null;
  return <Icon />;
}
