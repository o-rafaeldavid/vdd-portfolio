"use client"
import React, { useEffect, useState } from "react"
import { useAnimationFrame } from "framer-motion"
import DynamicSpan from "./components/dynamicSpan"

type DynamicHeadingProps = {
    children: string,
    className?: string, id?: string,
    eachSpan?: number,
    delaySpan?: number,
    betweenAnimations?: number,
    step?: number
}

const DynamicHeading = ({
    children,
    className, id,
    eachSpan = 500,
    delaySpan = 20,
    betweenAnimations = 100,
    step = 2
}: DynamicHeadingProps) => {

    const childrenArray = children.split('')
    const [counter, setCounter] = useState<number>(0)
    const maxCounter = eachSpan + delaySpan * childrenArray.length + betweenAnimations

    useAnimationFrame(() => {
        setCounter(c => c + step)
    })

    return (
        <h1
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
                                mappingWeight={{ min: 720, max: 800 }}
                                actualCounter={counter % maxCounter}
                            >{char}</DynamicSpan>
                        )
                    }
                )
            }
        </h1>
    )
}

export default DynamicHeading