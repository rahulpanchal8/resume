import { ResponsibilityIcon } from "@/components/design-skill-icons";

interface RolesResponsibilitiesPillsProps {
  skills: readonly string[];
}

export function RolesResponsibilitiesPills({ skills }: RolesResponsibilitiesPillsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="border border-slate-100 rounded-lg bg-slate-50/40 flex items-center cursor-default px-3.5 py-2.5 gap-2"
        >
          <ResponsibilityIcon skill={skill} />
          <span className="text-xs font-semibold text-slate-700 leading-none">{skill}</span>
        </div>
      ))}
    </div>
  );
}
