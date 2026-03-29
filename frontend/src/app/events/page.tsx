'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Events from "@/components/Events";
import { motion } from 'framer-motion';

const EventsPage = () => {
    return (
        <main className="min-h-screen text-white relative overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

            <div className="pt-40 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto px-6 mb-24"
                >
                    <span className="text-neon-purple uppercase tracking-[0.5em] text-sm font-bold mb-6 block">Knowledge Series</span>
                    <h1 className="text-7xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8]">
                        UPCOMING <br /><span className="text-zinc-200">ENCOUNTERS</span>
                    </h1>
                </motion.div>

                <Events showPast={true} />

                {/* Additional Info / FAQ */}
                <section className="py-32 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black uppercase mb-12">Frequently Asked <span className="text-neon-blue">Questions</span></h2>
                        <div className="space-y-8">
                            {[
                                { q: "How do I register for events?", a: "Registration can be done through the Member Portal after logging in with your university credentials." },
                                { q: "Are events open to non-members?", a: "Most of our seminars are open to all students, while hackathons and workshops are exclusive to ACM members." },
                                { q: "Will I get certificates?", a: "Yes, verified participation certificates are provided for all technical workshops and hackathons." }
                            ].map((item, i) => (
                                <div key={i} className="glass-morphism p-8 rounded-2xl border border-white/5">
                                    <h3 className="text-lg font-bold mb-2 tracking-tight text-white">{item.q}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.a}</p>
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

export default EventsPage;
