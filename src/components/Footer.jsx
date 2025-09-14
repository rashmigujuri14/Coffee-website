import React from 'react';
import FooterBg from '../assets/coffee-footer.jpg';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const Footer = () => {
  return (
    <footer style={bgImage} className="text-white">
      <div className="bg-black/60 min-h-[400px] px-6 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 py-12">

          {/* Company Info */}
          <div className="space-y-4">
            <a href="#" className="font-cursive text-4xl font-bold text-amber-400 hover:text-amber-300 tracking-wide">
              Bean craft
            </a>
            <p className="text-sm sm:text-base leading-relaxed opacity-80">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – <br /> Your Perfect Espresso Escape.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4 text-sm sm:text-base">
              {FooterLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="hover:text-amber-400 duration-300">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Address</h3>
            <p className="text-sm sm:text-base">📍 Kolkata, West Bengal</p>
            <p className="text-sm sm:text-base">📞 +91 12345 467890</p>
            <div className="flex gap-6 mt-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl sm:text-3xl hover:text-amber-400 transition-transform transform hover:scale-110" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl sm:text-3xl hover:text-amber-400 transition-transform transform hover:scale-110" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl sm:text-3xl hover:text-amber-400 transition-transform transform hover:scale-110" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="text-center text-xs sm:text-sm text-white/70 border-t border-white/20 pt-6 pb-8">
          © {new Date().getFullYear()} Beans craft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
