import React from "react";


const Reviews = () => {
 const cardsData = [
    {
      name: "Rohit Malhotra",
      handle: "@automotiveLeader",
      content:
        "Core Talents delivered a shortlist of 5 senior developers in 36 hours—95% fit, zero fluff. We onboarded two on day 4 and paid only after they started. Game-changer.",
    },
    {
      name: "Sneha P.",
      handle: "@qualityFirst",
      content:
        "Hire first, pay later removed all risk. Transparent fixed pricing meant no surprises, and their AI nailed our GCC remote-hire needs in Riyadh and Dubai.",
    },
    {
      name: "Vikram S.",
      handle: "@smartManufacturing",
      content:
        "We needed niche data engineers in Tier-2 cities. Core Talents tapped 1.2 million profiles and placed three perfect fits in 48 hours—faster than our internal team.",
    },
    {
      name: "Anita G.",
      handle: "@precisionEngineering",
      content:
        "25+ partners can’t be wrong. From Bangalore to Bahrain, Core Talents scaled our sales team seamlessly with zero upfront cost and crystal-clear pricing.",
    },
    {
      name: "Harish R.",
      handle: "@fabricationWorks",
      content:
        "The 95% AI fit rate isn’t marketing—it’s reality. Every candidate understood our culture on day one. Core Talents is now our only staffing partner.",
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
            Success{" "}
            <span className="text-[#f0b104] not-italic">Stories</span>
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
