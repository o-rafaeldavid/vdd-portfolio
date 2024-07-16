"use client"

import { useContext, useEffect, useReducer, useRef } from "react"
import { BodyScrollContext } from "@/app/utils/contexts/bodyScrollContext"
import GradientSpan from "../../global/gradientSpan"
import Viewport from "../../global/viewport"
import MissionSentenceLine from "./missionSentenceLine"
import index_themission_style from "./.module.scss"

//////////////////////////////////////
//////////////////////////////////////
type ScrollState = {
    firstLineScrolled: boolean
    lastLineScrolled: boolean
}

type ScrollAction =
    | { type: "FIRST_LINE_SCROLLED"; payload: boolean }
    | { type: "LAST_LINE_SCROLLED"; payload: boolean }

const initialScrollState: ScrollState = {
    firstLineScrolled: false,
    lastLineScrolled: false
}

const scrollReducer = (state: ScrollState, action: ScrollAction): ScrollState => {
    switch (action.type) {
        case "FIRST_LINE_SCROLLED":
            return { ...state, firstLineScrolled: action.payload }
        case "LAST_LINE_SCROLLED":
            return { ...state, lastLineScrolled: action.payload }
        default:
            return state
    }
}

//////////////////////////////////////
//////////////////////////////////////
const IndexTheMission = () => {
    const [scrollState, dispatch] = useReducer(scrollReducer, initialScrollState)
    const containerRef = useRef<HTMLDivElement>(null)
    const missionLines = [
        <>Propelling <GradientSpan>the future</GradientSpan></>,
        <>and <GradientSpan>revolutionizing</GradientSpan> the present</>,
        <><GradientSpan>with efficient</GradientSpan> digital innovations</>
    ]

    const { setBodyIsScrolling } = useContext(BodyScrollContext)

    useEffect(() => {
        if (scrollState.lastLineScrolled || !scrollState.firstLineScrolled) {
            setBodyIsScrolling(true)
        }
    }, [scrollState.lastLineScrolled, scrollState.firstLineScrolled])

    return (
        <Viewport
            id={index_themission_style.indexMission}
            withPaddingTop
            withPaddingSide
            onViewEnter={{
                delay: 100,
                amount: 0.9,
                function: () => setBodyIsScrolling(false)
            }}
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
                            onScrollProgress={(index === 0 || index === missionLines.length - 1) ? [
                                (latest) => {
                                    dispatch({
                                        type: (index === 0) ? "FIRST_LINE_SCROLLED" : "LAST_LINE_SCROLLED",
                                        payload: latest === 1
                                    })
                                }
                            ] : undefined}
                        >
                            {line}
                        </MissionSentenceLine>
                    </div>
                )}
                <div style={{ top: `calc(-100% + ${16 * 3 * missionLines.length}px)` }}></div>
            </div>
        </Viewport >
    )
}

export default IndexTheMission