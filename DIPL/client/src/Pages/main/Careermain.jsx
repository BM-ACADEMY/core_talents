import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Lightbulb, TrendingUp, Users, Star } from "lucide-react";
import { FaLightbulb, FaGem, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";

const whyRegisterData = [
  {
    id: 1,
    icon: <TrendingUp className="w-8 h-8 text-[#008688]" />,
    title: "Fast Placement Opportunities",
    description:
      "Experience rapid and efficient job placements with Core Talents. Our streamlined processes deliver 48-hour shortlists, powered by advanced AI and expert vetting, ensuring you connect with potential employers quickly and kickstart your career without delays or hassles.",
  },
  {
    id: 2,
    icon: <Lightbulb className="w-8 h-8 text-[#008688]" />,
    title: "Skill-Based Job Matching",
    description:
      "Benefit from our cutting-edge AI-powered matching system that achieves a 95% fit rate. We combine sophisticated algorithms with human expertise to align your unique skills, qualifications, and experience with the perfect job roles, maximizing your chances of success and job satisfaction.",
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8 text-[#008688]" />,
    title: "Diverse Openings in India & Gulf",
    description:
      "Gain access to a wide variety of job opportunities across Pan-India, including Tier-2 and Tier-3 cities, as well as GCC regions like UAE, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait. Whether you're seeking entry-level positions or senior roles, our extensive network covers multiple industries to suit your preferences.",
  },
  {
    id: 4,
    icon: <Star className="w-8 h-8 text-[#008688]" />,
    title: "Top Corporate Connections",
    description:
      "Leverage our strong partnerships with over 25 trusted corporate entities and a database of 1.2 million pre-vetted profiles. This gives you exclusive access to premium job openings at leading enterprises, helping you build a rewarding career with reputable organizations in India and the Gulf.",
  },
];

const qualities = [
  {
    icon: <FaLightbulb className="text-[#008688] w-8 h-8" />,
    title: "Curious & Innovative",
    description: "Curious, creative, and driven to innovate.",
  },
  {
    icon: <FaGem className="text-[#008688] w-8 h-8" />,
    title: "Committed to Excellence",
    description: "Committed to quality and excellence in their work.",
  },
  {
    icon: <FaChalkboardTeacher className="text-[#008688] w-8 h-8" />,
    title: "Adaptable Learners",
    description: "Eager to learn and adapt in a fast-changing industry.",
  },
  {
    icon: <FaUsers className="text-[#008688] w-8 h-8" />,
    title: "Team Players",
    description: "Team players with strong problem-solving skills.",
  },
];

const roles = {
  Mechanical: ["Design Engineer", "Assembly Technician", "Follow-up Executive", "Quality Inspector"],
  Accounts: ["Accountant", "Store Keeper"],
  Electrical: ["Wiring Technician", "Programming Engineer"],
};

const Careermain = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      {/* ==================== HERO SECTION ==================== */}
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
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              data-aos="zoom-in"
            >
              Why Businesses Trust <span className="text-[#f0b104]">Core Talents</span>
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="font-semibold text-[#f0b104]">Speed & Precision:</span> Businesses trust Core Talents to eliminate hiring delays with 48-hour shortlists and a 95% AI fit rate, powered by cutting-edge algorithms plus expert human vetting—delivering candidates perfectly aligned with your skills, culture, and budget.
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="font-semibold text-[#f0b104]">Cost & Confidence:</span> Enjoy transparent pricing with no hidden fees or mark-ups—just a fixed cost per hire—and our hire first, pay later model means you only pay when your selected talent starts, removing all financial risk.
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="font-semibold text-[#f0b104]">Reach & Reliability:</span> Scale effortlessly with 25+ trusted corporate partners and access to 1.2 million pre-vetted profiles across Pan-India and GCC regions, from Tier-2/3 cities to UAE, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait—making Core Talents the smarter, faster choice for leading enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHY REGISTER SECTION ==================== */}
      <section className="bg-gray-200 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why <span className="text-[#f0b104]">Choose</span>  Us?
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Register with Core Talents to launch your career, get connected to top companies across India and the Gulf, and access personalized job opportunities tailored to your skills and aspirations.
          </p>
        </div>

        {/* 2 Wider Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {whyRegisterData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-8 rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl group"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#f0b104] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5 transform transition duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-90">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

  

    </div>
  );
};

export default Careermain;