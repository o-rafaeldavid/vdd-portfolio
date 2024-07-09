"use client"

import { HasReactNodeChilldren } from "@/app/utils/types/childrenTypes"

const GradientSpan = ({ children }: HasReactNodeChilldren) => {
    return (
        <span className={style.gradientSpan}>
            {children}
        </span>
    )
}

export default GradientSpan