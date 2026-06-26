import { siteConfig } from "./siteConfig";

export const projectSlides = [
  {
    images: [
      {
        title: "PAYSADA",
        role: "Developer & Designer",
        category: "Capstone System",
        tech: "Laravel, Arduino, RFID, GPS",
        tags: ["RFID", "Fare Tracking", "Responsive UI"],
        description: "Automated jeepney fare collection and tracking system with RFID tap-in/tap-out, passenger fare workflows, and hardware-assisted tracking.",
        path: "/thumb2.jpg",
        link: siteConfig.github,
      },
      {
        title: "Itemaster Inventory & POS",
        role: "Developer Intern",
        category: "Internship Project",
        tech: "Laravel, React, Inertia, Tailwind",
        tags: ["Inventory", "POS", "Cost Tracking"],
        description: "Inventory and point-of-sale module for stock levels, item costs, pricing accuracy, and cleaner business record workflows.",
        path: "/thumb1.jpg",
        link: siteConfig.github,
      },
      {
        title: "HappyPaw E-Commerce",
        role: "Developer & Designer",
        category: "WebDev Project",
        tech: "HTML, CSS, JavaScript, Laravel",
        tags: ["E-Commerce", "Cart", "Orders"],
        description: "Pet products e-commerce website with responsive listings, cart features, order management basics, and a friendly shopping experience.",
        path: "/thumb3.jpg",
        link: siteConfig.github,
      },
      {
        title: "Fastyle Fashion Store",
        role: "Developer & Designer",
        category: "Client Project",
        tech: "HTML, CSS, JavaScript, Laravel",
        tags: ["Catalog", "Shopping Flow", "Mobile UI"],
        description: "Fashion e-commerce interface with product catalog, shopping cart, attractive visuals, and mobile-friendly shopping flow.",
        path: "/thumb4.jpg",
        link: siteConfig.github,
      },
    ],
  },
  {
    images: [
      {
        title: "Inventory Management System",
        role: "Developer & Designer",
        category: "WebDev Project",
        tech: "HTML, CSS, JavaScript, Laravel",
        tags: ["Stock Control", "Filtering", "Admin UI"],
        description: "Responsive inventory web interface for viewing, tracking, filtering, and managing product stocks with a clean UI/UX flow.",
        path: "/thumb1.jpg",
        link: siteConfig.github,
      },
      {
        title: "Portfolio Website",
        role: "Personal Portfolio Template",
        category: "Portfolio Build",
        tech: "Next.js, React, Tailwind CSS",
        tags: ["SEO", "Animations", "Contact API"],
        description: "Animated responsive portfolio with SEO assets, contact API, route checks, loading screen, and reusable profile data.",
        path: "/thumb3.jpg",
        link: siteConfig.repository,
      },
      {
        title: "Digital Marketing Web Support",
        role: "Digital Marketing Assistant",
        category: "Work Experience",
        tech: "SEO, Website Design, Branding",
        tags: ["SEO", "Branding", "Content"],
        description: "Website content, SEO marketing, branding, and logo support while working with a web development team.",
        path: "/thumb4.jpg",
        link: siteConfig.github,
      },
      {
        title: "Admin and Portal Support",
        role: "MIS Assistant",
        category: "Work Experience",
        tech: "Web Portals, Admin Accounts, Networking",
        tags: ["Portals", "Admin", "Networking"],
        description: "Support for websites, portals, admin accounts, paperwork, and networking-related tasks in a management information system setting.",
        path: "/thumb2.jpg",
        link: siteConfig.github,
      },
    ],
  },
];

export const projectItems = projectSlides.flatMap((slide) => slide.images);
