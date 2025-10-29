import React from "react";
import { motion } from "framer-motion";

const Reviews = () => {
 const cardsData = [
    {
      name: "Rajesh K.",
      handle: "@automotiveLeader",
      content:
        "Rearline automation solutions transformed our production line. Zero downtime and maximum efficiency!",
    },
    {
      name: "Sneha P.",
      handle: "@qualityFirst",
      content:
        "Their test rigs and vision systems ensure our products meet the highest standards. Customers trust our quality more than ever.",
    },
    {
      name: "Vikram S.",
      handle: "@smartManufacturing",
      content:
        "The robotics implementation simplified complex operations. Skilled manpower redeployed for innovation instead of repetitive tasks.",
    },
    {
      name: "Anita G.",
      handle: "@precisionEngineering",
      content:
        "Fixtures and tooling from Rearline are world-class—precision and durability that keep our shop floor running smoothly.",
    },
    {
      name: "Harish R.",
      handle: "@fabricationWorks",
      content:
        "From fabrication to control panels, their end-to-end services gave us a reliable and cost-effective manufacturing partner.",
    },
  ];

  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  // Function to generate a consistent color based on name
  const getColorFromName = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
    ];
    const hash = name
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
  };

  const CreateCard = ({ card }) => {
    const initials = getInitials(card.name);
    const bgColor = getColorFromName(card.name);

    return (
      <div className="p-6 bg-white rounded-lg mx-4 shadow-lg hover:shadow-xl transition-all duration-200 w-80 shrink-0 border border-gray-200">
        <div className="flex gap-3 items-center">
          <div
            className={`${bgColor} size-12 rounded-full flex items-center justify-center text-white font-semibold`}
          >
            {initials}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="font-semibold text-gray-900">{card.name}</p>
            </div>
          </div>
        </div>
        <p className="text-gray-700 py-4 italic">"{card.content}"</p>
        <div className="flex items-center justify-between text-gray-500 text-xs border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1">
            <span>Posted on Rearline</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="zoom-in">
          <h1 className="text-3xl md:text-4xl uppercase font-semibold text-[#008687]">
          </h1>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our{" "}
            <span className="text-[#f0b104] not-italic">Clients</span>
          </h1>
        
        </div>

        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-inner {
            animation: marqueeScroll 30s linear infinite;
          }
          .marquee-reverse {
            animation-direction: reverse;
          }
        `}</style>

        {/* First row */}
        <div className="marquee-row w-full mx-auto overflow-hidden relative">

          <div className="marquee-inner flex transform-gpu min-w-[200%] py-8">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>

        </div>

        {/* Second row */}
        <div className="marquee-row w-full mx-auto overflow-hidden relative mt-2">

          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-8">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
