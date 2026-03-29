'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { teamData } from '@/data/teamData';

interface TeamProps {
    minimal?: boolean;
}

const TeamCard = ({ name, role, image, linkedin, github, variant = "default" }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className={`premium-card rounded-[2rem] overflow-hidden group interactive cursor-pointer flex flex-col ${variant === "faculty" ? "border-neon-blue/20 bg-neon-blue/5" : ""
            }`}
    >
        <div className={`relative overflow-hidden ${variant === "compact" ? "aspect-square" : "aspect-[2/3]"}`}>
            <Image
                src={image}
                alt={name}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${name === "Akhilesh Rawat" ? "object-[50%_10%]" :
                    (name === "Yashashvi Uniyal" || name === "Tripti Rana" ? "object-center" : "object-top")
                    }`}
                unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

        </div>

        <div className="p-5 mt-auto relative bg-slate-900/40 backdrop-blur-sm border-t border-white/5">
            <h3 className="text-lg font-bold text-white mb-0.5 truncate leading-tight group-hover:text-neon-blue transition-colors">
                {name}
            </h3>
            <p className="text-neon-blue text-xs font-bold tracking-widest uppercase opacity-70 mb-3">
                {role}
            </p>
            <div className="flex flex-wrap gap-4 items-center relative z-10">
                {linkedin && linkedin !== "#" && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neon-blue hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest bg-white/5 hover:bg-neon-blue px-4 py-2 rounded-full border border-white/10 hover:border-neon-blue group/link"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Linkedin size={14} className="group-hover/link:scale-110 transition-transform" /> LinkedIn
                    </a>
                )}
                {github && github !== "#" && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-neon-purple transition-all hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Github size={18} />
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const Team = ({ minimal = false }: TeamProps) => {
    return (
        <section id="team" className="py-24 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto relative z-10">
                {/* 1. Faculty Coordinator Section */}
                <div id="faculty" className="mb-24">
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-neon-blue uppercase tracking-[0.3em] text-sm font-bold mb-3 block pulse-glow"
                        >
                            Mentorship
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[clamp(1.5rem,6vw,3rem)] md:text-[clamp(2.5rem,5vw,4rem)] font-black uppercase"
                        >
                            Faculty <span className="text-zinc-200">Coordinator</span>
                        </motion.h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-[320px] w-full">
                            {teamData.faculty.map((member, i) => (
                                <TeamCard key={i} {...member} variant="faculty" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Executive Board Section */}
                <div id="executive" className={minimal ? "" : "mb-24"}>
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-neon-purple uppercase tracking-[0.3em] text-sm font-bold mb-3 block pulse-glow"
                        >
                            Leadership
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[clamp(1.5rem,6vw,3rem)] md:text-[clamp(2.5rem,5vw,4rem)] font-black uppercase"
                        >
                            Executive <span className="text-zinc-200">Board</span>
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {teamData.executive.map((member, i) => (
                            <TeamCard key={i} {...member} />
                        ))}
                    </div>
                </div>

                {/* 3. Team Members Section (Hidden if minimal is true) */}
                {!minimal && (
                    <div id="members">
                        <div className="text-center mb-12">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-zinc-300 uppercase tracking-[0.3em] text-sm font-bold mb-3 block"
                            >
                                The Community
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-[clamp(1.5rem,6vw,3rem)] md:text-[clamp(2.5rem,5vw,4rem)] font-black uppercase"
                            >
                                Our <span className="text-zinc-200">Members</span>
                            </motion.h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                            {teamData.members.map((member, i) => (
                                <TeamCard key={i} {...member} variant="compact" />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Team;
