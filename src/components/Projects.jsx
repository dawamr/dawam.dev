import { useState, useRef, useEffect } from 'react';
import { GithubIcon, ExternalLink, Code, Terminal, Package, Cpu, RefreshCw } from 'lucide-react';
import solarion_pv from '../assets/images/projects/monioring.solarion.co.png';
import smartwatch from '../assets/images/projects/smartwatch.terretech.id.png';
import projectNoImage from '../assets/images/projects/project-no-image.jpg';
import approvalImage from '../assets/images/projects/ams.solarion.id.png';
import crmImage from '../assets/images/projects/crm.solarion.id.png';
import calculatorImage from '../assets/images/projects/calculator.solarion.id.png';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const MacOsButtons = () => (
  <div className='flex gap-2 mb-4'>
    <div className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md' />
    <div className='w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md' />
    <div className='w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md' />
  </div>
);

const totalProjects = 22;

const projects = [
  {
    title: 'Monitoring PV Solar System',
    description:
      'The PV Monitoring System is a comprehensive solution for monitoring the performance of solar power generation systems (PV) across various Solarion projects in real-time. This system is designed to provide in-depth insights into PV system performance, from energy production to device conditions.',
    tags: ['MongoDB', 'ExpressJS', 'React', 'NodeJS', 'N8N'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://monitoring.solarion.co.id',
    },
    image: solarion_pv,
    featured: true,
  },
  {
    title: 'Smartwatch Monitoring System',
    description:
      'The Smartwatch Monitoring System is a solution designed to help users efficiently monitor and manage their smartwatches created by PT Terretech Nusantara. The main goal of this app is to help users monitor and optimize their smartwatches. This includes providing updates on system performance, enabling users to monitor electricity production in real-time, and providing suggestions for improvements.',
    tags: ['Postgres', 'ExpressJS', 'React', 'NodeJS', 'N8N'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://smartwatch.terretech.id',
    },
    image: smartwatch,
    featured: false,
  },
  {
    title: 'Approval Management System',
    description:
      'The Approval Management System is an internal application for Solarion designed to manage various activities requiring management approval. This includes leave requests, attendance tracking, managing on-site and off-site activities, and processing expense claims. Featuring e-signatures and a workflow-based approval process, the system enables management to make swift and efficient decisions.',
    tags: ['MySql', 'Redis', 'Laravel', 'Pocketbase', 'N8N', 'WhatsApp Api', 'AppScript'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://ams.solarion.id',
    },
    image: approvalImage,
    featured: false,
  },

  {
    title: 'PV Calculator & CRM Odoo System',
    description:
      'The PV Calculator & CRM Odoo System is an internal Solarion application designed to estimate solar power system (PLTS) requirements and manage installation requests, integrating directly with the Odoo CRM system. Users can input projection data for PLTS needs, calculate total costs, and create installation requests. The Odoo CRM component also features automated proposal generation for potential customers. It connects with Google API Services to automate various calculations and report creation.',
    tags: ['Postgres', 'Odoo', 'Google API', 'NextJS'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://calculator.solarion.id',
    },
    image: calculatorImage,
    featured: false,
  },
  {
    title: 'Alert PV Monitoring',
    description:
      'Alert PV Monitoring is an internal application designed for real-time monitoring of alerts from PLTS projects, displayed on TV screens.',
    tags: ['AstroJS', 'RestAPI'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://solarion-tv.netlify.app',
    },
    image: projectNoImage,
    featured: false,
  },
  {
    title: 'Indonesian Vegan Society',
    description: 'Handling Membership & E-Commerce System for Indonesian Vegan Society',
    tags: ['MySql', 'Laravel'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://google.co.id?q=indonesian+vegan+society',
    },
    image: projectNoImage,
    featured: false,
  },
  {
    title: 'Klinis (Kreasi Layanan Medis)',
    description:
      'KLINIS is a healthcare application developed to help lower-middle class communities access decent, fast, and accurate healthcare services through Telemedicine technology. It offers various features, including consultation booking, video calls, vaccination queue management, e-commerce, integrated Primary Healthcare Facilities (FKTP), and early disease detection.',
    tags: ['Laravel', 'MySql', 'Firebase', 'Twilio', 'WhatsApp Api'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://google.co.id?q=klinis',
    },
    image: projectNoImage,
    featured: false,
  },
  {
    title: 'ERP Odoo',
    description:
      'ERP Odoo is an internal application to manage CRM & Sales, intergrated with internal financial model, calculator pv cost, and other features. I handle the development process, requirements gathering, and mantaince of the system.',
    tags: ['Odoo', 'Python', 'PostgreSQL', 'Docker', 'Nginx', 'AppScript', 'Google API'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://crm.solarion.id',
    },
    image: crmImage,
    featured: false,
  },
  {
    title: 'Golfy App',
    description:
      'Book tee times, track scores, and use free GPS with the Golfy App. The ultimate golf booking app for easy tee time reservations.',
    tags: ['Figma', 'ReactJs', 'Laravel'],
    links: {
      github: 'https://gitlab.com/solarion-apps',
      demo: 'https://www.figma.com/proto/gNayXqOPfEnkV4ejo4jmSf/Golf-App?node-id=8083-1155&p=f&t=dytf9ZiHsHDR3PkZ-1&scaling=scale-down&content-scaling=fixed&page-id=7767%3A1671&starting-point-node-id=8083%3A745',
    },
    image: projectNoImage,
    featured: false,
  },
];

