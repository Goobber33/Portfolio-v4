import { motion } from 'framer-motion';
import React, { useState } from 'react';

const AboutPage = () => {

  const jobsData = [
    {
      id: 1,
      company: 'Keelworks Foundation',
      title: 'Full-Stack Developer',
      range: 'January 2024 - Present',
      duties: [
        'Develop and maintain Knowledge Base, a web application that helps people in need.',
        'Collaborate with designers to create user-friendly interfaces and a dynamic database.',
        'Transitioned code base from Java to JavaScript for more uniformity in languages.',
      ],
    },
    {
      id: 2,
      company: 'Freelance Developer',
      title: 'Full-Stack Developer',
      range: 'June 2023 - Present',
      duties: [
        'Built responsive websites using React, Node, and Express.',
        'Optimized application for maximum speed and scalability.',
        'Actively communicated with customers on project status and updates.',
      ],
    },
    {
      id: 3,
      company: 'Intermax Networks',
      title: 'MSP Field Technician',
      range: 'December 2022 - June 2023',
      duties: [
        'Provided remote and on-site IT support',
        'Managed Office 265 and Azure AD, and oversaw security and performance',
        'Worked for over 100+ businesses on the Managed Sevice Providers team.',
      ],
    },
    {
      id: 4,
      company: 'Northern Quest Resort & Casino',
      title: 'IT Support Technician',
      range: 'August 2021 - October 2022',
      duties: [
        'Mentored junior IT team members, ensured efficient client-support ticket reosultions.',
        'IT Networking and Project Management.',
        'Maintained Active Directory permissions and group policies and oversee data integrity in SQL Databses.',
      ],
    },
  ];

  const [activeJob, setActiveJob] = useState(jobsData[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.h3
        variants={childVariants}
        initial="hidden"
        animate="visible"
        className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white text-center mt-28 w-full leading-2"
      >
        My Portfolio
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='flex flex-col lg:flex-row -mt-8 lg:-mt-16 gap-8 sm:gap-12 md:gap-16 lg:gap-24 p-20 lg:p-40 items-center justify-center'
      >
        <div className="relative">
          <motion.img
            variants={childVariants}
            src="/kyle.jpeg"
            alt="Kyle Parks"
            className="rounded-tl-full rounded-tr-full w-48 sm:w-64 md:w-72 lg:w-80"
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white text-center p-2 leading-loose text-2xl font-bold font-serif"
            variants={childVariants}
          >
            <span style={{ color: '#49c5b6' }}>Kyle Parks</span>
          </motion.div>
        </div>
        <motion.div
          variants={textContainerVariants}
          className="flex flex-col"
        >
          <motion.h4 variants={childVariants} className='text-md sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-8 text-customCyan'>
            I&apos;m a Full-Stack Web Developer<span style={{ color: 'white' }}>.</span>
          </motion.h4>
          <motion.p
            variants={childVariants}
            className='text-white font-100 text-md sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto lg:leading-relaxed font-sans'
          >
            I have a passion for creating beautiful and functional web applications. I love every step of the creative process<span style={{ color: '#49c5b6' }}>,</span> from concept to deployment.
          </motion.p>
          <motion.p
            variants={childVariants}
            className='text-white font-100 text-md sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto mt-8 lg:leading-relaxed font-sans'
          >
            I was born and raised in San Diego, California and currently I live in Coeur d&apos;Alene, Idaho. I started my developer career by attending and graduating from the University of Washington&apos;s Full-Stack Web Development Bootcamp.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Jobs Section */}

      <section id="jobs" className="mt-20">
        <h2 className="text-5xl font-bold font-sans text-center text-customCyan">Where I&apos;ve Worked</h2>

        <div className="flex justify-center mt-5 font-sans text-xl">
          <div className="flex overflow-x-auto">
            {jobsData.map((job, index) => (
              <motion.button
                key={job.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 ${activeJob.id === job.id ? 'text-customCyan' : 'text-white'}`}
                onClick={() => setActiveJob(job)}
                style={{ margin: '0 10px' }}
              >
                {job.company}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active job description */}

        <div className="mt-10 text-center font-sans">
          <h3 className="text-4xl font-bold font-sans text-white">{activeJob.title} <span className="text-customCyan">@ {activeJob.company}</span></h3>
          <p className="text-customCyan">{activeJob.range}</p>
          <ul className="list-disc pl-5 mt-4 text-left inline-block text-white text-lg lg:text-xl">
            {activeJob.duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
