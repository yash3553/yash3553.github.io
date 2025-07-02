import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Full Stack Airport Management Solution",
      description: "Comprehensive system for managing flight scheduling, baggage tracking, and passenger data with modern web technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      featured: true,
      githubUrl: null
    },
    {
      title: "Smart Node Cloud Deployment on AWS",
      description: "Scalable Node.js application deployment using AWS EC2, VPC, Auto Scaling, and SNS for high availability.",
      technologies: ["AWS", "Node.js", "EC2", "Auto Scaling", "SNS"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      featured: true,
      githubUrl: "https://github.com/yash3553/AWS-Session"
    },
    {
      title: "Automated NGINX Deployment with Ansible",
      description: "Consistent NGINX provisioning and configuration management across multiple AWS EC2 instances using Ansible automation.",
      technologies: ["Ansible", "NGINX", "AWS EC2", "Linux"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      featured: false,
      githubUrl: null
    },
    {
      title: "GitHub Repo Access Audit Automation",
      description: "Bash script utilizing GitHub API and AWS SSM for automated security auditing and access control monitoring.",
      technologies: ["Bash", "GitHub API", "AWS SSM", "Security"],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
      featured: false,
      githubUrl: "https://github.com/yash3553/realtime-pro-github"
    },
    {
      title: "Jenkins Multi-Stage Docker Pipeline",
      description: "Automated CI/CD pipeline for frontend and backend applications using Docker containerization and Maven build automation.",
      technologies: ["Jenkins", "Docker", "Maven", "CI/CD"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      featured: false,
      githubUrl: "https://github.com/yash3553/Jenkins-docker-integration"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gray-800/50 border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-[1.02] ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-600/20 border border-cyan-600/30 rounded-full text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={project.githubUrl ? () => window.open(project.githubUrl, '_blank') : undefined}
                    className="border-gray-600 text-gray-300 hover:bg-gray-600/10 flex items-center gap-2"
                    disabled={!project.githubUrl}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
