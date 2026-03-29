'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Users, TrendingUp } from 'lucide-react';

import AnimatedNumber from './AnimatedNumber';

// About specific images
import about1 from '../assets/about/about-img-1.jpeg';
import about2 from '../assets/about/about-img-2.jpeg';
import about3 from '../assets/about/about-img-3.jpeg';
import about4 from '../assets/about/about-img-4.jpeg';
import about5 from '../assets/about/about-img-5.jpeg';
import about6 from '../assets/about/about-img-6.jpeg';

const marqueeImages = [
    about1, about2, about3, about4, about5, about6,
    about1, about2, about3, about4, about5, about6 // Duplicate for seamless loop
];

const StatCard = ({ label, value }: { label: string; value: string }) => {
    const numericValue = parseInt(value);
    const suffix = value.replace(/[0-9]/g, '');

    return (
        <div className="glass-morphism p-6 md:p-8 rounded-2xl text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-neon-blue mb-2">
                <AnimatedNumber value={numericValue} />{suffix}
            </h3>
            <p className="text-zinc-300 uppercase tracking-widest text-[10px] md:text-sm">{label}</p>
        </div>
    );
};

const About = ({ showGallery = false }: { showGallery?: boolean }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const pillars = [
        { title: "Innovation", desc: "Pushing the boundaries of what's possible with cutting-edge research.", icon: <Cpu className="w-10 h-10" /> },
        { title: "Community", desc: "Building a supportive network of like-minded tech enthusiasts.", icon: <Users className="w-10 h-10" /> },
        { title: "Growth", desc: "Empowering students through continuous learning and workshops.", icon: <TrendingUp className="w-10 h-10" /> }
    ];

    return (
        <section id="about" ref={containerRef} className="py-20 md:py-32 px-6 relative overflow-hidden text-white tech-grid">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-neon-blue uppercase tracking-[0.3em] text-sm font-bold mb-6 block pulse-glow">Our Legacy</span>
                        <h2 className="text-[clamp(2.5rem,8vw,5rem)] lg:text-[clamp(4rem,6vw,7rem)] font-bold mb-10 leading-none">
                            ABOUT THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-accent-pink animate-gradient-x">ACM CHAPTER</span>
                        </h2>
                        <div className="space-y-6 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-blue/50 to-transparent"></div>
                            <p className="text-zinc-200 text-lg md:text-xl lg:text-2xl leading-relaxed font-light pl-6">
                                The Association for Computing Machinery is the world's largest educational and scientific
                                computing society. Our chapter is the heartbeat of <span className="text-white font-medium">innovation</span> at SRHU.
                            </p>
                            <p className="text-zinc-300 text-base md:text-lg lg:text-xl leading-relaxed pl-6">
                                We bridge the gap between academic theory and industry reality, providing a platform
                                for students to evolve into tech leaders through collaboration, research, and
                                hands-on projects. Our mission is to advance computing as both a science and a profession.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? yMove : 0 }}
                        className="grid grid-cols-2 gap-3 md:gap-8"
                    >
                        <StatCard label="Total Events" value="4+" />
                        <div className="mt-6 md:mt-12">
                            <StatCard label="Active Members" value="25+" />
                        </div>
                        <StatCard label="Years Active" value="1+" />
                        <div className="mt-6 md:mt-12">
                            <StatCard label="Major Projects" value="3+" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="premium-card p-10 rounded-3xl interactive group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_10px_rgba(0,242,255,0.3)]">{pillar.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
                                {pillar.title}
                            </h3>
                            <p className="text-zinc-300 leading-relaxed group-hover:text-white transition-colors">
                                {pillar.desc}
                            </p>
                            <div className="w-12 h-[2px] bg-zinc-800 mt-8 group-hover:bg-neon-blue group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Infinite Image Marquee with About folder images */}
                {showGallery && (
                    <div className="mt-32 relative overflow-hidden group">
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 pointer-events-none" />
                        <div className="flex gap-8 animate-marquee-reverse hover:pause">
                            {marqueeImages.map((src, i) => (
                                <div key={i} className="flex-shrink-0 w-72 md:w-96 h-48 md:h-60 rounded-2xl overflow-hidden premium-card border-none hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={src}
                                        alt={`About Highlight ${i}`}
                                        className="w-full h-full object-cover opacity-100 hover:scale-110 transition-transform duration-700 hover:brightness-110"
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
