import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Client logos - using logos from logos folder
  const clients = [
    { name: "Digital Horizons", logo: "/logos/crownclub.png" },
    { name: "HR Horizons", logo: "/logos/heaffles.png" },
    { name: "Code Wars", logo: "/logos/kunafa.png" },
    { name: "Horizon Group", logo: "/logos/khwandawar.png" },
    { name: "Horizon Group", logo: "/logos/hilton.png" },
    { name: "Horizon Group", logo: "/logos/italian.png" },
  ];

  // Duplicate the array for seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients, ...clients, ...clients];



  return (
    <section id="clients" className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#023020] mb-6">Our Clients</h2>
          <div className="w-24 h-1 bg-[#C9A44C] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional results and drive innovation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -33.33 * clients.length + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 180,
                  ease: "linear",
                },
              }}
              className="flex flex-nowrap"
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-16 w-80 h-80 flex items-center justify-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full flex items-center justify-center rounded-full p-10 transition-all duration-300"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain rounded-full transition-all duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Clients;