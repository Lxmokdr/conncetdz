
import { Button } from "@/components/ui/button";

const Partners = () => {
  const partners = {
    government: [
      { name: "Ministry of Labor", role: "Policy and regulation support" },
      { name: "Ministry of Higher Education", role: "University coordination" },
      { name: "ANEM (National Employment Agency)", role: "Job placement services" },
      { name: "National Youth Council", role: "Youth representation and advocacy" }
    ],
    educational: [
      { name: "University of Algiers", role: "Academic partner" },
      { name: "University of Constantine", role: "Academic partner" },
      { name: "University of Oran", role: "Academic partner" },
      { name: "National Polytechnic School", role: "Technical training partner" },
      { name: "Higher School of Computer Science", role: "IT education partner" }
    ],
    corporate: [
      { name: "Sonatrach", role: "Energy sector opportunities" },
      { name: "Djezzy", role: "Telecommunications partner" },
      { name: "Ooredoo", role: "Telecommunications partner" },
      { name: "Cevital", role: "Food and industry partner" },
      { name: "Air Algérie", role: "Transportation sector partner" },
      { name: "BNP Paribas El Djazaïr", role: "Banking sector partner" },
      { name: "Naftal", role: "Energy distribution partner" }
    ],
    platforms: [
      { name: "Wassit.dz", role: "Job placement platform" },
      { name: "Emploitic", role: "Recruitment platform" },
      { name: "DZVentures", role: "Startup incubator" }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-connect-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
              <p className="text-xl opacity-90">
                Connect DZ collaborates with government agencies, educational institutions, corporations, and platforms to create a comprehensive employment ecosystem in Algeria.
              </p>
            </div>
          </div>
        </div>
        
        {/* Partnership Overview */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Building a Unified Ecosystem</h2>
            <p className="text-lg text-gray-600">
              Our partnerships bring together key stakeholders from across Algeria's employment landscape to create integrated solutions that address unemployment at its roots.
            </p>
          </div>
          
          {/* Government Partners */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6 text-center">Government Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.government.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="bg-connect-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-center mb-2">{partner.name}</h4>
                  <p className="text-gray-600 text-center">{partner.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Educational Institutions */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6 text-center">Educational Institutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {partners.educational.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="bg-connect-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-center mb-2">{partner.name}</h4>
                  <p className="text-gray-600 text-center">{partner.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Corporate Partners */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6 text-center">Corporate Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.corporate.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="bg-connect-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-connect-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-center mb-2">{partner.name}</h4>
                  <p className="text-gray-600 text-center">{partner.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Platform Partners */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6 text-center">Platform Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partners.platforms.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-center mb-2">{partner.name}</h4>
                  <p className="text-gray-600 text-center">{partner.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Become a Partner */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our network of partners and contribute to addressing unemployment in Algeria. We welcome collaboration with organizations that share our mission of connecting Algerians with meaningful employment opportunities.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Partnership Benefits</h3>
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-connect-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Access to a network of qualified candidates across different career stages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-connect-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Visibility as an organization committed to addressing unemployment in Algeria</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-connect-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Opportunities to collaborate on initiatives that align with your organization's goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-connect-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Input on platform features and development to better serve your needs</span>
                </li>
              </ul>
              <Button className="bg-connect-primary hover:bg-blue-700">
                Contact Us to Partner
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Partners;
