import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Slide Data — Mayokun's identity spread across 3 slides ──────────────────
const SLIDES = [
  {
    id: 0,
    // Slide 1: The name & title — the intro
    eyebrow: "WELCOME TO MY PORTFOLIO",
    headline: ["Hi, I'm", "Mayokun", "Alemika"],
    accentLine: "Mayokun", // which headline line gets accent color
    subtext: "Senior 3D Developer & Real-Time XR Specialist",
    cta: "SEE MY WORK",
    ctaHref: "#about",
    bg: "radial-gradient(ellipse 90% 70% at 65% 75%, #0d1a3a 0%, #050d1f 45%, #020509 100%)",
    triangleColor: "#0066ff",
    triangleColor2: "#00F5FF",
    robotStyle: { right: "10%", bottom: "0%", height: "88%" },
    robotTone: "teal",
  },
  {
    id: 1,
    // Slide 2: The craft — what he builds
    eyebrow: "WHAT I BUILD",
    headline: ["Immersive", "Digital", "Experiences"],
    accentLine: null,
    subtext:
      "Cinematic animations · VR systems · AAA-level interactive environments built for the real-time web",
    cta: "EXPLORE WORK",
    ctaHref: "#projects",
    bg: "radial-gradient(ellipse 90% 70% at 55% 75%, #2d0a4e 0%, #150828 45%, #060209 100%)",
    triangleColor: "#9d00ff",
    triangleColor2: "#d580ff",
    robotStyle: { right: "8%", bottom: "0%", height: "92%" },
    robotTone: "purple",
  },
  {
    id: 2,
    // Slide 3: The studio — founder identity
    eyebrow: "FOUNDER · ALEMIKA STUDIOS",
    headline: ["Building the", "Future of", "Reality"],
    accentLine: "Future of",
    subtext:
      "A creative technology studio crafting the next generation of immersive XR and real-time 3D productions",
    cta: "CONTACT ME",
    ctaHref: "#contact",
    bg: "radial-gradient(ellipse 90% 70% at 60% 75%, #1a0a00 0%, #2a0f00 30%, #0d0500 100%)",
    triangleColor: "#ff4d00",
    triangleColor2: "#ff9940",
    robotStyle: { right: "9%", bottom: "0%", height: "90%" },
    robotTone: "amber",
  },
];

