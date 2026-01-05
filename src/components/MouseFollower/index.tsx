import {
    motion,
    useMotionValue,
    useMotionTemplate,
    useSpring,
} from 'framer-motion';
import { useEffect } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export function MouseFollower() {
    const { x, y } = useMousePosition();

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    const smoothX = useSpring(rawX, {
        stiffness: 800,
        damping: 60,
        mass: 0.2,
    });
    const smoothY = useSpring(rawY, {
        stiffness: 800,
        damping: 60,
        mass: 0.2,
    });

    useEffect(() => {
        rawX.set(x);
        rawY.set(y);
    }, [x, y, smoothX, smoothY, rawX, rawY]);

    const softGlow = useMotionTemplate`
    radial-gradient(
        120px circle at ${smoothX}px ${smoothY}px,
        color-mix(in oklab, var(--primary) 5%, transparent),
        transparent 50%
    )
`;

    const sharpGlow = useMotionTemplate`
    radial-gradient(
        32px circle at ${rawX}px ${rawY}px,
        color-mix(in oklab, var(--primary) 20%, transparent),
        transparent 60%
    )
`;

    return (
        <>
            <motion.div
                className="pointer-events-none fixed inset-0 z-999"
                style={{ background: softGlow }}
            />

            <motion.div
                className="pointer-events-none fixed inset-0 z-999"
                style={{ background: sharpGlow }}
            />
        </>
    );
}
