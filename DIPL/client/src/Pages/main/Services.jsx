import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Briefcase, Users, Settings, CheckSquare, ChevronDown, Bot, BarChart, Search, Code, HardHat, Stethoscope, ShoppingCart, Truck, Factory, GraduationCap } from 'lucide-react';
import Aiimages from "../../assets/images/ai.png"
import Brand1 from '@/assets/brands/brand1.png';
import Brand2 from '@/assets/brands/brand2.png';
import Brand3 from '@/assets/brands/brand3.png';
import Brand4 from '@/assets/brands/brand4.png';
import Brand5 from '@/assets/brands/brand5.png';
import Brand6 from '@/assets/brands/brand6.png';
import Brand7 from '@/assets/brands/brand7.png';
import Brand8 from '@/assets/brands/brand8.png';
import Brand9 from '@/assets/brands/brand9.png';
import Brand10 from '@/assets/brands/brand10.png';

const Services = () => {
  const services = [
    {
      title: 'Permanent Staffing',
      tagline: 'Hire Your Core Team. For Life.',
      icon: <Briefcase className="w-6 h-6 text-black-400" />,
      description: 'Top-tier talent that fits your culture and stays long-term.',
    },
    {
      title: 'Contract Staffing',
      tagline: 'Scale Fast. Zero HR Hassles.',
      icon: <Users className="w-6 h-6 text-black-600" />,
      description: 'Deploy vetted talent in 48 hours. We handle payroll & compliance.',
    },
    {
      title: 'HR Outsourcing',
      tagline: 'Focus on Growth. We Run HR.',
      icon: <Settings className="w-6 h-6 text-black-600" />,
      description: 'Payroll, compliance & onboarding — handled with 99.9% accuracy.',
    },
    {
      title: 'Campus & Bulk Hiring',
      tagline: '100+ Ready Freshers. Day 1 Productive.',
      icon: <CheckSquare className="w-6 h-6 text-black-600" />,
      description: 'Hire pre-trained graduates at scale. No training needed.',
    },
  ];

  const industries = [
    {
      title: 'IT',
      icon: <Code className="w-6 h-6 text-black-600" />,
      description: 'Specialized recruitment for software developers, IT support specialists, cybersecurity experts, and tech innovators to accelerate your digital transformation and innovation initiatives.',
    },
    {
      title: 'Construction',
      icon: <HardHat className="w-6 h-6 text-black-600" />,
      description: 'Skilled engineers, project managers, architects, and on-site laborers to ensure timely project completion, safety compliance, and high-quality infrastructure development across diverse builds.',
    },
    {
      title: 'Healthcare',
      icon: <Stethoscope className="w-6 h-6 text-black-600" />,
      description: 'Qualified physicians, nurses, allied health professionals, and administrative staff to deliver exceptional patient care, maintain regulatory compliance, and optimize hospital or clinic operations.',
    },
    {
      title: 'Retail',
      icon: <ShoppingCart className="w-6 h-6 text-black-600" />,
      description: 'Dynamic sales associates, store managers, merchandisers, and customer service experts to enhance in-store experiences, drive revenue growth, and adapt to evolving consumer trends.',
    },
    {
      title: 'Logistics',
      icon: <Truck className="w-6 h-6 text-black-600" />,
      description: 'Efficient supply chain coordinators, drivers, warehouse operators, and logistics planners to streamline operations, ensure on-time deliveries, and reduce costs in complex distribution networks.',
    },
    {
      title: 'Manufacturing',
      icon: <Factory className="w-6 h-6 text-black-600" />,
      description: 'Experienced production technicians, quality control specialists, assembly line workers, and engineers to boost efficiency, maintain product standards, and support scalable manufacturing processes.',
    },
    {
      title: 'Education',
      icon: <GraduationCap className="w-6 h-6 text-black-600" />,
      description: 'Dedicated teachers, administrators, curriculum developers, and support staff to foster engaging learning environments, improve student outcomes, and advance educational institutions.',
    },
  ];

  const faqs = [
    {
      q: 'What services does Core Talents offer to companies?',
      a: 'We provide end-to-end recruitment, staffing, and HR support services including permanent hiring, contract staffing, bulk hiring, and executive search.',
    },
    {
      q: 'How do you ensure the quality of candidates?',
      a: 'Our recruitment team follows a detailed screening and verification process that includes skill assessment, background checks, and interview evaluations before shortlisting candidates.',
    },
    {
      q: ' Can Core Talents handle bulk or mass hiring projects?',
      a: 'Yes. We have a dedicated team and network to manage large-scale hiring efficiently across multiple roles and locations.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We cater to diverse industries including IT, Non-IT, Manufacturing, BPO, Retail, Finance, and more — customizing our approach based on client needs.',
    },
    {
      q: 'How long does it take to fill a position?',
      a: 'The hiring timeline depends on the job role and requirements. However, our goal is always to deliver qualified candidates quickly without compromising on quality.',
    },
  ];

  const companiesLogo = [
    {
      name: "Framer",
      logo: Brand1,
    },
    {
      name: "Huawei",
      logo: Brand2,
    },
    {
      name: "Instagram",
      logo: Brand3
    },
    {
      name: "Microsoft",
      logo: Brand4,
    },
    {
      name: "Walmart",
      logo: Brand5,
    }, {
      name: "Walmart",
      logo: Brand6,
    },

    {
      name: "Walmart",
      logo: Brand7,
    },

    {
      name: "Walmart",
      logo: Brand10,
    },

  ];


  return (
    <>
      <Helmet>
        <title>AI-Powered Hiring Platform | Core Talents</title>
        <meta name="description" content="See how AI helps you hire faster and smarter with predictive accuracy. Permanent, contract, HR outsourcing & bulk hiring — fast, compliant, AI-powered." />
        <meta name="keywords" content="staffing, contract hiring, HR outsourcing, campus recruitment, bulk hiring, AI hiring platform, predictive hiring, automated screening, recruitment for IT, healthcare staffing, manufacturing hiring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.coretalents.com/services" />
      </Helmet>

      {/* Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center pb-4 leading-tight">
            All service at a <span className="text-[#f0b104] not-italic">Glance</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col h-full border border-gray-100"
              >
                <div className="flex justify-center mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm flex-grow mb-6 text-center">{service.description}</p>
                <Link
                  to="/contact#enquiry"
                  className="mt-auto bg-[#f0b104] hover:bg-[#c49926] text-white text-center font-medium py-2.5 px-5 rounded-lg text-sm transition shadow inline-block"
                >
                  Request Candidates
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-20 bg-white" id='ai'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                AI + Human Expertise = <span className="text-[#f0b104] not-italic"> Perfect Hiring Decisions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our AI evaluates skills, culture fit, and retention probability to predict candidate success. Combined with recruiter validation, this reduces attrition and speeds hiring.
              </p>
              {/* 3 Key Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200 hover:border-indigo-300 transition">
                  <Bot className="w-8 h-8 text-black-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-[#f0b104]">92%</h4>
                  <p className="text-sm text-gray-600">Predictive Accuracy</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200 hover:border-indigo-300 transition">
                  <BarChart className="w-8 h-8 text-black-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-[#f0b104]">40%</h4>
                  <p className="text-sm text-gray-600">Faster Time-to-Hire</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200 hover:border-indigo-300 transition">
                  <Search className="w-8 h-8 text-black-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-[#f0b104]">25%</h4>
                  <p className="text-sm text-gray-600">Higher Retention</p>
                </div>
              </div>
              {/* CTA Button */}
              <button className="bg-[#f0b104] hover:bg-[#c49926] text-white font-medium py-3 px-6 rounded-lg text-base transition shadow">
                Request AI Hiring Demo
              </button>
            </div>
            {/* Right: Image/Infographic */}
            <div className="relative">
              <img
                src={Aiimages} // Example Unsplash image for AI dashboard
                alt="AI-powered hiring dashboard"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              {/* Optional: Overlay icons for visual interest */}
              <div className="absolute top-4 right-4 bg-white/80 p-3 rounded-full shadow">
                <Bot className="w-6 h-6 text-black-600" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/80 p-3 rounded-full shadow">
                <BarChart className="w-6 h-6 text-black-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gray-50" id='industry'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Multi-Industry Expertise, <span className="text-[#f0b104] not-italic">One Reliable Partner</span>
          </h2>
          <h6 className="text-lg text-gray-600 text-center mb-12">
            We serve IT, Construction, Healthcare, Retail, Logistics, Manufacturing and Education.
          </h6>

          {/* First Row: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {industries.slice(0, 4).map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm text-center">{industry.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row: 3 Cards, Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {industries.slice(4, 7).map((industry, index) => (
              <div
                key={index + 4}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm text-center">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#f0b104] hover:bg-[#c49926] text-white font-medium py-3 px-6 rounded-lg text-base transition shadow">
              Request Candidate List by Industry
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <style>{`
        .marquee-inner {
          display: flex;
          animation: marqueeScroll 20s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(30%);
          }
          100% {
            transform: translateX(-150%);
          }
        }
      `}</style>

        {/* Section Title */}
        <h3 className="text-base text-center text-slate-400 pb-14 font-medium">
          Trusted by leading brands, including —
        </h3>

        {/* Logo Marquee */}
        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>

          {/* Scrolling Logos */}
          <div className="marquee-inner will-change-transform max-w-5xl mx-auto">
            {[...companiesLogo, ...companiesLogo].map((company, index) => (
              <img
                key={index}
                className="mx-14 w-40 h-40 object-contain"
                src={company.logo}
                alt={company.name}
              />
            ))}
          </div>

          {/* Right Gradient */}
          {/* <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div> */}
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 bg-gray-50 ">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            See <span className="text-[#f0b104] not-italic">FAQ's</span>
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-xl p-5 cursor-pointer border border-gray-200 hover:border-[#f0b104] transition"
              >
                <summary className="flex justify-between items-center font-semibold text-gray-800 list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#f0b104] group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600 pl-1">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;