
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Book, MessageSquare } from "lucide-react";

const Under18 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-connect-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Orientation for Students</h1>
              <p className="text-xl opacity-90">
                Discover your strengths and explore potential career paths that align with your interests and abilities.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Find Your Path</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our chatbot-powered orientation system is designed to help high school students like you explore your strengths, interests, and potential career paths before making important educational choices.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  By understanding your unique abilities and preferences, we can guide you towards university programs and vocational training options that will set you up for success in Algeria's evolving job market.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-connect-primary">Start Assessment</Button>
                  <Button variant="outline">Explore Careers</Button>
                </div>
              </div>
              <div className="bg-connect-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Orientation Process</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-connect-primary rounded-full p-3 text-white flex-shrink-0">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Interactive Assessment</h4>
                      <p className="text-gray-600">Complete our AI-powered questionnaire to identify your strengths, interests, and potential career matches.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-secondary rounded-full p-3 text-white flex-shrink-0">
                      <Book size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Personalized Recommendations</h4>
                      <p className="text-gray-600">Receive tailored suggestions for academic programs and career paths based on your profile.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-accent rounded-full p-3 text-white flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Education Guidance</h4>
                      <p className="text-gray-600">Learn about universities, programs, and qualifications needed for your chosen career path.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Exploration Section */}
        <section className="section-padding bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Career Possibilities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover growing industries and in-demand careers in Algeria that match your skills and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Technology</h3>
                <p className="text-gray-600 mb-4">
                  From software development to IT infrastructure, tech careers offer innovation and growth in Algeria's digital economy.
                </p>
                <Button variant="outline" className="w-full">Explore Tech Careers</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Healthcare professionals are always in demand, with opportunities in medicine, nursing, and public health.
                </p>
                <Button variant="outline" className="w-full">Explore Healthcare Careers</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Business & Finance</h3>
                <p className="text-gray-600 mb-4">
                  Develop skills in business management, finance, and entrepreneurship to contribute to Algeria's economic growth.
                </p>
                <Button variant="outline" className="w-full">Explore Business Careers</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Educational Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">University Information</h3>
                <p className="text-gray-700 mb-6">
                  Explore Algeria's top universities and educational institutions. Learn about admission requirements, programs offered, and how to prepare for entrance exams.
                </p>
                <Button className="bg-connect-primary">Browse Universities</Button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Career Planning Tools</h3>
                <p className="text-gray-700 mb-6">
                  Access resources to help you plan your educational journey, including study guides, practice tests, and career planning worksheets.
                </p>
                <Button className="bg-connect-primary">Access Tools</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-connect-primary text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="text-lg opacity-90 mb-8">
              Take the first step toward discovering the right career path for your future. Our AI-powered assessment will help guide your educational choices.
            </p>
            <Button size="lg" className="bg-white text-connect-primary hover:bg-gray-100">
              Begin Career Assessment
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Under18;
