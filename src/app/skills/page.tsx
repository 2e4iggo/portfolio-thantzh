import React from "react";
import { skillsData } from "@/utils/skills";

const Skills = () => {
  // Group skills by category
  const categories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          My Skills
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
          Technologies and tools I work with
        </p>
        
        {categories.map((category) => {
          const categorySkills = skillsData.filter(skill => skill.category === category);
          
          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill) => {
                  const Icon = skill.icon;
                  
                  return (
                    <div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center gap-4 border border-gray-200 dark:border-gray-700"
                    >
                      <Icon className="text-5xl text-blue-600 dark:text-blue-400" />
                      <div className="text-center">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
