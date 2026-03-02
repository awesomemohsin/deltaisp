"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return (
            <div
                className={cn(
                    "h-full bg-white dark:bg-black relative flex items-center w-full justify-center overflow-hidden",
                    className
                )}
            >
                {children}
            </div>
        );
    }

    const beams = [
        { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
        { initialX: 50, translateX: 50, duration: 5, repeatDelay: 5, delay: 1 },
        { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-20" },
        { initialX: 150, translateX: 150, duration: 6, repeatDelay: 2, delay: 3 },
        { initialX: 200, translateX: 200, duration: 8, repeatDelay: 4, delay: 1 },
        { initialX: 250, translateX: 250, duration: 4, repeatDelay: 8, className: "h-12" },
        { initialX: 300, translateX: 300, duration: 6, repeatDelay: 5, className: "h-16" },
        { initialX: 350, translateX: 350, duration: 9, repeatDelay: 3, delay: 2 },
        { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
        { initialX: 450, translateX: 450, duration: 7, repeatDelay: 6, className: "h-10" },
        { initialX: 500, translateX: 500, duration: 9, repeatDelay: 6, delay: 2 },
        { initialX: 550, translateX: 550, duration: 5, repeatDelay: 4, delay: 1 },
        { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
        { initialX: 650, translateX: 650, duration: 8, repeatDelay: 5, className: "h-20" },
        { initialX: 700, translateX: 700, duration: 8, repeatDelay: 2, className: "h-24" },
        { initialX: 750, translateX: 750, duration: 6, repeatDelay: 3, delay: 2 },
        { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
        { initialX: 850, translateX: 850, duration: 4, repeatDelay: 7, delay: 3 },
        { initialX: 900, translateX: 900, duration: 7, repeatDelay: 8, delay: 3 },
        { initialX: 950, translateX: 950, duration: 9, repeatDelay: 4, className: "h-14" },
        { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
        { initialX: 1050, translateX: 1050, duration: 6, repeatDelay: 6, delay: 1 },
        { initialX: 1100, translateX: 1100, duration: 10, repeatDelay: 5, delay: 1 },
        { initialX: 1150, translateX: 1150, duration: 5, repeatDelay: 3, className: "h-16" },
        { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
        { initialX: 1250, translateX: 1250, duration: 8, repeatDelay: 2, delay: 4 },
        { initialX: 1300, translateX: 1300, duration: 8, repeatDelay: 3, delay: 4 },
        { initialX: 1350, translateX: 1350, duration: 10, repeatDelay: 5, delay: 2 },
        { initialX: 1400, translateX: 1400, duration: 5, repeatDelay: 10, className: "h-20" },
        { initialX: 1450, translateX: 1450, duration: 7, repeatDelay: 4, delay: 3 },
        { initialX: 1500, translateX: 1500, duration: 7, repeatDelay: 2, delay: 1 },
        { initialX: 1550, translateX: 1550, duration: 6, repeatDelay: 6, className: "h-12" },
        { initialX: 1600, translateX: 1600, duration: 9, repeatDelay: 4, className: "h-14" },
        { initialX: 1650, translateX: 1650, duration: 5, repeatDelay: 3, delay: 2 },
    ];

    return (
        <div
            ref={parentRef}
            className={cn(
                "h-full bg-white dark:bg-black relative flex items-center w-full justify-center overflow-hidden",
                className
            )}
        >
            {beams.map((beam, index) => (
                <CollisionMechanism
                    key={index}
                    containerRef={containerRef}
                    parentRef={parentRef}
                    beamOptions={beam}
                />
            ))}
            {children}
            <div
                ref={containerRef}
                className="absolute bottom-0 bg-neutral-100 dark:bg-neutral-900 w-full inset-x-0 h-[1px] pointer-events-none"
            ></div>
        </div>
    );
};

const CollisionMechanism = React.forwardRef<
    HTMLDivElement,
    {
        containerRef: React.RefObject<HTMLDivElement | null>;
        parentRef: React.RefObject<HTMLDivElement | null>;
        beamOptions?: {
            initialX?: number;
            translateX?: number;
            initialY?: number;
            translateY?: number;
            rotate?: number;
            className?: string;
            duration?: number;
            delay?: number;
            repeatDelay?: number;
        };
    }
>(({ parentRef, containerRef, beamOptions }, ref) => {
    const beamRef = useRef<HTMLDivElement>(null);
    const [collision, setCollision] = useState<{
        detected: boolean;
        coordinates: { x: number; y: number } | null;
    }>({
        detected: false,
        coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);

    useEffect(() => {
        const checkCollision = () => {
            if (
                beamRef.current &&
                containerRef.current &&
                parentRef.current &&
                !collision.detected
            ) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const parentRect = parentRef.current.getBoundingClientRect();

                if (beamRect.bottom >= containerRect.top) {
                    const relativeX =
                        beamRect.left - parentRect.left + beamRect.width / 2;
                    const relativeY = beamRect.bottom - parentRect.top;

                    setCollision({
                        detected: true,
                        coordinates: {
                            x: relativeX,
                            y: relativeY,
                        },
                    });
                }
            }
        };

        const animationInterval = setInterval(checkCollision, 120);

        return () => clearInterval(animationInterval);
    }, [collision.detected, containerRef, parentRef]);

    useEffect(() => {
        if (collision.detected) {
            setTimeout(() => {
                setCollision({
                    detected: false,
                    coordinates: null,
                });
                setBeamKey((prevKey) => prevKey + 1);
            }, 2000);
        }
    }, [collision.detected]);

    return (
        <>
            <motion.div
                key={beamKey}
                ref={beamRef}
                animate="animate"
                initial="initial"
                variants={{
                    initial: {
                        translateY: beamOptions?.initialY || "-200px",
                        translateX: beamOptions?.initialX || "0px",
                        rotate: beamOptions?.rotate || 0,
                    },
                    animate: {
                        translateY: beamOptions?.translateY || "1800px",
                        translateX: beamOptions?.translateX || "0px",
                        rotate: beamOptions?.rotate || 0,
                    },
                }}
                transition={{
                    duration: beamOptions?.duration || 8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    delay: beamOptions?.delay || 0,
                    repeatDelay: beamOptions?.repeatDelay || 0,
                }}
                className={cn(
                    "absolute left-0 top-0 m-auto h-14 w-px rounded-full bg-gradient-to-t from-primary via-primary/50 to-transparent",
                    beamOptions?.className
                )}
                style={{ willChange: "transform" }}
            />
            <AnimatePresence>
                {collision.detected && collision.coordinates && (
                    <Explosion
                        key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                        style={{
                            left: `${collision.coordinates.x}px`,
                            top: `${collision.coordinates.y}px`,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
    const spans = Array.from({ length: 12 }, (_, i) => i);

    return (
        <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -inset-px h-2 w-2 rounded-full bg-primary blur-sm"
            ></motion.div>
            {spans.map((span) => (
                <motion.span
                    key={span}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                        x: Math.random() * 80 - 40,
                        y: Math.random() * 80 - 40,
                        opacity: 0,
                        scale: [1, 1, 0],
                    }}
                    transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
                    className="absolute h-px w-px rounded-full bg-primary"
                />
            ))}
        </div>
    );
};
