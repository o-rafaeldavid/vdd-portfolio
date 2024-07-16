"use client"

import { useContext, useRef } from "react"
import { BodyScrollContext } from "@/app/utils/contexts/bodyScrollContext"
import GradientSpan from "../../global/gradientSpan"
import Viewport from "../../global/viewport"
import MissionSentenceLine from "./missionSentenceLine"
import index_themission_style from "./.module.scss"

const IndexTheMission = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const missionLines = [
        <>Propelling <GradientSpan>the future</GradientSpan></>,
        <>and <GradientSpan>revolutionizing</GradientSpan> the present</>,
        <><GradientSpan>with efficient</GradientSpan> digital innovations</>
    ]

    const { setBodyIsScrolling } = useContext(BodyScrollContext)

    return (
        <Viewport
            id={index_themission_style.indexMission}
            withPaddingTop
            withPaddingSide
            onViewEnter={() => /* setBodyIsScrolling(false) */}
        >
            <div>
                <h2>The Mission</h2>
            </div>
            <div ref={containerRef}>
                {missionLines.map((line, index) =>
                    <div
                        key={`missionSentenceLine-${index}`}
                        style={{ top: `calc(-100% + ${16 * 3 * index}px)` }}
                    >
                        <MissionSentenceLine
                            containerRef={containerRef}
                            finalOffset={`${16 * 3 * index}px`}
                        >
                            {line}
                        </MissionSentenceLine>
                    </div>
                )}
                <div style={{ top: `calc(-100% + ${16 * 3 * missionLines.length}px)` }}></div>
            </div>
        </Viewport>
    )
}

export default IndexTheMission