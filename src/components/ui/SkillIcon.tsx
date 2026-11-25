import * as SiIcons from "react-icons/si";
import type { IconType } from "react-icons";

const icons = SiIcons as unknown as Record<string, IconType | undefined>;

type SkillIconProps = {
  name?: string;
  label: string;
};

export default function SkillIcon({ name, label }: SkillIconProps) {
  const Icon = name ? icons[name] : undefined;

  if (!Icon) {
    return (
      <span
        aria-hidden="true"
        className="flex size-5 items-center justify-center rounded-md bg-[var(--glass-border)] text-[10px] font-medium"
      >
        {label.charAt(0)}
      </span>
    );
  }

  return <Icon aria-hidden="true" className="size-5" />;
}