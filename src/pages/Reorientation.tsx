
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

const Reorientation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Switch Support</h1>
              <p className="text-xl opacity-90">
                Find guidance and resources to help you successfully transition to a new career path.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Start Fresh, Start Strong</h2>
                <p className="text-lg text-gray-700 mb-6">
                  For adults aged 30 and above who are looking to switch careers, our reorientation program offers comprehensive support and resources to help you successfully transition to a new field.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're seeking a complete career change, exploring freelance opportunities, or adapting to industry shifts, we provide the tools and guidance you need.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-blue-600">Career Assessment</Button>
                  <Button variant="outline">Explore Options</Button>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-blue-600 rounded-full p-3 text-white flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Skills Assessment</h4>
                      <p className="text-gray-600">Identify your transferable skills and discover how they can be applied in new industries.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-primary rounded-full p-3 text-white flex-shrink-0">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Retraining Options</h4>
                      <p className="text-gray-600">Access tailored training programs and courses to develop new skills for your target career.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-secondary rounded-full p-3 text-white flex-shrink-0">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Transition Support</h4>
                      <p className="text-gray-600">Receive guidance on job searching, networking, and marketing yourself in a new field.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Retraining Options Section */}
        <section className="section-padding bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Retraining Pathways</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore these popular retraining options to develop skills in growing industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Tech & Digital Skills</h3>
                <p className="text-gray-600 mb-4">
                  Learn coding, web development, digital marketing, and other in-demand tech skills with flexible online courses.
                </p>
                <ul className="text-gray-600 mb-6 list-disc pl-5 space-y-1">
                  <li>Web Development Bootcamp</li>
                  <li>Digital Marketing Certificate</li>
                  <li>Data Analytics Fundamentals</li>
                </ul>
                <Button className="w-full bg-blue-600">Explore Tech Training</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Entrepreneurship</h3>
                <p className="text-gray-600 mb-4">
                  Develop the skills to start your own business, from planning and funding to marketing and operations.
                </p>
                <ul className="text-gray-600 mb-6 list-disc pl-5 space-y-1">
                  <li>Business Plan Development</li>
                  <li>Startup Financing Workshop</li>
                  <li>Marketing for Small Businesses</li>
                </ul>
                <Button className="w-full bg-blue-600">Explore Entrepreneurship</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Vocational Training</h3>
                <p className="text-gray-600 mb-4">
                  Quickly develop practical skills for careers in healthcare, trades, and technical fields.
                </p>
                <ul className="text-gray-600 mb-6 list-disc pl-5 space-y-1">
                  <li>Healthcare Assistant Certification</li>
                  <li>Electrical Technician Training</li>
                  <li>Culinary Arts Program</li>
                </ul>
                <Button className="w-full bg-blue-600">Explore Vocational Paths</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-bold">Amina B.</h3>
                    <p className="text-gray-600">Former Teacher, Now Software Developer</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "After 15 years in education, I wanted a new challenge. Through Connect DZ's retraining program, I completed a coding bootcamp and now work remotely as a front-end developer. The career assessment helped me find a path that uses my communication skills in a new context."
                </p>
                <Button variant="outline">Read Full Story</Button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-bold">Karim M.</h3>
                    <p className="text-gray-600">Former Corporate Manager, Now Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "After being laid off from my corporate role at 45, I decided to pursue my passion for artisanal crafts. Connect DZ helped me develop a business plan, secure funding, and launch my workshop. Now I employ three people and sell products nationwide."
                </p>
                <Button variant="outline">Read Full Story</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Funding & Support Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Funding & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Government Programs</h3>
                <p className="text-gray-600 mb-4">
                  Information on government grants, loans, and subsidies available for career retraining and business startup.
                </p>
                <Button variant="outline" className="w-full">Explore Programs</Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                <p className="text-gray-600 mb-4">
                  Connect with experienced professionals who have successfully changed careers and can offer guidance.
                </p>
                <Button variant="outline" className="w-full">Find a Mentor</Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Workshops & Events</h3>
                <p className="text-gray-600 mb-4">
                  Attend specialized workshops and networking events for professionals in career transition.
                </p>
                <Button variant="outline" className="w-full">View Calendar</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-blue-600 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your New Chapter?</h2>
            <p className="text-lg opacity-90 mb-8">
              Begin with a career assessment to explore your options and create a personalized transition plan.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Career Assessment
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reorientation;
