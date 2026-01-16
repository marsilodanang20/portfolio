"use client"

import { useRef } from "react"
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion"

interface ParallaxProps {
    children: string
    baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)

    // Smoothing: Stiffness lebih rendah, damping lebih tinggi untuk inersia halus
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 300,
    })

    // Transform velocity ke range yang lebih smooth
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    })

    // Looping logic
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef<number>(1)

    useAnimationFrame((t, delta) => {
        // Base move: Selalu bergerak pelan walau tidak discroll
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        // Scroll effect: Tambahkan kecepatan saat user scroll
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <div className="parallax overflow-hidden whitespace-nowrap flex flex-nowrap m-0 tracking-tighter leading-[0.8] py-2">
            <motion.div
                className="scroller font-bold uppercase text-5xl sm:text-7xl md:text-8xl flex whitespace-nowrap flex-nowrap"
                style={{ x }}
            >
                {/* Render multiple times for seamless loop */}
                <span className="block mr-8 sm:mr-16 text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 stroke-text">
                    {children}
                </span>
                <span className="block mr-8 sm:mr-16 text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 stroke-text">
                    {children}
                </span>
                <span className="block mr-8 sm:mr-16 text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 stroke-text">
                    {children}
                </span>
                <span className="block mr-8 sm:mr-16 text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 stroke-text">
                    {children}
                </span>
                <span className="block mr-8 sm:mr-16 text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 stroke-text">
                    {children}
                </span>
                <span className="block mr-8 sm:mr-16 text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 stroke-text">
                    {children}
                </span>
            </motion.div>
        </div>
    )
}

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export default function VelocityScroll() {
    return (
        <section className="py-12 sm:py-20 overflow-hidden select-none pointer-events-none">
            <ParallaxText baseVelocity={-1}>
                PHP • React • Next.js • Python • MySQL •
            </ParallaxText>
            <div className="h-4 sm:h-8"></div> {/* Spacer */}
            <ParallaxText baseVelocity={1}>
                Fullstack • Creative • Scalable • Secure •
            </ParallaxText>
        </section>
    )
}
