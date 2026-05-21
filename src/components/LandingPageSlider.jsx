import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Character image imports ──────────────────────────────────────────────────
import productdesign from "../assets/mayoLandingImage/3DProductDesign.png";
import augmenteddesign from "../assets/mayoLandingImage/AugmentedReality.png";
import cameraexplosion from "../assets/mayoLandingImage/CameraExplosion.png";

// ─── Slide Data — Mayokun's identity spread across 3 slides ──────────────────
const SLIDES = [
  {
    id: 0,
    eyebrow: "WELCOME TO MY PORTFOLIO",
    headline: ["Hi, I'm", "Mayokun", "Alemika"],
    accentLine: "Mayokun",
    subtext: "Senior 3D Developer & Real-Time XR Specialist",
    cta: "SEE MY WORK",
    ctaHref: "#about",
    // Deep teal — picks up the iridescent lens glass greens/cyans in the product image
    bg: "radial-gradient(ellipse 90% 70% at 60% 80%, #002a2e 0%, #001418 45%, #000608 100%)",
    triangleColor: "#00b4c8",
    triangleColor2: "#40ffe8",
    image: productdesign,
    glowColor: "rgba(0,190,200,0.4)",
  },
  {
    id: 1,
    eyebrow: "WHAT I BUILD",
    headline: ["Immersive", "Digital", "Experiences"],
    accentLine: null,
    subtext:
      "Cinematic animations · VR systems · AAA-level interactive environments built for the real-time web",
    cta: "EXPLORE WORK",
    ctaHref: "#projects",
    // Warm coral/rose — matches the flesh, bone and warm medical AR tones
    bg: "radial-gradient(ellipse 90% 70% at 55% 75%, #2e0a0a 0%, #1a0608 45%, #080205 100%)",
    triangleColor: "#e8502a",
    triangleColor2: "#ffaa80",
    image: augmenteddesign,
    glowColor: "rgba(240,100,60,0.38)",
  },
  {
    id: 2,
    eyebrow: "FOUNDER · ALEMIKA STUDIOS",
    headline: ["Building the", "Future of", "Reality"],
    accentLine: "Future of",
    subtext:
      "A creative technology studio crafting the next generation of immersive XR and real-time 3D productions",
    cta: "CONTACT ME",
    ctaHref: "#contact",
    // Amber/gold — the orange lens mount ring and warm circuit board tones
    bg: "radial-gradient(ellipse 90% 70% at 60% 75%, #1f1000 0%, #2e1800 30%, #0d0600 100%)",
    triangleColor: "#c86000",
    triangleColor2: "#ffb830",
    image: cameraexplosion,
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

// Text + triangle slide in from RIGHT, exit to left
const textVariants = {
  enter: (dir) => ({ x: dir * 80, opacity: 0, filter: "blur(10px)" }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir * -80,
    opacity: 0,
    filter: "blur(6px)",
    transition: { duration: 0.45, ease: [0.55, 0, 1, 0.45] },
  }),
};

const triangleVariants = {
  enter: (dir) => ({ x: dir * 180, opacity: 0, rotate: dir * 18, scale: 0.65 }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir * -180,
    opacity: 0,
    rotate: dir * -12,
    scale: 0.75,
    transition: { duration: 0.6 },
  }),
};

// Character image slides in from LEFT, exits to right — opposite of text
const charVariants = {
  enter: (dir) => ({ x: dir * -180, opacity: 0, scale: 0.9 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 },
  },
  exit: (dir) => ({
    x: dir * 160,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.55 },
  }),
};

