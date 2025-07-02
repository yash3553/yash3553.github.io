
export const About = () => {
  const education = [
    {
      institution: "Coorg Institute of Technology, Karnataka",
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      period: "Nov 2021 – Jul 2025",
      grade: "CGPA: 7.63/10",
      current: true
    },
    {
      institution: "Shastry Composite PU College, Hunsur",
      degree: "PCMB",
      period: "2019 – 2021",
      grade: "76%",
      current: false
    },
    {
      institution: "Anugraha High School, Hallimysuru",
      degree: "SSLC",
      period: "2018 – 2019",
      grade: "85.44%",
      current: false
    }
  ];

  return (
    <div className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a curious and motivated engineering student with a strong focus on 
              <span className="text-cyan-400"> DevOps</span>, <span className="text-cyan-400">cloud platforms</span>, 
              and <span className="text-cyan-400">automation</span>. 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm committed to learning through hands-on projects and solving real-world problems. 
              My passion lies in building scalable, efficient systems that bridge the gap between 
              development and operations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With experience in cloud technologies, containerization, and AI/ML, I strive to 
              create solutions that are not only technically sound but also innovative and impactful.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Education Timeline</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-cyan-400/30">
                  <div className={`absolute -left-2 w-4 h-4 rounded-full ${
                    edu.current ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}></div>
                  <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-colors">
                    <h4 className="text-lg font-semibold text-white mb-2">{edu.institution}</h4>
                    <p className="text-cyan-400 mb-2">{edu.degree}</p>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>{edu.period}</span>
                      <span className="font-medium text-white">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
