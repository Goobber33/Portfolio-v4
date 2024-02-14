import { motion } from 'framer-motion';
import React from 'react';
import Jobs from './jobs';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

const technologies = [
  { name: "React", icon: <FaReact size="30" color="#61DAFB" /> },
  { name: "JavaScript", icon: <SiJavascript size="30" color="#F7DF1E" /> },
  { name: "Node.js", icon: <FaNodeJs size="30" color="#339933" /> },
  { name: "Next.js", icon: <SiNextdotjs size="30" color="#ffffff" /> },
  { name: "TypeScript", icon: <SiTypescript size="30" color="#3178C6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size="30" color="#06B6D4" /> },
  { name: "MongoDB", icon: <SiMongodb size="30" color="#47A248" /> },
];

const AboutPage = () => {

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
        className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white text-center mt-36 lg:mt-28 w-full leading-2"
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
          <motion.h4 variants={childVariants} className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-8 mt-6 lg:mt-0 text-customCyan w-76 text-center lg:w-full'>
            I&apos;m a Full-Stack Web Developer<span style={{ color: 'white' }}>.</span>
          </motion.h4>
          <motion.p
            variants={childVariants}
            className='text-white font-100 text-lg sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto lg:leading-relaxed font-sans w-96 lg:w-full'
          >
            I have a passion for creating beautiful and functional web applications. I love every step of the creative process<span style={{ color: '#49c5b6' }}>,</span> from concept to deployment.
          </motion.p>
          <motion.p
            variants={childVariants}
            className='text-white font-100 text-lg sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto mt-8 lg:leading-relaxed font-sans'
          >
            I was born and raised in San Diego, California and currently I live in Coeur d&apos;Alene, Idaho. I started my developer career by attending and graduating from the University of Washington&apos;s Full-Stack Web Development Bootcamp.
          </motion.p>
        </motion.div>
      </motion.div>

      <Jobs />

      <div className="mt-32 text-center">
        <h3 className="text-4xl font-bold font-sans text-customCyan mb-8">
          Technologies I Use
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="text-white font-semibold font-sans text-xl flex flex-col items-center">
              {tech.icon}
              <span className="mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 p-20 lg:p-40 items-center justify-center'>
        <div className="flex flex-col">
          <p className='text-white font-100 text-lg sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto lg:leading-relaxed font-sans'>
            Aside from my internship a freelance work, I am a full time dad.
          </p>
          <p className='text-white font-100 text-lg sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto mt-8 lg:leading-relaxed font-sans'>
            In my free time I enjoy playing video games, snowboarding, and spending time with my family.
          </p>
        </div>
      </div>

    </>
  );
};

export default AboutPage;