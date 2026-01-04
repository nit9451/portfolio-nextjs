import { PersonalInfo, Stats, Project, Experience, Skill, SocialLink, Certification } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Nitish Kumar Purohit",
  title: "SDE-III - Full Stack Developer",
  email: "knitish899@gmail.com",
  phone: "+91-8210510438",
  location: "Noida, INDIA",
  bio: "Passionate about transforming innovative ideas into robust, user-friendly applications, I am a Full Stack Developer with a proven track record in delivering high-quality software solutions. With a versatile skill set encompassing both front-end and back-end technologies, I thrive in dynamic environments where adaptability and problem-solving skills are paramount.",
  resumeUrl: "/Resume (1).pdf",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nitish-kumar-9a5232163/",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:knitish899@gmail.com",
      icon: "mail"
    }
  ]
};

export const stats: Stats = {
  yearsExperience: 5,
  projectsCompleted: 15,
  clientsSatisfied: 100,
  technologiesLearned: 30
};

export const projects: Project[] = [
  {
    id: "1",
    title: "TIFIN IP",
    description: "AI based assistance which helps Customers to assist in choosing best annuity. This product leverages advanced AI algorithms to provide personalized annuity recommendations.",
    image: "/projects/tifin.jpg",
    technologies: ["React.js", "Node.js", "AI/ML", "MongoDB", "Express", "Material UI"],
    featured: true
  },
  {
    id: "2",
    title: "GoGiv",
    description: "Software as service platform for different clients to register themselves and manage their portfolio. Similar to platforms like Naukri.com, it provides comprehensive portfolio management solutions.",
    image: "/projects/gogiv.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "AWS", "Material UI"],
    featured: true
  },
  {
    id: "3",
    title: "INVOICEMART",
    description: "Comprehensive platform consisting of retailer and buyer registration. This project facilitates seamless trade and document verification between buyers and financiers.",
    image: "/projects/invoicemart.jpg",
    technologies: ["React.js", "Redux", "Node.js", "MongoDB", "AWS", "Express"],
    featured: true
  },
  {
    id: "4",
    title: "WYVATE",
    description: "Food delivery and management web application for restaurants. Similar to Zomato and Swiggy, enables customers to place orders and vendors to manage them efficiently.",
    image: "/projects/wyvate.jpg",
    technologies: ["Next.js", "Redux", "Node.js", "MongoDB", "Socket.io", "AWS", "Microservices"],
    featured: true
  },
  {
    id: "5",
    title: "YOUSHD",
    description: "Platform that helps influencers earn through posts and reels created on Instagram. Influencers can share product links and earn based on views and clicks.",
    image: "/projects/youshd.jpg",
    technologies: ["React.js", "Redux", "Node.js", "MongoDB", "Python", "Firebase"],
    featured: true
  },
  {
    id: "6",
    title: "Content Management System",
    description: "Comprehensive CMS that manages contents where admin can create, edit, delete and update through this application. Provides full CRUD functionality for content management.",
    image: "/projects/cms.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Material UI"],
    featured: false
  },
  {
    id: "7",
    title: "Chat App with Push Notification",
    description: "Real-time chat application where people can chat with each other. Includes push notification functionality for website to keep users engaged.",
    image: "/projects/chat.jpg",
    technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Firebase", "Web Push API"],
    featured: false
  },
  {
    id: "8",
    title: "Legendary Gamers Admin Panel",
    description: "Admin panel that manages gamers and games details for the user website. Provides comprehensive management tools for gaming platform administration.",
    image: "/projects/gamers.jpg",
    technologies: ["Next.js", "React.js", "Node.js", "MongoDB", "Material UI"],
    featured: false
  },
  {
    id: "9",
    title: "Listed Fans",
    description: "Fan and influencer interaction website where fans can invest on their favorite influencer. Creates a unique ecosystem for fan-influencer engagement.",
    image: "/projects/listedfans.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Payment Gateway"],
    featured: false
  },
  {
    id: "10",
    title: "Car Booking System",
    description: "Application that lets users book available cars displayed from list. Provides seamless car rental and booking experience with real-time availability.",
    image: "/projects/carbooking.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Material UI"],
    featured: false
  },
  {
    id: "11",
    title: "TNNC",
    description: "Manages the nurses registration process and lets them get certificates for practicing. Streamlines the entire certification workflow for nursing professionals.",
    image: "/projects/tnnc.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Material UI"],
    featured: false
  },
  {
    id: "12",
    title: "TNMC",
    description: "Manages doctors registration and other processes. Comprehensive platform for medical professional registration and certificate management.",
    image: "/projects/tnmc.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Material UI"],
    featured: false
  },
  {
    id: "13",
    title: "Detection Of Phishing Websites",
    description: "Security application that detects phishing websites and prevents users from accessing those websites which can steal their data. Uses advanced detection algorithms.",
    image: "/projects/phishing.jpg",
    technologies: ["Python", "Machine Learning", "Flask", "React.js", "API"],
    featured: false
  },
  {
    id: "14",
    title: "School Management System",
    description: "Comprehensive online school management system. Features include fee payment, timetable management, and staff management. Streamlines all school operations.",
    image: "/projects/school.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Material UI", "Payment Gateway"],
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "SDE-III - Full Stack Developer",
    company: "Mobcoder",
    location: "India",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "Full Stack Developer (MERN) responsible for developing and delivering high-quality software solutions. Working on complex projects across various domains including AI, fintech, e-commerce, and healthcare.",
    achievements: [
      "TIFIN IP - Developed AI-based assistance system to help customers choose the best annuity using advanced algorithms",
      "GoGiv - Built SaaS platform for client registration and portfolio management, similar to Naukri.com",
      "INVOICEMART - Created comprehensive platform for retailer and buyer registration with document verification",
      "WYVATE - Developed food delivery and management web application for restaurants with real-time order tracking",
      "YOUSHD - Built influencer platform where influencers can earn through Instagram posts and reels",
      "Content Management System - Developed full-featured CMS with CRUD operations for content management",
      "Chat App - Created real-time chat application with push notification functionality"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Express", "Redux", "GraphQL", "Socket.io", "Material UI", "Context API", "Docker", "AWS", "Firebase", "Python", "Fast API", "Agentic AI", "Jest", "ESLint"]
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Siscaso",
    location: "India",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: "Full Stack Developer creating new applications and providing best solutions for user problems. Focused on delivering good quality software for users.",
    achievements: [
      "TNMC - Managed doctors registration and certification processes",
      "TNNC - Developed nurses registration system with certificate generation",
      "Created innovative solutions to solve daily life problems faced by users",
      "Delivered high-quality software solutions for various clients"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Python", "Flask", "Material UI", "Bootstrap", "AWS", "Git", "GitLab"]
  },
  {
    id: "3",
    title: "Software Developer",
    company: "DreamBig Networks",
    location: "India",
    startDate: "Aug 2019",
    endDate: "May 2020",
    description: "Software Developer focused on solving daily life problems faced by users through code. Gained valuable experience in full-stack development.",
    achievements: [
      "Developed solutions to simplify daily life problems through innovative coding",
      "Gained hands-on experience with frontend and backend technologies",
      "Learned database design and management",
      "Worked on various web application projects"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Python", "MongoDB", "Node.js", "React.js"]
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend", level: "expert", icon: "react" },
  { name: "Next.js", category: "frontend", level: "expert", icon: "nextjs" },
  { name: "JavaScript", category: "frontend", level: "expert", icon: "javascript" },
  { name: "HTML", category: "frontend", level: "expert", icon: "html" },
  { name: "CSS", category: "frontend", level: "expert", icon: "css" },
  { name: "Redux", category: "frontend", level: "advanced", icon: "redux" },
  { name: "Context API", category: "frontend", level: "advanced", icon: "context" },
  { name: "Material UI", category: "frontend", level: "advanced", icon: "material-ui" },
  { name: "Ant Design", category: "frontend", level: "advanced", icon: "ant" },
  { name: "Bootstrap", category: "frontend", level: "advanced", icon: "bootstrap" },
  
  // Backend
  { name: "Node.js", category: "backend", level: "expert", icon: "nodejs" },
  { name: "Express", category: "backend", level: "advanced", icon: "express" },
  { name: "MongoDB", category: "backend", level: "advanced", icon: "mongodb" },
  { name: "Python", category: "backend", level: "advanced", icon: "python" },
  { name: "Flask", category: "backend", level: "intermediate", icon: "flask" },
  { name: "Fast API", category: "backend", level: "intermediate", icon: "fastapi" },
  { name: "GraphQL", category: "backend", level: "intermediate", icon: "graphql" },
  { name: "Socket.io", category: "backend", level: "advanced", icon: "socketio" },
  { name: "REST APIs", category: "backend", level: "expert", icon: "api" },
  { name: "MERN Stack", category: "backend", level: "expert", icon: "mern" },
  
  // Tools & Others
  { name: "Git", category: "tools", level: "expert", icon: "git" },
  { name: "GitHub", category: "tools", level: "expert", icon: "github" },
  { name: "GitLab", category: "tools", level: "advanced", icon: "gitlab" },
  { name: "Bitbucket", category: "tools", level: "intermediate", icon: "bitbucket" },
  { name: "Docker", category: "tools", level: "intermediate", icon: "docker" },
  { name: "AWS", category: "tools", level: "advanced", icon: "aws" },
  { name: "Firebase", category: "tools", level: "advanced", icon: "firebase" },
  { name: "Jest", category: "tools", level: "intermediate", icon: "jest" },
  { name: "ESLint", category: "tools", level: "advanced", icon: "eslint" },
  { name: "Testing", category: "tools", level: "intermediate", icon: "testing" },
  
  // AI & Emerging
  { name: "Agentic AI", category: "other", level: "intermediate", icon: "ai" },
  { name: "Gen AI", category: "other", level: "intermediate", icon: "genai" },
  { name: "Software Development", category: "other", level: "expert", icon: "software" },
  { name: "Full Stack Development", category: "other", level: "expert", icon: "fullstack" }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "MongoDB Basics and Operations",
    issuer: "MongoDB University",
    date: "2022",
    description: "Acquired certificate in basics of MongoDB operations and indexing."
  }
];
