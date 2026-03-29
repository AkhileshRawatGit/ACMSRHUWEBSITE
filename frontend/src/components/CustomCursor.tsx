'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const cursorX = useSpring(0, { damping: 25, stiffness: 400 });
    const cursorY = useSpring(0, { damping: 25, stiffness: 400 });

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('interactive')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [cursorX, cursorY]);

    if (isTouchDevice) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[99999]"
            style={{
                left: cursorX,
                top: cursorY,
            }}
        >
            <motion.div
                initial={false}
                animate={{
                    scale: isHovered ? 1.2 : 1,
                    rotate: isMouseDown ? -5 : 0,
                }}
                className="relative"
                style={{ transformOrigin: 'top left' }}
            >
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-neon-blue/30 blur-[10px] rounded-full scale-125" />

                {/* Custom Colored Cursor */}
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative drop-shadow-[0_0_5px_rgba(0,242,255,0.6)]"
                >
                    {isHovered ? (
                        /* Hand Shape (Pointer) */
                        <path
                            d="M18 11V14.5C18 17.5 16.5 20.5 14.5 21.5C12.5 22.5 9.5 22.5 7.5 21.5C5.5 20.5 3 17.5 4 15.5C5 13.5 7.5 14.5 7.5 14.5V8.5C7.5 7.67157 8.17157 7 9 7C9.82843 7 10.5 7.67157 10.5 8.5V14.5H12V10.5C12 9.67157 12.6716 9 13.5 9C14.3284 9 15 9.67157 15 10.5V11.5H16.5C17.3284 11.5 18 12.1716 18 13V11.5V11Z"
                            fill="#0ea5e9"
                            stroke="white"
                            strokeWidth="1"
                            strokeLinejoin="round"
                        />
                    ) : (
                        /* Standard Arrow Shape */
                        <path
                            d="M5.5 3.21V20.8L10.11 15.65H18.5L5.5 3.21Z"
                            fill="#0ea5e9"
                            stroke="white"
                            strokeWidth="1"
                            strokeLinejoin="round"
                        />
                    )}
                </svg>
            </motion.div>
        </motion.div>
    );
};

export default CustomCursor;
