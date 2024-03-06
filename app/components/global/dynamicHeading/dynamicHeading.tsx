"use client"

import React, { useEffect, useState } from "react"
import { mapear } from "@/app/lib/general"


interface DynamicHeadingProps{
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
    betweenAnimations = 200,
    step = 1
} : DynamicHeadingProps){

    const childrenArray = children.split('')
    const [counter, setCounter] = useState<number>(0)
    const maxCounter = eachSpan + delaySpan * childrenArray.length + betweenAnimations


    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setCounter(c => {
                        if(c < maxCounter) return c + step
                        else return 0
                    })
                }, 1
            )

            return () => clearInterval(interval)

        }, []
    )



    /* animation: `spanHeader ${delay}ms ${index * between}ms ease-in-out` */
    
    return(
        <h1
            className={`${(className !== undefined) ? (" " + className) : ""}`}
            id={`${(id !== undefined) ? (" " + id) : ""}`}
        >{
            childrenArray.map(
                (char, index) => {
                    const delayBetween = delaySpan * index
                    return(
                        <DynamicSpan
                            key={`char-${char}-${index}`}
                            interval={{min: delayBetween, max: eachSpan + delayBetween}}
                            mappingWeight={{min: 720, max: 800}}
                            actualCounter={counter}
                        >{char}</DynamicSpan>
                    )
                }
            )
        }</h1>
    )
}



interface minMax{
    min: number,
    max: number
}

interface DynamicSpanProps{
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
} : DynamicSpanProps){


    const [weight, setWeight] = useState<number>(mappingWeight.min)
    const metadeIntervalo = 0.5 * (interval.min + interval.max)

    useEffect(
        () => {
            const dentroIntervalo = (actualCounter >= interval.min && actualCounter <= interval.max)




            if(dentroIntervalo){
                const dentroIntervalo_metadeInferior = (actualCounter <= metadeIntervalo)

                if(dentroIntervalo_metadeInferior){
                    setWeight(
                        mapear(
                            actualCounter,
                            interval.min, metadeIntervalo,
                            mappingWeight.min, mappingWeight.max
                    ))
                }
                else{
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



    return(
        <span style={{fontVariationSettings: `"wght" ${weight}, "GRAD" 88`}}>{children}</span>
    )
}