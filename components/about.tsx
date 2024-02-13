import { motion } from 'framer-motion';
import React, { useState } from 'react';

const AboutPage = () => {

  const jobsData = [
    {
      id: 1,
      company: 'Company A',
      title: 'Full-Stack Developer',
      range: 'January 2020 - Present',
      url: 'https://companya.com',
      duties: [
        'Develop and maintain web applications using React and Node.js.',
        'Collaborate with designers to create user-friendly interfaces.',
        'Implement RESTful APIs for internal and external use.',
      ],
    },
    {
      id: 2,
      company: 'Company B',
      title: 'Front-End Developer',
      range: 'June 2018 - December 2019',
      url: 'https://companyb.com',
      duties: [
        'Built responsive websites using HTML, CSS, and JavaScript.',
        'Optimized application for maximum speed and scalability.',
        'Participated in code reviews and team meetings.',
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
        className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white text-center mt-28 w-full leading-2"
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
            className="absolute bottom-0 left-0 right-0 bg-white text-center p-2 leading-loose text-2xl font-bold"
            variants={childVariants}
          >
            <span style={{ color: '#49c5b6' }}>Kyle Parks</span>
          </motion.div>
        </div>
        <motion.div
          variants={textContainerVariants}
          className="flex flex-col"
        >
          <motion.h4 variants={childVariants} className='text-md sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-customCyan'>
            I&apos;m a Full-Stack Web Developer<span style={{ color: 'white' }}>.</span>
          </motion.h4>
          <motion.p
            variants={childVariants}
            className='text-white font-100 text-md sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto lg:leading-relaxed'
          >
            I have a passion for creating beautiful and functional web applications. I love every step of the creative process<span style={{ color: '#49c5b6' }}>,</span> from concept to deployment.
          </motion.p>
          <motion.p
            variants={childVariants}
            className='text-white font-100 text-md sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto mt-8 lg:leading-relaxed'
          >
            I was born and raised in San Diego, California and currently I live in Coeur d&apos;Alene, Idaho. I started my developer career by attending and graduating from the University of Washington&apos;s Full-Stack Web Development Bootcamp.
          </motion.p>
        </motion.div>
      </motion.div>

       {/* Jobs Section */}

       <section id="jobs" className="mt-20">
        <h2 className="text-5xl font-bold text-center text-customCyan">Where I&apos;ve Worked</h2>

        <div className="flex justify-center mt-5">
          <div className="flex overflow-x-auto">
            {jobsData.map((job, index) => (
              <motion.button
                key={job.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 ${activeJob.id === job.id ? 'text-customCyan' : 'text-white'}`}
                onClick={() => setActiveJob(job)}
                style={{ margin: '0 10px' }} // Add spacing between tabs
              >
                {job.company}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active job description */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-white">{activeJob.title} <span className="text-customCyan">@ {activeJob.company}</span></h3>
          <p className="text-customCyan">{activeJob.range}</p>
          <ul className="list-disc pl-5 mt-4 text-left inline-block text-white">
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
