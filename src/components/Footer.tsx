import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#023020] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              <img 
                src="/assets/horizonLogo.png" 
                alt="Horizon Group Logo" 
                className="h-28 w-auto"
              />
            </motion.div>
            <p className="text-gray-300 mb-6 max-w-md">
              Building tomorrow's digital landscape through innovation, excellence, and strategic partnerships. 
              Your success is our horizon
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#C9A44C] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Our Leaders', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    whileHover={{ x: 5, color: '#C9A44C' }}
                    className="text-gray-300 hover:text-[#C9A44C] transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-lg font-semibold text-[#C9A44C] mb-4">Our Companies</h4>
            <ul className="space-y-2">
              {[
                { name: 'Digital Horizons', insta: 'https://www.instagram.com/digitalhorizons.pk' },
                { name: 'HR Horizons', insta: 'https://www.instagram.com/hrhorizons.pk' },
                { name: 'Code Wars', insta: 'https://www.instagram.com/codewarsz' }
              ].map((company) => (
                <li key={company.name}>
                  <motion.a
                    href={company.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, color: '#C9A44C' }}
                    className="text-gray-300 hover:text-[#C9A44C] transition-colors duration-300"
                  >
                    {company.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Horizon Group of Companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;