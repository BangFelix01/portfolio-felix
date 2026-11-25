type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-3 text-sm uppercase tracking-widest text-muted">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        {title}{" "}
        {accent && (
          <span className="font-serif font-normal italic text-accent">
            {accent}
          </span>
        )}
      </h2>
    </div>
  );
}