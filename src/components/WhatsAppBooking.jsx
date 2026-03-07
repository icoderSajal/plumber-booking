import { useState } from "react";

const WhatsAppBooking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const message = `New Plumbing Booking%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Service: ${form.service}%0A
Location: ${form.location}`;

    const url = `https://wa.me/9192054486297?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Book Plumbing Service</h2>

      <div className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <select
          name="service"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option>Select Service</option>
          <option>Pipe Leakage</option>
          <option>Bathroom Fitting</option>
          <option>Kitchen Fitting</option>
          <option>Tank Cleaning</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Your Location"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <button
          onClick={sendWhatsApp}
          className="w-full bg-green-500 text-white py-3 rounded-lg"
        >
          Book via WhatsApp
        </button>
      </div>
    </section>
  );
};

export default WhatsAppBooking;
