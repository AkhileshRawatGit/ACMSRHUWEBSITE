'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-5" />

            <div className="max-w-[1600px] mx-auto relative z-10 px-6">
                <div className="text-center mb-16">
                    <span className="text-neon-blue uppercase tracking-[0.5em] text-[15px] font-bold mb-4 block animate-pulse">
                        Broadcast // Chapter Media
                    </span>
                    <h2 className="text-[clamp(1.8rem,7vw,4rem)] md:text-[clamp(3.5rem,6vw,5.5rem)] font-black uppercase leading-[1.1] md:leading-[0.8] mb-6 px-4">
                        Experience <br /><span className="text-zinc-300">The Power</span>
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="relative max-w-5xl mx-auto group"
                >
                    {/* Futuristic Frame Decorations */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-neon-blue/40" />
                    <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-neon-blue/40" />
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-neon-blue/40" />
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-neon-blue/40" />

                    {/* Glassmorphism Video Container - Optimized */}
                    <div className="glass-morphism aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_30px_rgba(0,242,255,0.05)] group-hover:shadow-[0_0_50px_rgba(0,242,255,0.15)] transition-shadow duration-700">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/qGY7C5dXRBU?autoplay=0&mute=0&controls=1&rel=0"
                            title="ACM Chapter Video"
                            loading="lazy"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>

                        {/* Interactive Overlay Scanline */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent h-1/2 w-full animate-scan opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Metadata Readout */}
                    <div className="absolute top-6 right-6 flex flex-col items-end space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <span className="text-[8px] tracking-[0.3em] uppercase text-neon-blue bg-slate-900/60 px-2 py-1 rounded backdrop-blur-md">Status: Live_Stream</span>
                        <span className="text-[8px] tracking-[0.3em] uppercase text-zinc-500 bg-slate-900/60 px-2 py-1 rounded backdrop-blur-md">Source: YOUTUBE_API</span>
                    </div>
                </motion.div>

                {/* <div className="mt-16 flex justify-center space-x-24 opacity-20 hidden md:flex">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Resolution</span>
                        <span className="text-xl font-bold">2160p</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Framerate</span>
                        <span className="text-xl font-bold">60 fps</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Encoding</span>
                        <span className="text-xl font-bold">X-265</span>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default VideoSection;
