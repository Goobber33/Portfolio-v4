import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

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
    hidden: { y: 0, opacity: 0 },
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='flex flex-col -mt-8 lg:-mt-16 lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 p-20 lg:p-40 items-center'
      >
        <motion.img
          variants={childVariants}
          src="/kyle.jpeg"
          alt="Kyle Parks"
          className="rounded-full w-48 sm:w-64 md:w-72 lg:w-96"
        />
        <motion.div
          variants={textContainerVariants}
          className="flex flex-col"
        >
          <motion.h3
            variants={childVariants}
            className='text-white font-extrabold text-md sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto'
          >
            I&apos;m a Full Stack Web Developer with a passion for creating beautiful and functional web applications. I love every step of the creative process<span style={{ color: '#49c5b6' }}>,</span> from concept to deployment.
          </motion.h3>
          <motion.h4
            variants={childVariants}
            className='text-white font-extrabold text-md sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto mt-8'
          >
            I was born and raised in San Diego California<span style={{ color: '#49c5b6' }}>,</span> and currently I live in Coeur d&apos;Alene Idaho. I started my developer career by attending and graduating from the University of Washington&apos;s Full Stack Web Development Bootcamp.
          </motion.h4>
        </motion.div>
      </motion.div>
    </>
  );
}

export default AboutPage;
