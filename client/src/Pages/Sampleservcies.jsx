import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Images
import Services1 from "../assets/banners/permanent.jpg";
import Services2 from "../assets/banners/handshale.jpg";
import Services3 from "../assets/banners/hr.jpg";
import Services4 from "../assets/images/hiring.png";

// Add Helmet
import { Helmet } from "react-helmet-async"; // or "react-helmet" if you prefer

export default function Sampleservices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const cards = [
    {
      id: 1,
      title: "Permanent Staffing",
      img: Services1,
    },
    {
      id: 2,
      title: "Contract Staffing",
      img: Services2,
    },
    {
      id: 3,
      title: "HR Outsourcing",
      img: Services3,
    },
    {
      id: 4,
      title: "Campus & Bulk Hiring",
      img: Services4,
    },
  ];

  return (
    <>
      {/* SEO Title & Meta Description */}
      <Helmet>
        <title>Recruitment & Staffing Services in India & Dubai | Core Talents</title>
        <meta
          name="description"
          content="Explore Core Talents’ AI-driven recruitment services—permanent staffing, contract staffing, HR outsourcing and campus & bulk hiring for companies in India, Chennai and Dubai."
        />
        {/* Optional: Open Graph for better social sharing */}
        <meta property="og:title" content="Recruitment & Staffing Services in India & Dubai | Core Talents" />
        <meta
          property="og:description"
          content="Explore Core Talents’ AI-driven recruitment services—permanent staffing, contract staffing, HR outsourcing and campus & bulk hiring for companies in India, Chennai and Dubai."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative bg-gradient-to-b from-gray-50 to-white pb-28 overflow-hidden">
        {/* Background circle */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#f0b104]/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16" data-aos="zoom-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Our <span className="text-[#f0b104] not-italic">Services</span>
            </h1>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {cards.map((card, index) => (
              <article
                key={card.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium hover:bg-white/30 transition"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}