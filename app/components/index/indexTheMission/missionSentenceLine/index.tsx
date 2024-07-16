"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { HasReactNodeChildren } from "@/app/utils/types/childrenTypes"

/**
 * from framer-motion:
 * node_modules/framer-motion/dist/index.d.ts
 * 
 * framer-motion github:
 * https://github.com/framer/motion/blob/c69c4128fbfd1aaab33979339a32f66393d431f7/packages/framer-motion/src/render/dom/scroll/types.ts#L40-L62
 */
type SupportedEdgeUnit = "px" | "vw" | "vh" | "%"
type EdgeUnit = `${number}${SupportedEdgeUnit}`
type NamedEdges = "start" | "end" | "center"
type EdgeString = NamedEdges | EdgeUnit | `${number}`
type Edge = EdgeString | number
///

type MissionSentenceLineType = HasReactNodeChildren & {
    finalOffset: Edge
    containerRef: React.RefObject<HTMLDivElement>
}

const MissionSentenceLine = ({
    children,
    finalOffset,
    containerRef
}: MissionSentenceLineType) => {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const { scrollYProgress } = useScroll({
        target: headingRef,
        container: containerRef,
        offset: ["start 80%", `start ${finalOffset}`],
        layoutEffect: false
    })
    return (
        <motion.h3
            ref={headingRef}
            style={{ opacity: scrollYProgress }}
        >
            {children}
        </motion.h3>
    )
}

export default MissionSentenceLine