import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Define your projects here with unique content for each
const projects = [
    {
        title: 'Portfolio-v4',
        description: 'Description for Project 1',
        details: 'More details about Project 1.',
        additionalInfo: 'Additional Info for Project 1',
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2',
        details: 'More details about Project 2.',
        additionalInfo: 'Additional Info for Project 2',
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2',
        details: 'More details about Project 2.',
        additionalInfo: 'Additional Info for Project 2',
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2',
        details: 'More details about Project 2.',
        additionalInfo: 'Additional Info for Project 2',
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2',
        details: 'More details about Project 2.',
        additionalInfo: 'Additional Info for Project 2',
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2',
        details: 'More details about Project 2.',
        additionalInfo: 'Additional Info for Project 2',
    },
];

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    hover: { y: -7, transition: { duration: 0.2 } },
};

const ProjectsPage = () => {
    return (
        <div>
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white text-center mb-24 mt-36 lg:mt-28 w-full leading-2"
            >
                Projects
            </motion.h1>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
                variants={containerVariants}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true }}
            >
               {projects.map((project, index) => (
                    <motion.div key={index} variants={cardVariants} whileHover="hover">
                        <Card className="group bg-white shadow-lg overflow-hidden hover:cursor-pointer">
                            <CardHeader className="p-4">
                                <CardTitle className="text-xl font-bold transition-colors duration-300 group-hover:text-customCyan">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardDescription className="text-lg">{project.description}</CardDescription>
                                <p className="mt-2">{project.details}</p>
                            </CardContent>
                            <CardFooter className="p-4">
                                <p>{project.additionalInfo}</p>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectsPage;