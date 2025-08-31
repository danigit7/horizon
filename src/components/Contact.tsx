import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [state, handleSubmit] = useForm("mvgbrawv");

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/horizon-group-of-companies-x/?viewAsMember=true", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/horizongoc.pk", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#023020] mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-[#C9A44C] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with us today and let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#023020] mb-6">Send us a message</h3>
              {state.succeeded ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl text-[#C9A44C] mb-4"
                  >
                    ✓
                  </motion.div>
                  <h4 className="text-2xl font-bold text-[#023020] mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for your message. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A44C] focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A44C] focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A44C] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.05, backgroundColor: '#B8932F' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#C9A44C] text-[#023020] py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#B8932F] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[#023020] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#C9A44C]">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#C9A44C] rounded-lg flex items-center justify-center mr-4">
                    <Phone size={20} className="text-[#023020]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#C9A44C]">Phone</p>
                    <p className="text-gray-300">+92 333 9788566 <br />
                      +92 328 0953992 
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#C9A44C] rounded-lg flex items-center justify-center mr-4">
                    <Mail size={20} className="text-[#023020]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#C9A44C]">Email</p>
                    <p className="text-gray-300">horizongoc.pk@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#023020] mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, backgroundColor: '#C9A44C' }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-[#023020] hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  {/* <span className="font-semibold">Business Hours:</span><br /> */}
                  {/* Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed */}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;