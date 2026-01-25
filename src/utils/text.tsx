// Website Text Content
// This file contains all text content used throughout the portfolio website

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  keywords: string[];
  url?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  portfolio?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

// Site Metadata
export const siteMetadata: SiteMetadata = {
  title: "ThantZH The Dev | Portfolio",
  description: "Full-stack developer specializing in modern web technologies. Explore my projects, skills, and professional journey.",
  author: "ThantZH",
  keywords: [
    "web developer",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
    "software engineer"
  ],
  url: "https://thantzh.dev"
};

// Navigation
export const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    description: "Welcome to my portfolio"
  },
  {
    name: "Projects",
    href: "/projects",
    description: "View my development projects"
  },
  {
    name: "Skills",
    href: "/skills",
    description: "Explore my technical skills"
  },
  {
    name: "Work History",
    href: "/workhistory",
    description: "My professional experience"
  },
  {
    name: "Education",
    href: "/education",
    description: "My academic background"
  }
];

// Hero Section
export const hero = {
  greeting: "Hi, I'm",
  name: "ThantZH",
  title: "Full-Stack Developer",
  tagline: "Building exceptional digital experiences",
  description: "I'm a passionate full-stack developer specializing in creating robust, scalable, and user-friendly web applications. With expertise in modern technologies and a keen eye for design, I transform ideas into reality.",
  ctaButtons: {
    primary: {
      text: "View My Work",
      href: "/projects"
    },
    secondary: {
      text: "Get In Touch",
      href: "#contact"
    }
  }
};

// About Section
export const about = {
  title: "About Me",
  heading: "Who I Am",
  paragraphs: [
    "I'm a dedicated full-stack developer with a passion for creating innovative web solutions that make a difference. My journey in software development began with a curiosity about how things work, which evolved into a career focused on building exceptional digital experiences.",
    "I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices. I thrive in collaborative environments and enjoy tackling complex challenges that push me to grow as a developer.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
  ],
  highlights: [
    "🚀 Passionate about modern web technologies",
    "💡 Problem solver with attention to detail",
    "🤝 Strong team player and communicator",
    "📚 Continuous learner and tech enthusiast"
  ]
};

// Contact Information
export const contactInfo: ContactInfo = {
  email: "contact@thantzh.dev",
  phone: "+65 1234 5678",
  location: "Singapore",
  linkedin: "https://linkedin.com/in/thantzh",
  github: "https://github.com/2e4iggo",
  twitter: "https://twitter.com/thantzh",
  portfolio: "https://thantzh.dev"
};

// Contact Section
export const contact = {
  title: "Get In Touch",
  heading: "Let's Work Together",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
  formLabels: {
    name: "Your Name",
    email: "Your Email",
    subject: "Subject",
    message: "Your Message",
    submit: "Send Message"
  },
  formPlaceholders: {
    name: "John Doe",
    email: "john@example.com",
    subject: "Project Inquiry",
    message: "Tell me about your project..."
  }
};

// Skills Section
export const skillsSection = {
  title: "My Skills",
  heading: "Technical Expertise",
  description: "A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.",
  categories: {
    frontend: "Frontend Development",
    backend: "Backend Development",
    database: "Database & Storage",
    tools: "Tools & Technologies",
    other: "Other Skills"
  }
};

// Projects Section
export const projectsSection = {
  title: "My Projects",
  heading: "Featured Work",
  description: "Explore a selection of projects I've worked on, showcasing my skills in web development, problem-solving, and creative thinking.",
  filters: {
    all: "All Projects",
    completed: "Completed",
    inProgress: "In Progress",
    planned: "Planned"
  },
  emptyState: {
    title: "No projects found",
    description: "Check back later for new projects!"
  }
};

// Work History Section
export const workHistorySection = {
  title: "Work History",
  heading: "Professional Experience",
  description: "My professional journey, highlighting key roles, responsibilities, and achievements throughout my career.",
  emptyState: {
    title: "Experience coming soon",
    description: "Currently updating work history information."
  }
};

// Education Section
export const educationSection = {
  title: "Education",
  heading: "Academic Background",
  description: "My educational journey, including degrees, certifications, and continuous learning pursuits.",
  emptyState: {
    title: "Education details coming soon",
    description: "Currently updating educational information."
  }
};

