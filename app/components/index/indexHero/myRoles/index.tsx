"use client"

import { CSSProperties, useEffect, useRef, useState } from "react"
import { useAnimationFrame } from "framer-motion"
import GradientSpan from "../../../global/gradientSpan"
import style from "./.module.scss"

const allRoles: string[] = [
    "creative developer",
    "UI / UX designer",
    "front-end developer",
]

const MyRoles = ({ delay = 2000, transition = 600 }: { delay?: number, transition?: number }) => {
    const [counter, setCounter] = useState<number>(0)
    const [oldTime, setOldTime] = useState<number>(0)
    const transitionRef = useRef<boolean>(false)

    useAnimationFrame((time) => {
        const nowTime = time % delay
        if (nowTime < oldTime && time !== 0) transitionRef.current = true
        setOldTime(nowTime)
    })

    useEffect(() => {
        let timeoutTransition: number | Timer = -1
        let timeoutCounter: number | Timer = -1

        if (transitionRef.current) {
            timeoutCounter = setTimeout(() => {
                setCounter(s => s + 1)
                return () => clearTimeout(timeoutCounter)
            }, transition * 0.5)

            timeoutTransition = setTimeout(() => {
                transitionRef.current = false
                return () => clearTimeout(timeoutTransition)
            }, transition)
        }

        return () => {
            clearTimeout(timeoutTransition)
            clearTimeout(timeoutCounter)
        }
    }, [transitionRef.current])
    return (
        <h5
            id={style.myRoles}
            style={{
                '--transitionTime': `${transition}ms`
            } as CSSProperties}
            className={transitionRef.current ? style.transition : ""}
        >
            <GradientSpan>{allRoles[counter % allRoles.length]}</GradientSpan>
            <GradientSpan>{allRoles[counter % allRoles.length]}</GradientSpan>
        </h5>
    )
}

export default MyRoles