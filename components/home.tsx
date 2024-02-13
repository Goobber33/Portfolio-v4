"use client"

import { motion } from 'framer-motion';

const HomeContent = () => {

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
        <div className="text-center py-32 sm:py-16 md:py-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
            >
                <motion.h1
                    variants={childVariants}
                    
                    className="mt-4 sm:mt-8 lg:mt-2 text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white">
                    HI<span style={{ color: '#49c5b6' }}>,</span> I&apos;M KYLE.
                </motion.h1>

                <motion.h2
                    variants={childVariants}
                    
                    className="text-md sm:text-3xl md:text-4xl lg:text-5xl px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:whitespace-nowrap font-sans font-bold text-white">
                    I AM A FULL-STACK WEB DEVELOPER.
                </motion.h2>
                <motion.p
                    variants={childVariants}
                    
                    className="text-sm sm:text-xl md:text-2xl lg:text-3xl px-2 sm:px-4 md:px-6 lg:px-8 py-10 text-white font-sans">
                    I love creating beautiful and functional web applications. <br /> Please take a look around and feel free to contact me!
                </motion.p>
            </motion.div>
        </div>
    );
}

export default HomeContent;
