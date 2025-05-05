
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PartnersSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Connect DZ brings together key institutions and organizations to create a comprehensive employment ecosystem.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Partner logos would be here - using placeholders */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32">
          <div className="text-2xl font-bold text-connect-primary">Wassit.dz</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32">
          <div className="text-2xl font-bold text-connect-primary">University of Algiers</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32">
          <div className="text-2xl font-bold text-connect-primary">Ministry of Labor</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32">
          <div className="text-2xl font-bold text-connect-primary">ANEM</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32">
          <div className="text-2xl font-bold text-connect-primary">Ministry of Higher Education</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32">
          <div className="text-2xl font-bold text-connect-primary">Sonatrach</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32">
          <div className="text-2xl font-bold text-connect-primary">Djezzy</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32">
          <div className="text-2xl font-bold text-connect-primary">Ooredoo</div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Button asChild className="bg-connect-primary hover:bg-blue-700">
          <Link to="/partners">View All Partners</Link>
        </Button>
      </div>
    </section>
  );
};

export default PartnersSection;
