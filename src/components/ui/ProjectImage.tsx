import Image from "next/image";

type ProjectImageProps = {
  src?: string;
  title: string;
  sizes?: string;
  className?: string;
};

export default function ProjectImage({
  src,
  title,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  className = "",
}: ProjectImageProps) {
  return (
    <div
      className={`relative aspect-video overflow-hidden bg-[var(--glass-border)] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={`Tampilan proyek ${title}`}
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <span
            aria-hidden="true"
            className="font-serif text-5xl italic text-muted"
          >
            {title.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}