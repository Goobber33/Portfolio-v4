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
        <div className="text-center p-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
            >
                <motion.h1 variants={childVariants} className="text-8xl whitespace-nowrap">
                    Kyle Parks
                </motion.h1>
                <motion.p variants={childVariants} className="text-2xl text-center p-4">
                    Full Stack Developer
                </motion.p>
            </motion.div>
        </div>
    );
}

export default HomePage;
