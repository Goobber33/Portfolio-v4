"use client"

import { motion } from 'framer-motion';

const HomePage = () => {

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
        <div className="text-center px-4 py-8 sm:px-10 sm:py-16 md:px-20 md:py-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
            >
                <motion.h1
                    variants={childVariants}
                    style={{ color: '#49c5b6', fontFamily: 'Roboto, sans-serif' }}
                    className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl sm:whitespace-nowrap font-extrabold">
                    HI, I&apos;M KYLE
                </motion.h1>
                <motion.h2
                    variants={childVariants}
                    style={{ color: '#49c5b6', fontFamily: 'Roboto, sans-serif' }}
                    className="text-xl sm:text-3xl md:text-4xl lg:text-5xl px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:whitespace-nowrap font-bold">
                    I AM A FULL STACK WEB DEVELOPER.
                </motion.h2>
                <motion.p
                    variants={childVariants}
                    style={{ color: '#49c5b6', fontFamily: 'Roboto, sans-serif', fontWeight: 100 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 sm:px-4 md:px-6 lg:px-8 py-2 whitespace-nowrap">
                    Hello
                </motion.p>
            </motion.div>
        </div>
    );
}

export default HomePage;
