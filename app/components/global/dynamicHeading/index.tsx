"use client"
import React, { useEffect, useState } from "react"
import { useAnimationFrame } from "framer-motion"
import { mapear } from "@/app/lib/general"

type DynamicHeadingProps = {
    children: string,
    className?: string, id?: string,
    eachSpan?: number,
    delaySpan?: number,
    betweenAnimations?: number,
    step?: number
}

export default function DynamicHeading({
    children,
    className, id,
    eachSpan = 500,
    delaySpan = 20,
    betweenAnimations = 100,
    step = 2
}: DynamicHeadingProps) {

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
        >{
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
            }</h1>
    )
}



interface minMax {
    min: number,
    max: number
}

interface DynamicSpanProps {
    children: string,
    interval: minMax,
    mappingWeight: minMax,
    actualCounter: number
}

function DynamicSpan({
    children,
    interval,
    mappingWeight,
    actualCounter
}: DynamicSpanProps) {


    const [weight, setWeight] = useState<number>(mappingWeight.min)
    const metadeIntervalo = 0.5 * (interval.min + interval.max)

    useEffect(
        () => {
            const dentroIntervalo = (actualCounter >= interval.min && actualCounter <= interval.max)




            if (dentroIntervalo) {
                const dentroIntervalo_metadeInferior = (actualCounter <= metadeIntervalo)

                if (dentroIntervalo_metadeInferior) {
                    setWeight(
                        mapear(
                            actualCounter,
                            interval.min, metadeIntervalo,
                            mappingWeight.min, mappingWeight.max
                        ))
                }
                else {
                    setWeight(
                        mapear(
                            actualCounter,
                            metadeIntervalo, interval.max,
                            mappingWeight.max, mappingWeight.min
                        ))
                }
            }


        }, [actualCounter]
    )



    return (
        <span style={{ fontVariationSettings: `"wght" ${weight}, "GRAD" 88` }}>{children}</span>
    )
}