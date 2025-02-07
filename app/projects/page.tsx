// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   { title: "E-Commerce Website", description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Sanity." },
//   { title: "Amazon Clone", description: "A Amazon Clone  using Next.js and Tailwind CSS." },
//   { title: "REsume builder", description: "A resume builder which wh" },
//   { title: "Blog Platform", description: "A dynamic blog platform with user authentication and a CMS for content management." },
// ];

// const ProjectsPage = () => {
//   return (
//     <section className="flex flex-col items-center justify-center min-h-screen px-6">
//       {/* Top Decorative Line */}
//       <div className="w-24 h-1 bg-gray-600 rounded-full mb-6"></div>

//       {/* Heading */}
//       <motion.h1
//         className="text-4xl font-extrabold text-gray-900 mb-8"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         My Projects
//       </motion.h1>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="bg-white/25 cursor-pointer backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
//             <p className="text-gray-600">{project.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsPage;

// //////////////////
"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Sanity.",
    link: "https://ecommerce-hackathon-g82z-git-main-maheenshah12s-projects.vercel.app/",
  },
  {
    title: "Amazon Clone",
    description: "An Amazon Clone using Next.js and Tailwind CSS.",
    link: "https://amazon-clone-xi-dusky.vercel.app/",
  },
  {
    title: "Resume Builder",
    description: "An interactive resume builder with dynamic templates.",
    link: "https://milesstone5-beta.vercel.app/",
  },
  {
    title: "Blog Platform",
    description: "A dynamic blog platform with user authentication and CMS.",
    link: "https://dynamic-blog-black.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* Top Decorative Line */}
      <div className="w-24 h-1 bg-gray-600 rounded-full mb-6"></div>

      {/* Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/25 cursor-pointer backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

