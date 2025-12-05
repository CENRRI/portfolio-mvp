'use client';

import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Cloud (AWS, Azure, GCP)',
        'Bases de datos (SQL, NoSQL)',
        'Arquitectura de software',
    ];

    return (
        <motion.div
            className="relative py-32 px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 -z-10" />

            <div className="relative max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                <div className="px-8 py-12 md:px-12 md:py-16">
                    <div className="mx-auto max-w-4xl">
                        <motion.h2
                            className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            About
                        </motion.h2>

                        <motion.p
                            className="text-sm md:text-base text-gray-300 mb-10 leading-normal"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Soy un arquitecto de soluciones y desarrollador full stack con experiencia en la creación de
                            aplicaciones escalables y de alto rendimiento. Mi enfoque se centra en la utilización de tecnologías
                            modernas como Next.js, TypeScript y Cloud para resolver problemas complejos y crear soluciones innovadoras.
                        </motion.p>

                        <motion.h3
                            className="text-xs md:text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Skills
                        </motion.h3>

                        <motion.ul
                            className="grid grid-cols-1 md:grid-cols-2 gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {skills.map((skill, index) => (
                                <motion.li
                                    key={skill}
                                    className="flex items-center text-xs md:text-sm text-gray-400 bg-white/5 px-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:text-gray-200 transition-all duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3"></span>
                                    {skill}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
