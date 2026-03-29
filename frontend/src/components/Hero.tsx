'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/Button';
import Magnetic from './Magnetic';
import { useLoading } from '@/context/LoadingContext';

const Hero = () => {
    const { isLoading } = useLoading();
    const [mounted, setMounted] = React.useState(false);
    const words = ["SRHU", "ACM", "STUDENT", "CHAPTER"];
    const techItems = ["Innovation", "Collaboration", "Excellence", "Leadership", "Technology", "Research", "Development", "Mentorship", "Growth", "Impact", "Community"];

    React.useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setMounted(true);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 font-poppins">
            {/* Advanced Tech Layers */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating Halos - Optimized */}
                <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] animate-pulse delay-1000" />

                {/* Parallax Stars/Particles */}
                <div className="bg-dot-grid absolute inset-0 opacity-20" />
                <div className="bg-grid absolute inset-0 opacity-10" />
                <div className="scanline" />

                {/* Visual Glitch Elements */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-blue/20 blur-sm animate-scan" style={{ top: '15%' }} />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-purple/20 blur-sm animate-scan delay-700" style={{ top: '85%' }} />
            </div>

            <div className="relative z-10 text-center px-6 max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={mounted ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-6 flex justify-center"
                >
                    <span className="px-4 py-1 rounded-full border border-neon-blue/30 bg-slate-900/50 backdrop-blur-md text-neon-blue text-[10px] uppercase font-bold tracking-[0.4em] animate-pulse shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                        Establishing Connection // v2.0
                    </span>
                </motion.div>

                <div className="text-reveal-wrapper mb-4 md:mb-8 overflow-hidden py-4 px-2 md:px-4">
                    {mounted && (
                        <h1 className="text-[clamp(1.8rem,8vw,3rem)] md:text-[clamp(3.5rem,7vw,6rem)] lg:text-[clamp(5.5rem,8vw,9.5rem)] font-black tracking-tighter leading-[0.85] flex flex-wrap justify-center gap-x-3 md:gap-x-6 drop-shadow-2xl">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "150%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    whileHover={{ scale: 1.05, y: -15, color: "#a855f7" }}
                                    transition={{
                                        duration: 1,
                                        delay: i * 0.1,
                                        ease: [0.23, 1, 0.32, 1],
                                    }}
                                    className="inline-block cursor-pointer origin-bottom"
                                >
                                    {word === "CHAPTER" ? (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-accent-pink animate-gradient-x drop-shadow-[0_0_20px_rgba(0,242,255,0.3)] pointer-events-none">
                                            {word}
                                        </span>
                                    ) : (
                                        <span className="text-white pointer-events-none transition-colors duration-500">
                                            {word}
                                        </span>
                                    )}
                                </motion.span>
                            ))}
                        </h1>
                    )}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-base md:text-xl text-zinc-200 mb-8 md:mb-12 max-w-4xl mx-auto font-light tracking-wide leading-relaxed px-4"
                >
                    We prioritize <span className="text-white font-medium">Innovation</span> over convention.
                    <span className="block text-zinc-300 mt-3 text-[10px] md:text-sm italic tracking-widest uppercase">Redefining the digital horizon at SRHU Engineering.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex justify-center"
                >
                    <Magnetic>
                        <Link href="#about" className="interactive scroll-smooth">
                            <Button variant="outline" size="lg" className="px-10 py-6 md:px-16 md:py-8 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] rounded-full border-white/10 hover:border-neon-blue hover:text-black transition-all backdrop-blur-md group">
                                Initiate Exploration <ArrowRight className="ml-2 md:ml-3 w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-2" />
                            </Button>
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Kinetic Marquee */}
            <div className="absolute bottom-24 left-0 right-0 overflow-hidden py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-md -rotate-1 skew-x-1 scale-105">
                <motion.div
                    animate={mounted ? { x: [0, -1500] } : {}}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="flex whitespace-nowrap space-x-24"
                >
                    {[...techItems, ...techItems, ...techItems].map((tech, i) => (
                        <div key={i} className="flex items-center space-x-4">
                            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
                            <span className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">{tech}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Technical Detail Elements */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden xl:flex flex-col space-y-4 opacity-20">
                <div className="w-40 h-[1px] bg-white" />
                <span className="text-[8px] tracking-[0.5em] uppercase vertical-text">Protocol: 08-X</span>
                <div className="w-[1px] h-40 bg-white" />
            </div>

            <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:flex flex-col space-y-4 opacity-20 text-right">
                <div className="w-40 h-[1px] bg-white ml-auto" />
                <span className="text-[8px] tracking-[0.5em] uppercase vertical-text">Sector: AC-01</span>
                <div className="w-[1px] h-40 bg-white ml-auto" />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <div className="w-5 h-8 border-2 border-white/20 rounded-full p-1 relative">
                    <motion.div
                        animate={mounted ? { y: [0, 12, 0] } : {}}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 bg-neon-blue rounded-full mx-auto"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
