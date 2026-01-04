'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/personal';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiRedux, 
  SiMaterialui, 
  SiAntdesign, 
  SiBootstrap,
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
  SiBitbucket,
  SiDocker,
  SiAmazonaws,
  SiFirebase,
  SiJest,
  SiEslint,
  SiTestinglibrary,
  SiOpenai
} from 'react-icons/si';

const skillCategories = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & Others',
  other: 'Other'
};

// Tech stack logo mapping
const techIcons: Record<string, any> = {
  'React.js': SiReact,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Nextjs': SiNextdotjs,
  'JavaScript': SiJavascript,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Redux': SiRedux,
  'Material UI': SiMaterialui,
  'Ant Design': SiAntdesign,
  'Bootstrap': SiBootstrap,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'MongoDB': SiMongodb,
  'Python': SiPython,
  'Flask': SiFlask,
  'Fast API': SiFastapi,
  'GraphQL': SiGraphql,
  'Socket.io': SiSocketdotio,
  'Git': SiGit,
  'GitHub': SiGithub,
  'GitLab': SiGitlab,
  'Bitbucket': SiBitbucket,
  'Docker': SiDocker,
  'AWS': SiAmazonaws,
  'Firebase': SiFirebase,
  'Jest': SiJest,
  'ESLint': SiEslint,
  'Testing': SiTestinglibrary,
  'Agentic AI': SiOpenai,
  'Gen AI': SiOpenai,
};

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
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const skillCardVariants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.1,
    y: -5,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
    },
  },
};

const skillIconVariants = {
  rest: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: 360,
    scale: 1.2,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-black">
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-purple-200">
            Technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-black border border-purple-900/50 rounded-2xl p-6 shadow-lg hover:shadow-purple-900/50 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {skillCategories[category as keyof typeof skillCategories]}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillCardVariants}
                    initial="rest"
                    whileHover="hover"
                    className="flex flex-col items-center p-4 bg-purple-900/20 border border-purple-800/30 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer group"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      variants={skillIconVariants}
                      className="w-12 h-12 mb-3 bg-purple-900/30 border border-purple-800/50 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20 transition-colors"
                    >
                      {(() => {
                        const IconComponent = techIcons[skill.name] || null;
                        return IconComponent ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: skillIndex * 0.05,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="text-2xl text-purple-400 group-hover:text-white"
                          >
                            <IconComponent />
                          </motion.div>
                        ) : (
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: skillIndex * 0.05,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="text-lg font-bold text-purple-400 group-hover:text-white"
                          >
                            {skill.name.charAt(0)}
                          </motion.span>
                        );
                      })()}
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: skillIndex * 0.05 + 0.2 }}
                      className="text-sm font-medium text-center"
                    >
                      {skill.name}
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 + 0.3 }}
                      className="mt-2 flex space-x-1"
                    >
                      {[1, 2, 3, 4].map((level) => (
                        <motion.div
                          key={level}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: skillIndex * 0.05 + level * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.3 }}
                          className={`w-2 h-2 rounded-full ${
                            level <= (skill.level === 'expert' ? 4 : 
                                    skill.level === 'advanced' ? 3 : 
                                    skill.level === 'intermediate' ? 2 : 1)
                              ? 'bg-purple-500 group-hover:bg-white'
                              : 'bg-purple-900/50 group-hover:bg-white group-hover:bg-opacity-30'
                          }`}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl p-8 text-white border border-purple-800/50">
            <h3 className="text-2xl font-bold mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices. I regularly explore new frameworks, tools, and 
              methodologies to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
