
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <div className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-start space-x-4">
                <div className="w-12 h-12 bg-cyan-600/20 border border-cyan-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">@</span>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">yashwanthyashwanthgn@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center justify-start space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 text-xl">in</span>
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/yashwanth-g-n-10004a318" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/yashwanth-g-n-10004a318
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-start space-x-4">
                <div className="w-12 h-12 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-xl">📞</span>
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">9741614832</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
