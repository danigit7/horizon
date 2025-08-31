import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Leaders = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leaders = [
    {
      name: "Abeer Ahmad Khan",
      position: "Chief Executive Officer",
      image: "/assets/abeer.jpg",
      bio: "Currently pursuing an MBA in Marketing, drives Horizon’s growth by engaging directly with clients and exploring new market opportunities. With a strong focus on building lasting partnerships, he ensures every client receives personalized solutions and measurable results.",
      social: { linkedin: "https://www.linkedin.com/in/abeer-ahmad-khan-9608411b6/", email: "abeerahmad000@gmail.com" }
    },
    {
      name: "Daniyal Asim",
      position: "Chief Operations Officer",
      image: "/assets/new.jpeg",
      bio: "Pursuing a degree in Software Engineering, specializes in full-stack development and handles the technical side of Horizon. With expertise in both technology and digital marketing, he ensures seamless solutions that blend innovation with growth-driven strategies.",
      social: { linkedin: "https://www.linkedin.com/in/daniyal-asim-731b17220/", email: "daniyalasim922@gmail.com" }
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="leaders" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#023020] mb-6">Our Leaders</h2>
          <div className="w-24 h-1 bg-[#C9A44C] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Meet the visionary minds driving our company forward with passion, expertise, and unwavering commitment
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-full mx-auto w-64 h-64 mt-8">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#023020]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#023020] mb-2">{leader.name}</h3>
                <p className="text-[#C9A44C] font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1, color: "#C9A44C" }}
                    href={leader.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#C9A44C] transition-colors"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, color: "#C9A44C" }}
                    href={`mailto:${leader.social.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#C9A44C] transition-colors"
                  >
                    <Mail size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leaders;