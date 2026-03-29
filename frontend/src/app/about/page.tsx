'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { motion } from 'framer-motion';

const AboutPage = () => {
    const values = [
        { title: "Excellence", desc: "Setting the standard for technical proficiency and professional conduct." },
        { title: "Collaboration", desc: "Fostering an environment where knowledge is shared and ideas flourish." },
        { title: "Integrity", desc: "Ensuring ethical computing practices and academic honesty." }
    ];

    const timeline = [
        { year: "2024", event: "Chapter Foundation at SRHU" },
        { year: "2024-25", event: "Hosted multiple ACM Competitions" },
        { year: "2025", event: "Reached 25+ active members Milestone" }
    ];

    return (
        <main className="min-h-screen text-white relative overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

            <div className="pt-40 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto px-6 mb-24"
                >
                    <span className="text-neon-blue uppercase tracking-[0.5em] text-sm font-bold mb-6 block">Legacy & Vision</span>
                    <h1 className="text-7xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8]">
                        The <span className="text-zinc-300">ACM</span> <br />Experience
                    </h1>
                </motion.div>

                <About showGallery={true} />

                {/* Values Section */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-12">
                            {values.map((v, i) => (
                                <div key={i} className="border-t border-white/10 pt-8">
                                    <span className="text-neon-blue text-xs font-bold tracking-widest uppercase mb-4 block">0{i + 1} // {v.title}</span>
                                    <p className="text-zinc-500 leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-32 px-6 bg-slate-900/30">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold uppercase mb-16">The <span className="text-neon-blue">Trajectory</span></h2>
                        <div className="space-y-12">
                            {timeline.map((t, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-white/5 last:border-0">
                                    <span className="text-6xl font-black text-white/10">{t.year}</span>
                                    <div className="pt-4">
                                        <p className="text-2xl font-bold group-hover:text-neon-blue transition-colors">{t.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default AboutPage;
