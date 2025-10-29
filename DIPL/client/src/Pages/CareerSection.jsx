import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CareerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center min-h-[80vh] px-6 py-20"
        data-aos="fade-up"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" data-aos="fade-down">
            Careers <span className="text-[#f0b104]">with Us</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="100">
            At <span className="font-semibold">Rearline</span>, we
            believe our greatest strength lies in our people. Our success is
            built on the dedication, skill, and passion of a team that thrives
            on innovation and collaboration.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
            Joining us means becoming part of a forward-thinking organization
            where ideas are valued, learning is continuous, and growth
            opportunities are abundant.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="300">
            Whether you are an experienced professional or a fresh graduate, we
            provide the platform to sharpen your skills, work on cutting-edge
            projects, and make a real impact in the world of automation and
            precision engineering.
          </p>

          {/* CTA Button */}
          <Link
            to="/career"
            className="inline-block bg-[#f0b104] hover:bg-[#c49926] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Explore Careers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
