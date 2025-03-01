import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  School,
  Code,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  Clipboard,
  Lightbulb,
  Zap,
  BookOpenCheck,
  Medal,
  ExternalLink,
} from 'lucide-react';

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState('formal');

  // Animasi untuk container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animasi untuk elemen individual
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Data formal education
  const formalEducation = [
    {
      school: 'SMK Negeri 8 Semarang',
      degree: 'Software Engineering',
      year: '2016 - 2019',
      mascot: '🧑‍💻',
      description:
        'Focused on developing practical software engineering skills through project-based learning. Received comprehensive training in web development, database management, and programming fundamentals.',
      achievements: ['IT Club Trainer', 'School Competition Winner'],
      skills: [
        'Web Development',
        'Database Design',
        'Object-Oriented Programming',
        'UI/UX Design',
        'Network & OS Fundamental',
        'Project Management',
      ],
      projects: [
        {
          name: 'School Management System',
          description: 'Built a comprehensive system for managing student records, attendance, and grades.',
        },
        {
          name: 'Class Accounting System',
          description: 'Developed a system for managing class accounts and expenses.',
        },
      ],
    },
  ];

  // Data self-learning
  const selfLearning = [
    {
      platform: 'Udemy',
      courses: ['The Complete Web Developer Bootcamp', 'React - The Complete Guide', 'Node.js for Beginners'],
      icon: <BookOpenCheck size={24} />,
    },
    {
      platform: 'freeCodeCamp',
      courses: ['Responsive Web Design Certification', 'JavaScript Algorithms and Data Structures'],
      icon: <Code size={24} />,
    },
    {
      platform: 'YouTube Tutorials',
      courses: ['Advanced CSS and SASS', 'TypeScript Crash Course', 'DevOps Fundamentals'],
      icon: <Zap size={24} />,
    },
  ];

  // Data certifications
  const certifications = [
    {
      name: 'Web Development Fundamentals',
      issuer: 'Dicoding Indonesia',
      date: 'April 2020',
      icon: <Medal size={24} />,
    },
    {
      name: 'Frontend Developer Path',
      issuer: 'Progate',
      date: 'June 2020',
      icon: <Award size={24} />,
    },
    {
      name: 'Modern JavaScript',
      issuer: 'Codecademy',
      date: 'August 2020',
      icon: <Lightbulb size={24} />,
    },
  ];

  return (
    <section className='min-h-screen relative overflow-hidden py-40 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl' />
      </div>

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6'>
            Educational Journey
          </h2>
          <p className='text-gray-300 max-w-2xl mx-auto text-lg'>
            My foundation in software engineering, complemented by continuous self-learning and professional
            development.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className='flex justify-center mb-10'>
          <div className='bg-gray-900/50 backdrop-blur-sm p-1 rounded-xl flex'>
            {['formal', 'self-learning', 'certifications'].map((tab) => (
              <motion.button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Formal Education Tab */}
        {activeTab === 'formal' && (
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 gap-8'
          >
            {formalEducation.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='bg-gradient-to-br from-gray-900/80 to-slate-900/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl'
              >
                <div className='grid md:grid-cols-3 gap-0'>
                  {/* Left column with school info */}
                  <div className='md:col-span-1 bg-gray-900/70 p-8 flex flex-col justify-between border-r border-blue-500/10'>
                    <div>
                      <div className='flex items-center gap-3 mb-4'>
                        <div className='text-5xl'>{edu.mascot}</div>
                        <School className='w-10 h-10 text-cyan-400' />
                      </div>
                      <h3 className='text-2xl font-bold text-white mb-2'>{edu.school}</h3>
                      <p className='text-cyan-400 text-lg font-medium mb-1'>{edu.degree}</p>
                      <p className='text-gray-400 flex items-center gap-2 mb-6'>
                        <Calendar className='w-4 h-4' />
                        {edu.year}
                      </p>
                      <div className='border-t border-blue-500/20 pt-4'>
                        <p className='text-gray-300 italic leading-relaxed'>{edu.description}</p>
                      </div>
                    </div>

                    <motion.div
                      className='mt-8'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
                        <Trophy className='w-5 h-5 text-yellow-500' />
                        Key Achievements
                      </h4>
                      <div className='space-y-2'>
                        {edu.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className='px-3 py-2 rounded-lg bg-yellow-500/10 text-yellow-300 flex items-center gap-2 text-sm'
                          >
                            <Award className='w-4 h-4' />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right column with skills and projects */}
                  <div className='md:col-span-2 p-8'>
                    <div className='mb-8'>
                      <h4 className='text-lg font-semibold text-white flex items-center gap-2 mb-4'>
                        <Code className='w-5 h-5 text-blue-400' />
                        Skills Acquired
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {edu.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            className='px-3 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300'
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className='text-lg font-semibold text-white flex items-center gap-2 mb-4'>
                        <Clipboard className='w-5 h-5 text-emerald-400' />
                        Notable Projects
                      </h4>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {edu.projects.map((project, i) => (
                          <motion.div
                            key={i}
                            className='bg-gradient-to-br from-slate-800 to-gray-900 p-4 rounded-xl border border-emerald-500/20'
                            whileHover={{
                              scale: 1.02,
                              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.15)',
                              borderColor: 'rgba(16, 185, 129, 0.4)',
                            }}
                          >
                            <h5 className='text-emerald-400 font-medium mb-2'>{project.name}</h5>
                            <p className='text-gray-400 text-sm'>{project.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Self-Learning Tab */}
        {activeTab === 'self-learning' && (
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 gap-8'
          >
            <motion.div variants={itemVariants} className='text-center mb-8'>
              <div className='inline-block p-4 bg-blue-500/10 rounded-full mb-4'>
                <BookOpen className='w-10 h-10 text-blue-400' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>Continuous Learning</h3>
              <p className='text-gray-300 max-w-2xl mx-auto'>
                Beyond formal education, I've invested in expanding my skills through online platforms and self-directed
                learning.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {selfLearning.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='bg-gradient-to-br from-gray-900/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6'
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 30px -5px rgba(124, 58, 237, 0.3)',
                  }}
                >
                  <div className='bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4'>
                    {item.icon}
                  </div>
                  <h4 className='text-xl font-bold text-white mb-3'>{item.platform}</h4>
                  <ul className='space-y-2'>
                    {item.courses.map((course, i) => (
                      <li key={i} className='text-gray-300 flex items-start gap-2'>
                        <span className='text-purple-400 mt-1'>•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <motion.div variants={containerVariants} initial='hidden' animate='visible'>
            <motion.div variants={itemVariants} className='text-center mb-8'>
              <div className='inline-block p-4 bg-emerald-500/10 rounded-full mb-4'>
                <Award className='w-10 h-10 text-emerald-400' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>Professional Certifications</h3>
              <p className='text-gray-300 max-w-2xl mx-auto'>
                Credentials that validate my skills and knowledge in various technology domains.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='relative bg-gradient-to-br from-gray-900/80 to-slate-900/80 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6'
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <div className='absolute top-0 right-0 w-20 h-20 overflow-hidden'>
                    <div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-emerald-500 text-gray-900 font-bold py-1 px-10'>
                      <span className='text-[10px]'>VERIFIED</span>
                    </div>
                  </div>

                  <div className='flex justify-between items-start mb-4'>
                    <div className='bg-emerald-500/10 w-12 h-12 rounded-full flex items-center justify-center'>
                      {cert.icon}
                    </div>
                    <span className='text-gray-400 text-sm'>{cert.date}</span>
                  </div>

                  <h4 className='text-xl font-bold text-white mb-2'>{cert.name}</h4>
                  <p className='text-emerald-400 mb-4'>Issued by {cert.issuer}</p>

                  <motion.a
                    href='#'
                    className='inline-flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors'
                    whileHover={{ x: 3 }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
