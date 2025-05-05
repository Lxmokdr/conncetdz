
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Users } from "lucide-react";

const YoungAdults = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-connect-secondary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Internships & First Jobs</h1>
              <p className="text-xl opacity-90">
                Kickstart your career with internships and entry-level positions tailored for university students and recent graduates.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Launch Your Career</h2>
                <p className="text-lg text-gray-700 mb-6">
                  In partnership with Wassit.dz, we provide university students and recent graduates with valuable opportunities to gain professional experience and develop workplace skills.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're looking for an internship during your studies or your first full-time position after graduation, our platform connects you with employers seeking young talent.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-connect-secondary">Browse Opportunities</Button>
                  <Button variant="outline">Build Your Profile</Button>
                </div>
              </div>
              <div className="bg-connect-secondary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-connect-secondary rounded-full p-3 text-white flex-shrink-0">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Internship Opportunities</h4>
                      <p className="text-gray-600">Access internships with partner organizations designed to provide meaningful work experience.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-primary rounded-full p-3 text-white flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Entry-Level Positions</h4>
                      <p className="text-gray-600">Find first job opportunities matched to your education and career aspirations.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-accent rounded-full p-3 text-white flex-shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Training Programs</h4>
                      <p className="text-gray-600">Participate in skill-building workshops and training sessions to enhance your employability.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Opportunities Section */}
        <section className="section-padding bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Opportunities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore these highlighted internships and entry-level positions from our partner organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Internship</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Marketing Intern</h3>
                <p className="text-gray-500 mb-3">Sonatrach - Algiers</p>
                <p className="text-gray-600 mb-4">
                  Join our marketing team to gain hands-on experience in digital marketing, social media management, and campaign planning.
                </p>
                <Button className="w-full bg-connect-secondary">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Entry-Level</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Junior Developer</h3>
                <p className="text-gray-500 mb-3">Algeria Telecom - Oran</p>
                <p className="text-gray-600 mb-4">
                  Develop web applications and services using modern technologies in a collaborative team environment.
                </p>
                <Button className="w-full bg-connect-secondary">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Internship</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Finance Assistant</h3>
                <p className="text-gray-500 mb-3">BNP Paribas - Constantine</p>
                <p className="text-gray-600 mb-4">
                  Assist the finance team with data analysis, reporting, and other tasks to gain valuable experience in the banking sector.
                </p>
                <Button className="w-full bg-connect-secondary">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Opportunities</Button>
          </div>
        </section>

        {/* Resources Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Career Development Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-connect-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">CV & Cover Letter</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to create standout application materials that highlight your skills and education.
                </p>
                <Button variant="outline" className="w-full">Access Templates</Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-connect-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Interview Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Practice with common interview questions and learn techniques to impress potential employers.
                </p>
                <Button variant="outline" className="w-full">Start Practice</Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-connect-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Skills</h3>
                <p className="text-gray-600 mb-4">
                  Develop the workplace and soft skills that employers value most in entry-level candidates.
                </p>
                <Button variant="outline" className="w-full">Browse Courses</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-connect-secondary text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Professional Journey</h2>
            <p className="text-lg opacity-90 mb-8">
              Create your profile today to start applying for internships and entry-level positions that will kickstart your career.
            </p>
            <Button size="lg" className="bg-white text-connect-secondary hover:bg-gray-100">
              Create Your Profile
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default YoungAdults;
