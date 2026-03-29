'use client';
import pic1 from '../assets/events/algorithm-arena.jpeg'
import pic2 from '../assets/events/tech-quest.jpeg'
import pic3 from '../assets/events/expert-lecture.jpeg'
import pic4 from '../assets/events/technova.jpeg'
import pic5 from '../assets/events/Placement-Odyssey.jpeg'
import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

import Magnetic from './Magnetic';

const EventCard = ({ title, date, desc, image, category, isPast = false }: any) => (
    <motion.div
        whileHover={{ y: -10 }}
        className={`premium-card rounded-3xl overflow-hidden group interactive cursor-pointer bg-zinc-900/40 border border-white/5 ${isPast ? 'opacity-80 grayscale-[0.5] hover:grayscale-0' : ''}`}
    >
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-900/50 backdrop-blur-xl flex items-center justify-center p-6">
            <Image
                width={500}
                height={500}
                src={image}
                alt={title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className={`absolute top-4 right-4 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full text-xs uppercase font-bold tracking-widest border shadow-[0_0_10px_rgba(14,165,233,0.2)] ${isPast ? 'border-slate-700 text-slate-400' : 'border-neon-blue/30 text-neon-blue'}`}>
                {category}
            </div>
            <div className="absolute bottom-4 left-4 flex items-center text-white/90 text-xs font-bold tracking-widest uppercase">
                <Calendar className={`w-3 h-3 mr-2 ${isPast ? 'text-zinc-500' : 'text-neon-blue'}`} />
                {date}
            </div>
        </div>
        <div className="p-6 bg-gradient-to-b from-slate-900/80 to-slate-950">
            <h3 className={`text-xl font-bold mb-3 transition-colors tracking-tight ${isPast ? 'text-zinc-300' : 'group-hover:text-neon-blue glitch-hover'}`}>{title}</h3>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed group-hover:text-white transition-colors whitespace-pre-line line-clamp-3">{desc}</p>
            <Magnetic>
                <Button variant="outline" size="sm" className={`w-full group rounded-xl border-zinc-800 transition-all ${isPast ? 'hover:bg-zinc-800 hover:text-white' : 'hover:border-neon-blue hover:text-white hover:bg-neon-blue/10'}`}>
                    {isPast ? 'View Recap' : 'Register Now'} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
            </Magnetic>
        </div>
    </motion.div>
);

const Events = ({ showPast = false }: { showPast?: boolean }) => {
    const [activeCategory, setActiveCategory] = React.useState("All");
    const categories = ["All", "Competition", "Workshops", "Hackathons", "Seminars", "Industry Talks"];

    const allEvents = [
        {
            title: 'Algorithm Arena',
            date: 'February 11, 2025',
            rawDate: '2025-02-11',
            category: 'Competition',
            desc: 'A two-round coding competition. Round 1 features MCQs on programming fundamentals, DSA, and logical reasoning. Round 2 is a competitive coding round with real-world problems assessed on correctness and efficiency.',
            image: pic1
        },
        {
            title: 'Tech Quest',
            date: 'April 24, 2025',
            rawDate: '2025-04-24',
            category: 'Competition',
            desc: 'Industry Insight Challenge. Round 1: screening with MCQs on core CS concepts and emerging technologies. Round 2: final round testing shortlisted teams on advanced application-based questions.',
            image: pic2
        },
        {
            title: 'Expert Lecture on LLMs',
            date: 'September 09, 2025',
            rawDate: '2025-09-09',
            category: 'Industry Talk',
            desc: '“From Code to Conversation”. Dr. Tanmoy Chakraborty (IIT Delhi) discusses the transition from rule-based systems to modern conversational AI, covering applications, challenges, and ethics.',
            image: pic3
        },
        {
            title: 'Technova',
            date: 'Nov 17 - 18, 2025',
            rawDate: '2025-11-17',
            category: 'Competition',
            desc: 'Flagship two-day technical event featuring coding and gaming challenges. Aims to build a strong competitive coding culture and showcase technical talent.',
            image: pic4
        },
        {
            title: 'Placement Odyssey',
            date: 'February 26, 2026',
            rawDate: '2026-02-26',
            category: 'Competition',
            desc: 'A three-round competition simulating real placement processes through aptitude, coding, and interviews. Designed to enhance technical and communication skills for industry readiness.',
            image: pic5
        }
    ];

    const today = new Date().toISOString().split('T')[0];
    const upcomingEvents = allEvents.filter(e => e.rawDate >= today);
    const pastEvents = allEvents.filter(e => e.rawDate < today);

    const filterByCat = (events: any[]) => {
        if (activeCategory === "All") return events;
        return events.filter(e => activeCategory.toLowerCase().includes(e.category.toLowerCase()));
    };

    const filteredUpcoming = filterByCat(upcomingEvents);
    const filteredPast = filterByCat(pastEvents);

    return (
        <section id="events" className="py-32 px-6 relative tech-grid border-y border-white/5">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="max-w-[1600px] mx-auto relative z-10">

                <div className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <span className="text-neon-blue uppercase tracking-[0.3em] text-sm font-bold mb-4 block pulse-glow">Calendar 2025</span>
                            <h2 className="text-[clamp(1.8rem,7vw,4rem)] md:text-[clamp(3rem,6vw,5rem)] lg:text-[clamp(4rem,5vw,6rem)] font-black uppercase leading-[1.1] md:leading-none px-2 md:px-0">
                                Chapter <span className="text-zinc-200">Events</span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-16">
                        {categories.map((cat, i) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full border border-white/5 text-xs uppercase font-bold tracking-[0.2em] transition-all interactive ${activeCategory === cat ? 'bg-neon-blue text-white border-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.4)]' : 'bg-white/5 hover:bg-white/10 hover:border-neon-blue/50 hover:text-neon-blue'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-12"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredUpcoming.map((event, i) => (
                                <motion.div
                                    key={event.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <EventCard {...event} isPast={false} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {filteredUpcoming.length === 0 && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-400 col-span-2 text-center py-12">
                                No upcoming {activeCategory} found.
                            </motion.p>
                        )}
                    </motion.div>
                </div>

                {/* Past Events Section */}
                {showPast && pastEvents.length > 0 && (
                    <div className="relative">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div>
                                <span className="text-neon-purple uppercase tracking-[0.3em] text-sm font-bold mb-4 block pulse-glow">Archives</span>
                                <h2 className="text-[clamp(1.8rem,7vw,4rem)] md:text-[clamp(3rem,6vw,5rem)] lg:text-[clamp(4rem,5vw,6rem)] font-black uppercase leading-[1.1] md:leading-none px-2 md:px-0">
                                    Past <span className="text-zinc-200">Encounters</span>
                                </h2>
                            </div>
                        </div>

                        <motion.div
                            layout
                            className="grid md:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredPast.map((event, i) => (
                                    <motion.div
                                        key={event.title}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <EventCard {...event} isPast={true} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                        {filteredPast.length === 0 && (
                            <p className="text-zinc-400 text-center py-12 col-span-3">No past {activeCategory} found.</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Events;
