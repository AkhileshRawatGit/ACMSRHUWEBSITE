'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

const Preloader = () => {
    const { finishLoading } = useLoading();
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('INITIALIZING');

    const loadingTexts = [
        'INITIALIZING SYSTEM...',
        'CONNECTING TO SERVER...',
        'LOADING ASSETS...',
        'ESTABLISHING SECURE CONNECTION...',
        'ACCESS GRANTED'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsLoading(false);
                        finishLoading();
                    }, 500);
                    return 100;
                }
                const randomIncrement = Math.floor(Math.random() * 5) + 1;
                return Math.min(prev + randomIncrement, 100);
            });
        }, 50);

        return () => clearInterval(timer);
    }, [finishLoading]);

    useEffect(() => {
        const textInterval = setInterval(() => {
            const index = Math.floor((progress / 100) * (loadingTexts.length - 1));
            setLoadingText(loadingTexts[index]);
        }, 100);
        return () => clearInterval(textInterval);
    }, [progress]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center font-mono"
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Elegant Logo Mark */}
                        <div className="relative mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center"
                            >
                                <h1 className="text-4xl md:text-5xl font-light tracking-[0.5em] text-white/90 mb-2">
                                    SRHU <span className="font-black text-white">ACM</span>
                                </h1>
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
                                <p className="text-[10px] tracking-[0.8em] text-zinc-500 mt-4 uppercase font-medium">Student Chapter</p>
                            </motion.div>
                        </div>

                        {/* Loading Bar Container */}
                        <div className="w-[280px] md:w-[400px] relative">
                            {/* Status Header */}
                            <div className="flex justify-between items-end mb-3 font-medium">
                                <span className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase animate-pulse">
                                    {loadingText}
                                </span>
                                <span className="text-[14px] text-white/70 font-light tabular-nums">
                                    {progress}<span className="text-[10px] ml-1 opacity-50">%</span>
                                </span>
                            </div>

                            {/* Refined Progress Bar */}
                            <div className="h-[2px] w-full bg-zinc-900 rounded-full relative overflow-hidden ring-1 ring-white/5">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    style={{ width: `${progress}%` }}
                                />
                                {/* Subtle Glow Trail */}
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-blue-400/30 blur-sm"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Technical Readout Footers */}
                            <div className="grid grid-cols-2 mt-6 gap-8">
                                <div className="space-y-1">
                                    <div className="h-[1px] w-full bg-zinc-800"></div>
                                    <div className="flex justify-between text-[8px] text-zinc-600 uppercase tracking-widest font-bold">
                                        <span>System Status</span>
                                        <span className="text-blue-500/50">Optimal</span>
                                    </div>
                                </div>
                                <div className="space-y-1 text-right">
                                    <div className="h-[1px] w-full bg-zinc-800 ml-auto"></div>
                                    <div className="text-[8px] text-zinc-600 uppercase tracking-widest font-bold">
                                        v2.0.4.88 // SRHU_INT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Tech Elements - More subtle */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="bg-dot-grid absolute inset-0 opacity-[0.03]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.02)]" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
