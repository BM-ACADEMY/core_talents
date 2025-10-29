import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Logo from "@/assets/img/logowhite.png"; // <-- Import your logo image

export default function Example() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        
        {/* Left Logo & Description */}
        <div className="md:max-w-96">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-32 h-auto object-contain"
          />

          <p className="mt-6 text-sm text-gray-300">
            Rearline delivers cutting-edge automation and engineering solutions with precision, durability, and innovation. We empower industries to operate smarter, faster, and more efficiently with tailor-made solutions. 
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-white">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/30 hover:bg-[#f0b104] hover:text-white transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/30 hover:bg-[#f0b104] hover:text-white transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/30 hover:bg-[#f0b104] hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/30 hover:bg-[#f0b104] hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex-1 flex items-start md:justify-end gap-20 flex-wrap">
          
          {/* Company Column */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-100">Company</h2>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-[#f0b104]">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#f0b104]">Services</Link></li>
              <li><Link to="/career" className="hover:text-[#f0b104]">Career</Link></li>
              <li><Link to="/contact" className="hover:text-[#f0b104]">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column (If dynamic, update later) */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-100">Services</h2>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-[#f0b104]">Automation</Link></li>
              <li><Link to="/services" className="hover:text-[#f0b104]">Fixtures, Toolings and Gauges</Link></li>
              <li><Link to="/services" className="hover:text-[#f0b104]">Manufacturing and Fabrication</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center pb-5">
        <p className="text-gray-300 text-sm">
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
