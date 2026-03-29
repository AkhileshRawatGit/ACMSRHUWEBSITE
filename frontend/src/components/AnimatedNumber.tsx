'use client';

import { useSpring, useTransform, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef(null);
    // Use a smaller margin for better mobile compatibility
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 80,
        damping: 30,
    });

    const display = useTransform(spring, (current) => {
        // Fallback for safety
        const val = Math.round(current);
        return isNaN(val) ? "0" : val.toLocaleString();
    });

    useEffect(() => {
        if (isInView && !isNaN(value)) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return <motion.span ref={ref}>{display}</motion.span>;
}
