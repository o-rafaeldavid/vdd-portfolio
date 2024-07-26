"use client"

import { useContext, useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { BodyScrollContext } from "@/app/utils/contexts/bodyScrollContext"
import GradientSpan from "../../global/gradientSpan"
import Viewport from "../../global/viewport"
import MissionSentenceLine from "./missionSentenceLine"
import index_themission_style from "./.module.scss"

const IndexTheMission = () => {
    // linhas da frase
    const missionLines = [
        <>Propelling <GradientSpan>the future</GradientSpan></>,
        <>and <GradientSpan>revolutionizing</GradientSpan> the present</>,
        <><GradientSpan>with efficient</GradientSpan> digital innovations</>
    ]
    // colocar scroll no body (ou tirar)
    const { setBodyIsScrolling } = useContext(BodyScrollContext)
    /**
     * scrollContainerRef: scroll section ref
     * bigDivRef: div para ajudar no scroll
     */
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const bigDivRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        container: scrollContainerRef,
        target: bigDivRef,
        offset: ['start end', 'end end']
    })

    const [isFinalScroll, setIsFinalScroll] = useState<boolean>(false)
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (latest === 1) setIsFinalScroll(true)
    })

    /**
     * @returns {JSX.Element} Retorna o componente IndexTheMission
     */
    return (
        <Viewport
            id={index_themission_style.indexMission}
            withPaddingTop
            withPaddingSide
            onViewEnter={{
                function: () => { if (!isFinalScroll) setBodyIsScrolling(false) },
                delay: 50,
                amount: ((window.innerWidth - 10) / window.innerWidth) //obter a fração com menos 10px da tela (por conta da scroll bar)
            }}
        >
            <section
                ref={scrollContainerRef}
                className={scrollYProgress.get() === 1 ? '' : 'scrollable-container-y'}
                onScroll={(e) => {
                    if (e.currentTarget.scrollTop === e.currentTarget.scrollHeight - e.currentTarget.clientHeight) {
                        setBodyIsScrolling(true)
                    }
                }}
            >
                <section>
                    <h2>The Mission</h2>
                    <section>
                        {missionLines.map((line, index) =>
                            <MissionSentenceLine
                                key={`missionSentenceLine-${index}`}
                                isFinalScroll={isFinalScroll}
                                scrollYProgress={scrollYProgress}
                                input={[0.3 * index, 0.3 * (index + 1)]}
                                outputBlur={[0.4, 0]}
                                outputOpacity={[0.1, 1]}
                                outputTranslateY={[1, 0]}
                            >
                                {line}
                            </MissionSentenceLine>
                        )}
                    </section>
                </section>
                <div ref={bigDivRef}></div>
            </section>
        </Viewport >
    )
}

export default IndexTheMission