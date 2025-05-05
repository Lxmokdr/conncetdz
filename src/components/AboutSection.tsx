
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Connect DZ</h2>
          <p className="text-lg text-gray-700">
            Connect DZ was created with a clear mission: to empower Algerian youth by bridging the gap between education and employment opportunities.
          </p>
          <p className="text-gray-700">
            We believe that by bringing together students, universities, government agencies, and businesses, we can create a collaborative platform that addresses unemployment through targeted solutions for each stage of career development.
          </p>
          <p className="text-gray-700">
            Our platform provides personalized guidance, training resources, job listings, and reorientation support—all designed to help Algerians navigate their career path with confidence.
          </p>
          <Button asChild className="bg-connect-primary hover:bg-blue-700">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="People collaborating" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-connect-primary/30 flex items-center justify-center">
              <div className="bg-white/90 p-6 rounded-lg max-w-xs text-center mx-4">
                <h3 className="font-bold text-xl text-connect-primary mb-2">Our Impact</h3>
                <p className="text-gray-700">
                  A national platform built by and for Algerians to make employment more visible and reachable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
