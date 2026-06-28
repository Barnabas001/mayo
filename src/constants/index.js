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
    title: "Game development",
    icon: web,
    color: "#0d1b2a",
    accent: "#1b6ca8",
    description:
      "I create high-performance, visually stunning games and interactive experiences using Unreal Engine 5. From AAA-quality environments to complex gameplay systems, I bring ideas to life with cutting-edge technology and immersive storytelling.",
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
    title: "Extended Reality (VR, AR and MR)",
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
    title: "Cartoon Animation",
    icon: creator,
    color: "#1c0a00",
    accent: "#c44b00",
    description:
      "I produce high-quality 3D animations for commercials, brand films, and cinematic storytelling. From character rigging to motion capture cleanup, I bring characters and worlds to life with expressive animation and compelling visual narratives.",
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
    title: "Asset design and optimization",
    icon: backend,
    color: "#0a1f0a",
    accent: "#1e8a3c",
    description:
      "I specialize in creating and optimizing 3D assets for real-time applications, ensuring they are visually appealing while maintaining performance. From low-poly modeling to texture baking and shader optimization, I streamline the asset pipeline for games, VR/AR, and interactive experiences.",
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
    title: "3D Developer (Remote)",
    company_name: "AB-InBev",
    icon: "abInbevLogo",
    date: "(Contract) 2023 - Present",
    points: [
      "Designed and implemented 3D assets and animations for immersive marketing campaigns and product visualizations.",
      "Design of a 3d virtual and Augmented reality for industrial training of staff.",
      "Worked closely with cross-functional teams to optimize workflows for creating lifelike digital environments and models.",
      "Design of environmental assets Rigging, texturing and animation of game characters.",
      "Led the design and animation of multimedia assets for various educational projects, including VR games and interactive learning modules.",
      "Created interactive AR and VR experiences that enhanced customer engagement and brand storytelling.",
      "Key Achievement: Spearheaded a VR-based employee training platform, improving knowledge retention by 25%.",
      "Key Achievement: Delivered 3D assets for an AR campaign that resulted in a 30% increase in customer interaction.",
    ],
  },
  {
    title: "Lead Instructor for Blender",
    company_name: "African XR Community",
    icon: "africanXrLogo",
    date: "2019 - Present",
    points: [
      "Conducted workshops and training sessions, mentoring emerging 3D artists and developers.",
      "Designed a comprehensive curriculum focusing on 3D modeling, animation, and texturing for learners of all levels.",
      "Organized community-driven events to promote XR technology and creative collaboration in Africa.",
      "Design of Virtual Reality Avatars.",
      "Key Achievement: Mentored over 50 students, many of whom have pursued successful careers in XR and 3D development.",
      "Key Achievement: Fostered a thriving creative community, driving innovation and skill-sharing.",
    ],
  },
  {
    title: "Product Designer (Remote)",
    company_name: "Knoritech ISE Ltd., Israel",
    icon: "knoritechLogo",
    date: "(Contract) 2020 - 2024",
    points: [
      "3D Design and modelling of new products.",
      "Visual design and illustration of product operation.",
      "Product promotion and commercial visual effects video creation.",
      "Designed and animated 2D vector graphics, infographics, and motion graphics for e-learning materials.",
      "Edited video and audio content, integrating animations and branding elements to produce cohesive educational videos.",
      "Assisted in the re-branding of existing multimedia assets, aligning them with new styles and brand guidelines.",
      "Created templates for presentations, documents, and digital collateral to maintain brand consistency across client deliverables.",
      "Key Achievement: Contributed to the development of award-winning product designs showcased at industry events.",
      "Key Achievement: Enhanced production workflows, reducing design cycles by 15%.",
    ],
  },
  {
    title: "VR/AR 3D Designer Contract Staff (Remote)",
    company_name: "MTN Nigeria Communications Ltd.",
    icon: "mtnLogo",
    date: "(Commission) 2021 - 2022",
    points: [
      "Design and optimization of Virtual Reality environments.",
      "3D asset modelling and optimization of GLB files for Virtual and Augmented Reality.",
      "3D character Modelling, rigging and animation of Avatars for Virtual and Augmented Reality.",
      "Design of a User Interface for Virtual Reality (VR) environments.",
      "Generating high quality and optimized textures for photorealistic result in Virtual Reality (VR).",
    ],
  },
  {
    title: "Freelance XR & 3D Developer",
    company_name: "Self-Employed",
    icon: "freelanceLogo",
    date: "2017 - 2022",
    points: [
      "Created bespoke AR and VR experiences for clients in education, entertainment, and advertising.",
      "Creating 3d model of objects and architectural environments.",
      "Design of products for international organizations.",
      "Character Design and animation.",
      "Design of gaming characters for international companies.",
      "Design of Virtual Reality Avatars.",
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
