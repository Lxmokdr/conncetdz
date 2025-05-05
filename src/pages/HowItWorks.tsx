
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-connect-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How Connect DZ Works</h1>
              <p className="text-xl opacity-90">
                Our platform offers targeted solutions for users at different career stages, connecting them with opportunities, resources, and support.
              </p>
            </div>
          </div>
        </div>
        
        {/* Process Overview */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-connect-primary/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-connect-primary">1</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Profile Creation</h3>
                  <p className="text-gray-700 mb-4">
                    Users create a profile with their age, education level, work experience, and career interests. This helps us direct them to the most relevant resources and opportunities.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Profile data includes:</span> Personal information, education history, work experience, skills, career goals, and preferences.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-connect-secondary/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-connect-secondary">2</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Pathway Direction</h3>
                  <p className="text-gray-700 mb-4">
                    Based on age and profile information, users are directed to one of our specialized pathways, each with tailored resources and opportunities.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Age-based pathways:</span> Under 18, Ages 18-25, Ages 25+, and Reorientation for those 30+ looking to switch careers.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-connect-accent/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-connect-accent">3</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Personalized Recommendations</h3>
                  <p className="text-gray-700 mb-4">
                    We provide personalized recommendations for education, training, job opportunities, or reorientation resources based on the user's profile and goals.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Recommendation types:</span> University programs, internships, job listings, training courses, mentorship opportunities, and career guidance.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-blue-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-blue-600">4</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Connection & Support</h3>
                  <p className="text-gray-700 mb-4">
                    We connect users with relevant institutions, employers, and resources, while providing ongoing support through their career journey.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Support services:</span> Application guidance, interview preparation, skill development resources, and progress tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pathways in Detail */}
        <section className="section-padding bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Specialized Pathways</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each pathway is designed to address the unique needs and challenges of users at different career stages.
            </p>
          </div>
          
          {/* Under 18 */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-connect-primary text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Under 18</h3>
                <p className="text-lg opacity-90">Career Orientation for Students</p>
              </div>
              <div className="col-span-2 p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Our chatbot-powered orientation system helps high school students explore their strengths, interests, and potential career paths. We provide guidance on university programs and vocational training aligned with their abilities and the job market.
                  </p>
                  <h4 className="font-semibold text-lg">Key Features:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Interactive career exploration tools</li>
                    <li>University program recommendations</li>
                    <li>Personality and aptitude assessments</li>
                    <li>Information about in-demand careers</li>
                  </ul>
                  <div className="pt-2">
                    <Button asChild className="bg-connect-primary">
                      <Link to="/under-18">Explore This Pathway</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ages 18-25 */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-connect-secondary text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Ages 18-25</h3>
                <p className="text-lg opacity-90">Internships & First Jobs</p>
              </div>
              <div className="col-span-2 p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    In partnership with Wassit.dz, we provide university students and recent graduates with internship opportunities, entry-level positions, and training programs to help them gain valuable work experience and start their careers.
                  </p>
                  <h4 className="font-semibold text-lg">Key Features:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Internship listings from partner organizations</li>
                    <li>Entry-level job opportunities</li>
                    <li>CV and interview preparation resources</li>
                    <li>Professional skills development</li>
                  </ul>
                  <div className="pt-2">
                    <Button asChild className="bg-connect-secondary">
                      <Link to="/young-adults">Explore This Pathway</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ages 25+ */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-connect-accent text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Ages 25+</h3>
                <p className="text-lg opacity-90">Career Advancement</p>
              </div>
              <div className="col-span-2 p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    For experienced professionals, we offer job listings, advanced training opportunities, and career advancement resources to help them secure stable employment and progress in their chosen field.
                  </p>
                  <h4 className="font-semibold text-lg">Key Features:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Mid to senior-level job listings</li>
                    <li>Professional certification programs</li>
                    <li>Networking opportunities</li>
                    <li>Career advancement strategies</li>
                  </ul>
                  <div className="pt-2">
                    <Button asChild className="bg-connect-accent">
                      <Link to="/adults">Explore This Pathway</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reorientation */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-blue-600 text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Reorientation</h3>
                <p className="text-lg opacity-90">Career Switch Support</p>
              </div>
              <div className="col-span-2 p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    For adults aged 30+ who are looking to switch careers, our reorientation program offers career assessment, retraining options, freelance opportunities, funding guidance, and success stories from others who have successfully changed paths.
                  </p>
                  <h4 className="font-semibold text-lg">Key Features:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Career change assessment tools</li>
                    <li>Retraining and reskilling programs</li>
                    <li>Freelance and entrepreneurship resources</li>
                    <li>Funding and support options</li>
                  </ul>
                  <div className="pt-2">
                    <Button asChild className="bg-blue-600">
                      <Link to="/reorientation">Explore This Pathway</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-connect-primary to-blue-700 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Path Today</h2>
            <p className="text-lg opacity-90 mb-8">
              Whatever stage you're at in your career journey, Connect DZ has resources and opportunities tailored to your needs.
            </p>
            <Button asChild size="lg" className="bg-white text-connect-primary hover:bg-gray-100">
              <Link to="/">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
