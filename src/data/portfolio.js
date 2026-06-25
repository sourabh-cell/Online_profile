import {
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Workflow
} from "lucide-react";

export const profile = {
  name: "Sourabh Ganvir",
  role: "Java Full Stack Developer",
  experience: "1.6 years",
  location: "Nagpur, India",
  education: "BCA, MCA",
  email: "akshayganvir007@gmail.com",
  phone: "+91 9112341259",
  resumeUrl: "#",
  githubUrl: "https://github.com/sourabh-cell",
  linkedinUrl: "https://www.linkedin.com/in/sourabh-ganvir-75698117a"
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const highlights = [
  { label: "Experience", value: profile.experience, icon: BriefcaseBusiness },
  { label: "Location", value: profile.location, icon: MapPin },
  { label: "Education", value: profile.education, icon: GraduationCap }
];

export const skills = [
  { name: "Java", category: "Backend", icon: Code2 },
  { name: "Spring Boot", category: "Backend", icon: Server },
  { name: "REST APIs", category: "Backend", icon: Workflow },
  { name: "Spring Security", category: "Backend", icon: ShieldCheck },
  { name: "Hibernate/JPA", category: "Backend", icon: Layers3 },
  { name: "Microservices", category: "Architecture", icon: BadgeCheck },
  { name: "React.js", category: "Frontend", icon: Code2 },
  { name: "MySQL", category: "Database", icon: Database },
  { name: "Git", category: "Tools", icon: Workflow },
  { name: "Maven", category: "Tools", icon: Layers3 },
  { name: "AWS EC2", category: "Cloud", icon: Cloud },
  { name: "AWS S3", category: "Cloud", icon: Cloud }
];

export const experience = [
  {
    role: "Java Full Stack Developer",
    company: "Professional Experience",
    period: "1.6 years",
    points: [
      "Built full-stack features using Java, Spring Boot, React.js, MySQL, and REST APIs.",
      "Worked on authentication, backend business logic, database mapping, and responsive UI screens.",
      "Used Git, Maven, and cloud deployment workflows to support stable application releases."
    ]
  }
];

export const projects = [
  {
    title: "RxIncredible",
    summary:
      "Full-stack web application with secure backend APIs, responsive React screens, and MySQL-backed data workflows.",
    stack: ["Spring Boot", "React.js", "MySQL", "REST APIs"],
    liveUrl: "https://rxincredible.com/",
    codeUrl: "#"
  },
  {
    title: "Rent Ledger",
    summary:
      "Tenant management system for tracking tenants, rent records, documents, and deployment-ready cloud storage.",
    stack: ["Spring Boot", "MySQL", "AWS EC2", "AWS S3"],
    liveUrl: "https://rentledger.ddns.net/login",
    codeUrl: "#"
  },
  {
    title: "Hospital Management System",
    summary:
      "Healthcare management application designed to organize patient, staff, appointment, and operational records.",
    stack: ["Java", "Spring Boot", "MySQL", "Hibernate/JPA"],
    liveUrl: "#",
    codeUrl: "#"
  }
];

export const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    detail: "Advanced coursework in software development, database systems, and web technologies."
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    detail: "Foundation in programming, computer science fundamentals, and application development."
  }
];

export const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Location", value: profile.location, href: "#", icon: MapPin },
  { label: "LinkedIn", value: "linkedin.com/in/sourabh-ganvir", href: "https://www.linkedin.com/in/sourabh-ganvir-75698117a", icon: BadgeCheck }
];
