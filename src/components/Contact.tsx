'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/data/personal';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Contact() {
  // Format phone number for WhatsApp (remove dashes and spaces)
  const whatsappNumber = personalInfo.phone?.replace(/[-\s]/g, '') || '';
  const whatsappMessage = encodeURIComponent("Hello! I'd like to discuss a project opportunity with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-purple-200">
            Let's work together on your next project
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-lg text-purple-200 leading-relaxed max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out via WhatsApp!
              </p>
            </div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-green-500/50"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -left-2 -top-2 w-6 h-6 bg-green-400 rounded-full opacity-75"
                />
                <MessageCircle className="w-8 h-8" />
                <span>Message me on WhatsApp</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.div>
              </a>
            </motion.div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-black border border-purple-900/50 rounded-xl hover:border-purple-700/50 transition-all"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-purple-300 hover:text-purple-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-black border border-purple-900/50 rounded-xl hover:border-purple-700/50 transition-all"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Phone</h4>
                <a 
                  href={`tel:${whatsappNumber}`}
                  className="text-purple-300 hover:text-purple-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-black border border-purple-900/50 rounded-xl hover:border-purple-700/50 transition-all"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Location</h4>
                <p className="text-purple-300">{personalInfo.location}</p>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                {personalInfo.socialLinks.map((social) => {
                  const IconComponent = socialIcons[social.icon as keyof typeof socialIcons] || Mail;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 bg-purple-900/30 border border-purple-800/50 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
