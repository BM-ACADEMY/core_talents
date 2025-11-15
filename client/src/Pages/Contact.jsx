// src/Pages/main/Contact.js
import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ---- Enquiry Form State ----
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyjFEjs7E7gJIk8Ld_dVb7AV8YSLSesjKuEeNvjYy45p2ninH0VCXfv5_tYfDxRBSCp1w/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = new FormData();
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("phone", formData.phone);
  form.append("message", formData.message);

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",  // ✅ Important
      body: form,
    });

    // We assume it succeeded
    toast.success("Enquiry sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });

  } catch (error) {
    console.error("Submission error:", error);
    toast.error("Failed to submit form. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="relative bg-gradient-to-br from-[#f0e7d0] to-[#f5e7c5bb] py-16 px-4n overflow-hidden sm:px-6 lg:px-20">
      {/* Top Heading */}
      <div className="text-center mt-10 mb-12" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Contact <span className="text-[#f0b104]">Us</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          We’d love to hear from you! Get in touch with us for any queries,
          support, or collaboration opportunities.
        </p>
      </div>

      {/* Contact Details + Map */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {/* Left: Contact Details */}
        <div
          className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
            Have questions or want to work with us? Reach out and we’ll get back
            to you quickly.
          </p>

          <div className="space-y-6">
  {/* Address */}
  <div className="flex items-start gap-4 group">
    <div className="bg-[#008688]/10 p-3 rounded-full group-hover:bg-[#fdf7e5] transition">
      <MapPin className="text-[#008688]  w-6 h-6" />
    </div>
    <a
      href="https://www.google.com/maps/place/QRF3%2BP77,+Hosur,+Tamil+Nadu/@12.774288,77.803172,16z/data=!4m5!3m4!1s0x3bae70c883f728a3:0x945404124d2f2a8d!8m2!3d12.7742875!4d77.8031719?hl=en&entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 font-medium break-words hover:text-[#008688] transition"
    >
      252,2nd floor,
      M G ROAD, 
      KOTTAKUPPAM,
      Vanur, 
      Tamil Nadu 
      605104
    </a>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-4 group">
    <div className="bg-[#008688]/10 p-3 rounded-full group-hover:bg-[#fdf7e5] transition">
      <Phone className="text-[#008688]  w-6 h-6" />
    </div>
    <a
      href="tel:+919944509441"
      className="text-gray-500 font-medium hover:text-[#008688] transition"
    >
      +91 9944509441
    </a>
  </div>

  {/* Email */}
  <div className="flex items-center gap-4 group">
    <div className="bg-[#008688]/10 p-3 rounded-full group-hover:bg-[#fdf7e5] transition">
      <Mail className="text-[#008688]  w-6 h-6" />
    </div>
    <a
      href="mailto:admin@abmgroups.org"
      className="text-gray-500 font-medium break-words hover:text-[#008688] transition"
    >
      admin@abmgroups.org,
    </a>
    <a
      href="mailto:ceo@abmgroups.org"
      className="text-gray-500 font-medium break-words hover:text-[#008688] transition"
    >
      ceo@abmgroups.org
    </a>
  </div>
</div>

        </div>

        {/* Right: Google Map */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl  aspect-video md:aspect-auto md:h-auto"
          data-aos="fade-left"
        >
          <iframe
    title="Company Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15612.327991917267!2d79.81915028715821!3d11.9688246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53638d212031cd%3A0x4c19741920c452b4!2sCore%20Talents!5e0!3m2!1sen!2sin!4v1761825198178!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
        </div>
      </div>

      {/* Enquiry Section - Full Width with Glassmorphism */}
      <div
        className="relative mt-20 bg-fixed bg-center bg-cover" id="enquiry"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex justify-end max-w-7xl mx-auto px-4 py-20">
          <div
            className="w-full md:w-1/2 backdrop-blur-md bg-white/20 border border-white/30 
                       rounded-2xl shadow-2xl p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Enquiry Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b3a4]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b3a4]"
              />
              <input
  type="tel"
  name="phone"
  placeholder="Your Phone"
  value={formData.phone}
  onChange={(e) => {
    // Allow only digits and limit to 10 characters
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, phone: value });
  }}
  required
  pattern="[0-9]{10}"
  maxLength="10"
  className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 
             focus:outline-none focus:ring-2 focus:ring-[#00b3a4]"
/>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b3a4]"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f0b104] text-white font-semibold py-3 rounded-lg hover:bg-[#f0b104de] transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
