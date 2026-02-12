import type { IconType } from "react-icons/lib";
import { SiReact, SiNextdotjs, SiNodedotjs, SiDotnet, SiPython, SiJavascript, SiTypescript, SiPhp, SiLinux, SiMysql, SiPostgresql, SiDocker, SiGit, SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { DiRedis } from "react-icons/di";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: DiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
];

export const experiences = [
  {
    company: "Monetize Ad Sarajevo",
    role: "Software Engineer",
    period: "Feb 2024 — Present",
    summary:
      "Building scalable, performance-focused web applications and internal tools.",
    bullets: [
      "Developed drag-and-drop workflow builders and interactive dashboards",
      "Implemented real-time features using WebSockets and background processes",
      "Worked on SEO-driven e-commerce solutions with advanced search",
    ],
    skills: ["React", "Next.js", "TypeScript", "WebSockets"],
  },
  {
    company: "MIBO Komunikacije Sarajevo",
    role: "Network Engineer Intern",
    period: "Jul 2023 — Aug 2023",
    summary:
      "Hands-on experience with networking infrastructure and system administration.",
    bullets: [
      "Configured Cisco devices and routing and switching fundamentals",
      "Managed Windows Server, Active Directory, DHCP, and DNS",
      "Worked with Linux CLI, backups, monitoring, and basic cybersecurity",
    ],
    skills: ["Cisco", "Linux", "Windows Server"],
  },
  {
    company: "Trinity d.o.o. Sarajevo",
    role: "Full-stack Development Intern",
    period: "Oct 2022 — Jan 2023",
    summary:
      "Built full-stack features with a focus on authentication and user management.",
    bullets: [
      "Developed frontend and backend for a social media application",
      "Implemented secure authentication, authorization, and session handling",
    ],
    skills: ["React", "Node.js", "Auth"],
  },
];

export const navLinks = [
  // { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export const socialLinks = [
  { href: "https://github.com/erna14", label: "GitHub", icon: SiGithub },
  { href: "https://www.linkedin.com/in/erna-berbi%C4%87-481985239/", label: "LinkedIn", icon: SiLinkedin },
  { href: "mailto:berbic.erna14@gmail.com", label: "Email", icon: SiGmail },
];