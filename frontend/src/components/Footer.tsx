'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative py-24 px-6 border-t border-white/5 bg-slate-950 overflow-hidden group">
            {/* Tech Background Layer - Similar to Hero but Distinct */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Swapped positions and slightly different opacity/size compared to Hero */}
                <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute -bottom-[30%] -left-[10%] w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] animate-pulse-slow delay-2000" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
                <div className="absolute inset-0 bg-dot-white/[0.05] bg-[length:20px_20px]" />

                {/* Animated Scanline */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent animate-scan-fast absolute top-0" />
                </div>
            </div>

            {/* Background Massive Text */}
            <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none overflow-hidden h-40 opacity-20">
                <h2 className="text-[25vw] font-black text-white/5 tracking-tighter leading-none whitespace-nowrap animate-marquee-slow">
                    ACM CHAPTER SRHU
                </h2>
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="grid md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-4 mb-8 group">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:border-neon-blue/50 transition-colors">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg"
                                    alt="ACM Logo"
                                    className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(0,120,255,0.5)]"
                                />
                            </div>
                            <span className="text-3xl font-bold tracking-tighter">
                                ACM<span className="text-neon-blue">CHAPTER</span>
                            </span>
                        </Link>
                        <p className="text-zinc-500 max-w-sm text-lg leading-relaxed">
                            Official Student Chapter of Association for Computing Machinery.
                            Empowering students through technology, collaboration, and excellence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-8">Navigation</h4>
                        <ul className="space-y-4 text-zinc-500 text-sm">
                            <li><Link href="/about" className="hover:text-neon-blue transition-colors">About Our Chapter</Link></li>
                            <li><Link href="/events" className="hover:text-neon-blue transition-colors">Upcoming Events</Link></li>
                            <li><Link href="/gallery" className="hover:text-neon-blue transition-colors">Moments & Gallery</Link></li>
                            <li><Link href="/team" className="hover:text-neon-blue transition-colors">Core Committee</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-8">Social Connect</h4>
                        <div className="flex space-x-6 mb-8">
                            <a href="#" className="text-zinc-500 hover:text-neon-blue transition-all transform hover:scale-125"><Twitter className="w-6 h-6" /></a>
                            <a href="#" className="text-zinc-500 hover:text-neon-purple transition-all transform hover:scale-125"><Linkedin className="w-6 h-6" /></a>
                            <a href="#" className="text-zinc-500 hover:text-accent-pink transition-all transform hover:scale-125"><Github className="w-6 h-6" /></a>
                        </div>
                        <p className="text-zinc-400 font-medium">hsstacm@srhu.edu.in</p>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-600 text-xs uppercase tracking-[0.2em]">
                    <p>© 2024 ACM Student Chapter • Designed with Passion</p>
                    <div className="flex space-x-12">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
