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
    <motion.div variants={containerVariants}
    initial="hidden"
    animate="visible"className='flex justify-around lg:gap-44 md:gap-12 sm:gap-2 xs:gap-2 p-40 sm:p-22'>
      <motion.img
          variants={childVariants}
          src="/kyle.jpeg"
          alt="Kyle Parks"
          className="rounded-full max-w-max lg:h-96 lg:w-96 md:h-72 md:w-72 sm:h-48 sm:w-36 h-32 w-32"
      />
      <motion.div variants={childVariants} className='text-white max-w-max'>
      With a focus on user-centric design, I&apos;ve dedicated myself to crafting engaging and accessible digital solutions. <br /> From concept to deployment, I enjoy every step of the creative process.
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;
