"use client"

import { MotionValue, useAnimate, useMotionValueEvent, useTransform } from "framer-motion"
import { HasReactNodeChildren } from "@/app/utils/types/childrenTypes"
import { useLayoutEffect } from "react"

type MissionSentenceLineType = HasReactNodeChildren & {
    scrollYProgress: MotionValue<number>
    input: [number, number]
    outputBlur: [number, number]
    outputOpacity: [number, number]
    outputTranslateY: [number, number]
    isFinalScroll: boolean
}

const MissionSentenceLine = ({
    children,
    scrollYProgress,
    input,
    outputBlur,
    outputOpacity,
    outputTranslateY,
    isFinalScroll
}: MissionSentenceLineType) => {
    const [scope, animate] = useAnimate()
    const transformedBlur = useTransform(scrollYProgress, input, outputBlur)
    const transformedOpacity = useTransform(scrollYProgress, input, outputOpacity)
    const transformedTranslateY = useTransform(scrollYProgress, input, outputTranslateY)

    useLayoutEffect(() => {
        animate("span", { filter: `blur(${outputBlur[0]}rem)` })
        animate("span", { opacity: outputOpacity[0] })
        animate("span", { translate: `0 ${outputTranslateY[0]}rem` })
    }, [])

    useMotionValueEvent(transformedBlur, 'change', (latest) => {
        if (!isFinalScroll) animate("span", { filter: `blur(${latest}rem)` })
    })
    useMotionValueEvent(transformedOpacity, 'change', (latest) => {
        if (!isFinalScroll) animate("span", { opacity: latest })
    })
    useMotionValueEvent(transformedTranslateY, 'change', (latest) => {
        if (!isFinalScroll) animate("span", { translate: `0 ${latest}rem` })
    })

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (isFinalScroll) {
            animate("span", { filter: `blur(${outputBlur[1]}rem)` })
            animate("span", { opacity: outputOpacity[1] })
        }
    })

    return (
        <p ref={scope}>
            {children}
        </p>
    )
}

export default MissionSentenceLine