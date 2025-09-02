import { Project, Skill, ExperienceItem } from '@/types';

export const personalInfo = {
  name: "Ronit Deb",
  tagline: "Full Stack Developer & UI/UX Enthusiast",
  bio: "Passionate full-stack developer creating beautiful, functional web applications. I love turning complex problems into simple, elegant solutions that users enjoy.",
  email: "debronit503@gmail.com",
  github: "https://github.com/Ronit30101998"
};

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git", category: "tools" },
];

export const experience: ExperienceItem[] = [
  {
    company: "Capgemini",
    role: "Process Associate",
    duration: "2025 - Present",
    description:"Resolved client issues via Salesforce Service Cloud, ensuring timely ticket resolution."
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Job-portal Platform",
    description: "Full-stack Job portal solution with payment integration, inventory management, and analytics dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.example.com",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"]
  },
  {
    id: "2",
    title: "UI-library",
    description: "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com/Ronit30101998/UI-Libra?tab=readme-ov-file",
    demoUrl: "https://ui.codesnipet.dev/",
    technologies: ["NextJS", "Material-UI"]
  },
  {
    id: "3",
    title: "Blog application",
    description: "Real-time weather application with location-based forecasts, interactive maps, and historical data.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "",
    demoUrl: "https://earnest-travesseiro-10db1d.netlify.app/",
    technologies: ["React", "NodeJS","ExpressJS","Mongoose"]
  },
  {
    id: "4",
    title: "Neurospace",
    description: "A todo list which can note form voice",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com/Ronit30101998/neurospace?tab=readme-ov-file",
    demoUrl: "https://analytics-demo.example.com",
    technologies: ["Next.js"]
  }
];