
import { useState } from "react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("devops");

  const skillCategories = {
    devops: {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Kubernetes", 
        "Terraform",
        "Ansible",
        "Jenkins",
        "Git & GitHub"
      ]
    },
    cloud: {
      title: "Cloud Platforms",
      skills: [
        "AWS EC2",
        "AWS S3",
        "AWS RDS", 
        "CloudWatch",
        "GCP Compute",
        "Cloud Functions"
      ]
    },
    monitoring: {
      title: "Monitoring & OS",
      skills: [
        "Prometheus",
        "Grafana",
        "Linux (Ubuntu)",
        "Windows",
        "Python"
      ]
    }
  };

  return (
    <div className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === key
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors">
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
