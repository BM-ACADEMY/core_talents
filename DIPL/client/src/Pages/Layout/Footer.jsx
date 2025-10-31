import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Logo from "@/assets/img/logo.png"; // <-- Import your logo image

export default function Example() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-black-500 bg-white-900">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-black-500/30 pb-6">
        
        {/* Left Logo & Description */}
        <div className="md:max-w-96">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-66 h-20 object-contain"
          />

          <p className="mt-6 text-sm text-black-300">
            Core Talents –  AI-powered recruitment with 48-hour delivery, 95% fit rate, and hire first, pay later. Trusted by 25+ corporates across India & GCC. Scale smarter, risk-free.          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-black">
            <a
              href="#"
              className="p-2 rounded-full border border-black hover:bg-[#f0b104] hover:text-white transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-black hover:bg-[#f0b104] hover:text-white transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/core_talents?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"
              className="p-2 rounded-full border border-black hover:bg-[#f0b104] hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-black hover:bg-[#f0b104] hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex-1 flex items-start md:justify-end gap-20 flex-wrap">
          
          {/* Company Column */}
          <div>
            <h2 className="font-semibold mb-5 text-black-100">Company</h2>
            <ul className="text-sm space-y-2 text-black-300">
              <li><Link to="/" className="hover:text-[#f0b104]">Home</Link></li>
              <li><Link to="/#about" className="hover:text-[#f0b104]">About</Link></li>
              <li><Link to="/services" className="hover:text-[#f0b104]">Services</Link></li>
              <li><Link to="/#choose" className="hover:text-[#f0b104]">Why Choose Us</Link></li>
              <li><Link to="/career" className="hover:text-[#f0b104]">Career</Link></li>
              <li><Link to="/contact" className="hover:text-[#f0b104]">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column (If dynamic, update later) */}
          <div>
            <h2 className="font-semibold mb-5 text-black-100">Services</h2>
            <ul className="text-sm space-y-2 text-black-300">
              <li><Link to="/services#ai" className="hover:text-[#f0b104]">AI Advantage</Link></li>
              <li><Link to="/services#industry" className="hover:text-[#f0b104]">Industries We Serve</Link></li>
              
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center pb-5">
        <p className="text-black-300 text-sm">
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
