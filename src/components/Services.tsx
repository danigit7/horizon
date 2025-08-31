import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Zap, Shield, Globe, Cog } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Zap,
      title: "Digital Marketing",
      description: "Grow your brand with tailored online marketing strategies, from social media management to targeted campaigns that deliver real results."
    },
    {
      icon: Users,
      title: "HR Recruitment",
      description: "Connect with the right talent through our professional hiring and recruitment solutions designed to build strong teams."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "From sleek frontends to powerful backends, we create modern, responsive, and scalable websites that bring your vision to life."
    },
    // {
    //   icon: Shield,
    //   title: "Security Solutions",
    //   description: "Advanced cybersecurity services to protect your digital assets and ensure business continuity."
    // },
    // {
    //   icon: Globe,
    //   title: "Global Expansion",
    //   description: "Expert support for international business growth and market expansion strategies."
    // },
    // {
    //   icon: Cog,
    //   title: "Process Optimization",
    //   description: "Streamline operations and maximize efficiency through intelligent process automation."
    // }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-[#023020]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-[#C9A44C] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We deliver comprehensive solutions across multiple domains to help your business reach new horizons
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#C9A44C] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#023020] transition-colors duration-300">
                <service.icon size={32} className="text-[#023020] group-hover:text-[#C9A44C] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#023020] mb-4 group-hover:text-[#C9A44C] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-[#C9A44C] rounded-full mt-6"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;