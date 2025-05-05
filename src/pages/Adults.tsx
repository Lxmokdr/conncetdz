
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Award, BookOpen } from "lucide-react";

const Adults = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-connect-primary via-connect-secondary to-connect-accent text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Advancement</h1>
              <p className="text-xl opacity-90">
                Find stable employment opportunities and resources to advance your professional career.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Elevate Your Career</h2>
                <p className="text-lg text-gray-700 mb-6">
                  For experienced professionals aged 25 and above, our platform offers access to mid-level and senior positions across various industries in Algeria.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We also provide resources for professional development, certifications, and networking opportunities to help you advance in your chosen field.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-connect-primary">Browse Job Listings</Button>
                  <Button variant="outline" asChild>
                    <Link to="/chatbot">Professional Development</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-connect-accent/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Career Services</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-connect-primary rounded-full p-3 text-white flex-shrink-0">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Job Matching</h4>
                      <p className="text-gray-600">Our algorithm matches your skills and experience with suitable positions in your field.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-secondary rounded-full p-3 text-white flex-shrink-0">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Professional Certifications</h4>
                      <p className="text-gray-600">Access training courses and certification programs to enhance your qualifications.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-accent rounded-full p-3 text-connect-primary flex-shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Career Advancement</h4>
                      <p className="text-gray-600">Guidance on career progression, leadership development, and promotion strategies.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="section-padding bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Job Listings</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore these highlighted positions from top employers across Algeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-connect-primary text-xs font-medium px-2.5 py-0.5 rounded-full">Full-Time</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Project Manager</h3>
                <p className="text-gray-500 mb-3">National Construction Company - Algiers</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">5+ years experience</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Construction</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Management</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Lead construction projects from planning to completion, managing timelines, resources, and stakeholders.
                </p>
                <Button className="w-full bg-connect-primary">View Details</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-connect-primary text-xs font-medium px-2.5 py-0.5 rounded-full">Full-Time</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Senior Software Engineer</h3>
                <p className="text-gray-500 mb-3">Tech Innovations Algeria - Oran</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">3+ years experience</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Java</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Spring</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Design and develop enterprise software solutions, collaborating with cross-functional teams to solve complex problems.
                </p>
                <Button className="w-full bg-connect-primary">View Details</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-connect-primary text-xs font-medium px-2.5 py-0.5 rounded-full">Full-Time</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Healthcare Administrator</h3>
                <p className="text-gray-500 mb-3">National Hospital - Constantine</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">4+ years experience</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Healthcare</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Administration</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Oversee daily operations of healthcare facility, manage staff, and ensure compliance with regulations and standards.
                </p>
                <Button className="w-full bg-connect-primary">View Details</Button>
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
                  <span className="bg-blue-100 text-connect-primary text-xs font-medium px-2.5 py-0.5 rounded-full">Full-Time</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Financial Analyst</h3>
                <p className="text-gray-500 mb-3">Algeria Investment Bank - Algiers</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">3+ years experience</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Finance</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Analysis</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Analyze financial data, prepare reports, and provide recommendations to guide strategic business decisions.
                </p>
                <Button className="w-full bg-connect-primary">View Details</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Job Listings</Button>
          </div>
        </section>

        {/* Professional Development Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Certification Programs</h3>
                <p className="text-gray-700 mb-6">
                  Enhance your qualifications with industry-recognized certifications in project management, IT, finance, and more.
                </p>
                <Button asChild className="bg-connect-primary">
                  <Link to="/chatbot">Browse Certifications</Link>
                </Button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Leadership Development</h3>
                <p className="text-gray-700 mb-6">
                  Develop the skills needed to advance into leadership roles through our specialized training programs.
                </p>
                <Button asChild className="bg-connect-primary">
                  <Link to="/chatbot">Explore Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-connect-primary text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Take Your Career to the Next Level</h2>
            <p className="text-lg opacity-90 mb-8">
              Create your professional profile to access personalized job recommendations and career advancement resources.
            </p>
            <Button asChild size="lg" className="bg-white text-connect-primary hover:bg-gray-100">
              <Link to="/chatbot">Create Professional Profile</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Adults;
