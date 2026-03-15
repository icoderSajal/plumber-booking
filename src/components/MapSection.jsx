const MapSection = () => {
  return (
    <section className="py-10 text-center bg-gray-300">
      <h2 className="text-3xl font-bold mb-8">Our Service Area</h2>

      <div className="max-w-8xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="location"
          src="https://www.google.com/maps?q=Bareiily&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-gray-600">
        We provide plumbing services across Bareiily and nearby locations.
        &copy; {new Date().getFullYear()} Abiyaan Sanitary. All rights reserved.
      </p>
    </section>
  );
};

export default MapSection;
