'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Info, Users, Image as ImageIcon, Calendar } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Events', href: '/events' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Team', href: '/team' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${isScrolled || mobileMenuOpen
                    ? 'py-4'
                    : 'py-8'
                    }`}
            >
                {/* Opaque Background Layer */}
                <div
                    className={`absolute inset-0 transition-all duration-500 -z-10 ${isScrolled || mobileMenuOpen
                        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
                        : 'bg-transparent'
                        }`}
                />

                <div className="max-w-full mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center relative z-[151]">
                    <Link href="/" className="flex items-center gap-2 md:gap-4 group">
                        <div className="relative h-10 sm:h-12 lg:h-16 xl:h-20 w-auto transition-transform duration-300">
                            <img
                                src="/images/srhu-logo.png"
                                alt="SRHU Logo"
                                className="h-full w-auto object-contain transition-all"
                                style={{ filter: "drop-shadow(0 0 2px #fff) drop-shadow(0 0 15px rgba(255,255,255,0.5))" }}
                            />
                        </div>
                        <div className="h-8 md:h-12 w-[1px] bg-white/20 mx-1 md:mx-3" />
                        <div className="relative h-10 sm:h-12 lg:h-16 xl:h-20 w-auto transition-transform duration-300">
                            <img
                                src="/images/acm-logo.png"
                                alt="ACM Logo"
                                className="h-full w-auto object-contain filter drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav - System Terminal Style */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <Link
                                    href={link.href}
                                    className="group relative flex flex-col items-start py-2 interactive"
                                >
                                    {/* System Path Indicator */}
                                    <span className="text-[7px] font-mono text-neon-blue/40 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-1 group-hover:translate-y-0 select-none">
                                        node/chapter/{link.name.toLowerCase()}
                                    </span>

                                    <div className="flex items-center gap-2.5">
                                        {/* Blinking Cursor Indicator */}
                                        <div className="w-1 h-3.5 bg-neon-blue opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_8px_rgba(0,242,255,0.8)]" />

                                        <span className="text-[13px] font-black uppercase tracking-[0.15em] text-zinc-300 group-hover:text-white transition-all duration-300">
                                            {link.name}
                                        </span>
                                    </div>

                                    {/* Underline Flow */}
                                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-neon-blue to-transparent group-hover:w-full transition-all duration-500 opacity-30" />
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${mobileMenuOpen ? 'bg-neon-blue text-white' : 'bg-white/5 text-white'}`}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <>
                            {/* Backdrop for side menu */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[130] md:hidden"
                            />

                            {/* Slide-in Side Menu */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-slate-950 z-[140] md:hidden flex flex-col border-l border-white/5"
                            >
                                <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

                                <div className="relative h-full w-full flex flex-col pt-32 px-8">
                                    <span className="text-zinc-600 text-xs uppercase tracking-[0.4em] mb-12 block">Navigation</span>

                                    <div className="space-y-4">
                                        {navLinks.map((link, i) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 + 0.3 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="group flex items-center justify-between py-4 text-2xl font-bold uppercase text-zinc-300 hover:text-white transition-all duration-300"
                                                >
                                                    <span className="flex items-center gap-4">
                                                        <span className="text-xs text-neon-blue font-mono opacity-40 group-hover:opacity-100">0{i + 1}</span>
                                                        {link.name}
                                                    </span>
                                                    <ChevronRight size={18} className="text-neon-blue opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="mt-auto pb-12"
                                    >
                                        <div className="h-[1px] w-full bg-white/5 mb-8" />
                                        <div className="flex flex-col gap-2">
                                            <span className="text-neon-blue text-xs font-bold tracking-[0.2em]">HSST ACM CHAPTER</span>
                                            <span className="text-zinc-600 text-[10px] uppercase tracking-[0.4em]">Established Connection // v2.0</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </>
                    )
                }
            </AnimatePresence >
        </>
    );
};

export default Navbar;
