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
      "Java Developer "
    ],
    intro: "I am a passionate Assistant Engineer and aspiring Java Developer with experience in building full-stack applications using Java, Spring Boot, React, Android, and modern technologies. I enjoy building real-world projects, solving problems, and creating scalable applications.",
    about: "I am an Assistant Engineer and aspiring Java Full Stack Developer passionate about building modern applications using Java, Spring Boot, React, Android, and cloud technologies. I enjoy turning ideas into practical products and continuously learning new technologies.",
    location: "Rajkot, Gujarat, India",
    email: "jayswalhimanshu74@gmail.com", // Placeholder, user should update
    resumeUrl: "#", // Placeholder
    socials: [
      { name: "GitHub", icon: GitHub, url: "https://github.com/jayswalhimanshu74-cmd" },
      { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/himanshu-jayswal-dev" },
      { name: "Instagram", icon: Instagram, url: "https://instagram.com/himanshujayswal" },
      { name: "Email", icon: Mail, url: "mailto:jayswalhimanshu74@gmail.com" },
      { name: "LeetCode", icon: Code2, url: "https://leetcode.com/himanshujayswal" }
    ],
    stats: [
      { label: "Projects Completed", value: 2, suffix: "+" },
      { label: "Technologies Learned", value: 12, suffix: "+" },
      { label: "Years of Learning", value: 4, suffix: "+" },
      { label: "Current Focus", value: 100, suffix: "%" }
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, icon: Layout },
        { name: "HTML", level: 95, icon: Globe },
        { name: "CSS", level: 90, icon: Globe },
        { name: "JavaScript", level: 85, icon: Globe },
        { name: "Tailwind CSS", level: 90, icon: Layout }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java", level: 95, icon: Server },
        { name: "Spring Boot", level: 85, icon: Server },
        { name: "REST APIs", level: 90, icon: Server }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", level: 85, icon: Database },
        { name: "MongoDB", level: 80, icon: Database }
      ]
    },

    {
      category: "Tools",
      items: [
        { name: "Git", level: 90, icon: Terminal },
        { name: "GitHub", level: 90, icon: Github },
        { name: "Docker", level: 75, icon: Cpu },
        { name: "Postman", level: 90, icon: Layers },
        { name: "VS Code", level: 95, icon: Code2 }
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
      degree: "Bachelor of Engineering",
      institution: "Gujarat Technological University",
      period: "2023 - 2027",
      description: "Completed B.E. with focus on Information Technology."
    }
  ],
  projects: [
    {
      id: 1,
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
      id: 2,
      title: "JobVista",
      description: "A complete job and internship portal with role-based authentication and dashboards.",
      tech: ["React", "Spring Boot", "MySQL", "JWT", "Docker"],
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
      id: 3,
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
      id: 4,
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
    }
  ],
  achievements: [
    { title: "Completed multiple full-stack projects", icon: Award },
    { title: "Built Android applications", icon: Smartphone },
    { title: "Developed scalable APIs", icon: Server },
    { title: "Learning advanced Java ecosystem", icon: BookOpen }
  ]
};
