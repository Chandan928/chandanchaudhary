"use client";

import Image from "next/image";

const logos = [
  { src: "/images/logos/a23-logo.png",                   alt: "A23" },
  { src: "/images/logos/adscholars-logo.png",            alt: "AdScholars" },
  { src: "/images/logos/apalya-logo-black.png",          alt: "Apalya" },
  { src: "/images/logos/blockify-logo.png",              alt: "Blockify" },
  { src: "/images/logos/cutshort-logo.png",              alt: "Cutshort" },
  { src: "/images/logos/digitalnext-logo.png",           alt: "DigitalNext" },
  { src: "/images/logos/driven-properties-logo.png",     alt: "Driven Properties" },
  { src: "/images/logos/grabon-logo-main.png",           alt: "GrabOn" },
  { src: "/images/logos/keka-hr-logo.png",               alt: "Keka HR" },
  { src: "/images/logos/kims-hospitals-logo.png",        alt: "KIMS Hospitals" },
  { src: "/images/logos/lagado-watches-logo.png",        alt: "Lagado Watches" },
  { src: "/images/logos/medicover-hospitals-logo.png",   alt: "Medicover Hospitals" },
  { src: "/images/logos/olostep-logo.png",               alt: "Olostep" },
  { src: "/images/logos/qualitest-logo.png",             alt: "Qualitest" },
  { src: "/images/logos/quillbot-logo.png",              alt: "QuillBot" },
  { src: "/images/logos/sapil-logo.png",                 alt: "Sapil" },
  { src: "/images/logos/solvetude-logo.png",             alt: "Solvetude" },
  { src: "/images/logos/sp-tech-logo.png",               alt: "SP Tech" },
  { src: "/images/logos/triviaroo-logo.png",             alt: "Triviaroo" },
  { src: "/images/logos/turito-logo.png",                alt: "Turito" },
  { src: "/images/logos/venngage-logo.png",              alt: "Venngage" },
  { src: "/images/logos/wiingy-logo.png",                alt: "Wiingy" },
  { src: "/images/logos/yupptv-logo.png",                alt: "YuppTV" },
];

export function LogoStrip() {
  return (
    <section
      aria-label="Brands worked with"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        overflow: "hidden",
        padding: "1.5rem 0",
      }}
    >
      <div className="container" style={{ marginBottom: "1rem" }}>
        <p className="section-label" style={{ marginBottom: 0 }}>
          Trusted by fast-growing teams at
        </p>
      </div>

      <div className="logo-strip-track" aria-hidden="true">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="logo-item">
            <div
              style={{
                position: "relative",
                width: "100px",
                height: "36px",
                overflow: "hidden",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="logo-img"
                style={{ objectFit: "contain", objectPosition: "center" }}
                onError={(e) => {
                  const wrapper = (e.currentTarget as HTMLImageElement).parentElement
                    ?.parentElement;
                  if (wrapper) wrapper.style.display = "none";
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="sr-only">
        Brands served: {logos.map((l) => l.alt).join(", ")}
      </p>
    </section>
  );
}
