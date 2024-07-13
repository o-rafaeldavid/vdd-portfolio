"use client"

import { HasReactNodeChilldren } from "@/app/utils/types/childrenTypes"
import viewport_style from './.module.scss'

type ViewportProps = HasReactNodeChilldren & {
    dynamic?: boolean
    withPaddingSide?: boolean
    withPaddingTop?: boolean
    withPaddingBottom?: boolean
    style?: React.CSSProperties
    id?: string
    className?: string
}

const Viewport = ({
    children,
    dynamic = false,
    withPaddingSide = false,
    withPaddingTop = false,
    withPaddingBottom = false,
    style,
    id,
    className
}: ViewportProps) => {
    return (
        <div
            style={style}
            id={id}
            className={`
                ${(dynamic)
                    ? viewport_style.dynamic
                    : viewport_style.noDynamic} 
                ${(withPaddingSide)
                    ? viewport_style.withPaddingSide
                    : ''} 
                ${(withPaddingTop)
                    ? viewport_style.withPaddingTop
                    : ''} 
                ${(withPaddingBottom)
                    ? viewport_style.withPaddingBottom
                    : ''} 
                ${' ' + className}
        `}>
            {children}
        </div>
    )
}

export default Viewport