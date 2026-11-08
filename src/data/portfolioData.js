import {
  Mail,
  Code2,
  Smartphone,
  Globe,
  Database,
  Layout,
  Server,
  Terminal,
  Cpu,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { GitHub, Github, Linkedin, Instagram } from '../components/Common/BrandIcons';

export const portfolioData = {
  personalInfo: {
    name: "Himanshu Jayswal",
    roles: [
      "Aspiring Java Full Stack Developer"
    ],
    intro: "I am a passionate IT Engineering Student and aspiring Java Full Stack Developer with experience in building full-stack applications using Java, Spring Boot, React, and modern technologies. I enjoy building real-world projects, solving problems, and creating scalable applications.",
    about: "I am an IT Engineering Student and aspiring Java Full Stack Developer passionate about building modern applications using Java, Spring Boot, React, and PostgreSQL. I enjoy turning ideas into practical products and continuously learning new technologies.",
    location: "Bhavnagar, Gujarat, India",
    email: "jayswalhimanshu74@gmail.com",
    resumeUrl: "/Himanshu_Jayswal_Resume.pdf",
    socials: [
      { name: "GitHub", icon: GitHub, url: "https://github.com/jayswalhimanshu74-cmd" },
      { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/himanshu-jayswal-dev" },
      { name: "Instagram", icon: Instagram, url: "https://instagram.com/himanshujayswal" },
      { name: "Email", icon: Mail, url: "mailto:jayswalhimanshu74@gmail.com" }
    ],
    stats: [
      { label: "Projects Delivered", value: 4, suffix: "" },
      { label: "Technologies in Stack", value: 24, suffix: "" }
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: Layout },
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Globe },
        { name: "JavaScript", icon: Globe },
        { name: "Tailwind CSS", icon: Layout }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java", icon: Server },
        { name: "Python", icon: Terminal },
        { name: "Spring Boot", icon: Server },
        { name: "FastAPI", icon: Server },
        { name: "REST APIs", icon: Server }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", icon: Database },
        { name: "MySQL", icon: Database }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: Terminal },
        { name: "GitHub", icon: Github },
        { name: "Docker", icon: Cpu },
        { name: "GitHub Actions", icon: Layers },
        { name: "VS Code", icon: Code2 }
      ]
    }
  ],
  experience: [
    {
      role: "Full Stack Development (Self-Driven)",
      company: "Independent Study & Projects",
      period: "2023 - Present",
      responsibilities: [
        "Mastering Java Full Stack ecosystem (Spring Boot, React, PostgreSQL)",
        "Developing end-to-end applications like JobVista to solve real-world problems",
        "Implementing industry-standard practices: JWT Auth, Dockerization, and RESTful APIs",
        "Continuous learning through hands-on coding and architectural planning"
      ]
    },
    {
      role: "Academic Project Lead",
      company: "Gujarat Technological University",
      period: "2023 - Present",
      responsibilities: [
        "Leading team projects in IT modules, ensuring timely delivery and code quality",
        "Bridging the gap between theoretical concepts and practical implementations",
        "Mentoring peers in Java and Database Management fundamentals",
        "Optimizing system designs for better performance and scalability"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Gujarat Technological University",
      period: "2023 - 2027",
      cgpa: "8.37 / 10",
      cgpa: "8.34 / 10",
      description: "Pursuing B.E. in Information Technology, Gujarat Technological University (expected 2027)"
    }
  ],
  projects: [
    {
      id: 1,
      title: "JobVista",
      description: "A complete job and internship portal with role-based authentication and dashboards.",
      tech: ["React", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
      features: [
        "JWT authentication",
        "Admin dashboard",
        "Company dashboard",
        "Job seeker dashboard",
        "Real-time communication using WebSocket",
        "Responsive UI"
      ],
      links: {
        live: "https://jobvista-git-main-jayswalhimanshu74-4107s-projects.vercel.app/",
        github: "https://github.com/jayswalhimanshu74-cmd/JobVista",
        details: "#"
      },
      image: "src/assets/projectImages/jobvista.png"
    },
    {
      id: 2,
      title: "LogiTrack",
      description: "A robust, scalable inventory and logistics management platform engineered for real-time tracking, complex data aggregation, and high-throughput transaction processing.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      features: [
        "Real-time inventory tracking",
        "Logistics flow management",
        "High-throughput transaction processing",
        "Data aggregation dashboards"
      ],
      links: {
        live: "https://logi-track-phi.vercel.app/",
        github: "https://github.com/jayswalhimanshu74-cmd/LogiTrack",
        details: "#"
      },
      image: "src/assets/projectImages/Logitrack.png"
    },
    {
      id: 3,
      title: "Hence-Code / Code-Editor",
      description: "Cloud-native collaborative development environment leveraging WebSockets and Redis pub/sub for sub-millisecond latency synchronized editing and distributed state management.",
      tech: ["Java", "WebSockets", "Redis", "Docker"],
      features: [
        "Real-time synchronized editing",
        "Distributed state management with Redis",
        "Sub-millisecond latency WebSockets",
        "Dockerized sandbox environment"
      ],
      links: {
        live: "https://code-editor-git-main-jayswalhimanshu74-4107s-projects.vercel.app/",
        github: "https://github.com/jayswalhimanshu74-cmd/Code-Editor",
        details: "#"
      },
      image: "src/assets/projectImages/hence-code.png"
    },
    {
      id: 4,
      title: "DocuMind AI",
      description: "Intelligent document processing and conversational agent utilizing Retrieval-Augmented Generation (RAG) to extract, analyze, and interact with complex unstructured data.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Gemini", "ChromaDB"],
      features: [
        "RAG pipeline integration",
        "Document parsing and vector search",
        "Conversational AI agent",
        "High-performance FastAPI backend"
      ],
      links: {
        live: null,
        github: "https://github.com/jayswalhimanshu74-cmd/DocuMind-Ai",
        details: "#"
      },
      image: "src/assets/projectImages/documind.png"
    },
    {
      id: 5,
      title: "Certify-Chain",
      description: "A complete car rental system with role-based authentication and dashboards.",
      tech: ["REACT", "Python", "Django", "Ganache", "Solidity", "POSTGRESQL"],
      features: [
        "JWT authentication",
        "Admin dashboard",
        "Company dashboard",
        "Job seeker dashboard",
        "Real-time communication using WebSocket",
        "Responsive UI"
      ],
      links: {
        live: "https://logi-track-phi.vercel.app/",
        github: "https://github.com/jayswalhimanshu74-cmd/LogiTrack",
        details: "#"
      },
      image: "src/assets/projectImages/Logitrack.png"
    }
  ],
  achievements: [
    { title: "Completed multiple full-stack projects", icon: Award },
    { title: "Built Android applications", icon: Smartphone },
    { title: "Developed scalable APIs", icon: Server },
    { title: "Learning advanced Java ecosystem", icon: BookOpen }
  ]
};
