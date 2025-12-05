'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.div
            className="relative flex flex-col items-center justify-center h-screen text-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-purple-700 opacity-70 z-0" />
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    César Enrique Gavilano Vera
                </h1>
                <p className="text-2xl md:text-3xl mb-6">
                    Arquitecto de Soluciones & Full Stack Developer
                </p>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Especializado en arquitecturas escalables y desarrollo end-to-end con Next.js, TypeScript y Cloud
                </p>
            </div>
        </motion.div>
    );
};

export default Hero;
