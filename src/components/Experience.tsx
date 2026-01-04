'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/personal';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiRedux, 
  SiMaterialui, 
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiFlask,
  SiFastapi,
  SiGraphql,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiAmazonaws,
  SiFirebase,
  SiJest,
  SiEslint
} from 'react-icons/si';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const experienceCardVariants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  },
};

const achievementVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

const techTagVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.03,
      type: "spring",
      stiffness: 200,
    },
  }),
  hover: {
    scale: 1.1,
    y: -2,
    transition: {
      duration: 0.2,
    },
  },
};

// Tech stack logo mapping for experience
const techIcons: Record<string, any> = {
  'React.js': SiReact,
  'ReactJS': SiReact,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'NextJS': SiNextdotjs,
  'Nextjs': SiNextdotjs,
  'JavaScript': SiJavascript,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Redux': SiRedux,
  'Material UI': SiMaterialui,
  'Context API': SiReact,
  'Node.js': SiNodedotjs,
  'Node': SiNodedotjs,
  'Express': SiExpress,
  'MongoDB': SiMongodb,
  'Python': SiPython,
  'Flask': SiFlask,
  'Fast API': SiFastapi,
  'GraphQL': SiGraphql,
  'Socket.io': SiSocketdotio,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Github': SiGithub,
  'GitLab': SiGitlab,
  'Docker': SiDocker,
  'AWS': SiAmazonaws,
  'Firebase': SiFirebase,
  'Jest': SiJest,
  'ESLint': SiEslint,
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
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
            Experience
          </h2>
          <p className="text-xl text-purple-200">
            My professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-800/50 transform md:-translate-x-0.5" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black transform md:-translate-x-2 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    variants={experienceCardVariants}
                    initial="rest"
                    whileHover="hover"
                    className="bg-black border border-purple-900/50 rounded-2xl p-6 shadow-lg hover:shadow-purple-900/50 transition-all duration-300"
                  >
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <motion.h3
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-xl font-bold text-white mb-1"
                      >
                        {experience.title}
                      </motion.h3>
                      <div className="text-purple-400 font-semibold mb-1">
                        {experience.company}
                      </div>
                      <div className="text-purple-300 text-sm">
                        {experience.startDate} - {experience.endDate} • {experience.location}
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="text-purple-200 mb-4 leading-relaxed"
                    >
                      {experience.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <h4 className="font-semibold text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            custom={idx}
                            variants={achievementVariants}
                            className="flex items-start text-sm text-purple-200"
                          >
                            <motion.span
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="text-purple-500 mr-2 mt-1"
                            >
                              ▶
                            </motion.span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {experience.technologies.map((tech, techIndex) => {
                        const TechIcon = techIcons[tech] || null;
                        return (
                          <motion.span
                            key={tech}
                            custom={techIndex}
                            variants={techTagVariants}
                            whileHover="hover"
                            className="px-3 py-1.5 bg-purple-900/30 border border-purple-800/50 text-purple-300 text-xs rounded-full font-medium cursor-default flex items-center gap-1.5"
                          >
                            {TechIcon && <TechIcon className="w-3.5 h-3.5" />}
                            <span>{tech}</span>
                          </motion.span>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl p-8 text-white border border-purple-800/50">
            <h3 className="text-2xl font-bold mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              I'm always excited to take on new projects and challenges. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Let's Work Together
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