// Footer
export const footer = {
  copyright: `© ${new Date().getFullYear()} ThantZH. All rights reserved.`,
  tagline: "Built with ❤️ using Next.js and TypeScript",
  sections: {
    quickLinks: {
      title: "Quick Links",
      links: navigation
    },
    social: {
      title: "Connect With Me",
      description: "Follow me on social media for updates and insights"
    },
    contact: {
      title: "Contact",
      description: "Let's discuss your next project"
    }
  }
};

// Common UI Text
export const uiText = {
  loading: "Loading...",
  error: "Something went wrong",
  noResults: "No results found",
  tryAgain: "Try again",
  learnMore: "Learn more",
  viewProject: "View Project",
  viewSource: "View Source",
  liveDemo: "Live Demo",
  comingSoon: "Coming Soon",
  readMore: "Read More",
  showLess: "Show Less",
  backToTop: "Back to Top",
  backHome: "Back to Home",
  download: "Download",
  share: "Share"
};

// Page Titles (for metadata)
export const pageTitles = {
  home: "ThantZH The Dev | Home",
  projects: "Projects | ThantZH The Dev",
  skills: "Skills | ThantZH The Dev",
  workHistory: "Work History | ThantZH The Dev",
  education: "Education | ThantZH The Dev",
  contact: "Contact | ThantZH The Dev"
};

// Page Descriptions (for metadata)
export const pageDescriptions = {
  home: "Welcome to my portfolio. I'm ThantZH, a full-stack developer passionate about creating exceptional web experiences.",
  projects: "Explore my portfolio of web development projects, showcasing expertise in React, Next.js, TypeScript, and more.",
  skills: "Discover my technical skills and expertise in frontend, backend, and full-stack web development.",
  workHistory: "Learn about my professional experience and career journey in software development.",
  education: "View my educational background, certifications, and continuous learning achievements.",
  contact: "Get in touch with me for project collaborations, job opportunities, or just to say hello."
};

// Testimonials (optional)
export const testimonials = {
  title: "What People Say",
  heading: "Testimonials",
  description: "Feedback from colleagues, clients, and collaborators I've worked with.",
  items: [
    // Add testimonials here when available
  ]
};

// Call to Action
export const callToAction = {
  title: "Ready to Start a Project?",
  description: "Let's collaborate and bring your ideas to life. I'm always excited to work on new and challenging projects.",
  buttonText: "Get Started",
  buttonHref: "#contact"
};

// Success Messages
export const successMessages = {
  contactForm: "Thank you for your message! I'll get back to you soon.",
  subscribeNewsletter: "Successfully subscribed to the newsletter!",
  downloadResume: "Resume downloaded successfully!"
};

// Error Messages
export const errorMessages = {
  contactForm: "Failed to send message. Please try again or contact me directly via email.",
  formValidation: "Please fill in all required fields.",
  network: "Network error. Please check your connection and try again.",
  notFound: "Page not found. The page you're looking for doesn't exist."
};

// Social Links
export const socialLinks = [
  {
    name: "GitHub",
    url: contactInfo.github || "#",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: contactInfo.linkedin || "#",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: contactInfo.twitter || "#",
    icon: "twitter"
  },
  {
    name: "Email",
    url: `mailto:${contactInfo.email}`,
    icon: "email"
  }
];

// Resume/CV
export const resume = {
  downloadText: "Download Resume",
  downloadUrl: "/resume.pdf",
  viewText: "View Resume",
  lastUpdated: "Last updated: January 2026"
};

// Statistics (optional - can be used on home page)
export const statistics = {
  yearsExperience: "3+",
  projectsCompleted: "10+",
  technologiesUsed: "15+",
  clientsSatisfied: "5+"
};

// Helper function to get page metadata
export const getPageMetadata = (page: keyof typeof pageTitles) => {
  return {
    title: pageTitles[page],
    description: pageDescriptions[page]
  };
};

// Export all text content
export default {
  siteMetadata,
  navigation,
  hero,
  about,
  contactInfo,
  contact,
  skillsSection,
  projectsSection,
  workHistorySection,
  educationSection,
  footer,
  uiText,
  pageTitles,
  pageDescriptions,
  testimonials,
  callToAction,
  successMessages,
  errorMessages,
  socialLinks,
  resume,
  statistics,
  getPageMetadata
};
