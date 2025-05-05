
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

const Reorientation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-connect-primary text-white py-16 md:py-24">
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
                  <Button asChild className="bg-connect-primary">
                    <Link to="/chatbot">Career Assessment</Link>
                  </Button>
                  <Button variant="outline">Explore Options</Button>
                </div>
              </div>
              <div className="bg-connect-accent/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-connect-primary rounded-full p-3 text-white flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Skills Assessment</h4>
                      <p className="text-gray-600">Identify your transferable skills and discover how they can be applied in new industries.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-secondary rounded-full p-3 text-white flex-shrink-0">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Retraining Options</h4>
                      <p className="text-gray-600">Access tailored training programs and courses to develop new skills for your target career.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-connect-accent rounded-full p-3 text-connect-primary flex-shrink-0">
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
                <div className="bg-connect-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Skills</h3>
                <p className="text-gray-600 mb-4">
                  Learn coding, digital marketing, or UX/UI design through our partner training programs.
                </p>
                <Button variant="outline" className="w-full">View Programs</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-connect-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Entrepreneurship</h3>
                <p className="text-gray-600 mb-4">
                  Get the support and training you need to start your own business or freelance career.
                </p>
                <Button variant="outline" className="w-full">View Programs</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-connect-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Explore opportunities in the growing healthcare sector with specialized training programs.
                </p>
                <Button variant="outline" className="w-full">View Programs</Button>
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
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-connect-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    KL
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Karim L., 42</h4>
                    <p className="text-connect-primary">Former Accountant, Now Web Developer</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "After 15 years in accounting, I was feeling stuck. Through Connect DZ's reorientation program, I completed a coding bootcamp and found a new career that I'm passionate about. The career assessment helped me discover that my analytical skills transferred well to programming."
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-connect-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    FM
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Fatima M., 38</h4>
                    <p className="text-connect-primary">Former Teacher, Now Digital Marketing Specialist</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "I taught high school for 12 years but wanted a change. Connect DZ's assessment identified my communication skills and creativity as assets for a marketing career. After completing their recommended training, I'm now working at a digital agency and loving it."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-connect-primary text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Switch Careers?</h2>
            <p className="text-lg opacity-90 mb-8">
              Take the first step by completing our career assessment and receiving personalized guidance.
            </p>
            <Button asChild size="lg" className="bg-white text-connect-primary hover:bg-gray-100">
              <Link to="/chatbot">Start Your Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reorientation;
