"use client"

import { motion } from 'framer-motion';

const AboutPage = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <><motion.div variants={containerVariants}
      initial="hidden"
      animate="visible" className='flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 p-20 lg:p-40 items-center'>
      <motion.img
        variants={childVariants}
        src="/kyle.jpeg"
        alt="Kyle Parks"
        className="rounded-full w-48 sm:w-64 md:w-72 lg:w-96" />
      <motion.div variants={childVariants} className='text-white font-extrabold text-2xl text-center lg:max-w-4xl w-96'>
        With a focus on user-centric design, I&apos;ve dedicated myself to crafting engaging and accessible digital solutions. From concept to deployment, I enjoy every step of the creative process.
      </motion.div>
    </motion.div> 
    <motion.div>

      </motion.div></>
  );
}

export default AboutPage;

