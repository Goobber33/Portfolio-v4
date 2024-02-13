import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Jobs = () => {

  const jobsData = [
    {
      id: 1,
      company: 'Keelworks Foundation',
      title: 'Full-Stack Developer',
      range: 'January 2024 - Present',
      duties: [
        'Develop and maintain Knowledge Base, a web application that helps people in need.',
        'Collaborate with designers to create user-friendly interfaces and a dynamic database.',
        'Transitioned code base from Java to JavaScript for more uniformity in languages.',
      ],
    },
    {
      id: 2,
      company: 'Freelance Developer',
      title: 'Full-Stack Developer',
      range: 'June 2023 - Present',
      duties: [
        'Built responsive websites using React, Node, and Express.',
        'Optimized application for maximum speed and scalability.',
        'Actively communicated with customers on project status and updates.',
      ],
    },
    {
      id: 3,
      company: 'Intermax Networks',
      title: 'MSP Field Technician',
      range: 'December 2022 - June 2023',
      duties: [
        'Provided remote and on-site IT support',
        'Managed Office 265 and Azure AD, and oversaw security and performance',
        'Worked for over 100+ businesses on the Managed Sevice Providers team.',
      ],
    },
    {
      id: 4,
      company: 'Northern Quest Resort & Casino',
      title: 'IT Support Technician',
      range: 'August 2021 - October 2022',
      duties: [
        'Mentored junior IT team members, ensured efficient client-support ticket reosultions.',
        'IT Networking and Project Management.',
        'Maintained Active Directory permissions and group policies and oversee data integrity in SQL Databses.',
      ],
    },
  ];

  const [activeJob, setActiveJob] = useState(jobsData[0]);
  
  return (
    <>

      {/* Jobs Section */}

      <section id="jobs" className="mt-20">
        <h2 className="text-5xl font-bold font-sans text-center text-customCyan">Where I&apos;ve Worked</h2>

        <div className="flex justify-center mt-5 font-sans text-xl">
          <div className="flex overflow-x-auto">
            {jobsData.map((job, index) => (
              <motion.button
                key={job.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 ${activeJob.id === job.id ? 'text-customCyan' : 'text-white'}`}
                onClick={() => setActiveJob(job)}
                style={{ margin: '0 10px' }}
              >
                {job.company}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active job description */}

        <div className="mt-10 text-center font-sans">
          <h3 className="text-4xl font-bold font-sans text-white">{activeJob.title} <span className="text-customCyan">@ {activeJob.company}</span></h3>
          <p className="text-customCyan">{activeJob.range}</p>
          <ul className="list-disc pl-5 mt-4 text-left inline-block text-white text-lg lg:text-xl">
            {activeJob.duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Jobs;
