import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/img/logo.png";

// ✅ Import your social media icon images
import FacebookIcon from "@/assets/icons/facebook.png";
import YoutubeIcon from "@/assets/icons/youtube.png";
import InstagramIcon from "@/assets/icons/instagram.png";
import LinkedinIcon from "@/assets/icons/linkedin.png";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full text-black bg-white border-t border-gray-200">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-300 pb-8">
        {/* Left: Logo + Description */}
        <div className="md:max-w-[380px]">
          <img
            src={Logo}
            alt="Core Talents Logo"
            className="w-60 h-auto object-contain"
          />

          <p className="mt-5 text-sm text-gray-600 leading-relaxed">
            Core Talents – AI-powered recruitment with 48-hour delivery, 95% fit rate, 
            and hire-first-pay-later model. Trusted by 25+ corporates across India & GCC.
            Scale smarter, risk-free.
          </p>

          {/* ✅ Social Links (with images) */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/share/1CYRNJ5UAY/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full  transition-all"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="w-8 h-8 object-contain"
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCM542AZm8Lrf5mPmoLkO0kQ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full  transition-all"
            >
              <img
                src={YoutubeIcon}
                alt="YouTube"
                className="w-8 h-8 object-contain"
              />
            </a>

            <a
              href="https://www.instagram.com/core_talents?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full  transition-all"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-8 h-8 object-contain"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/core-talents-417129389/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full  transition-all"
            >
              <img
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-8 h-8 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex-1 flex items-start md:justify-end gap-20 flex-wrap">
          {/* Company Column */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-[#f0b104]">Home</Link></li>
              <li><Link to="/#about" className="hover:text-[#f0b104]">About</Link></li>
              <li><Link to="/services" className="hover:text-[#f0b104]">Services</Link></li>
              <li><Link to="/#choose" className="hover:text-[#f0b104]">Why Choose Us</Link></li>
              <li><Link to="/career" className="hover:text-[#f0b104]">Career</Link></li>
              <li><Link to="/contact" className="hover:text-[#f0b104]">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Services</h2>
            <ul className="text-sm space-y-2 text-gray-600">
              <li><Link to="/services#ai" className="hover:text-[#f0b104]">AI Advantage</Link></li>
              <li><Link to="/services#industry" className="hover:text-[#f0b104]">Industries We Serve</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center pb-5">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://bmtechx.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0b104] font-semibold"
          >
            BMTechx.in
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
