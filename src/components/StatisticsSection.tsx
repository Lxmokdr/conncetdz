
const StatisticsSection = () => {
  return (
    <section className="bg-connect-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Connect DZ is making a difference in addressing unemployment across Algeria.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold">10K+</div>
            <p className="mt-2 text-lg opacity-90">Users Registered</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold">5K+</div>
            <p className="mt-2 text-lg opacity-90">Job Placements</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold">50+</div>
            <p className="mt-2 text-lg opacity-90">Partner Organizations</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold">15+</div>
            <p className="mt-2 text-lg opacity-90">Universities Connected</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
