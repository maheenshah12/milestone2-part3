// import React from 'react';
// import { Button } from "@/components/ui/button"

// const Hero = () => {
//   return (
//     <>
//     <div className='bg-pink-300 p-12 mt-10'>
//         <p className='flex items-center justify-center text-7xl font-extrabold'>MAHEEN IMRAN</p>
//         <p className='flex items-center justify-center text-6xl m-3 font-extrabold'>WEB DEVELOPER .</p>
//         <p className='text-3xl font-extrabold bg-slate-600 m-8 '>Passionate about AI, futuristic UI/UX designs, and building seamless
//              user experiences. Turning imagination into reality with the latest web technologies. 🚀</p>

//              <Button className='p-4'>Click me</Button>
//     </div>
//     </>
//   )
// }

// export default Hero;

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg- px-6">
      <motion.div
        className="max-w-3xl text-center bg-white/10 backdrop-blur-md  shadow-xl rounded-2xl p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm a Frontend Developer
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I specialize in **Next.js, TypeScript, and Tailwind CSS**, crafting high-performance,
          visually stunning web applications. Passionate about **AI, Cloud Computing, and Automation**,
          I strive to build seamless digital experiences that push technology forward.
        </motion.p>
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href={"/projects"}>
          
          <Button className="px-6 py-3 text-lg font-semibold  text-white  hover:bg-gray-900 transition-all duration-300">
            View Projects
          </Button>
          </Link>
          <Link href={"/contact"}>
          <Button className="px-6 py-3 text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300">
            Contact Me
          </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomePage;

