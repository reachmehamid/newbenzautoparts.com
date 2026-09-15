type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8943E]">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold text-[#1A1A1A] md:text-3xl">{title}</h2>
      {description ? <p className="mt-2 text-sm text-[#6B6B6B]">{description}</p> : null}
    </div>
  );
}
