import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  heading?: string;
  subheading?: string;
  variant?: "light" | "dark" | "accent";
  children: ReactNode;
};

export function SectionShell({ id, heading, subheading, variant = "light", children }: SectionShellProps): JSX.Element {
  return (
    <section id={id} className={`section-shell section-${variant}`}>
      <div className="shell">
        {heading ? <h2>{heading}</h2> : null}
        {subheading ? <p className="section-subheading">{subheading}</p> : null}
        {children}
      </div>
    </section>
  );
}
