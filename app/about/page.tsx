'use client'
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const About = () => {
  return (
    <motion.section 
      className="flex flex-col items-center justify-center min-h-screen px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="max-w-2xl text-center bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-3xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-gray-800 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          As a dedicated Frontend Developer, I thrive on crafting intuitive and engaging user experiences.
          My expertise in Next.js, TypeScript, and Tailwind CSS enables me to build high-performance, scalable,
          and visually stunning web applications that seamlessly merge design with functionality.
          Beyond development, I am deeply passionate about cutting-edge technologies like Artificial Intelligence,
          Cloud Computing, and Automation. My goal is to leverage these innovations to drive efficiency, enhance
          digital solutions, and create impactful experiences that redefine the future of technology.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="px-6 py-3 text-lg font-semibold">
            Learn More        </Button>
         </motion.div>
       </motion.div>
     </motion.section>
   );
 };

 export default About;