// ─── SVG Robot Figure ─────────────────────────────────────────────────────────
function RobotFigure({ tone, style }) {
  const colors = {
    teal: { body: "#0d1f2a", accent: "#00F5FF", glow: "rgba(0,200,220,0.25)" },
    purple: {
      body: "#1a0d2e",
      accent: "#d580ff",
      glow: "rgba(160,60,255,0.25)",
    },
    amber: {
      body: "#1f0e00",
      accent: "#ff9940",
      glow: "rgba(255,120,20,0.25)",
    },
    pink: { body: "#2a0a1a", accent: "#ff2d7a", glow: "rgba(212,0,106,0.25)" },
  };
  const c = colors[tone] || colors.teal;
  return (
    <div className="absolute pointer-events-none" style={style}>
      <svg
        viewBox="0 0 220 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          height: "100%",
          width: "auto",
          filter: `drop-shadow(0 0 40px ${c.glow}) drop-shadow(0 0 100px ${c.glow})`,
        }}
      >
        <ellipse cx="110" cy="400" rx="70" ry="18" fill={c.glow} />
        <rect x="75" y="20" width="70" height="65" rx="12" fill={c.body} />
        <rect x="85" y="32" width="50" height="30" rx="6" fill="#050510" />
        <rect
          x="90"
          y="38"
          width="18"
          height="12"
          rx="3"
          fill={c.accent}
          opacity="0.9"
        />
        <rect
          x="112"
          y="38"
          width="18"
          height="12"
          rx="3"
          fill={c.accent}
          opacity="0.9"
        />
        <rect
          x="82"
          y="72"
          width="56"
          height="6"
          rx="3"
          fill={c.accent}
          opacity="0.4"
        />
        <rect x="100" y="84" width="20" height="16" rx="4" fill={c.body} />
        <path d="M60 100 L160 100 L155 220 L65 220 Z" fill={c.body} />
        <rect x="80" y="115" width="60" height="40" rx="6" fill="#050510" />
        <circle
          cx="110"
          cy="135"
          r="12"
          fill="none"
          stroke={c.accent}
          strokeWidth="2"
        />
        <circle cx="110" cy="135" r="6" fill={c.accent} opacity="0.7" />
        <rect
          x="76"
          y="165"
          width="68"
          height="3"
          rx="1.5"
          fill={c.accent}
          opacity="0.3"
        />
        <rect
          x="76"
          y="172"
          width="44"
          height="3"
          rx="1.5"
          fill={c.accent}
          opacity="0.2"
        />
        <circle cx="52" cy="108" r="14" fill={c.body} />
        <rect x="36" y="118" width="20" height="70" rx="10" fill={c.body} />
        <rect x="34" y="188" width="24" height="14" rx="7" fill={c.body} />
        <rect x="36" y="200" width="8" height="30" rx="4" fill={c.body} />
        <rect x="46" y="200" width="8" height="28" rx="4" fill={c.body} />
        <circle cx="168" cy="108" r="14" fill={c.body} />
        <rect x="164" y="118" width="20" height="70" rx="10" fill={c.body} />
        <rect x="162" y="188" width="24" height="14" rx="7" fill={c.body} />
        <rect x="164" y="200" width="8" height="30" rx="4" fill={c.body} />
        <rect x="174" y="200" width="8" height="28" rx="4" fill={c.body} />
        <rect x="68" y="218" width="84" height="30" rx="8" fill={c.body} />
        <rect x="72" y="246" width="32" height="80" rx="10" fill={c.body} />
        <rect x="72" y="320" width="32" height="20" rx="6" fill={c.body} />
        <rect x="66" y="338" width="44" height="14" rx="7" fill={c.body} />
        <rect x="116" y="246" width="32" height="80" rx="10" fill={c.body} />
        <rect x="116" y="320" width="32" height="20" rx="6" fill={c.body} />
        <rect x="110" y="338" width="44" height="14" rx="7" fill={c.body} />
        <rect
          x="74"
          y="260"
          width="28"
          height="2"
          rx="1"
          fill={c.accent}
          opacity="0.4"
        />
        <rect
          x="118"
          y="260"
          width="28"
          height="2"
          rx="1"
          fill={c.accent}
          opacity="0.4"
        />
        <rect
          x="40"
          y="130"
          width="16"
          height="2"
          rx="1"
          fill={c.accent}
          opacity="0.5"
        />
        <rect
          x="164"
          y="130"
          width="16"
          height="2"
          rx="1"
          fill={c.accent}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

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
const textVariants = {
  enter: (dir) => ({ x: dir * -60, opacity: 0, filter: "blur(10px)" }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir * 60,
    opacity: 0,
    filter: "blur(6px)",
    transition: { duration: 0.45, ease: [0.55, 0, 1, 0.45] },
  }),
};

const triangleVariants = {
  enter: (dir) => ({ x: dir * 220, opacity: 0, rotate: dir * 18, scale: 0.65 }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir * -200,
    opacity: 0,
    rotate: dir * -12,
    scale: 0.75,
    transition: { duration: 0.6 },
  }),
};

const robotVariants = {
  enter: (dir) => ({ x: dir * 180, opacity: 0, scale: 0.9 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 },
  },
  exit: (dir) => ({
    x: dir * -160,
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
            right: "12%",
            top: "10%",
            width: "32%",
            height: "50%",
            maxWidth: 380,
          }}
        >
          <TriangleShape
            color1={slide.triangleColor}
            color2={slide.triangleColor2}
            id={current}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Robot ── */}
      <AnimatePresence mode="wait" custom={dirVal}>
        <motion.div
          key={`robot-${current}`}
          variants={robotVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={dirVal}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <RobotFigure
            tone={slide.robotTone}
            style={{ ...slide.robotStyle, position: "absolute" }}
          />
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
            top: 0,
            bottom: 0,
            maxWidth: "clamp(260px, 46%, 520px)",
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
