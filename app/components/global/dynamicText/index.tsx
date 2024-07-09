"use client"
import React, { useState } from "react"
import { useAnimationFrame } from "framer-motion"
import DynamicSpan from "./components/dynamicSpan"

type DynamicHeadingProps = {
    children: string,
    className?: string, id?: string,
    eachSpan?: number,
    delaySpan?: number,
    betweenAnimations?: number,
    step?: number,
    mappingWeight?: { min: number, max: number }
}

const DynamicText = ({
    children,
    className, id,
    eachSpan = 500,
    delaySpan = 20,
    betweenAnimations = 100,
    step = 2,
    mappingWeight = { min: 720, max: 800 }
}: DynamicHeadingProps) => {

    const childrenArray = children.split('')
    const [counter, setCounter] = useState<number>(0)
    const maxCounter = eachSpan + delaySpan * childrenArray.length + betweenAnimations

    useAnimationFrame(() => {
        setCounter(c => c + step)
    })

    return (
        <span
            style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem' }}
            className={`${(className !== undefined) ? (" " + className) : ""}`}
            id={`${(id !== undefined) ? (" " + id) : ""}`}
        >
            {
                childrenArray.map(
                    (char, index) => {
                        const delayBetween = delaySpan * index
                        return (
                            <DynamicSpan
                                key={`char-${char}-${index}`}
                                interval={{ min: delayBetween, max: eachSpan + delayBetween }}
                                mappingWeight={mappingWeight}
                                actualCounter={counter % maxCounter}
                            >{char}</DynamicSpan>
                        )
                    }
                )
            }
        </span>
    )
}

export default DynamicText