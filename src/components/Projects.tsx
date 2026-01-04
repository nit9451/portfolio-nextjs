'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, CheckSquare, BarChart3, Sparkles, ArrowRight, Code2 } from 'lucide-react';
import { projects } from '@/data/personal';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiRedux, 
  SiMaterialui, 
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiSocketdotio,
  SiAmazonaws,
  SiFirebase,
  SiGit,
  SiGithub
} from 'react-icons/si';

const projectIcons = {
  'E-Commerce Platform': ShoppingCart,
  'Task Management App': CheckSquare,
  'Analytics Dashboard': BarChart3,
};

// Tech stack logo mapping for projects
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
  'Node.js': SiNodedotjs,
  'Node': SiNodedotjs,
  'MongoDB': SiMongodb,
  'Python': SiPython,
  'Socket.io': SiSocketdotio,
  'AWS': SiAmazonaws,
  'Firebase': SiFirebase,
  'Git': SiGit,
  'Github': SiGithub,
  'GitHub': SiGithub,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardHoverVariants = {
  rest: {
    scale: 1,
    rotateY: 0,
    boxShadow: "0 10px 30px rgba(147, 51, 234, 0.1)",
  },
  hover: {
    scale: 1.03,
    rotateY: 3,
    boxShadow: "0 20px 60px rgba(147, 51, 234, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  rest: {
    scale: 1,
    opacity: 1,
  },
  hover: {
    scale: 1.1,
    opacity: 0.9,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const overlayVariants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const buttonVariants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
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
            Featured Projects
          </h2>
          <p className="text-xl text-purple-200">
            Some of my recent work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.title as keyof typeof projectIcons] || BarChart3;
            
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                className="h-full bg-black border border-purple-900/50 rounded-2xl overflow-hidden shadow-lg group perspective-1000 hover:border-purple-700/50 hover:shadow-purple-900/20 transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="h-full flex flex-col"
                >
                  {/* Project Header with Featured Badge */}
                  <div className="relative">
                    {/* Project Image/Icon */}
                    <motion.div 
                      className="relative h-40 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center overflow-hidden"
                      variants={imageVariants}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        className="relative z-10"
                      >
                        <IconComponent className="w-20 h-20 text-white drop-shadow-lg" />
                      </motion.div>
                      
                      {/* Animated Background Pattern */}
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        style={{
                          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="absolute top-3 right-3 z-20"
                        >
                          <div className="flex items-center gap-1 px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full border border-purple-400/50">
                            <Sparkles className="w-3 h-3 text-white" />
                            <span className="text-xs font-bold text-white">Featured</span>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <motion.div 
                    className="p-6 flex-1 flex flex-col"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {/* Title */}
                    <motion.div className="mb-3">
                      <motion.h3 
                        className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.title}
                      </motion.h3>
                      <div className="h-0.5 w-12 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
                    </motion.div>
                    
                    {/* Description */}
                    <p className="text-purple-200 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies Section */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-semibold text-purple-300 uppercase tracking-wide">Tech Stack</span>
                      </div>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {project.technologies.slice(0, 6).map((tech, techIndex) => {
                          const TechIcon = techIcons[tech] || null;
                          return (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.15, y: -3, zIndex: 10 }}
                              transition={{ 
                                delay: index * 0.1 + techIndex * 0.05,
                                type: "spring",
                                stiffness: 200
                              }}
                              viewport={{ once: true }}
                              className="px-2.5 py-1.5 bg-purple-900/30 border border-purple-800/50 text-purple-300 text-xs rounded-lg font-medium cursor-default flex items-center gap-1.5 hover:bg-purple-800/50 hover:border-purple-600 transition-colors"
                              title={tech}
                            >
                              {TechIcon && <TechIcon className="w-3.5 h-3.5 flex-shrink-0" />}
                              <span className="truncate max-w-[80px]">{tech}</span>
                            </motion.span>
                          );
                        })}
                        {project.technologies.length > 6 && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="px-2.5 py-1.5 bg-purple-900/20 border border-purple-800/30 text-purple-400 text-xs rounded-lg font-medium"
                          >
                            +{project.technologies.length - 6}
                          </motion.span>
                        )}
                      </motion.div>
                    </div>

                    {/* Action Buttons */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex gap-2 pt-2 border-t border-purple-900/30">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-purple-500/50"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-900/30 border border-purple-800/50 text-purple-300 text-sm font-semibold rounded-lg hover:bg-purple-800/50 hover:text-white transition-all"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </motion.a>
                        )}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black border border-purple-900/50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in seeing more?
            </h3>
            <p className="text-purple-200 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a
              href="https://github.com/nitishkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
