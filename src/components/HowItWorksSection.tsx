
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Connect DZ Works</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our platform provides tailored solutions based on your age and career stage, connecting you with the right resources and opportunities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="bg-connect-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Under 18</h3>
            <p className="text-gray-600 mb-4">
              Our chatbot-powered orientation system helps high school students discover their strengths and explore suitable academic and career paths.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/under-18">Explore</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="bg-connect-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Ages 18-25</h3>
            <p className="text-gray-600 mb-4">
              In partnership with Wassit.dz, we provide internships and entry-level job opportunities for students seeking their first professional experience.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/young-adults">Explore</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="bg-connect-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Ages 25+</h3>
            <p className="text-gray-600 mb-4">
              Our job platform connects experienced professionals with stable employment opportunities and career advancement resources.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/adults">Explore</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Reorientation</h3>
            <p className="text-gray-600 mb-4">
              For jobless adults 30+, we offer career switch support, retraining options, freelance guidance and success stories.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/reorientation">Explore</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-12">
        <Button asChild className="bg-connect-primary hover:bg-blue-700">
          <Link to="/how-it-works">Learn More About Our Process</Link>
        </Button>
      </div>
    </section>
  );
};

export default HowItWorksSection;
