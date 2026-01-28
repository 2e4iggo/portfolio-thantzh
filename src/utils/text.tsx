import { JSX } from "react";
import { Skill } from "./skills";

export interface ILanguageTexts {
  aboutMe: {
    name: string;
    title: string;
    description: string;
    downloadResume: string;
  };

  education: {
    title: string;
    viewCertification: string;
    educationHistory: {
      date: string;
      program: string;
      school: string;
      description: string;
      workload: string[];
    }[];
  };

  workHistory: {
    title: string;
    viewWorkHistory: string;
    workHistoryList: {
      companyName: string;
      companyLogo: string;
      jobTitle: string;
      startDate: string;
      endDate: string;
      companyDescription: string;
      responsibilities: string[];
      technologies: string[];
    }[];
  };

  skills: {
    title: string;
    subtitle?: string;
    categories: {
      Frontend: string;
      Backend: string;
      Database: string;
      Tools: string;
      Other: string;
    };
    levels: {
      Beginner: string;
      Intermediate: string;
      Advanced: string;
      Expert: string;
    };
  };
}

export const LANGUAGE: Record<"en" | "mm", ILanguageTexts> = {
  en: {
    aboutMe: {
      name: "Your Name",
      title: "Full Stack Developer",
      description: "Passionate full-stack developer with expertise in modern web technologies",
      downloadResume: "Download Resume"
    },
    education: {
      title: "Education",
      viewCertification: "View Certification",
      educationHistory: [
        {
          date: "2018 - 2022",
          program: "Bachelor of Computer Science",
          school: "University Name",
          description: "Focused on software engineering and web development",
          workload: ["Data Structures", "Algorithms", "Web Development", "Database Systems"]
        }
      ]
    },
    workHistory: {
      title: "Work Experience",
      viewWorkHistory: "View Full Work History",
      workHistoryList: [
        {
          companyName: "Tech Company Inc.",
          companyLogo: "/logos/company-logo.png",
          jobTitle: "Senior Full Stack Developer",
          startDate: "Jan 2023",
          endDate: "Present",
          companyDescription: "Leading tech company specializing in web applications",
          responsibilities: [
            "Developed and maintained React-based web applications",
            "Built RESTful APIs using Node.js and Express",
            "Collaborated with cross-functional teams"
          ],
          technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
        }
      ]
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Technical Expertise",
      categories: {
        Frontend: "Frontend Development",
        Backend: "Backend Development",
        Database: "Database & Storage",
        Tools: "Tools & DevOps",
        Other: "Other Technologies"
      },
      levels: {
        Beginner: "Beginner",
        Intermediate: "Intermediate",
        Advanced: "Advanced",
        Expert: "Expert"
      }
    }
  },
  mm: {
    aboutMe: {
      name: "သင့်နာမည်",
      title: "Full Stack Developer",
      description: "ခေတ်မီ ဝဘ်နည်းပညာများတွင် ကျွမ်းကျင်သော full-stack developer",
      downloadResume: "Resume ဒေါင်းလုဒ်လုပ်ရန်"
    },
    education: {
      title: "ပညာရေး",
      viewCertification: "လက်မှတ်ကြည့်ရန်",
      educationHistory: [
        {
          date: "၂၀၁၈ - ၂၀၂၂",
          program: "ကွန်ပျူတာသိပ္ပံဘွဲ့",
          school: "တက္ကသိုလ်အမည်",
          description: "ဆော့ဖ်ဝဲအင်ဂျင်နီယာနှင့် ဝဘ်တည်ဆောက်ခြင်းအပေါ် အာရုံစိုက်ခဲ့",
          workload: ["ဒေတာတည်ဆောက်ပုံ", "အယ်လဂိုရီသမ်", "ဝဘ်တည်ဆောက်ခြင်း", "ဒေတာဘေ့စ်စနစ်များ"]
        }
      ]
    },
    workHistory: {
      title: "အလုပ်အတွေ့အကြုံ",
      viewWorkHistory: "အလုပ်သမိုင်းအပြည့်အစုံကြည့်ရန်",
      workHistoryList: [
        {
          companyName: "Tech Company Inc.",
          companyLogo: "/logos/company-logo.png",
          jobTitle: "Senior Full Stack Developer",
          startDate: "ဇန်နဝါရီ ၂၀၂၃",
          endDate: "လက်ရှိ",
          companyDescription: "ဝဘ်အပလီကေးရှင်းများတွင် အထူးပြုသော နည်းပညာကုမ္ပဏီ",
          responsibilities: [
            "React အခြေခံ ဝဘ်အပလီကေးရှင်းများ တည်ဆောက်ခြင်းနှင့် ထိန်းသိမ်းခြင်း",
            "Node.js နှင့် Express သုံး၍ RESTful API များတည်ဆောက်ခြင်း",
            "မတူညီသောအဖွဲ့များနှင့် ပူးပေါင်းလုပ်ဆောင်ခြင်း"
          ],
          technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
        }
      ]
    },
    skills: {
      title: "ကျွမ်းကျင်မှုများနှင့် နည်းပညာများ",
      subtitle: "နည်းပညာဆိုင်ရာ ကျွမ်းကျင်မှု",
      categories: {
        Frontend: "Frontend တည်ဆောက်ခြင်း",
        Backend: "Backend တည်ဆောက်ခြင်း",
        Database: "ဒေတာဘေ့စ်နှင့် သိုလှောင်မှု",
        Tools: "ကိရိယာများနှင့် DevOps",
        Other: "အခြားနည်းပညာများ"
      },
      levels: {
        Beginner: "အစပိုင်း",
        Intermediate: "အလယ်အလတ်",
        Advanced: "အဆင့်မြင့်",
        Expert: "ကျွမ်းကျင်သူ"
      }
    }
  }
};