'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Cloud, Settings, Bug } from 'lucide-react';
import { personalInfo, stats } from '@/data/personal';

const services = [
  { icon: Code, title: 'Fullstack Web Development' },
  { icon: Smartphone, title: 'Responsive Design' },
  { icon: Database, title: 'Database Design' },
  { icon: Cloud, title: 'Cloud Deployment' },
  { icon: Settings, title: 'API Development' },
  { icon: Bug, title: 'Testing & Debugging' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
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
            About Me
          </h2>
          <p className="text-xl text-purple-200">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white"
            >
              Passionate Developer & Problem Solver
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-lg text-purple-200 leading-relaxed"
            >
              I'm a dedicated fullstack developer with a passion for creating innovative 
              solutions and building scalable applications. With expertise in both frontend 
              and backend technologies, I enjoy the entire development lifecycle from 
              concept to deployment.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-purple-200 leading-relaxed"
            >
              My journey in software development has been driven by curiosity and a 
              desire to solve real-world problems through technology. I believe in 
              writing clean, maintainable code and following best practices to deliver 
              high-quality software solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mt-8"
            >
              {[
                { value: stats.yearsExperience, label: "Years Experience", suffix: "+" },
                { value: stats.projectsCompleted, label: "Projects Completed", suffix: "+" },
                { value: stats.clientsSatisfied, label: "Client Satisfaction", suffix: "%" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-black border border-purple-900/50 rounded-xl shadow-lg hover:shadow-purple-900/50 transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-3xl font-bold text-purple-500 mb-2"
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <div className="text-purple-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black border border-purple-900/50 rounded-3xl p-8 shadow-2xl"
          >
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What I Do
            </h4>
            <div className="space-y-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-900/20 transition-colors"
                  >
                      <div className="w-10 h-10 bg-purple-900/30 border border-purple-800/50 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-purple-200 font-medium">
                      {service.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
