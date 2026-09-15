type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#A88A5A]">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-[#202321] md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-[#73766F] md:text-lg">{description}</p> : null}
    </div>
  );
}
