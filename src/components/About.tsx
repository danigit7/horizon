import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#023020] mb-6">About Us</h2>
          <div className="w-24 h-1 bg-[#C9A44C] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[#023020] mb-6">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our story began with a small group of dreamers who believed in building something bigger than themselves. With nothing but determination, collaboration, and a bold vision, Horizon Group of Companies came to life.
            From those early days, we’ve grown into a diverse ecosystem of businesses, each focused on solving real-world challenges.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
            Along the way, we’ve embraced change, adapted to new technologies, and stayed true to one belief, the future belongs to those who create it.
            Horizon isn’t just our name it’s our promise. A promise to keep moving forward, discovering new paths, and helping others rise with us.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-[#023020] rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#C9A44C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} className="text-[#023020]" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Excellence Driven</h4>
                <p className="text-gray-300">Committed to delivering outstanding results in every endeavor</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#C9A44C] rounded-lg flex items-center justify-center mr-4">
                <Target size={24} className="text-[#023020]" />
              </div>
              <h4 className="text-2xl font-bold text-[#023020]">Our Mission</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses and individuals through innovative solutions, strategic partnerships, and unparalleled service excellence, creating lasting value in the digital age.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#C9A44C] rounded-lg flex items-center justify-center mr-4">
                <Eye size={24} className="text-[#023020]" />
              </div>
              <h4 className="text-2xl font-bold text-[#023020]">Our Vision</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading force in business transformation, recognized globally for our innovation, integrity, and impact on communities and industries we serve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;