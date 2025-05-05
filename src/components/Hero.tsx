
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Connecting Algerian Youth to Opportunities
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Connect DZ bridges education, employment, and public support to fight unemployment in Algeria through tailored guidance for every stage of your career journey.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-connect-primary hover:bg-gray-100">
                <Link to="/how-it-works">Discover How</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-connect-secondary to-connect-primary opacity-30 blur"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Your Path</h3>
                <div className="space-y-3">
                  <Link to="/under-18" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-800">
                    <div className="bg-connect-primary/10 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-connect-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Under 18</span>
                      <p className="text-sm text-gray-600">Career orientation for students</p>
                    </div>
                  </Link>
                  
                  <Link to="/young-adults" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-800">
                    <div className="bg-connect-secondary/10 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Ages 18-25</span>
                      <p className="text-sm text-gray-600">Internships & first jobs</p>
                    </div>
                  </Link>
                  
                  <Link to="/adults" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-800">
                    <div className="bg-connect-accent/10 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-connect-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Ages 25+</span>
                      <p className="text-sm text-gray-600">Career advancement & stability</p>
                    </div>
                  </Link>
                  
                  <Link to="/reorientation" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-800">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Reorientation</span>
                      <p className="text-sm text-gray-600">Career switch & retraining</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            <p className="text-lg font-medium">In Partnership With:</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
              <span className="text-xl font-semibold opacity-80">Wassit.dz</span>
              <span className="text-xl font-semibold opacity-80">Universities</span>
              <span className="text-xl font-semibold opacity-80">Government</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
