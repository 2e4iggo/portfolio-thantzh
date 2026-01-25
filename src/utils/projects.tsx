export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const dummyProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features include real-time inventory tracking, order management, and admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    startDate: "2024-01",
    endDate: "2024-06",
    status: "completed"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking. Users can create boards, assign tasks, set deadlines, and track progress.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    liveUrl: "https://example-taskapp.com",
    githubUrl: "https://github.com/example/taskapp",
    startDate: "2024-07",
    endDate: "2024-10",
    status: "completed"
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    description: "An interactive weather dashboard that provides real-time weather data, 7-day forecasts, and weather alerts. Features include location-based weather, historical data visualization, and customizable widgets.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules", "Axios"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/example/weather",
    startDate: "2023-11",
    endDate: "2024-01",
    status: "completed"
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    description: "A comprehensive analytics platform for tracking social media performance across multiple platforms. Provides insights, engagement metrics, audience demographics, and automated reporting.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "D3.js", "Docker"],
    githubUrl: "https://github.com/example/analytics",
    startDate: "2024-03",
    endDate: "2024-08",
    status: "completed"
  },
  {
    id: 5,
    title: "Blog Platform with CMS",
    description: "A modern blog platform with a custom content management system. Features include rich text editor, SEO optimization, comment system, and multi-author support with role-based permissions.",
    technologies: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS", "NextAuth.js"],
    liveUrl: "https://example-blog.com",
    githubUrl: "https://github.com/example/blog",
    startDate: "2024-09",
    status: "in-progress"
  },
  {
    id: 6,
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness goals. Includes workout plans, progress tracking, calorie counter, and social sharing features.",
    technologies: ["React Native", "Expo", "Firebase", "Redux Toolkit", "Native Base"],
    githubUrl: "https://github.com/example/fitness",
    startDate: "2024-02",
    endDate: "2024-07",
    status: "completed"
  },
  {
    id: 7,
    title: "Real Estate Listing Platform",
    description: "A property listing platform with advanced search filters, interactive maps, virtual tours, and agent management. Includes property comparison, saved searches, and email notifications.",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Mapbox", "AWS S3"],
    liveUrl: "https://example-realestate.com",
    startDate: "2024-05",
    endDate: "2024-11",
    status: "completed"
  },
  {
    id: 8,
    title: "AI-Powered Recipe Finder",
    description: "An intelligent recipe search and recommendation system that suggests recipes based on available ingredients, dietary preferences, and cooking time. Features meal planning and grocery list generation.",
    technologies: ["React", "Python", "FastAPI", "TensorFlow", "PostgreSQL", "Redis"],
    liveUrl: "https://example-recipes.com",
    githubUrl: "https://github.com/example/recipes",
    startDate: "2024-10",
    status: "in-progress"
  },
  {
    id: 9,
    title: "Online Learning Platform",
    description: "An interactive e-learning platform with video courses, quizzes, progress tracking, and certificates. Includes instructor dashboard, student management, and course creation tools.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Mux Video", "Stripe"],
    githubUrl: "https://github.com/example/learning",
    startDate: "2024-01",
    endDate: "2024-09",
    status: "completed"
  },
  {
    id: 10,
    title: "Portfolio Analytics Dashboard",
    description: "A data visualization dashboard for tracking investment portfolios with real-time stock data, performance metrics, and risk analysis. Features include portfolio comparison and automated alerts.",
    technologies: ["Angular", "TypeScript", "Spring Boot", "MySQL", "Highcharts", "WebSocket"],
    startDate: "2024-11",
    status: "in-progress"
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return dummyProjects.find(project => project.id === id);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return dummyProjects.filter(project => project.status === status);
};

export const getProjectsByTechnology = (technology: string): Project[] => {
  return dummyProjects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};
