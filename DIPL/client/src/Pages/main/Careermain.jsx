import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Lightbulb, TrendingUp, Users, Heart, Star } from "lucide-react"; // React Icons
import {
  FaLightbulb,
  FaCheckCircle,
  FaRocket,
  FaUsers,
  FaGem,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { HiCheck } from "react-icons/hi";

const whyWorkData = [
  {
    id: 1,
    icon: <Lightbulb className="w-8 h-8 text-[#008688]" />,
    title: "Innovative Work Culture",
    description:
      "Engage in projects involving the latest automation, robotics, and manufacturing technologies.",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-8 h-8 text-[#008688]" />,
    title: "Career Growth",
    description:
      "Structured training, mentorship, and career development programs to help you advance.",
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8 text-[#008688]" />,
    title: "Team Collaboration",
    description:
      "Work with passionate engineers, designers, and innovators who value teamwork and knowledge sharing.",
  },
  {
    id: 4,
    icon: <Heart className="w-8 h-8 text-[#008688]" />,
    title: "Employee Wellbeing",
    description:
      "A safe, inclusive, and supportive environment that encourages work-life balance.",
  },
  {
    id: 5,
    icon: <Star className="w-8 h-8 text-[#008688]" />,
    title: "Recognition & Rewards",
    description:
      "Performance-based recognition to celebrate your achievements.",
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
      duration: 1000, // animation duration
      easing: "ease-in-out",
      once: true, // animation happens only once
      mirror: false,
    });
  }, []);

  return (
    <div>
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
              Careers <span className="text-[#f0b104]">with Us</span>
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At <span className="font-semibold">Rearline</span>,
              we believe our greatest strength lies in our people. Our success
              is built on the dedication, skill, and passion of a team that
              thrives on innovation and collaboration.
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Joining us means becoming part of a forward-thinking organization
              where ideas are valued, learning is continuous, and growth
              opportunities are abundant.
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Whether you are an experienced professional or a fresh graduate,
              we provide the platform to sharpen your skills, work on
              cutting-edge projects, and make a real impact in the world of
              automation and precision engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Work <span className="text-[#f0b104]">With Us?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Join a forward-thinking organization that values innovation, growth,
            teamwork, and employee well-being.
          </p>
        </div>

        {/* Centered grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {whyWorkData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-6 rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl group w-72"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#f0b104] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="mb-4 transform transition duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-90">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Who We <span className="text-[#f0b104]">Look For</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We seek individuals who embody the qualities that drive innovation,
            excellence, and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {qualities.map((item, index) => (
            <div
              key={index}
              className="bg-[#fdf7e5] shadow-xl rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Icon wrapper */}
              <div className="bg-[#008688] p-4 rounded-full mb-4 flex items-center justify-center">
                {React.cloneElement(item.icon, {
                  className: "text-white w-6 h-6",
                })}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

        <section
      className="relative bg-fixed bg-center bg-cover text-white py-24 px-6 lg:px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Join <span className="text-[#f0b104]">Our Team</span>
        </h2>
        <p className="text-lg md:text-xl mb-12">
          If you’re ready to take your career to the next level, explore our current job openings
          or send your resume to{" "}
          <a
            href="mailto:careers@yourcompany.com"
            className="underline text-[#f0b104] hover:text-[#f0b104da]"
          >
            careers@yourcompany.com
          </a>
          . Together, we can shape the future of automation and engineering.
        </p>

        {/* Job roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {Object.entries(roles).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg transition"
            >
              <h3 className="text-2xl text-[#f0b104] font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <HiCheck className="text-[#f0b104] w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Careermain;
