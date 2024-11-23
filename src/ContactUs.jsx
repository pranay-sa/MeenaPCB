import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Send data to backend
        const response = await axios.post("http://localhost:5000/add-row", formData);
        alert(response.data); // Success message from server
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setErrors({});
      } catch (error) {
        alert("Failed to submit form. Please try again.");
        console.error("Error:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  return (
    <div className="relative min-h-screen font-inter antialiased">
      {/* Background with subtle gradient */}
      <section className="relative h-96 flex items-center justify-center text-gray-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("aboutandcontact.JPG")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-90" />
        <h1 className="relative text-4xl md:text-7xl font-semibold tracking-tight z-10">Contact Us</h1>
      </section>

      {/* Contact Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map Section */}
          <div className="flex-1 min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-lg shadow-[#7a7a6c]/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7367.163132103528!2d73.18674674065733!3d22.453391042899753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf209c348e97%3A0x5a4e338dbce12e2f!2sSama-Savli%20Rd%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1698766527651!5m2!1sen!2sin"
              className="w-full h-full border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="flex-1 bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de]">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#2c2c29] font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e5e5de] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a7a6c]/50 bg-white/50"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#2c2c29] font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e5e5de] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a7a6c]/50 bg-white/50"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#2c2c29] font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e5e5de] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a7a6c]/50 bg-white/50"
                  rows="5"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="h-14 px-8 text-lg bg-gradient-to-r from-[#7a7a6c] to-[#5c5c52] hover:from-[#6a6a5e] hover:to-[#4c4c44] text-[#f2f2eb] rounded-full shadow-xl shadow-[#7a7a6c]/20 hover:shadow-[#7a7a6c]/30 transition-all duration-200 font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;