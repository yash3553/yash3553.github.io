
export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Yashwanth G N. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:yashwanthyashwanthgn@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <span className="text-xl">@</span>
            </a>
            <a 
              href="https://linkedin.com/in/yashwanth-g-n-10004a318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-xl font-bold">in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
