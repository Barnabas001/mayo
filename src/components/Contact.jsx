import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// ─── Import LOD images
import lod0 from "../assets/mayoImages/LOD0.png";
import lod1 from "../assets/mayoImages/LOD1.png";
import lod2 from "../assets/mayoImages/LOD2.png";
import lod3 from "../assets/mayoImages/LOD3.png";
import lod4 from "../assets/mayoImages/LOD4.png";
import lod5 from "../assets/mayoImages/LOD5.png";

// ─── Slider images with accent colours
const GALLERY = [
  {
    src: lod0,
    accent: "#00F5FF",
    glow: "rgba(0,200,220,0.4)",
  },
  {
    src: lod1,
    accent: "#d580ff",
    glow: "rgba(160,60,255,0.4)",
  },
  {
    src: lod2,
    accent: "#ff9940",
    glow: "rgba(255,140,20,0.4)",
  },
  {
    src: lod3,
    accent: "#80ffea",
    glow: "rgba(50,220,180,0.4)",
  },
  {
    src: lod4,
    accent: "#ffcc44",
    glow: "rgba(255,190,30,0.4)",
  },
  {
    src: lod5,
    accent: "#ff6eb4",
    glow: "rgba(255,80,160,0.4)",
  },
];

const imgVariants = {
  enter: {
    opacity: 0,
    scale: 1,
    filter: "blur(2px)",
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 1,
    filter: "blur(2px)",
    transition: { duration: 1.1, ease: "easeInOut" },
  },
};

// Image Slider
function ContactImageSlider() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [auto, setAuto] = useState(true);

  const go = (newDir) => {
    setDir(newDir);
    setIdx((p) => (p + newDir + GALLERY.length) % GALLERY.length);
  };

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => go(1), 3500);
    return () => clearInterval(t);
  }, [auto, idx]);

  const item = GALLERY[idx];

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden flex items-end justify-center"
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a0d2e 100%)",
        minHeight: 250,
      }}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      {/* Animated glow backdrop */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${item.glow} 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Character image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={item.src}
          alt="gallery"
          variants={imgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-10"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
            filter: `drop-shadow(0 0 40px ${item.glow}) drop-shadow(0 0 80px ${item.glow})`,
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)",
          }}
        />
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {GALLERY.map((g, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setDir(i > idx ? 1 : -1);
              setIdx(i);
            }}
            animate={{
              opacity: i === idx ? 1 : 0.25,
              scale: i === idx ? 1.4 : 1,
            }}
            className="rounded-full"
            style={{
              width: 5,
              height: 5,
              background: i === idx ? item.accent : "white",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Prev / Next arrow buttons */}
      <button
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white transition-colors duration-200"
        style={{
          fontSize: 18,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white transition-colors duration-200"
        style={{
          fontSize: 18,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ›
      </button>

      {/* Accent line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 z-20"
        animate={{
          background: `linear-gradient(to right, transparent, ${item.accent}, transparent)`,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Counter */}
      <div
        className="absolute top-4 right-4 z-20 text-white/30"
        style={{
          fontSize: 10,
          fontFamily: "'Space Mono', monospace",
          letterSpacing: "0.2em",
        }}
      >
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: item.accent }}
        >
          0{idx + 1}
        </motion.span>
        /{GALLERY.length}
      </div>

      {/* LOD label — bottom left */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${idx}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.9 }}
          className="absolute bottom-10 left-4 z-20"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: item.accent,
            textTransform: "uppercase",
          }}
        >
          {item.label}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Contact Component ────────────────────────────────────────────────────────
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mayokun Alemika",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        },
      );
  };

  return (
    <div className="xl:mt-2 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden">
      {/* ── Left: Form ── */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-5 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-2.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-2.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-2.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-2 px-7 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* ── Right: Image Slider (replaces EarthCanvas) ── */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[440px] h-[260px]"
      >
        <ContactImageSlider />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
