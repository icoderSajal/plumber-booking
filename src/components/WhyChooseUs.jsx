const WhyChooseUs = () => {
  const features = [
    "5+ Years Experience",
    "Fast Same Day Service",
    "Affordable Pricing",
    "Professional Tools",
    "Trusted Local Plumber",
  ];

  return (
    <section className="py-14 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-lg"
          >
            <p className="text-lg font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
