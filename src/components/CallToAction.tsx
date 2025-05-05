
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-connect-primary to-blue-700 text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Path?</h2>
        <p className="text-lg opacity-90 mb-8">
          Join Connect DZ today and discover tailored opportunities for your career stage. Together, we can build a stronger future for Algeria.
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
  );
};

export default CallToAction;
