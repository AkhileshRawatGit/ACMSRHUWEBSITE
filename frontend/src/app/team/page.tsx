'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { motion } from 'framer-motion';

export default function TeamPage() {
    return (
        <main className="min-h-screen text-white">
            <Navbar />
            <div className="pt-40 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto px-6 mb-12"
                >
                    <span className="text-neon-purple uppercase tracking-[0.5em] text-sm font-bold mb-6 block">The Architects</span>
                    <h1 className="text-7xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
                        OUR <span className="text-zinc-200">EXPERTS</span>
                    </h1>
                </motion.div>
                <Team />
            </div>
            <Footer />
        </main>
    );
}
