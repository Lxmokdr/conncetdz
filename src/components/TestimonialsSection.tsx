
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amina B.",
      age: 23,
      text: "Connect DZ helped me find my first internship right after graduation. The tailored recommendations and resources for young adults were exactly what I needed to start my career.",
      role: "Computer Science Graduate"
    },
    {
      name: "Karim M.",
      age: 17,
      text: "The career orientation chatbot helped me understand my strengths and interests. Now I have a better idea about which university program to choose for my future career.",
      role: "High School Student"
    },
    {
      name: "Nadia L.",
      age: 35,
      text: "After years of unemployment, the reorientation program helped me switch careers. I received training in digital marketing and found a job within 3 months.",
      role: "Digital Marketing Specialist"
    }
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hear from Algerians who have transformed their careers through Connect DZ.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <svg className="h-12 w-12 text-connect-primary mb-4 opacity-30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <div className="mt-6">
              <div className="font-medium text-gray-900">{testimonial.name}, {testimonial.age}</div>
              <div className="text-connect-primary text-sm">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
