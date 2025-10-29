import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Automation from '@/assets/img/automation.jpg'
import Fixture from '@/assets/img/fixture.jpg'
import Manufacturing from '@/assets/img/Manufacturing.jpg'

const servicesData = [
  {
    title: "Automation",
    items: [
      {
        name: "Line Automation",
        description:
          "We control the axis and coordinates with man less automation to drive the environment",
      },
      {
        name: "Special Purpose Machines (SPMs)",
        description: "Simple solutions for complicated areas with our ideas",
      },
      {
        name: "Test Rigs",
        description:
          "Your Product Durability and Performance, we assure to your customer",
      },
      {
        name: "Vision Systems",
        description: "On Spot Quick Quality Assistant with You",
      },
      {
        name: "Automated Guided Vehicles (AGVs)",
        description: "Manless Movement to Right Place",
      },
      {
        name: "Robotics Implementation",
        description: "Simplify Your Skilled Areas with Our Robots",
      },
      {
        name: "Panel and Programming Services",
        description: "Give movement to hardware with our software",
      },
    ],
    image:
      Automation,
    isAccordion: true,
  },
  {
    title: "Fixtures, Toolings and Gauges",
    description: `Precision-engineered solutions for:
Welding fixtures
Machining tooling
Assembly jigs
Measurement gauges
Custom tooling solutions`,
    image:
      Fixture,
  },
  {
    title: "Manufacturing and Fabrication",
    description: `Comprehensive manufacturing capabilities including:
CNC machining
Sheet metal fabrication
Welding services
Precision assembly
Custom fabrication solutions
Quality control and inspection`,
    image:
      Manufacturing,
  },
];

// Accordion Item with Framer Motion
const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left text-gray-800 font-medium focus:outline-none"
    >
      {item.name}
      <span className="text-gray-500">{isOpen ? "-" : "+"}</span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 pb-4 whitespace-pre-line">
            {item.description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ServiceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle or close others
  };

  return (
    <section className="bg-gradient-to-br from-[#f0e7d0] to-[#f5e7c5bb] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="pt-5 text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-[#f0b104]"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solutions tailored to your industrial needs with
            precision and innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {servicesData.map((service, index) => (
  <div
  key={index}
  id={service.title.replace(/\s+/g, "-").toLowerCase()}
  className={`flex flex-col md:flex-row items-center gap-12 ${
    index % 2 !== 0 ? "md:flex-row-reverse" : ""
  } scroll-mt-28`}  // 👈 this fixes the hidden top issue
>

              {/* Image Section */}
              <div className="md:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-[#f0b104] font-bold text-lg">{`0${
                    index + 1
                  }`}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-10 bg-[#f0b104] mr-4"></div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* Accordion for Automation */}
                  {service.isAccordion ? (
                    <div className="space-y-2">
                      {service.items.map((item, idx) => (
                        <AccordionItem
                          key={idx}
                          item={item}
                          isOpen={openIndex === idx}
                          onClick={() => handleAccordionClick(idx)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
