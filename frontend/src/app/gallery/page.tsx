'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { motion } from 'framer-motion';

export default function GalleryPage() {
    return (
        <main className="min-h-screen text-white">
            <Navbar />
            <div className="pt-40 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto px-6 mb-12"
                >
                    <span className="text-neon-blue uppercase tracking-[0.5em] text-sm font-bold mb-6 block">Visual Archive</span>
                    <h1 className="text-7xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
                        THE <span className="text-zinc-200">GALLERY</span>
                    </h1>
                </motion.div>
                <Gallery />
            </div>
            <Footer />
        </main>
    );
}
