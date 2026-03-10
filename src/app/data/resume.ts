export const resumeData = {
  basics: {
    name: "Devaditya",
    title: "Software Engineer",
    specialization: "Backend & Full-Stack Developer",
    techLine: "FastAPI • Angular • AI Systems",
    availability: "Open to Software Engineer / Backend roles",
    summary: "Software Engineer with hands-on experience in building full-stack web applications using Python (FastAPI) and Angular. Developed secure, role-based user management systems with JWT authentication, MongoDB integration, and clean architectural patterns.",
    credibilityBullets: [
      "Built full-stack RBAC user management system using FastAPI and Angular",
      "Implemented secure authentication using JWT and role-based access control",
      "Developed AI chatbot using local LLMs (Ollama)",
      "Designed scalable backend architectures and REST APIs"
    ],
    location: "Noida, Uttar Pradesh, India",
    email: "devaditya.yadav14@gmail.com",
    phone: "9315997912",
    links: [
      { name: "LinkedIn", url: "https://linkedin.com/in/devaditya-yadav", icon: "linkedin" },
      { name: "GitHub", url: "https://github.com/Devaditya-Yadav", icon: "github" }
    ]
  },
  credibilityBar: [
    { label: "2+ Years Development Experience", icon: "calendar" },
    { label: "Multiple Full-Stack Projects", icon: "layers" },
    { label: "Backend & AI Systems", icon: "cpu" },
    { label: "Freelance Product Work", icon: "briefcase" }
  ],
  experience: [
    {
      company: "kinzall.com",
      role: "Angular Developer (Freelance)",
      dates: "Sept 2023 - Mar 2024",
      location: "San José, Costa Rica",
      techStack: "Angular, TypeScript, REST APIs, Google Analytics",
      bullets: [
        "Developed high-performance landing page and admin dashboard using Angular 13.",
        "Achieved 90% SEO Performance & Accessibility score through optimization.",
        "Reduced page load time by 40% and increased conversion rate by 25% via API optimization.",
        "Refactored UI components for cross-browser compatibility and standardized CSS."
      ]
    },
    {
      company: "D2i technology",
      role: "Software Development Engineer Intern",
      dates: "Feb 2023 - Sept 2023",
      location: "Noida, India",
      techStack: "SQL, PL/SQL, Python, Signal-cli, ERP Systems",
      bullets: [
        "Developed innovative software solutions focusing on full-stack responsiveness.",
        "Optimized code performance and resolved critical bugs in production.",
        "Integrated Signal-cli with backend for automated messaging services.",
        "Received management recognition for delivering high-quality projects ahead of schedule."
      ]
    }
  ],
  projects: [
    {
      title: "AI-Powered User Management System",
      stack: ["FastAPI", "Angular", "MongoDB", "JWT", "Ollama"],
      dates: "Jan 2026 - Present",
      type: "Engineering Project",
      description: "A secure RBAC system with integrated local AI assistance.",
      architecture: "Angular → FastAPI → Service Layer → MongoDB",
      bullets: [
        "Role-based authentication (User, Manager, Admin) with secure RBAC.",
        "Secure JWT authentication with bcrypt password hashing.",
        "Admin dashboard for complete user lifecycle management.",
        "AI chatbot assistant powered by local LLM (Ollama).",
        "Clean architecture with service and repository layers."
      ],
      links: {
        github: "https://github.com/Devaditya-Yadav",
        demo: "#",
        architecture: "#"
      },
      image: "https://picsum.photos/seed/auth/800/450"
    },
    {
      title: "VR Hosting & SaaS Platform",
      stack: ["FastAPI", "Jinja2", "SQLite", "JWT"],
      dates: "Jan 2026 - Present",
      type: "Product Project",
      description: "B2B SaaS for hosting 360° VR virtual tours for hospitality.",
      architecture: "FastAPI → Jinja2 → SQLite → Iframe Embeds",
      bullets: [
        "Modular backend architecture for VR, subscriptions, and auth.",
        "Secure REST APIs and server-rendered embed views.",
        "JWT-based dependency-driven authorization for content protection.",
        "Scalable database design ready for PostgreSQL migration."
      ],
      links: {
        github: "https://github.com/Devaditya-Yadav",
        demo: "#",
        architecture: "#"
      },
      image: "https://picsum.photos/seed/vr/800/450"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "SQL", "TypeScript"]
    },
    {
      category: "Frontend",
      items: ["Angular", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["FastAPI", "REST APIs", "JWT Authentication", "RBAC"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "SQLite", "PostgreSQL (Learning)"]
    },
    {
      category: "AI / LLM",
      items: ["Ollama", "Prompt Engineering", "RAG Concepts"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Docker (Learning)"]
    }
  ],
  github: {
    stats: [
      { label: "Commits", value: "200+" },
      { label: "Top Languages", value: "Python, TS" },
      { label: "Focus", value: "FastAPI & AI" }
    ]
  },
  systemDesign: [
    { title: "RBAC Authentication System", description: "Secure multi-role access control flow." },
    { title: "SaaS VR Hosting Architecture", description: "Modular B2B content delivery system." },
    { title: "AI Chatbot Integration", description: "Local LLM orchestration with FastAPI." },
    { title: "Scalable REST API Design", description: "Repository pattern for data persistence." }
  ],
  writing: [
    { title: "Building JWT Authentication with FastAPI", url: "#" },
    { title: "Designing RBAC Authorization Systems", url: "#" },
    { title: "Integrating AI Chatbots with Local LLMs", url: "#" }
  ],
  education: [
    {
      degree: "B.Tech, Electrical & Electronics Engineering",
      institution: "AKGEC Ghaziabad",
      location: "Ghaziabad, India",
      dates: "2018 - 2022"
    }
  ]
};
