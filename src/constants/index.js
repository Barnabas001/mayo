import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const navLinks = [
  { id: "about", title: "About" },
  { id: "expertise", title: "Expertise" },
  { id: "studio", title: "Studio" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Unreal Engine 5 Development",
    icon: web,
    color: "#0d1b2a",
    accent: "#1b6ca8",
    description:
      "I architect high-fidelity real-time environments using Unreal Engine 5's full toolset — Lumen global illumination, Nanite virtualized geometry, and Blueprint/C++ systems. From AAA game worlds to interactive product demos, I build scenes that run at cinematic quality in real time.",
    highlights: [
      "Lumen & Nanite",
      "Blueprint Scripting",
      "C++ Systems",
      "Level Design",
      "PCG Procedural Generation",
      "AAA Environments",
      "MetaHuman Integration",
      "Chaos Physics",
    ],
  },
  {
    title: "VR & AR Systems",
    icon: mobile,
    color: "#1a0533",
    accent: "#7b2ff7",
    description:
      "I design and build immersive XR experiences for Meta Quest, HTC Vive, and mixed-reality platforms. From spatial UI/UX design to full VR training modules and AR product visualizations, I bridge the gap between the physical and digital — building experiences that feel real.",
    highlights: [
      "Meta Quest / OpenXR",
      "Spatial UI Design",
      "VR Training Modules",
      "AR Product Visualization",
      "Hand Tracking",
      "6DOF Interactions",
      "HTC Vive / SteamVR",
      "XR Performance Optimization",
    ],
  },
  {
    title: "Cinematic 3D Animation",
    icon: creator,
    color: "#1c0a00",
    accent: "#c44b00",
    description:
      "I produce high-end cinematic animations using Blender, Unreal Engine Sequencer, and industry-standard pipelines. From character animation and motion capture cleanup to full-length brand films and product reveal sequences, every frame is crafted with storytelling precision and visual impact.",
    highlights: [
      "Blender Animation",
      "UE5 Sequencer",
      "Character Rigging",
      "Motion Capture Cleanup",
      "VFX & Simulations",
      "Geometry Nodes",
      "Brand Films",
      "Product Visualization",
    ],
  },
  {
    title: "Real-Time Asset Optimization",
    icon: backend,
    color: "#0a1f0a",
    accent: "#1e8a3c",
    description:
      "I specialize in building and optimizing 3D assets for real-time performance without sacrificing visual fidelity. LOD pipelines, texture atlasing, draw call reduction, and shader optimization are core to how I deliver assets that look stunning while hitting frame-rate targets on any platform.",
    highlights: [
      "LOD Pipelines",
      "PBR Texturing",
      "Nanite Mesh Conversion",
      "Draw Call Reduction",
      "Shader Optimization",
      "Texture Atlasing",
      "Mobile / Console Targeting",
      "Asset Pipeline Automation",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "3D Developer & Creative UX Designer",
    company_name: "AB-InBev",
    icon: "abInbevLogo",
    date: "2022 - 2024",
    points: [
      "Developed immersive digital experiences and interactive installations.",
      "Optimized real-time 3D assets for enterprise-level deployment.",
      "Collaborated with marketing and innovation teams for experiential campaigns.",
    ],
  },
  {
    title: "Founder & Creative Director",
    company_name: "ALEMIKA Studios",
    icon: "alemikaLogo",
    date: "2023 - Present",
    points: [
      "Leading a team of 50 creators, animators and developers.",
      "Delivering cinematic animations, VR modules and digital products.",
      "Developing proprietary AAA game and immersive media IP.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
