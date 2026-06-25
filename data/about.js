import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiArduino,
  SiCanva,
  SiCisco,
  SiCsharp,
  SiInertia,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

export const aboutSummary =
  "I am an enthusiastic and motivated aspiring full-stack developer with hands-on internship experience in user interfaces, responsive design, basic backend integration, digital marketing support, and project documentation. I enjoy building practical systems, improving user experience, and learning modern tools that help turn ideas into functional digital products.";

export const aboutData = [
  {
    id: "skills",
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        stage: "PHP, JavaScript, TypeScript, C#",
        icons: [FaPhp, FaJs, SiTypescript, SiCsharp],
      },
      {
        title: "Frameworks & Libraries",
        stage: "Laravel, React JS, Inertia JS, Tailwind CSS, Bootstrap",
        icons: [FaLaravel, FaReact, SiInertia, SiTailwindcss, FaBootstrap],
      },
      {
        title: "Web Technologies",
        stage: "HTML, CSS, MySQL, Git",
        icons: [FaHtml5, FaCss3, SiMysql, FaGitAlt],
      },
      {
        title: "Creative & Development Tools",
        stage: "Photoshop, Figma, Canva, Cisco, VS Code, Arduino IDE",
        icons: [SiAdobephotoshop, FaFigma, SiCanva, SiCisco, SiVisualstudiocode, SiArduino],
      },
    ],
  },
  {
    id: "experience",
    title: "experience",
    info: [
      {
        title: "Frontend Developer Intern",
        stage: "Technical Group Management Consultancy Services - February 2025 to May 2025",
      },
      {
        title: "Digital Marketing Assistant",
        stage: "CasesComPH - web team support, website design, content, SEO marketing, branding, and logo design - 2024 to 2025",
      },
      {
        title: "Management Information System Assistant",
        stage: "KALAHI PSU Alaminos - websites, portals, admin accounts, paperwork, and networking - A.Y. 2024 to 2025",
      },
      {
        title: "Leadership & Events",
        stage: "Governor of Domain of Information Technologists, research colloquium presenter, and Photoshop workshop organizer",
      },
    ],
  },
  {
    id: "projects",
    title: "projects",
    info: [
      {
        title: "PAYSADA",
        stage: "Automated jeepney fare collection and tracking system using Laravel, Arduino, RFID, GPS, and responsive interfaces",
      },
      {
        title: "Itemaster",
        stage: "Inventory and POS system with Laravel, React JS, Inertia JS, Tailwind CSS, and stock/cost tracking workflows",
      },
      {
        title: "HappyPaw",
        stage: "Pet products e-commerce website with responsive product listings, cart features, and order management basics",
      },
      {
        title: "Fastyle",
        stage: "Fashion e-commerce website focused on responsive catalog, shopping cart, and smooth frontend interaction",
      },
      {
        title: "Inventory Management System",
        stage: "WebDev1 inventory project with dynamic listing, search, filter, and product stock management features",
      },
    ],
  },
  {
    id: "education",
    title: "education",
    info: [
      {
        title: "Bachelor of Science in Information Technology",
        stage: "Pangasinan State University - Alaminos Campus, 2021 to 2025",
      },
      {
        title: "Science, Technology, Engineering, and Mathematics",
        stage: "St. Adelaide School Philippines, 2018 to 2020",
      },
      {
        title: "Focused Track",
        stage: "Web and application technologies, databases, responsive UI, and system development",
      },
    ],
  },
];

export const statsData = [
  {
    value: 5,
    label: "Featured projects.",
  },
  {
    value: 12,
    label: "Core tools used.",
  },
  {
    value: 3,
    label: "Work roles handled.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Responsive focus.",
  },
];
