
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23164e63' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Hi, I'm Yashwanth G N
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Passionate about building <span className="text-cyan-400">cloud-native solutions</span>, 
                automating infrastructure, and exploring <span className="text-cyan-400">AI/ML technologies</span>.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-600/30 rounded-full text-cyan-300">
                  DevOps Engineer
                </span>
                <span className="px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-300">
                  Cloud Engineer
                </span>
                <span className="px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-full text-purple-300">
                  AI/ML Enthusiast
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://drive.google.com/file/d/1o93cTU167dbtaD_YgO_BeRQ5RC4VELtO/view?usp=drivesdk', '_blank')}
                  className="border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 px-8 py-3 text-lg"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gray-800 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/d3c17c7a-7f0d-405c-b415-e383ca955e39.png" 
                      alt="Yashwanth G N" 
                      className="w-64 h-64 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-cyan-400" />
      </div>
    </div>
  );
};
