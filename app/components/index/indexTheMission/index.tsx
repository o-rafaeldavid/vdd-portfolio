"use client"

import { useContext, useEffect, useReducer, useRef } from "react"
import { BodyScrollContext } from "@/app/utils/contexts/bodyScrollContext"
import GradientSpan from "../../global/gradientSpan"
import Viewport from "../../global/viewport"
import MissionSentenceLine from "./missionSentenceLine"
import index_themission_style from "./.module.scss"

type ScrollState = {
    firstLineScrolled: boolean
    lastLineScrolled: boolean
    wheelDirection: 'up' | 'down'
}

type ScrollAction =
    | { type: 'FIRST_LINE_SCROLLED'; payload: boolean }
    | { type: 'LAST_LINE_SCROLLED'; payload: boolean }
    | { type: 'WHEEL_DIRECTION'; payload: 'up' | 'down' }

/**
 * scrollReducer e initialScrollState são usados para controlar stated data relativas às linhas de texto
 * AÇÕES:
 * - FIRST_LINE_SCROLLED: indica se a primeira linha de texto está visível
 * - LAST_LINE_SCROLLED: indica se a última linha de texto está visível
 * - WHEEL_DIRECTION: indica a direção do scroll
 */
const initialScrollState: ScrollState = {
    firstLineScrolled: false,
    lastLineScrolled: false,
    wheelDirection: 'down'
}

const scrollReducer = (state: ScrollState, action: ScrollAction): ScrollState => {
    switch (action.type) {
        case "FIRST_LINE_SCROLLED":
            return { ...state, firstLineScrolled: action.payload }
        case "LAST_LINE_SCROLLED":
            return { ...state, lastLineScrolled: action.payload }
        case "WHEEL_DIRECTION":
            return { ...state, wheelDirection: action.payload }
        default:
            return state
    }
}

const IndexTheMission = () => {
    const { bodyIsScrolling, setBodyIsScrolling } = useContext(BodyScrollContext)
    const [scrollState, dispatch] = useReducer(scrollReducer, initialScrollState)
    //container com scroll
    const containerRef = useRef<HTMLDivElement>(null)
    // linhas da frase
    const missionLines = [
        <>Propelling <GradientSpan>the future</GradientSpan></>,
        <>and <GradientSpan>revolutionizing</GradientSpan> the present</>,
        <><GradientSpan>with efficient</GradientSpan> digital innovations</>
    ]
    /**
     * Se a primeira Linha desaparece ou se a última linha aparece, o body deve estar com scroll
     * Se a última linha desaparece ou se a primeira linha aparece, o body não deve estar com scroll
     * @see handleSentenceLine
     * @see useHandleSentenceLine
     */
    const handleSentenceLine = {
        first: {
            toTop: () => scrollState.wheelDirection === 'down' && scrollState.firstLineScrolled, // primeira linha desaparece (vai para baixo)
            toBottom: () => scrollState.wheelDirection === 'up' && !scrollState.firstLineScrolled // última linha aparece (vem para cima)
        },
        last: {
            toTop: () => scrollState.wheelDirection === 'down' && scrollState.lastLineScrolled, // primeira linha aparece (vem para cima)
            toBottom: () => scrollState.wheelDirection === 'up' && !scrollState.lastLineScrolled // última linha desaparece (vai para baixo)
        }
    }

    const useHandleFirstSentenceLine = useEffect(() => {
        if (handleSentenceLine.first.toBottom() || handleSentenceLine.last.toTop()) {
            setBodyIsScrolling(true)
        }
        else if (handleSentenceLine.first.toTop() || handleSentenceLine.last.toBottom()) {
            setBodyIsScrolling(false)
        }
        console.log(scrollState)
    }, [scrollState.firstLineScrolled, scrollState.lastLineScrolled])

    /**
     * @returns {JSX.Element} Retorna o componente IndexTheMission
     */
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
            onWheel={(e) => {
                dispatch({
                    type: 'WHEEL_DIRECTION',
                    payload: ((e.deltaY < 0) ? 'up' : 'down')
                })
            }}
        >
            <div>
                <h2>The Mission</h2>
            </div>
            <div ref={containerRef} className="scrollable-container-y">
                {missionLines.map((line, index) =>
                    <div
                        key={`missionSentenceLine-${index}`}
                        style={{ top: `calc(-100% + ${16 * 3.5 * index}px)` }}
                    >
                        <MissionSentenceLine
                            containerRef={containerRef}
                            finalOffset={`${16 * 3.5 * index}px`}
                            onScrollProgress={(index === 0 || index === missionLines.length - 1) ? [
                                (latest) => {
                                    dispatch({
                                        type: (index === 0) ? "FIRST_LINE_SCROLLED" : "LAST_LINE_SCROLLED",
                                        payload: latest > 0.1
                                    })
                                }
                            ] : undefined}
                        >
                            {line}
                        </MissionSentenceLine>
                    </div>
                )}
                <div style={{ top: `calc(-100% + ${16 * 3.5 * missionLines.length}px)` }}></div>
            </div>
        </Viewport >
    )
}

export default IndexTheMission