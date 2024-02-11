"use client"

import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer'; // Ensure you've imported InView

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

  // Corrected to use scrollVariants
  const scrollVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
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
    <>
      <motion.div variants={containerVariants}
        initial="hidden"
        animate="visible" className='flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 p-20 lg:p-40 items-center'>
        <motion.img
          variants={childVariants}
          src="/kyle.jpeg"
          alt="Kyle Parks"
          className="rounded-full w-48 sm:w-64 md:w-72 lg:w-96" />
        <motion.h3 variants={childVariants} className='text-white font-extrabold text-md sm:text-2xl md:text-3xl lg:text-2xl text-center lg:max-w-4xl w-96'>
          With a focus on user-centric design<span style={{ color: '#49c5b6' }}>,</span> I&apos;ve dedicated myself to crafting engaging and accessible digital solutions. From concept to deployment<span style={{ color: '#49c5b6' }}>,</span> I enjoy every step of the creative process.
        </motion.h3>
      </motion.div>

      <InView as="div" threshold={0.2} triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref} className="items-center mt-10">
            <motion.p className="text-white font-bold text-2xl text-center" initial="offscreen" animate={inView ? "onscreen" : "offscreen"} variants={scrollVariants}>
              I was born and raised in San Diego California, and currently, I live in Coeur d&apos;Alene Idaho.
            </motion.p>
            <motion.p className="text-white font-bold text-2xl text-center" initial="offscreen" animate={inView ? "onscreen" : "offscreen"} variants={scrollVariants}>
              I am a Full Stack Web Developer with a focus on user-centric design.
            </motion.p>
          </div>
        )}
      </InView>
    </>
  );
}

export default AboutPage;
