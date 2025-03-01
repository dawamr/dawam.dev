import React from 'react';
import { Github, ExternalLink, Code, Terminal, Package, Cpu, RefreshCw } from 'lucide-react';
import olova from '../assets/images/olova.png';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const MacOsButtons = () => (
  <div className='flex gap-2 mb-4'>
    <div className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md' />
    <div className='w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md' />
    <div className='w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md' />
  </div>
);

const EmptyProjectsState = () => {
  // Animated container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Item variants for staggered animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  // Icons for the tech grid
  const techIcons = [Code, Terminal, Package, Cpu, Github, RefreshCw];

  return (
    <motion.div
      className='max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-slate-900/80 backdrop-blur-md border border-blue-500/20 shadow-2xl'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <motion.div className='text-center space-y-8' variants={itemVariants}>
        <div className='relative inline-block'>
          <motion.div
            className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-70'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className='relative w-24 h-24 mx-auto bg-slate-800 rounded-full flex items-center justify-center border border-blue-500/30'
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <RefreshCw className='w-10 h-10 text-cyan-400' />
          </motion.div>
        </div>

        <motion.h2
          className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
          variants={itemVariants}
        >
          Projects Coming Soon
        </motion.h2>

        <motion.p className='text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed' variants={itemVariants}>
          I'm currently working on some exciting projects that will be showcased here soon. Stay tuned for updates!
        </motion.p>

        <motion.div variants={itemVariants}>
          <div className='w-full max-w-md mx-auto h-2 bg-gray-800 rounded-full overflow-hidden'>
            <motion.div
              className='h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500'
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
              }}
            />
          </div>
          <p className='text-blue-400 mt-2 font-medium'>70% Complete</p>
        </motion.div>
      </motion.div>

      <motion.div className='mt-16 grid grid-cols-3 md:grid-cols-6 gap-6 max-w-2xl mx-auto' variants={itemVariants}>
        {techIcons.map((Icon, index) => (
          <motion.div
            key={index}
            className='bg-gray-800/50 p-4 rounded-xl flex items-center justify-center border border-gray-700/50'
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
              borderColor: 'rgba(59, 130, 246, 0.5)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <Icon className='w-8 h-8 text-gray-400 group-hover:text-cyan-400' />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className='mt-16 text-center' variants={itemVariants}>
        <motion.button
          className='group relative px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-medium shadow-lg'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-[#172554] to-[#0e7490] opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-out'></span>
          <span className='relative flex items-center justify-center gap-2'>
            <RefreshCw className='w-5 h-5' />
            Check Back Later
          </span>
        </motion.button>
      </motion.div>

      <motion.div className='mt-12 text-gray-500 text-center text-sm' variants={itemVariants}>
        Last updated: {new Date().toLocaleDateString()}
      </motion.div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  // const projects = [
  //   {
  //     title: "Olova! A Lightweight JavaScript Library",
  //     description:
  //       "Olova.js is a lightweight JavaScript library for building modern, reactive, and dynamic web applications. It features a simple, component-based architecture, enabling developers to create reusable and interactive UI elements with minimal code and overhead.",
  //     tags: ["JavaScript", "Reactive", "Web Development"],
  //     links: {
  //       github: "https://github.com/olovajs/olova",
  //       demo: "https://olova.js.org/",
  //     },
  //     image: olova,
  //     featured: true,
  //   },
  // ];

  const projects = [];

  return (
    <div
      className='pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100'
    >
      <div className='max-w-7xl mx-auto space-y-12'>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className='flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg'
            >
              {/* Image Section */}
              <div className='md:w-1/2 overflow-hidden rounded-lg'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>

              {/* Text Section */}
              <Card className='md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6'>
                <MacOsButtons />

                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <div>
                      <div className='text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase'>
                        Featured Project
                      </div>
                      <CardTitle className='text-slate-100 text-3xl font-bold'>{project.title}</CardTitle>
                    </div>
                    <div className='flex gap-4'>
                      <a
                        href={project.links.github}
                        className='text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href={project.links.demo}
                        className='text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='mt-4'>
                  <p className='text-slate-300 mb-6 text-lg leading-relaxed'>{project.description}</p>
                  <div className='flex flex-wrap gap-3'>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <EmptyProjectsState />
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;