const ProjectShowcase = () => {
  // State management for project display condition
  const [showProjectCondition, setShowProjectCondition] = useState(projects.length >= totalProjects ? true : false);

  // Refs for scrolling to sections
  const featuredProjectsRef = useRef(null);
  const projectsContainerRef = useRef(null);

  /**
   * Smooth scroll to featured projects section
   */
  const scrollToFeaturedProjects = () => {
    if (featuredProjectsRef.current) {
      featuredProjectsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  /**
   * Smooth scroll to projects container
   */
  const scrollToProjectsContainer = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  /**
   * Handler function to manage project display condition
   * @param {boolean} condition - The condition to set for showing projects
   * @param {Object} options - Additional options for the handler
   */
  const handleSetShowProjectCondition = (condition, options = {}) => {
    const { callback = null, delay = 0, forceUpdate = false, focusToFeatured = true, scrollDelay = 500 } = options;

    // Validate input
    if (typeof condition !== 'boolean') {
      console.warn('handleSetShowProjectCondition: condition must be a boolean');
      return;
    }

    // Apply delay if specified
    const executeUpdate = () => {
      // Check if update is necessary (avoid unnecessary re-renders)
      if (showProjectCondition !== condition || forceUpdate) {
        setShowProjectCondition(condition);

        // Execute callback if provided
        if (callback && typeof callback === 'function') {
          callback(condition);
        }

        // Focus to featured projects if condition is true and focusToFeatured is enabled
        if (condition && focusToFeatured) {
          setTimeout(() => {
            scrollToFeaturedProjects();
          }, scrollDelay);
        }

        // Log state change for debugging
        console.log(`Project display condition changed to: ${condition}`);
      }
    };

    if (delay > 0) {
      setTimeout(executeUpdate, delay);
    } else {
      executeUpdate();
    }
  };

  /**
   * Toggle function for project display condition
   */
  const toggleShowProjectCondition = () => {
    handleSetShowProjectCondition(!showProjectCondition, {
      callback: (newCondition) => {
        console.log(`Projects ${newCondition ? 'shown' : 'hidden'}`);
      },
      focusToFeatured: true,
    });
  };

  /**
   * Force show all projects with focus to featured
   */
  const showAllProjects = () => {
    handleSetShowProjectCondition(true, {
      callback: () => {
        console.log('All projects are now visible');
      },
      focusToFeatured: true,
      scrollDelay: 800, // Longer delay to allow animations to complete
    });
  };

  /**
   * Hide all projects (show empty state)
   */
  const hideAllProjects = () => {
    handleSetShowProjectCondition(false, {
      callback: () => {
        console.log('Projects hidden, showing empty state');
      },
      focusToFeatured: false, // Don't scroll when hiding
    });
  };

  // Effect to handle initial focus if projects are already visible
  useEffect(() => {
    if (showProjectCondition && featuredProjectsRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToProjectsContainer();
      }, 1000);
    }
  }, []);

  // EmptyProjectsState component with access to showAllProjects
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
    const techIcons = [Code, Terminal, Package, Cpu, GithubIcon, RefreshCw];

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
            I&apos;m currently working on some exciting projects that will be showcased here soon. Stay tuned for
            updates!
          </motion.p>

          <motion.div variants={itemVariants}>
            <div className='w-full max-w-md mx-auto h-2 bg-gray-800 rounded-full overflow-hidden'>
              <motion.div
                className='h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500'
                initial={{ width: 0 }}
                animate={{ width: `${Math.round((projects.length / totalProjects) * 100)}%` }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <p className='text-blue-400 mt-2 font-medium'>
              {`${Math.round((projects.length / totalProjects) * 100)}%`} Submitted
            </p>
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
            <span className='relative flex items-center justify-center gap-2' onClick={() => showAllProjects()}>
              <RefreshCw className='w-5 h-5' />
              Show More Projects
            </span>
          </motion.button>
        </motion.div>

        <motion.div className='mt-12 text-gray-500 text-center text-sm' variants={itemVariants}>
          Last updated: {new Date('2025-06-16').toLocaleDateString('id-ID')}
        </motion.div>
      </motion.div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const featuredVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 },
    },
  };

  // Filter featured and non-featured projects
  const featuredProjects = projects.filter((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);

  // Check if we're in development mode
  const isDevelopment =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  return (
    <div className='pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-8 text-slate-100'>
      <motion.div
        className='max-w-7xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        ref={projectsContainerRef}
      >
        <motion.h2
          className='text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Show empty state when condition is false or projects are insufficient */}
        {(!showProjectCondition || projects.length < totalProjects) && <EmptyProjectsState />}

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && showProjectCondition && (
          <div className='mb-24' ref={featuredProjectsRef}>
            <motion.div
              className='flex items-center justify-between mb-8'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h3
                className='text-2xl font-semibold text-emerald-400 flex items-center'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className='inline-block w-8 h-8 bg-emerald-400 rounded-full mr-3 animate-pulse'></span>
                Featured Projects
              </motion.h3>

              {/* Focus indicator for featured section */}
              <motion.div
                className='hidden md:flex items-center gap-2 text-emerald-400/70 text-sm'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.div
                  className='w-2 h-2 bg-emerald-400 rounded-full'
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                <span>Featured Showcase</span>
              </motion.div>
            </motion.div>

            <div className='space-y-16'>
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className='relative group'
                  variants={featuredVariants}
                  whileHover='hover'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-gradient-xy'></div>

                  <div className='relative flex flex-col lg:flex-row bg-gradient-to-br from-gray-900 to-slate-800 rounded-xl overflow-hidden shadow-xl'>
                    {/* Image Section */}
                    <motion.div
                      className='lg:w-1/2 overflow-hidden h-[300px] lg:h-auto'
                      variants={imageVariants}
                      whileHover='hover'
                    >
                      <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
                      <div className='absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg transform -rotate-2'>
                        Featured
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className='lg:w-1/2 p-8'>
                      <MacOsButtons />

                      <div className='mb-6'>
                        <h3 className='text-3xl font-bold mb-4 text-white'>{project.title}</h3>
                        <p className='text-slate-300 text-lg leading-relaxed'>{project.description}</p>
                      </div>

                      <div className='flex flex-wrap gap-3 mb-8'>
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className='px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className='flex flex-wrap gap-4'>
                        <a
                          href={project.links.github}
                          className='flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <GithubIcon size={20} />
                          <span>Source Code</span>
                        </a>
                        <a
                          href={project.links.demo}
                          className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white transition-all duration-300 shadow-md hover:shadow-xl'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Section */}
        {regularProjects.length > 0 && showProjectCondition && (
          <div>
            <motion.h3
              className='text-2xl font-semibold mb-8 text-blue-400 flex items-center'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className='inline-block w-6 h-6 bg-blue-400 rounded-full mr-3'></span>
              Other Projects
            </motion.h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {regularProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className='bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50'
                  variants={projectVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className='h-48 overflow-hidden'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                    />
                  </div>

                  <div className='p-6'>
                    <h3 className='text-xl font-bold mb-2 text-white'>{project.title}</h3>
                    <p className='text-slate-300 text-sm mb-4 line-clamp-3'>{project.description}</p>

                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className='px-2 py-1 text-xs font-medium rounded-full bg-slate-700 text-slate-300'
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className='px-2 py-1 text-xs font-medium rounded-full bg-slate-700 text-slate-300'>
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className='flex gap-3'>
                      <a
                        href={project.links.github}
                        className='text-slate-400 hover:text-white transition-colors duration-300'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <GithubIcon size={18} />
                      </a>
                      <a
                        href={project.links.demo}
                        className='text-slate-400 hover:text-white transition-colors duration-300'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Control buttons for development/testing */}
        {isDevelopment && (
          <div className='fixed bottom-4 right-4 flex flex-col gap-2 z-50'>
            <button
              onClick={toggleShowProjectCondition}
              className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors duration-300'
            >
              Toggle Projects
            </button>
            <button
              onClick={showAllProjects}
              className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition-colors duration-300'
            >
              Show All
            </button>
            <button
              onClick={hideAllProjects}
              className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition-colors duration-300'
            >
              Hide All
            </button>
            <button
              onClick={scrollToFeaturedProjects}
              className='px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition-colors duration-300'
            >
              Focus Featured
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
