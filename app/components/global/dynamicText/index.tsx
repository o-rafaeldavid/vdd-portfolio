"use client"
import React, { useState } from "react"
import { useAnimationFrame } from "framer-motion"
import DynamicSpan from "./components/dynamicSpan"
import style from './.module.scss'

type DynamicHeadingProps = {
    children: string,
    eachSpan?: number,
    delaySpan?: number,
    betweenAnimations?: number,
    step?: number,
    mappingWeight?: { min: number, max: number }
}

const DynamicText = ({
    children,
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
            id={style.dynamicText}
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