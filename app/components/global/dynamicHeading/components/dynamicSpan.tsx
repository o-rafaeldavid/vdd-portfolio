"use client"
import { useState, useEffect } from "react"
import { mapear } from "@/app/utils/common/mapear"

type minMax = {
    min: number,
    max: number
}

type DynamicSpanProps = {
    children: string,
    interval: minMax,
    mappingWeight: minMax,
    actualCounter: number
}

const DynamicSpan = ({
    children,
    interval,
    mappingWeight,
    actualCounter
}: DynamicSpanProps) => {

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
                        )
                    )
                }
                else {
                    setWeight(
                        mapear(
                            actualCounter,
                            metadeIntervalo, interval.max,
                            mappingWeight.max, mappingWeight.min
                        )
                    )
                }
            }

        }, [actualCounter]
    )

    return <span style={{ fontVariationSettings: `"wght" ${weight}, "GRAD" 88` }}>{children}</span>
}

export default DynamicSpan