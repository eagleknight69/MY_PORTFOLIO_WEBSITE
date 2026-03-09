export const resumeData = {
  basics: {
    name: "Devaditya",
    title: "Software Engineer",
    summary: "Software Engineer with hands-on experience in building full-stack web applications using Python (FastAPI) and Angular. Developed secure, role-based user management systems with JWT authentication, MongoDB integration, and clean architectural patterns. Recently built and integrated an AI-powered chatbot using local LLMs (Ollama), with a strong interest in Generative AI, RAG systems, and AI-driven applications.",
    location: "Noida, Uttar Pradesh, India",
    email: "devaditya.yadav14@gmail.com",
    phone: "9315997912",
    links: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/devaditya-yadav"
      }
    ]
  },
  experience: [
    {
      company: "kinzall.com",
      role: "Angular Developer (Freelance)",
      dates: "September 2023 - March 2024",
      location: "San José, Costa Rica",
      bullets: [
        "Developed the landing page using Angular 13, HTML, SCSS, and TypeScript.",
        "Developed an Admin section for monitoring sellers, buyers, and offers.",
        "Implemented SEO optimization to increase the Performance, Accessibility of the Website and scored 90%.",
        "Organized and implemented Google Analytics. Integrated backend APIs into the front end of the website, optimizing data retrieval and enhancing user experience resulting in a 40% decrease in page load time and a 25% increase in conversion rate.",
        "Enhanced cross-browser compatibility by refactoring UI components and standardizing CSS practices, ensuring consistent functionality and appearance across diverse platforms."
      ]
    },
    {
      company: "D2i technology",
      role: "Software Development Engineer Intern",
      dates: "February 2023 - September 2023",
      location: "Noida, Uttar Pradesh",
      bullets: [
        "As a full-stack engineer at D2i Technology, I actively developed innovative software solutions for a diverse range of clients, focusing on both front-end and back-end development.",
        "During my time in this position, I significantly enhanced the application by resolving numerous bugs, optimizing code for improved performance, and ensuring responsiveness across all devices.",
        "Proficient in SQL/PLSQL for querying and data management within ERP frameworks like SAP.",
        "Achievements: I received recognition from management for consistently delivering projects ahead of schedule while maintaining the highest quality standards. Additionally, I introduced new features, improved accessibility, and successfully integrated Signal-cli with the backend."
      ]
    }
  ],
  achievements: [
    {
      title: "SEO Optimization",
      context: "Scored 90% in Performance and Accessibility for kinzall.com."
    },
    {
      title: "Performance Improvement",
      context: "40% decrease in page load time and a 25% increase in conversion rate at kinzall.com."
    },
    {
      title: "Management Recognition",
      context: "Consistently delivered projects ahead of schedule while maintaining the highest quality standards at D2i technology."
    }
  ],
  projects: [
    {
      title: "AI-Powered User Management System",
      stack: ["FastAPI (Python)", "Angular", "MongoDB", "Ollama"],
      dates: "January 2026 - Present",
      type: "Self-Initiated Project",
      bullets: [
        "Designed and developed a full-stack user management system using FastAPI (Python) and Angular, supporting 3 distinct roles (User, Manager, Admin) with secure role-based access control (RBAC).",
        "Implemented JWT-based authentication and authorization, securing 100% of protected APIs, including password hashing with bcrypt and role restricted admin endpoints.",
        "Built an Admin Dashboard to view, update, block/unblock, and delete user accounts, enabling complete lifecycle management for multiple user records.",
        "Integrated an AI-powered chatbot using a local LLM (Ollama) to provide real-time conversational assistance, reducing dependency on static UI workflows and improving user interaction.",
        "Designed a scalable backend architecture using repository and service layers with MongoDB, exposing sanitized user data (0 sensitive fields leaked) to the frontend.",
        "Improved system reliability by handling edge cases such as blocked users, token expiry, and role validation, ensuring secure access control across all application flows."
      ]
    },
    {
      title: "VR Hosting & Virtual Tour SaaS for Hotels and Restaurants",
      stack: ["FastAPI (Python)", "Jinja2", "SQLite"],
      dates: "January 2026 - Present",
      type: "Self-Initiated Product Project",
      bullets: [
        "Developed a B2B SaaS backend using Python (FastAPI) to host and serve 360° VR virtual tours for hotels and restaurants.",
        "Designed a modular backend architecture with separate modules for VR, hotels, subscriptions, and authentication.",
        "Built secure REST APIs and server-rendered embed views using FastAPI and Jinja2 for iframe-based VR tour access.",
        "Implemented JWT-based authentication and dependency-driven authorization to protect embedded VR content.",
        "Used SQLite for development and designed database models to support future migration to PostgreSQL."
      ]
    }
  ],
  skills: [
    {
      category: "Core Technical Skills",
      items: [
        "Python", "JavaScript", "SQL", "Angular", "HTML", "CSS", "FastAPI", "REST APIs", "JWT", "MongoDB", "AI Chatbot Development (Ollama)", "Prompt Engineering", "Git", "GitHub", "RBAC", "Clean Architecture"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology, Electrical and Electronics engineering",
      institution: "Ajay Kumar Garg Engineering college Ghaziabad",
      location: "Ghaziabad, Uttar Pradesh",
      dates: "2022"
    }
  ],
  certifications: [],
  awards: [],
  extra: []
};
