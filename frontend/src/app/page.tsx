'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import RecentEvents from "@/components/RecentEvents";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import Magnetic from '@/components/Magnetic';
import { ArrowRight, Target, Eye } from 'lucide-react';
import VideoSection from "@/components/VideoSection";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function Home() {
    return (
        <main className="min-h-screen text-white relative">
            <Navbar />

            {/* Main Stage */}
            <Hero />

            <div className="relative z-10">
                <VideoSection />

                {/* Featured / Live Feed Section */}
                {/* Mission & Vision Section */}
                <section className="py-24 px-6 border-b border-white/5 tech-grid relative overflow-hidden">
                    <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

                    <div className="max-w-[1600px] mx-auto relative z-10 px-6">
                        <div className="text-center mb-16">
                            <motion.span
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-neon-blue uppercase tracking-[0.3em] text-sm font-bold mb-4 block pulse-glow"
                            >
                                Core Philosophy
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-[clamp(2rem,7vw,4rem)] md:text-[clamp(3.5rem,6vw,5.5rem)] font-black uppercase"
                            >
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple animate-gradient-x">Driving Force</span>
                            </motion.h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Mission Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="premium-card p-10 rounded-3xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/20 rounded-full blur-[60px] group-hover:bg-neon-blue/40 transition-all duration-500" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-neon-blue transition-colors">Our Mission</h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed group-hover:text-zinc-100 transition-colors">
                                        To create a thriving ecosystem where students can bridge the gap between academic theory and industry reality. We are dedicated to fostering a culture of continuous learning, hands-on experimentation, and collaborative growth.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="premium-card p-10 rounded-3xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 rounded-full blur-[60px] group-hover:bg-neon-purple/40 transition-all duration-500" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform duration-300">
                                        <Eye className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-neon-purple transition-colors">Our Vision</h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed group-hover:text-zinc-100 transition-colors">
                                        To become the leading student chapter that cultivates the next generation of technological innovators. We envision a community where every student is empowered to turn their ideas into impactful reality through technology.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Horizontal Section or Featured Content */}
                <section className="py-32 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="bg-dot-grid absolute inset-0 opacity-20" />
                        <div className="bg-grid absolute inset-0 opacity-10" />
                        <div className="scanline opacity-10" />
                        {/* Zeroks / Scanner Line */}
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-neon-blue/30 blur-[2px] animate-scan" style={{ animationDuration: '4s' }} />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-purple/30 blur-[2px] animate-scan" style={{ animationDuration: '6s', animationDelay: '2s' }} />

                        {/* Background Strip Marquee */}
                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-[0.04] -rotate-2 select-none overflow-hidden mix-blend-overlay">
                            <div className="whitespace-nowrap animate-marquee-slow text-[8vw] font-black uppercase text-white leading-none">
                                Innovation Excellence Impact Research Community · Innovation Excellence Impact Research Community
                            </div>
                        </div>
                    </div>
                    {/* Floating orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>

                    <div className="max-w-[1600px] mx-auto text-center relative z-10">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-neon-blue uppercase tracking-[0.5em] text-sm font-bold mb-8 block pulse-glow"
                        >
                            The Journey Starts Here
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-[clamp(1.8rem,6vw,3.5rem)] md:text-[clamp(3rem,5vw,5rem)] font-black mb-12 leading-tight"
                        >
                            WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-accent-pink animate-gradient-x">INNOVATION</span><br />
                            ONE LINE AT A TIME
                        </motion.h2>

                        {/* Tech stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-12 mt-16"
                        >
                            {[
                                { label: 'Active Members', value: 25, suffix: '+' },
                                { label: 'Projects', value: 3, suffix: '+' },
                                { label: 'Events', value: 4, suffix: '+' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center group">
                                    <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-2 group-hover:scale-110 transition-transform flex justify-center items-center">
                                        <AnimatedNumber value={stat.value} />{stat.suffix}
                                    </div>
                                    <div className="text-sm uppercase tracking-widest text-zinc-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* About Preview */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="bg-dot-grid absolute inset-0 opacity-20" />
                        <div className="bg-grid absolute inset-0 opacity-10" />
                        <div className="scanline opacity-10" />
                        {/* Zeroks / Scanner Line */}
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-neon-blue/30 blur-[2px] animate-scan" style={{ animationDuration: '4s' }} />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-purple/30 blur-[2px] animate-scan" style={{ animationDuration: '6s', animationDelay: '2s' }} />

                        {/* Background Strip Marquee */}
                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-[0.04] -rotate-2 select-none overflow-hidden mix-blend-overlay">
                            <div className="whitespace-nowrap animate-marquee-slow text-[8vw] font-black uppercase text-white leading-none">
                                Innovation Excellence Impact Research Community · Innovation Excellence Impact Research Community
                            </div>
                        </div>
                        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px] animate-pulse" />
                    </div>
                    <div className="mask-fade relative z-10">
                        <About />
                    </div>
                    <div className="relative flex justify-center -mt-12 mb-16 z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-neon-blue/20 blur-[60px] animate-pulse-slow pointer-events-none" />
                        <Magnetic>
                            <Link href="/about" className="interactive">
                                <Button variant="outline" className="rounded-full px-12 py-6 border-zinc-800 hover:border-neon-blue transition-all bg-slate-900/50 backdrop-blur-sm relative z-10">
                                    Discovery More About Us
                                </Button>
                            </Link>
                        </Magnetic>
                    </div>
                </section>

                {/* Events Preview */}
                <section id="recent-events" className="bg-white/[0.02] pt-0 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="bg-dot-grid absolute inset-0 opacity-20" />
                        <div className="bg-grid absolute inset-0 opacity-10" />
                        <div className="scanline opacity-10" />
                    </div>
                    <RecentEvents />
                </section>

                <Team minimal={true} />

                <div className="flex justify-center -mt-12 mb-32">
                    <Magnetic>
                        <Link href="/team" className="interactive">
                            <Button variant="outline" className="rounded-full px-12 py-6 border-zinc-800 hover:border-neon-purple transition-all">
                                Meet the Visionaries
                            </Button>
                        </Link>
                    </Magnetic>
                </div>

                <Footer />
            </div>
        </main>
    );
}
