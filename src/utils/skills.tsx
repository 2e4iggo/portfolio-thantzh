import { IconType } from 'react-icons';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiVercel
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

export interface Skill {
  name: string;
  icon: IconType;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
}

export const skillsData: Skill[] = [
  // Frontend
  {
    name: 'React',
    icon: FaReact,
    level: 'Advanced',
    category: 'Frontend'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    level: 'Advanced',
    category: 'Frontend'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    level: 'Advanced',
    category: 'Frontend'
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    level: 'Expert',
    category: 'Frontend'
  },
  {
    name: 'HTML5',
    icon: FaHtml5,
    level: 'Expert',
    category: 'Frontend'
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    level: 'Advanced',
    category: 'Frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    level: 'Advanced',
    category: 'Frontend'
  },
  {
    name: 'Redux',
    icon: SiRedux,
    level: 'Intermediate',
    category: 'Frontend'
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    level: 'Intermediate',
    category: 'Frontend'
  },
  // Backend
  {
    name: 'Node.js',
    icon: FaNodeJs,
    level: 'Advanced',
    category: 'Backend'
  },
  {
    name: 'Express',
    icon: SiExpress,
    level: 'Advanced',
    category: 'Backend'
  },
  {
    name: 'Python',
    icon: FaPython,
    level: 'Intermediate',
    category: 'Backend'
  },
  {
    name: 'GraphQL',
    icon: SiGraphql,
    level: 'Intermediate',
    category: 'Backend'
  },
  // Database
  {
    name: 'MongoDB',
    icon: SiMongodb,
    level: 'Advanced',
    category: 'Database'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    level: 'Intermediate',
    category: 'Database'
  },
  {
    name: 'SQL',
    icon: FaDatabase,
    level: 'Advanced',
    category: 'Database'
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    level: 'Intermediate',
    category: 'Database'
  },
  // Tools
  {
    name: 'Git',
    icon: FaGitAlt,
    level: 'Advanced',
    category: 'Tools'
  },
  {
    name: 'Docker',
    icon: FaDocker,
    level: 'Intermediate',
    category: 'Tools'
  },
  {
    name: 'AWS',
    icon: FaAws,
    level: 'Intermediate',
    category: 'Tools'
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    level: 'Advanced',
    category: 'Tools'
  }
];

export default skillsData;
