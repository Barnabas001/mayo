import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Image imports ────────────────────────────────────────────────────────────
import productdesign from "../assets/mayoLandingImage/3DProductdesign.webp";
import aaaCharacter from "../assets/mayoLandingImage/AAAGameCharacterDesign.webp";
import archViz from "../assets/mayoLandingImage/ArchitecturalVisualizationFinal.webp";
import assetPack from "../assets/mayoLandingImage/AssetPack.webp";
import mobileGame from "../assets/mayoLandingImage/MobileGameDevelopment.webp";

// ─── Slide Data ───────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    eyebrow: "WELCOME TO MY PORTFOLIO",
    headline: ["Hi, I'm", "Mayokun", "Alemika"],
    accentLine: "Mayokun",
    subtext: "Senior 3D Developer & Real-Time XR Specialist",
    cta: "SEE MY WORK",
    ctaHref: "#about",
    bg: "radial-gradient(ellipse 90% 70% at 60% 80%, #002a2e 0%, #001418 45%, #000608 100%)",
    triangleColor: "#00b4c8",
    triangleColor2: "#40ffe8",
    image: productdesign,
    glowColor: "rgba(0,190,200,0.4)",
  },
  {
    id: 1,
    eyebrow: "AAA GAME CHARACTER DESIGN",
    headline: ["Battle-Ready", "AAA Game", "Characters"],
    accentLine: "AAA Game",
    subtext:
      "Hyper-realistic warrior characters crafted for AAA game pipelines — every detail battle-worn and authentic",
    cta: "VIEW WORK",
    ctaHref: "#projects",
    bg: "radial-gradient(ellipse 90% 70% at 55% 80%, #2a0008 0%, #160005 45%, #080002 100%)",
    triangleColor: "#8b0020",
    triangleColor2: "#ff3355",
    image: aaaCharacter,
    glowColor: "rgba(180,0,40,0.45)",
  },
  {
    id: 2,
    eyebrow: "ARCHITECTURAL VISUALIZATION",
    headline: ["Spaces That", "Feel Real", "Before Built"],
    accentLine: "Feel Real",
    subtext:
      "Photorealistic architectural renders and walkthroughs that help clients visualize spaces before construction begins",
    cta: "EXPLORE",
    ctaHref: "#projects",
    bg: "radial-gradient(ellipse 90% 70% at 55% 75%, #1e1400 0%, #120d00 45%, #080600 100%)",
    triangleColor: "#c89040",
    triangleColor2: "#ffd580",
    image: archViz,
    glowColor: "rgba(200,150,50,0.38)",
  },
  {
    id: 3,
    eyebrow: "GAME ASSET PRODUCTION",
    headline: ["Complete", "Game-Ready", "Asset Packs"],
    accentLine: "Game-Ready",
    subtext:
      "Full asset packs — characters, props, environments — optimised for Unity and Unreal Engine",
    cta: "SEE PACKS",
    ctaHref: "#projects",
    bg: "radial-gradient(ellipse 90% 70% at 55% 75%, #001a0a 0%, #001008 45%, #000503 100%)",
    triangleColor: "#00803a",
    triangleColor2: "#40e888",
    image: assetPack,
    glowColor: "rgba(0,160,80,0.38)",
  },
  {
    id: 4,
    eyebrow: "MOBILE GAME DEVELOPMENT",
    headline: ["Immersive", "Mobile Game", "Worlds"],
    accentLine: "Mobile Game",
    subtext:
      "Isometric mobile game environments with rich detail, vibrant palettes and optimised performance",
    cta: "DISCOVER",
    ctaHref: "#projects",
    bg: "radial-gradient(ellipse 90% 70% at 55% 75%, #001a1a 0%, #001010 45%, #000606 100%)",
    triangleColor: "#007a7a",
    triangleColor2: "#40d4cc",
    image: mobileGame,
    glowColor: "rgba(0,160,155,0.4)",
  },
  {
    id: 5,
    eyebrow: "FOUNDER · ALEMIKA STUDIOS",
    headline: ["Building the", "Future of", "Reality"],
    accentLine: "Future of",
    subtext:
      "A creative technology studio crafting the next generation of immersive XR and real-time 3D productions",
    cta: "CONTACT ME",
    ctaHref: "#contact",
    bg: "radial-gradient(ellipse 90% 70% at 60% 75%, #1f1000 0%, #2e1800 30%, #0d0600 100%)",
    triangleColor: "#c86000",
    triangleColor2: "#ffb830",
    image: productdesign,
    glowColor: "rgba(210,110,0,0.42)",
  },
];

