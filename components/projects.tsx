import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Define your projects here with unique content for each
const projects = [
  {
    title: 'Project 1',
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
      staggerChildren: 0.2, // Adjust the stagger time as needed
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectsPage = () => {
  return (
    <div>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white text-center mb-24 mt-36 lg:mt-28 w-full leading-2"
      >
        Projects
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-customCyan text-white p-4">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-gray-900 dark:text-white">
                <CardDescription className="text-lg">{project.description}</CardDescription>
                <p className="mt-2">{project.details}</p>
              </CardContent>
              <CardFooter className="p-4 text-gray-600 dark:text-gray-400">
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
