import type { ChipCompany } from "../data/projects";

/** Chip color is keyed to company, not to the label — see design_1.md §9.3. */
const chipStyles: Record<ChipCompany, { bg: string; border: string; text: string }> = {
  LH: { bg: "bg-chip-lh-bg", border: "border-chip-lh-text", text: "text-chip-lh-text" },
  Aplo: { bg: "bg-chip-aplo-bg", border: "border-chip-aplo-text", text: "text-chip-aplo-text" },
  Freelance: { bg: "bg-chip-freelance-bg", border: "border-chip-freelance-text", text: "text-chip-freelance-text" },
};

export default function Chip({ company, label }: { company: ChipCompany; label: string }) {
  const s = chipStyles[company];
  return (
    <span
      className={`inline-flex items-center rounded-lg border px-4 py-2 font-body text-sm font-medium ${s.bg} ${s.border} ${s.text}`}
    >
      {label}
    </span>
  );
}
