"use client"

import { useContext, useRef } from "react"
import { BodyScrollContext } from "@/app/utils/contexts/bodyScrollContext"
import GradientSpan from "../../global/gradientSpan"
import Viewport from "../../global/viewport"
import MissionSentenceLine from "./missionSentenceLine"
import index_themission_style from "./.module.scss"

const IndexTheMission = () => {
    const { setBodyIsScrolling } = useContext(BodyScrollContext)
    const containerRef = useRef<HTMLDivElement>(null)
    // linhas da frase
    const missionLines = [
        <>Propelling <GradientSpan>the future</GradientSpan></>,
        <>and <GradientSpan>revolutionizing</GradientSpan> the present</>,
        <><GradientSpan>with efficient</GradientSpan> digital innovations</>
    ]

    /**
     * @returns {JSX.Element} Retorna o componente IndexTheMission
     */
    return (
        <Viewport
            id={index_themission_style.indexMission}
            withPaddingTop
            withPaddingSide
            onViewEnter={{
                function: () => { setBodyIsScrolling(false) },
                delay: 100,
                amount: 0.9
            }}
        >
            <section
                ref={containerRef}
                className="scrollable-container-y"
            >
                <h2>The Mission</h2>
                <section>
                    {missionLines.map((line, index) =>
                        <MissionSentenceLine
                            containerRef={containerRef}
                            finalOffset={`${0}px`}
                            key={`missionSentenceLine-${index}`}
                        >
                            {line}
                        </MissionSentenceLine>
                    )}
                </section>
                <div></div>
            </section>
        </Viewport >
    )
}

export default IndexTheMission