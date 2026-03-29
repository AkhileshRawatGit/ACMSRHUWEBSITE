'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import gal1 from '../assets/gallery/gallery-1.jpeg';
import gal2 from '../assets/gallery/gallery-2.jpeg';
import gal3 from '../assets/gallery/gallery-3.jpeg';
import gal4 from '../assets/gallery/gallery-4.jpeg';
import gal5 from '../assets/gallery/gallery-5.jpeg';
import gal6 from '../assets/gallery/gallery-6.jpeg';
import gal7 from '../assets/gallery/gallery-7.jpeg';
import gal8 from '../assets/gallery/gallery-8.jpeg';
import gal9 from '../assets/gallery/gallery-9.jpeg';
import gal10 from '../assets/gallery/gallery-10.jpeg';
import gal11 from '../assets/gallery/gallery-11.jpeg';
import gal12 from '../assets/gallery/gallery-12.jpeg';
import gal13 from '../assets/gallery/gallery-13.jpeg';
import gal14 from '../assets/gallery/gallery-14.jpeg';
import gal15 from '../assets/gallery/gallery-15.jpeg';
import gal16 from '../assets/gallery/gallery-16.jpeg';
import gal17 from '../assets/gallery/gallery-17.jpeg';

const galleryImages = [
    gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11, gal12, gal13, gal14, gal15, gal16, gal17
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-32 px-6 relative">
            <div className="absolute inset-0 bg-grid opacity-5" />

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="text-neon-blue uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Visual Archive</span>
                    <h2 className="text-[clamp(1.8rem,7vw,4rem)] md:text-[clamp(3.5rem,6vw,5.5rem)] font-black uppercase leading-[1.1] md:leading-none px-2 md:px-0">
                        Chapter <span className="text-zinc-200">Gallery</span>
                    </h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryImages.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative overflow-hidden rounded-3xl cursor-pointer group interactive"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Capture ${i + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-neon-blue text-xs font-bold tracking-[0.3em] uppercase">Event Capture // {i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                                </div>
                            </div>
                            {/* Scanning line for individual images */}
                            <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-full h-[1px] bg-neon-blue/40 absolute top-0 left-0 animate-scan" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
