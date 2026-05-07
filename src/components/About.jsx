import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ─── SERVICE CARD (carousel tile) ────────────────────────────────────────────

const DEFAULT_COLORS = [
  { color: "#0f3460", accent: "#533483" },
  { color: "#1a472a", accent: "#2d6a4f" },
  { color: "#7b2d8b", accent: "#c77dff" },
  { color: "#b5451b", accent: "#e76f51" },
];

const ServiceCard = ({ service, index, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const { color, accent } = service.color
    ? service
    : DEFAULT_COLORS[index % DEFAULT_COLORS.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        type: "spring",
        stiffness: 200,
        damping: 22,
      }}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative cursor-pointer"
      style={{
        background: `linear-gradient(145deg, ${accent}, ${color})`,
        borderRadius: 24,
        minWidth: 220,
        flex: "0 0 240px",
        overflow: "visible",
        padding: "0 0 28px 0",
        boxShadow: hovered
          ? `0 28px 56px ${color}99`
          : `0 10px 30px ${color}66`,
        transition: "box-shadow 0.3s ease",
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Icon floating above card */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        style={{ top: -58 }}
        animate={{ y: hovered ? -10 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 116,
            height: 116,
            background: `radial-gradient(circle at 35% 35%, ${accent}cc, ${color})`,
            boxShadow: `0 10px 36px ${color}99`,
            border: `2px solid rgba(255,255,255,0.18)`,
          }}
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-14 h-14 object-contain"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
          />
        </div>
      </motion.div>

      {/* Card body */}
      <div style={{ paddingTop: 72, paddingLeft: 20, paddingRight: 20 }}>
        <h3
          className="text-white font-bold text-center leading-tight"
          style={{ fontSize: 19, marginBottom: 6 }}
        >
          {service.title}
        </h3>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="flex items-center justify-center gap-1 mt-4"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.4,
                textTransform: "uppercase",
              }}
            >
              VIEW MORE <span style={{ fontSize: 15 }}>›</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── DETAIL PANEL ─────────────────────────────────────────────────────────────
const DetailPanel = ({ service, allServices, onClose, onSelect }) => {
  const [showMore, setShowMore] = useState(false);
  const { color, accent } = service.color
    ? service
    : DEFAULT_COLORS[
        allServices.findIndex((s) => s.title === service.title) %
          DEFAULT_COLORS.length
      ];

  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 20 }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="flex w-full"
      style={{ borderRadius: 20, overflow: "hidden", minHeight: 280 }}
    >
      {/* ── Side switcher ── */}
      <div
        className="flex flex-col items-center justify-center gap-1 py-4"
        style={{
          width: 48,
          background: "#1d1d2e",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}
      >
        {allServices.map((s, i) => {
          const isActive = s.title === service.title;
          const { color: sc } = s.color
            ? s
            : DEFAULT_COLORS[i % DEFAULT_COLORS.length];
          return (
            <motion.button
              key={s.title}
              onClick={() => onSelect(s)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.94 }}
              className="flex items-center justify-center"
              style={{
                background: isActive ? sc : "transparent",
                border: "none",
                borderRadius: 8,
                padding: "6px 4px",
                cursor: "pointer",
                writingMode: "vertical-rl",
                color: isActive ? "#fff" : "rgba(255,255,255,0.3)",
                fontSize: isActive ? 9 : 8,
                fontWeight: isActive ? 700 : 400,
                letterSpacing: 0.5,
                width: 36,
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {s.title.split(" ")[0]}
            </motion.button>
          );
        })}

        {/* Animated chevron */}
        <motion.div
          className="mt-2 cursor-pointer"
          style={{ color: "rgba(255,255,255,0.2)", fontSize: 16 }}
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          onClick={() => setShowMore((p) => !p)}
        >
          ∨
        </motion.div>
      </div>

      {/* ── Icon / visual half ── */}
      <motion.div
        className="flex items-center justify-center relative overflow-hidden"
        style={{
          flex: "0 0 200px",
          background: "#15152a",
        }}
      >
        {/* Background glow blob */}
        <div
          style={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}44, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
        <motion.div
          key={service.title}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          className="relative z-10"
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 120,
              height: 120,
              background: `radial-gradient(circle at 35% 35%, ${accent}bb, ${color})`,
              boxShadow: `0 0 60px ${color}88`,
              border: `2px solid rgba(255,255,255,0.12)`,
            }}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-14 h-14 object-contain"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Info half ── */}
      <motion.div
        key={`info-${service.title}`}
        initial={{ x: 24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 22,
          delay: 0.05,
        }}
        className="flex flex-col justify-start relative overflow-hidden"
        style={{
          flex: 1,
          background: `linear-gradient(135deg, ${color}f0, ${accent}cc)`,
          padding: "20px 18px 20px 22px",
        }}
      >
        {/* Decorative corner shine */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute flex items-center gap-1"
          style={{
            top: 12,
            right: 12,
            background: "rgba(255,255,255,0.15)",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            cursor: "pointer",
            padding: "4px 10px",
            fontSize: 11,
            fontWeight: 600,
            backdropFilter: "blur(4px)",
          }}
        >
          × Close
        </button>

        {/* Title */}
        <motion.h3
          key={service.title}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white font-black leading-tight"
          style={{
            fontSize: 22,
            marginBottom: 6,
            marginTop: 4,
            fontFamily: "inherit",
          }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          key={`desc-${service.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08 }}
          className="text-white leading-relaxed"
          style={{ fontSize: 12.5, opacity: 0.85, lineHeight: 1.75 }}
        >
          {service.description ||
            `Expert ${service.title} services crafted with precision, creativity, and years of hands-on experience building immersive digital experiences.`}
        </motion.p>

        {/* Highlights / skills accordion */}
        {service.highlights?.length > 0 && (
          <div className="mt-3">
            <button
              onClick={() => setShowMore((p) => !p)}
              className="flex items-center gap-1"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.6)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                padding: 0,
                marginBottom: 6,
              }}
            >
              Highlights {showMore ? "▲" : "▼"}
            </button>
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-wrap gap-2 overflow-hidden"
                >
                  {service.highlights.map((h, i) => (
                    <motion.span
                      key={h}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: 20,
                        padding: "3px 10px",
                        fontSize: 10,
                        color: "#fff",
                        backdropFilter: "blur(4px)",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// ─── ABOUT SECTION ────────────────────────────────────────────────────────────
const About = () => {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Heading ── */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* ── Bio paragraph ── */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a multidisciplinary 3D developer and creative technologist with
        over 7 years of experience in 3D animation, real-time rendering, VR/AR
        systems and interactive product development. I specialize in Unreal
        Engine 5, Blender, cinematic animation, geometry nodes workflows and
        immersive XR experiences. I have worked as a 3D Developer and Creative
        UX Designer at AB-InBev, contributing to large-scale digital and
        experiential initiatives. Today, I lead ALEMIKA Studios — a multimedia
        production and interactive technology studio developing high-end
        animations, VR modules, digital products, and AAA game projects.
      </motion.p>

      {/* ── Services — card carousel + detail panel ── */}
      <div className="mt-20 w-full">
        <AnimatePresence mode="wait">
          {selected ? (
            /* DETAIL VIEW */
            <DetailPanel
              key="detail"
              service={selected}
              allServices={services}
              onClose={() => setSelected(null)}
              onSelect={setSelected}
            />
          ) : (
            /* CAROUSEL VIEW */
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-6"
                style={{
                  paddingTop: 72, // headroom for bigger floating icons
                  scrollbarWidth: "thin",
                }}
              >
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                    onClick={() => setSelected(service)}
                  />
                ))}
              </div>

              {/* Prev / Next scroll controls */}
              <div className="flex justify-end gap-4 mt-4">
                {[
                  { label: "‹ Prev", dir: -1 },
                  { label: "Next ›", dir: 1 },
                ].map(({ label, dir }) => (
                  <button
                    key={label}
                    onClick={() => scroll(dir)}
                    className="text-secondary text-sm hover:text-white transition-colors"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
