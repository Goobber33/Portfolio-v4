import { motion } from 'framer-motion';

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
            I&apos;m a Full Stack Web Developer
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
            I was born and raised in San Diego California<span style={{ color: '#49c5b6' }}>,</span> and currently I live in Coeur d&apos;Alene Idaho. I started my developer career by attending and graduating from the University of Washington&apos;s Full Stack Web Development Bootcamp.
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default AboutPage;
