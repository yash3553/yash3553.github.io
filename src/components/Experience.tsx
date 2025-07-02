
export const Experience = () => {
  const experiences = [
    {
      role: "DevOps Intern",
      company: "Microdegree, Bengaluru",
      period: "Oct 2024 – Jan 2025",
      description: "Gained expertise in AWS infrastructure, CI/CD pipelines, Docker, Jenkins, and Kubernetes.",
      technologies: ["AWS", "Docker", "Jenkins", "Kubernetes", "CI/CD"],
      current: true
    },
    {
      role: "AI Intern",
      company: "Innovate Intern, Chennai",
      period: "Sep 2024 – Jan 2025",
      description: "Built a face recognition-based attendance system using AI/ML models.",
      technologies: ["Python", "AI/ML", "Face Recognition", "Computer Vision"],
      current: true
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-8 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-xl text-cyan-400 mb-2">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{exp.period}</span>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-600/20 border border-green-600/30 rounded-full text-green-300 text-sm">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-cyan-600/20 border border-cyan-600/30 rounded-full text-cyan-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
