import { motion } from 'framer-motion';
import React from 'react';
import { Button } from "@/components/ui/button";

const Contact = () => {

    const handleContactClick = () => {
        window.location.href = "mailto:kcparks1234@gmail.com";
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // This will stagger the animation of children
            },
        },
    };

    const childVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    // Define a variant for the paragraph text
    const paragraphVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {delay: 0.2, duration: 0.5 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center"
        >
            <motion.h1
                variants={childVariants}
                className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white text-center mb-24 mt-36 lg:mt-28 w-full leading-2"
            >
                Contact Me
            </motion.h1>
            <motion.div
                variants={paragraphVariants} // Use the paragraph variants here
                className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 p-2 lg:p-2 items-center justify-center"
            >
                <div className="flex flex-col">
                    <p className='text-white font-100 text-lg sm:text-2xl md:text-3xl lg:text-2xl text-start lg:max-w-xl w-auto lg:leading-relaxed font-sans'>
                        I am always open to new opportunities and meeting new people. I am currently open to Software Engineer/Developer roles, and I am also open to freelance work. If you would like to get in touch with me, please feel free to reach out to me via email or LinkedIn.
                    </p>
                </div>
            </motion.div>
            <Button 
                onClick={handleContactClick}
                className="text-white border-2 border-customCyan bg-black hover:bg-customCyan px-4 py-2 mt-8 rounded shadow font-serif font-black text-xl"
            >
                Contact
            </Button>
        </motion.div>
    );
}

export default Contact;
