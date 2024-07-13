import { mapear } from "@/app/utils/common/mapear"
import { useAnimationFrame } from "framer-motion"
import { useState } from "react"

type AbstractToBlurType = {
    blur: string,
    fill: 'azul-eletrico' | 'verde-agua' | 'background',
    opacity: number,
    top?: number | string,
    left?: number | string,
    right?: number | string,
    bottom?: number | string,
    rotate?: string,
    scale?: number,
    cicleTime?: number,
    clockWise?: boolean,
    radius: number
}

const AbstractToBlur = (
    {
        blur,
        fill,
        opacity,
        top = 0,
        left = 0,
        right = 'unset',
        bottom = 'unset',
        rotate,
        scale,
        cicleTime = 10000,
        clockWise = false,
        radius
    }: AbstractToBlurType) => {

    const [angle, setAngle] = useState<number>(0)
    useAnimationFrame((time) => {
        const nowTime = time % cicleTime
        setAngle(a => mapear(time, 0, cicleTime, 0, ((clockWise) ? 1 : -1) * Math.PI * 2))
    })

    return (
        <svg
            width="721"
            height="934"
            viewBox="0 0 721 934"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: "absolute",
                filter: `blur(${blur})`,
                opacity: opacity,
                top: (bottom === 'unset') ? top : 'unset',
                left: (right === 'unset') ? left : 'unset',
                right: right,
                bottom: bottom,
                rotate: rotate,
                scale: scale,
                translate: `${radius * Math.cos(angle)}rem ${radius * Math.sin(angle)}rem`
            }}
        >
            <path
                d="M301.715 429.5C324.115 239.5 590.381 165.333 720.715 152C669.548 109.167 562.215 21.7 542.215 14.5C517.215 5.5 17.2146 0 3.7146 0C-7.0854 0 8.2146 154.333 17.2146 231.5L3.7146 934C203.381 899 577.015 824 474.215 804C345.715 779 273.715 667 301.715 429.5Z"
                fill={fill === 'azul-eletrico' ? "rgb(0, 178, 255)" : fill === 'verde-agua' ? "rgb(0, 255, 194)" : "rgb(16, 16, 16)"}
            />
        </svg>
    )
}

export default AbstractToBlur