// ─── Triangle Shape ───────────────────────────────────────────────────────────
function TriangleShape({ color1, color2, id }) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={`tg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color2} />
          <stop offset="100%" stopColor={color1} />
        </linearGradient>
      </defs>
      <polygon points="0,0 200,90 0,180" fill={`url(#tg-${id})`} />
    </svg>
  );
}

// ─── Animation Variants ───────────────────────────────────────────────────────
// Text slides in from RIGHT, exits LEFT
const textVariants = {
  enter: (dir) => ({ x: dir * 60, opacity: 0, filter: "blur(8px)" }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir * -60,
    opacity: 0,
    filter: "blur(5px)",
    transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
  }),
};

// Triangle slides in from RIGHT, exits LEFT
const triangleVariants = {
  enter: (dir) => ({ x: dir * 160, opacity: 0, rotate: dir * 16, scale: 0.6 }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir * -140,
    opacity: 0,
    rotate: dir * -10,
    scale: 0.7,
    transition: { duration: 0.55 },
  }),
};

// Image slides in from LEFT, exits RIGHT — opposite of text/triangle
const charVariants = {
  enter: (dir) => ({ x: dir * -160, opacity: 0, scale: 0.88 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.06 },
  },
  exit: (dir) => ({
    x: dir * 140,
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.5 },
  }),
};

