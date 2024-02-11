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
        <div className="text-center px-4 py-24 sm:py-16 md:py-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
            >
                <motion.h1
                    variants={childVariants}
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                    className="mt-4 sm:mt-8 lg:mt-16 text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-white">
                    HI<span style={{ color: '#49c5b6' }}>,</span> I&apos;M KYLE
                </motion.h1>

                <motion.h2
                    variants={childVariants}
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                    className="text-xl sm:text-3xl md:text-4xl lg:text-5xl px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:whitespace-nowrap font-bold text-white">
                    I AM A FULL STACK WEB DEVELOPER.
                </motion.h2>
                <motion.p
                    variants={childVariants}
                    style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 100 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 sm:px-4 md:px-6 lg:px-8 py-10  text-white">
                    I love creating beautiful and functional web applications. <br /> Please take a look around and feel free to contact me!
                </motion.p>
            </motion.div>
        </div>
    );
}

export default HomeContent;
