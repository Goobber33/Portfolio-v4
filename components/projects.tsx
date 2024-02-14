import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const ProjectsPage = () => {
  return (
    <div>
      <motion.h1
        variants={childVariants}
        initial="hidden"
        animate="visible"
        className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-white text-center mt-36 lg:mt-28 w-full leading-2"
      >
        Projects
      </motion.h1>
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Project {index + 1}</CardTitle>
              <CardDescription>Project Description Here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>More details about Project {index + 1}.</p>
            </CardContent>
            <CardFooter>
              <p>Additional Info</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