const wordVariants = {
  enter: { y: 28, opacity: 0 },
  center: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: { y: -12, opacity: 0, transition: { duration: 0.25 } },
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LandingPageSlider() {
  const [current, setCurrent] = useState(0);
  const [dirVal, setDirVal] = useState(1);
  const [isAnimating, setAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const paginate = useCallback(
    (newDir) => {
      if (isAnimating) return;
      setAnimating(true);
      setDirVal(newDir);
      setCurrent((prev) => (prev + newDir + SLIDES.length) % SLIDES.length);
      setTimeout(() => setAnimating(false), 1100);
    },
    [isAnimating],
  );

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [autoplay, paginate]);

  const slide = SLIDES[current];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ fontFamily: "'Space Mono', monospace" }}
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      onTouchStart={() => setAutoplay(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        /*
         * Mobile overrides (≤ 767px):
         *   - .slider-text  → top half of screen
         *   - .slider-tri   → bottom half, overlaps with image (z:10, behind)
         *   - .slider-char  → bottom half, in front of triangle (z:20)
         * Desktop styles come from inline style props — untouched.
         */
        @media (max-width: 767px) {
          .slider-text {
            top: 68px !important;
            bottom: 50% !important;
            left: 20px !important;
            right: 48px !important;
            max-width: 100% !important;
            justify-content: flex-start !important;
            padding-top: 14px;
          }
          .slider-tri {
            top: 48% !important;
            bottom: 56px !important;
            right: 0 !important;
            left: 8% !important;
            width: 84% !important;
            max-width: 100% !important;
            height: auto !important;
          }
          .slider-char {
            top: 46% !important;
            bottom: 50px !important;
            right: 0 !important;
            left: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* ── Background — persistent, no flash ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ background: slide.bg }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.35'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay",
          opacity: 0.2,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 35%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ── Triangle — slides in from RIGHT ── */}
      <AnimatePresence mode="wait" custom={dirVal}>
        <motion.div
          key={`tri-${current}`}
          variants={triangleVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={dirVal}
          className="absolute z-10 slider-tri"
          style={{
            right: "clamp(4%, 8%, 12%)",
            top: "clamp(60px, 10vh, 120px)",
            width: "clamp(120px, 28vw, 320px)",
            height: "clamp(110px, 25vw, 50%)",
            maxWidth: 320,
          }}
        >
          <TriangleShape
            color1={slide.triangleColor}
            color2={slide.triangleColor2}
            id={current}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Character image — slides in from LEFT ── */}
      <AnimatePresence mode="wait" custom={dirVal}>
        <motion.div
          key={`char-${current}`}
          variants={charVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={dirVal}
          className="absolute z-20 pointer-events-none slider-char"
          style={{
            right: "clamp(2%, 10%, 18%)",
            top: "clamp(55px, 9vh, 120px)",
            bottom: 0,
            width: "clamp(140px, 42vw, 44%)",
          }}
        >
          <img
            src={slide.image}
            alt="slide visual"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "bottom center",
              display: "block",
              filter: `drop-shadow(0 0 40px ${slide.glowColor}) drop-shadow(0 0 100px ${slide.glowColor})`,
              maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 15%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Text content — slides in from RIGHT ── */}
      <AnimatePresence mode="wait" custom={dirVal}>
        <motion.div
          key={`text-${current}`}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={dirVal}
          className="absolute z-30 flex flex-col justify-center slider-text"
          style={{
            left: "clamp(20px, 5vw, 80px)",
            top: "clamp(55px, 9vh, 120px)",
            bottom: "clamp(80px, 12vh, 120px)",
            maxWidth: "clamp(200px, 52vw, 440px)",
          }}
        >
          {/* Eyebrow */}
          <motion.p
            custom={0}
            variants={wordVariants}
            style={{
              fontSize: "clamp(7px, 1.8vw, 11px)",
              color: slide.triangleColor2,
              letterSpacing: "0.25em",
              marginBottom: "clamp(6px, 1.5vh, 16px)",
              fontWeight: 400,
            }}
          >
            {slide.eyebrow}
          </motion.p>

          {/* Headline */}
          <div style={{ marginBottom: "clamp(8px, 1.8vh, 20px)" }}>
            {slide.headline.map((line, i) => (
              <motion.div
                key={`${current}-${line}`}
                custom={i + 1}
                variants={wordVariants}
                className="font-bold block"
                style={{
                  fontSize: "clamp(1.5rem, 5.5vw, 3.8rem)",
                  lineHeight: 1.05,
                  color:
                    line === slide.accentLine ? slide.triangleColor2 : "white",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            custom={4}
            variants={wordVariants}
            style={{
              fontSize: "clamp(9px, 1.4vw, 13px)",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "clamp(10px, 2vh, 28px)",
              maxWidth: "36ch",
              lineHeight: 1.6,
            }}
          >
            {slide.subtext}
          </motion.p>

          {/* CTA */}
          <motion.a
            href={slide.ctaHref}
            custom={5}
            variants={wordVariants}
            className="inline-flex items-center gap-2 rounded-full border tracking-[0.15em] w-fit no-underline"
            style={{
              padding: "clamp(6px, 1.2vh, 10px) clamp(14px, 2.5vw, 20px)",
              fontSize: "clamp(8px, 1.3vw, 11px)",
              borderColor: `${slide.triangleColor}70`,
              color: "white",
              background: `${slide.triangleColor}22`,
              fontFamily: "'Space Mono', monospace",
            }}
            whileHover={{
              background: `${slide.triangleColor}44`,
              borderColor: slide.triangleColor2,
              scale: 1.04,
            }}
            whileTap={{ scale: 0.96 }}
          >
            <span style={{ color: slide.triangleColor2, fontSize: "0.55rem" }}>
              ▶
            </span>
            {slide.cta}
          </motion.a>
        </motion.div>
      </AnimatePresence>

      {/* ── PREV / NEXT navigator ── */}
      <div
        className="absolute z-40 flex flex-col items-center gap-1"
        style={{
          right: "clamp(10px, 2vw, 28px)",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <button
          onClick={() => paginate(-1)}
          style={{
            fontSize: 8,
            fontFamily: "'Space Mono', monospace",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.15em",
            paddingBottom: 4,
          }}
        >
          PREV
        </button>
        <div
          style={{ width: 1, height: 16, background: "rgba(255,255,255,0.2)" }}
        />
        <button
          onClick={() => paginate(1)}
          style={{
            fontSize: 8,
            fontFamily: "'Space Mono', monospace",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.15em",
            paddingTop: 4,
          }}
        >
          NEXT
        </button>

        {/* Dots */}
        <div className="mt-2 flex flex-col gap-1.5 items-center">
          {SLIDES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  setDirVal(i > current ? 1 : -1);
                  setAnimating(true);
                  setCurrent(i);
                  setTimeout(() => setAnimating(false), 1100);
                }
              }}
              animate={{
                opacity: i === current ? 1 : 0.2,
                scale: i === current ? 1.5 : 1,
              }}
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: i === current ? slide.triangleColor2 : "white",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Slide counter + progress bar ── */}
      <div
        className="absolute z-40 flex items-center gap-2"
        style={{
          left: "clamp(20px, 5vw, 80px)",
          bottom: "clamp(70px, 10vh, 110px)",
          fontFamily: "'Space Mono', monospace",
          fontSize: 9,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.2em",
        }}
      >
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: slide.triangleColor2, fontSize: 12 }}
        >
          {String(current + 1).padStart(2, "0")}
        </motion.span>
        <span>/</span>
        <span>{String(SLIDES.length).padStart(2, "0")}</span>

        <div
          className="ml-2 relative rounded-full overflow-hidden"
          style={{
            width: "clamp(40px, 6vw, 60px)",
            height: 2,
            background: "rgba(255,255,255,0.12)",
          }}
        >
          <motion.div
            key={`bar-${current}`}
            className="absolute left-0 top-0 h-full rounded-full"
            style={{ background: slide.triangleColor2 }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
