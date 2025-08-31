import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <section id="home" className="min-h-screen bg-[#023020] flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A44C] to-transparent"></div>
      </div>

      {/* Decorative Golden Semi-Circles */}
      <div className="pointer-events-none absolute left-0 bottom-0 w-[18rem] h-[36rem] md:w-[20rem] md:h-[40rem] rounded-r-full bg-gradient-to-br from-[#E2BE6A] via-[#C9A44C] to-[#A97C1F] shadow-2xl opacity-90"></div>
      <div className="pointer-events-none absolute right-0 top-10 md:top-20 w-[20rem] h-[40rem] md:w-[22rem] md:h-[44rem] rounded-l-full bg-gradient-to-tl from-[#E2BE6A] via-[#C9A44C] to-[#A97C1F] shadow-2xl opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Horizon Group
          <span className="block text-[#C9A44C] text-4xl md:text-5xl mt-2">Of Companies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We’re a team of visionaries and doers who believe in building meaningful solutions. 
          From cutting edge technology to people focused HR services, our journey is rooted in 
          innovation, growth, and a commitment to excellence. We don’t just operate across 
          industries, we connect them, creating opportunities, empowering businesses, and 
          helping people thrive.
        </motion.p>

        
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-10 left-0 w-full flex justify-center z-20"
      >
        <motion.button
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          whileHover={{ scale: 1.05, backgroundColor: '#C9A44C' }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-[#C9A44C] text-[#C9A44C] px-8 py-4 rounded-lg text-lg font-semibold hover:text-[#023020] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        >
          Get In Touch 
        </motion.button>
      </motion.div>

    </section>
  );
};

export default Hero;