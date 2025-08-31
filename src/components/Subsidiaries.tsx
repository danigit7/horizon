import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Users2, Trophy } from 'lucide-react';

const Subsidiaries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const subsidiaries = [
    {
      name: "Digital Horizons",
      logo: "/assets/dhlogo.png",
      description: "A creative wing of Horizon, offering tailored digital marketing solutions to help brands grow, engage, and stand out online.",
      features: ["Creative", "Strategic", "Engaging", "Growth Driven"],
      direction: "left"
    },
    {
      name: "HR Horizons",
      logo: "/assets/hrlogo.png",
      description: "Providing smart recruitment and HR solutions, we connect businesses with the right talent and build strong, future-ready teams.",
      features: ["Talent Acquisition", "Employee Training", "HR Consulting", "Performance Management"],
      direction: "right"
    },
    {
      name: "Code Wars",
      logo: "/assets/cwlogo.png",
      description: "A platform by Horizon that brings together coding talent, final year projects, and innovative tech solutions for students and businesses.",
      features: ["Innovative", "User-friendly", "Modern Designs", "Scalable"],
      direction: "left"
    }
  ];

  return (
    <section id="subsidiaries" className="py-20 bg-[#023020]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Subsidiaries</h2>
          <div className="w-24 h-1 bg-[#C9A44C] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our diverse portfolio of companies, each excelling in their specialized domains
          </p>
        </motion.div>

        <div className="space-y-16">
          {subsidiaries.map((subsidiary, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: subsidiary.direction === 'left' ? -100 : 100 
              }}
              animate={isInView ? { opacity: 1, x: 0 } : { 
                opacity: 0, 
                x: subsidiary.direction === 'left' ? -100 : 100 
              }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                subsidiary.direction === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                      <img 
                        src={subsidiary.logo} 
                        alt={`${subsidiary.name} logo`}
                        className="w-12 h-12 object-contain rounded-full"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-[#023020]">{subsidiary.name}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {subsidiary.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {subsidiary.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 rounded-lg p-3 text-center"
                      >
                        <span className="text-[#023020] font-semibold">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="w-full h-80 bg-gradient-to-br from-[#C9A44C] to-[#B8932F] rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                    <div className="text-center z-10">
                      <img 
                        src={subsidiary.logo} 
                        alt={`${subsidiary.name} logo`}
                        className="w-32 h-32 mx-auto mb-4 opacity-90 object-contain rounded-full"
                      />
                      <div className="text-[#023020] font-bold text-2xl">
                        {subsidiary.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;