import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';

const initialProjects = [
    {
        title: 'Portfolio-v4',
        description: 'The fourth version of my Portfolio Website.',
        additionalInfo: 'React | Next.js | Tailwind.css',
        url: "https://portfolio-v4-beta-steel.vercel.app/",
        github: 'https://github.com/Goobber33/Portfolio-v4'
    },
    {
        title: 'Quantum IQ',
        description: 'Quantum IQ is a state-of-the-art SaaS AI platform designed to streamline and enhance a variety of AI functionalities.',
        additionalInfo: 'React | Next.js | Tailwind.css | Prism | Stripe',
        url: 'https://quantum-ai-kappa.vercel.app/',
        github: 'https://github.com/Goobber33/Portfolio-v4'
    },
    {
        title: 'Knowledge Base Back End',
        description: 'Description for Project 2',
        additionalInfo: 'JavaScript | Node.js | Express | MongoDB',
        url: 'https://github.com/Goobber33/Knowledge-Base-Back-End'
    },
    {
        title: 'Jobstacle Course',
        description: 'Description for Project 2',
        details: 'More details about Project 2.',
        additionalInfo: 'Additional Info for Project 2',
        url: 'https://github.com/chewytaro/Jobstacle-course?tab=readme-ov-file'
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
        url: "https://portfolio-v4-beta-steel.vercel.app/"
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

const ProjectsPage = () => {
    const [showMore, setShowMore] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const cardVariants = {
        hover: { y: -8, transition: { duration: 0.3 } },
    };

    return (
        <div>
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={childVariants}
                className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white text-center mb-24 mt-36 lg:mt-28 w-full leading-2"
            >
                Projects
            </motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-1 md:cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:gap-4 gap-4 lg:gap-4 p-4 mb-12 mx-auto"
            >
                {initialProjects.map((project, index) => (
                    <motion.div key={index} variants={childVariants} className="mx-auto">
                        <motion.div variants={cardVariants} whileHover="hover">
                            <Card className="bg-gray-900 text-white border-none overflow-hidden group cursor-pointer h-96 w-96 flex flex-col justify-between">
                                <div className="p-4 flex justify-between items-start">
                                    <div>
                                        <FiFolder size="2.5em" className="text-customCyan mb-2" />
                                        <CardTitle className="pt-4 text-4xl font-bold group-hover:text-customCyan font-serif">
                                            {project.title}
                                        </CardTitle>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <FiGithub size="1.5em" className="text-white hover:text-customCyan" />
                                            </a>
                                        )}
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            <FiExternalLink size="1.5em" className="text-white hover:text-customCyan" />
                                        </a>
                                    </div>
                                </div>
                                <CardContent className="p-4 font-sans flex-grow">
                                    <CardDescription className="text-lg">{project.description}</CardDescription>
                                    <p className="mt-2">{project.details}</p>
                                </CardContent>
                                <CardFooter className="p-4 font-sans">
                                    <p>{project.additionalInfo}</p>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}

                {showMore && additionalProjects.map((project, index) => (
                    <motion.div key={`additional-${index}`} variants={childVariants}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <motion.div variants={cardVariants} whileHover="hover">
                                <Card className="bg-gray-900 text-white border-none overflow-hidden group cursor-pointer h-72 w-96 flex flex-col justify-between">
                                    <div>
                                        <CardHeader className="p-4">
                                            <FiFolder size="2.5em" className="text-customCyan mb-2" />
                                            <CardTitle className="text-4xl font-bold group-hover:text-customCyan font-serif">
                                                {project.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-4 font-sans flex-grow">
                                            <CardDescription className="text-lg">{project.description}</CardDescription>
                                            <p className="mt-2">{project.details}</p>
                                        </CardContent>
                                    </div>
                                    <CardFooter className="p-4 font-sans">
                                        <p>{project.additionalInfo}</p>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </a>
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex justify-center">
                <Button
                    className="text-white border-2 border-customCyan bg-black hover:bg-customCyan px-4 py-2 rounded shadow font-serif font-black text-xl"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Show Less" : "Show More"}
                </Button>
            </div>

        </div>
    );
};

export default ProjectsPage;