import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const initialProjects = [
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

const additionalProjects = [
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

// Variants for the container to manage the appearance of all cards
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Time between each child animation
        },
    },
};

// Variants for individual card animation on initial load
const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Time it takes for the animation to complete
      },
    },
};

// Variants for the hover effect on each card
const cardVariants = {
    hover: { scale: 1.03, y: -8, transition: { duration: 0.3 } }, // Adjust the scale and y movement as needed
};

const ProjectsPage = () => {
    const [showMore, setShowMore] = useState(false);

    // The full list of projects to be potentially displayed
    const fullProjectsList = [...initialProjects, ...additionalProjects];

    // Determine which projects to display based on `showMore` state
    const displayedProjects = showMore ? fullProjectsList : initialProjects;

    // Variants for the container to ensure staggered animation for both initial and additional cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Adjust this value as needed for the stagger effect
            },
        },
    };

    // Variants for animating each project card on initial appearance and hover
    const childVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5, // Duration of animation into view
            },
        },
    };

    // Variants for the hover effect on each card
    const cardVariants = {
        hover: { y: -8, transition: { duration: 0.3 } }, // Hover effect
    };

    return (
        <div>
            <motion.h1
                initial="hidden"
                animate="visible"
                className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white text-center mb-24 mt-36 lg:mt-28 w-full leading-2"
            >
                Projects
            </motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible" // This ensures the animation plays on load and when additional cards are added
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-12"
            >
                {displayedProjects.map((project, index) => (
                    <motion.div key={index} variants={childVariants}>
                        <motion.div variants={cardVariants} whileHover="hover">
                            <Card className="bg-white shadow-lg overflow-hidden group cursor-pointer">
                                <CardHeader className="p-4">
                                    <CardTitle className="text-xl font-bold group-hover:text-customCyan">
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
                    </motion.div>
                ))}
            </motion.div>
            <div className="flex justify-center">
                <Button 
                    className="text-white border-2 border-customCyan bg-black hover:bg-customCyan px-4 py-2 rounded shadow"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Show Less" : "Show More"}
                </Button>
            </div>
        </div>
    );
};

export default ProjectsPage;