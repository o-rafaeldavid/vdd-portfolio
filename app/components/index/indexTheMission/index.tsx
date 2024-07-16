"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import GradientSpan from "../../global/gradientSpan"
import Viewport from "../../global/viewport"
import index_themission_style from "./.module.scss"

const IndexTheMission = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const firstRef = useRef<HTMLDivElement>(null)
    const secondRef = useRef<HTMLDivElement>(null)
    const firstRefScroll = useScroll({
        target: firstRef,
        container: containerRef,
        offset: ["start 80%", "start 0"],
        layoutEffect: false
    })
    const secondRefScroll = useScroll({
        target: secondRef,
        container: containerRef,
        offset: ["start 80%", `start ${16 * 3}px`],
        layoutEffect: false
    })

    return (
        <Viewport
            id={index_themission_style.indexMission}
            withPaddingTop
            withPaddingSide
            onViewEnter={() => console.log("The Mission")}
        >
            <div>
                <h2>The Mission</h2>
            </div>
            <div ref={containerRef}>
                <div style={{ top: "-100%" }}>
                    <motion.h3 ref={firstRef} style={{ opacity: firstRefScroll.scrollYProgress }}>Propelling <GradientSpan>the future</GradientSpan></motion.h3>
                </div>
                <div style={{ top: "calc(-100% + 3rem)" }}>
                    <motion.h3 ref={secondRef} style={{ opacity: secondRefScroll.scrollYProgress }}>and <GradientSpan>revolutionizing</GradientSpan> the present</motion.h3>
                </div>
                <div style={{ top: "calc(-100% + 6rem)" }}>
                    <h3><GradientSpan>with efficient</GradientSpan> digital innovations</h3>
                </div>
                <div style={{ top: "calc(-100% + 9rem)" }}></div>
            </div>
        </Viewport>
    )
}

export default IndexTheMission