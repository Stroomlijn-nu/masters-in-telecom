import { useState } from "react";

// Toont de afbeelding, valt terug op de paars-naar-roze huisstijlgradient
// als het bestand (nog) niet in /public/assets staat.
export default function BlogImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-[#951B81] to-[#D60B52] ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