const wordVariants = {
  enter: { y: 36, opacity: 0 },
  center: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: i * 0.09,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: { y: -16, opacity: 0, transition: { duration: 0.28 } },
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
    // Fill the Hero section completely — no inner frame
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ fontFamily: "'Space Mono', monospace" }}
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>

      {/* ── Persistent animated background — no flash ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ background: slide.bg }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.35'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay",
          opacity: 0.25,
        }}
      />

      {/* Vignette — edges darker so text is always legible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* ── Triangle ── */}
      <AnimatePresence mode="wait" custom={dirVal}>
        <motion.div
          key={`tri-${current}`}
          variants={triangleVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={dirVal}
          className="absolute z-10"
          style={{
            right: "8%",
            top: "clamp(80px, 14vh, 120px)",
            width: "30%",
            height: "50%",
            maxWidth: 340,
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
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <div
            className="absolute"
            style={{
              right: "18%",
              top: "clamp(80px, 14vh, 120px)",
              bottom: 0,
              width: "auto",
              maxWidth: "42%",
            }}
          >
            <img
              src={slide.image}
              alt="character"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                objectPosition: "bottom",
                display: "block",
                filter: `drop-shadow(0 0 60px ${slide.glowColor}) drop-shadow(0 0 120px ${slide.glowColor})`,
                maskImage: "linear-gradient(to top, transparent 0%, black 18%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 18%)",
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Text content — left column ── */}
      <AnimatePresence mode="wait" custom={dirVal}>
        <motion.div
          key={`text-${current}`}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={dirVal}
          className="absolute z-30 flex flex-col justify-center"
          style={{
            left: "clamp(24px, 6vw, 80px)",
            top: "clamp(80px, 14vh, 120px)",
            bottom: 0,
            maxWidth: "clamp(240px, 38%, 440px)",
          }}
        >
          {/* Eyebrow */}
          <motion.p
            custom={0}
            variants={wordVariants}
            className="font-normal tracking-[0.28em] mb-4"
            style={{
              fontSize: "clamp(8px, 1vw, 11px)",
              color: slide.triangleColor2,
              letterSpacing: "0.28em",
            }}
          >
            {slide.eyebrow}
          </motion.p>

          {/* Headline — accent on the designated line */}
          <div className="mb-5">
            {slide.headline.map((line, i) => (
              <motion.div
                key={`${current}-${line}`}
                custom={i + 1}
                variants={wordVariants}
                className="font-bold leading-none block"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 4rem)",
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

          {/* Subtext / descriptor */}
          <motion.p
            custom={4}
            variants={wordVariants}
            className="mb-7 font-normal leading-relaxed"
            style={{
              fontSize: "clamp(10px, 1.2vw, 13px)",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Space Mono', monospace",
              maxWidth: "38ch",
            }}
          >
            {slide.subtext}
          </motion.p>

          {/* CTA */}
          <motion.a
            href={slide.ctaHref}
            custom={5}
            variants={wordVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs tracking-[0.18em] w-fit transition-all duration-300 no-underline"
            style={{
              borderColor: `${slide.triangleColor}70`,
              color: "white",
              background: `${slide.triangleColor}20`,
              fontFamily: "'Space Mono', monospace",
            }}
            whileHover={{
              background: `${slide.triangleColor}45`,
              borderColor: slide.triangleColor2,
              scale: 1.04,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span style={{ color: slide.triangleColor2, fontSize: "0.6rem" }}>
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
          right: "clamp(16px, 3vw, 32px)",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <button
          onClick={() => paginate(-1)}
          className="text-white/35 hover:text-white/80 tracking-widest transition-colors duration-200 pb-1"
          style={{ fontSize: 9, fontFamily: "'Space Mono', monospace" }}
        >
          PREV
        </button>
        <div className="w-px h-5 bg-white/20" />
        <button
          onClick={() => paginate(1)}
          className="text-white/80 hover:text-white tracking-widest transition-colors duration-200 pt-1"
          style={{ fontSize: 9, fontFamily: "'Space Mono', monospace" }}
        >
          NEXT
        </button>

        {/* Slide dots */}
        <div className="mt-3 flex flex-col gap-1.5 items-center">
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
                opacity: i === current ? 1 : 0.22,
                scale: i === current ? 1.4 : 1,
              }}
              className="rounded-full block"
              style={{
                width: 4,
                height: 4,
                background: i === current ? slide.triangleColor2 : "white",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Slide counter — bottom left ── */}
      <div
        className="absolute z-40 flex items-center gap-2"
        style={{
          left: "clamp(24px, 6vw, 80px)",
          bottom: "clamp(90px, 14vh, 120px)",
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.2em",
        }}
      >
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: slide.triangleColor2, fontSize: 13 }}
        >
          0{current + 1}
        </motion.span>
        <span>/</span>
        <span>0{SLIDES.length}</span>

        {/* Progress bar */}
        <div
          className="ml-2 relative rounded-full overflow-hidden"
          style={{ width: 60, height: 2, background: "rgba(255,255,255,0.12)" }}
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
