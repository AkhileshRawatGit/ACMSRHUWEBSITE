'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import Magnetic from './Magnetic';

// Reuse the image imports or define the data
import pic3 from '../assets/events/expert-lecture.jpeg';
import pic4 from '../assets/events/technova.jpeg';

const recentEvents = [
    {
        title: 'Technova',
        date: 'Nov 17 - 18, 2025',
        category: 'Competition',
        desc: 'Flagship two-day technical event featuring coding and gaming challenges. Aims to build a strong competitive coding culture.',
        image: pic4,
        href: '/events'
    },
    {
        title: 'Expert Lecture on LLMs',
        date: 'Sept 09, 2025',
        category: 'Industry Talk',
        desc: '“From Code to Conversation”. Dr. Tanmoy Chakraborty discusses the transition to modern conversational AI.',
        image: pic3,
        href: '/events'
    }
];

const RecentEvents = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-slate-900/10 border-b border-white/5">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-neon-blue uppercase tracking-[0.3em] text-sm font-bold mb-4 block pulse-glow"
                        >
                            Calendar 2025
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[clamp(1.8rem,7vw,4rem)] md:text-[clamp(3rem,6vw,5rem)] lg:text-[clamp(4rem,5vw,6rem)] font-black uppercase leading-[1.1] md:leading-none px-2 md:px-0"
                        >
                            Chapter <span className="text-zinc-200">Events</span>
                        </motion.h2>
                    </div>
                    <Link href="/events" className="group">
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 group-hover:text-neon-blue transition-colors flex items-center gap-2">
                            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {recentEvents.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="premium-card rounded-3xl overflow-hidden group interactive flex flex-col md:flex-row bg-slate-900/30 border border-white/5"
                        >
                            <div className="relative w-full md:w-1/2 aspect-[4/5] bg-slate-950/80 p-4 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                                    unoptimized
                                />
                            </div>

                            <div className="p-8 flex-1 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-neon-blue text-xs font-bold uppercase tracking-widest mb-4">
                                    <span className="w-8 h-[1px] bg-neon-blue/30" />
                                    {event.category}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors leading-tight">
                                    {event.title}
                                </h3>
                                <div className="flex items-center text-zinc-300 text-xs font-bold uppercase tracking-widest mb-6 gap-2">
                                    <Calendar size={12} className="text-neon-blue" />
                                    {event.date}
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed mb-8 line-clamp-2">
                                    {event.desc}
                                </p>
                                <Magnetic>
                                    <Link href={event.href}>
                                        <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:border-neon-blue group py-4 px-8">
                                            Read More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </Magnetic>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentEvents;
