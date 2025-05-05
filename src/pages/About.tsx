
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-connect-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Connect DZ</h1>
              <p className="text-xl opacity-90">
                Our mission is to connect Algerian youth with real employment opportunities by bridging education, job markets, and public support.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Computer with code" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-700">
                Connect DZ was born from a simple observation: despite Algeria's abundant human resources and potential, unemployment remains a significant challenge, especially for young graduates.
              </p>
              <p className="text-gray-700">
                We recognized that a key issue was the disconnect between education, government support systems, and the actual needs of the job market. Our platform aims to bridge these gaps by creating a unified ecosystem where all stakeholders can collaborate effectively.
              </p>
              <p className="text-gray-700">
                By providing tailored guidance for different age groups and career stages, Connect DZ aims to empower Algerians with the tools, resources, and connections they need to build successful careers in their home country.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              To empower Algerian youth and professionals by connecting education, employment opportunities, and public support through an accessible and unified platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-connect-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Impact</h3>
                <p className="text-gray-600">
                  Creating measurable change in Algeria's employment landscape through targeted solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-connect-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  Ensuring all Algerians can access career guidance and opportunities regardless of location or background.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-connect-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Unity</h3>
                <p className="text-gray-600">
                  Bringing together key stakeholders to create a collaborative solution to unemployment.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect DZ is made up of dedicated professionals with expertise in education, technology, and workforce development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Leila Benali</h3>
                <p className="text-connect-primary mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  Former education specialist with 15 years of experience in workforce development programs.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Ahmed Kader</h3>
                <p className="text-connect-primary mb-3">CTO</p>
                <p className="text-gray-600">
                  Tech entrepreneur with a passion for creating digital solutions to social challenges.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Sofiane Hamdi</h3>
                <p className="text-connect-primary mb-3">Partnerships Director</p>
                <p className="text-gray-600">
                  Former government liaison with extensive connections in public and private sectors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">
              Our team is supported by advisors from universities, government agencies, and leading businesses across Algeria.
            </p>
            <Button asChild className="bg-connect-primary hover:bg-blue-700">
              <Link to="/partners">Meet Our Partners</Link>
            </Button>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-connect-primary to-blue-700 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg opacity-90 mb-8">
              Whether you're seeking opportunities, looking to partner with us, or want to contribute to our mission, Connect DZ welcomes you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-connect-primary hover:bg-gray-100">
                <Link to="/how-it-works">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/partners">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
