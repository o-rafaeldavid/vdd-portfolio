"use client"

import { HasReactNodeChilldren } from "@/app/utils/types/childrenTypes"
import style from './.module.scss'

type GradientSpanProps = HasReactNodeChilldren & {
    className?: string
}

const GradientSpan = ({ children, className }: GradientSpanProps) => {
    return (
        <span className={`${style.gradientSpan} ${className}`}>
            {children}
        </span>
    )
}

export default GradientSpan