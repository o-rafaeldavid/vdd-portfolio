"use client"

import { HasReactNodeChildren } from "@/app/utils/types/childrenTypes"
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import viewport_style from './.module.scss'

type ViewportProps = HasReactNodeChildren & {
    dynamic?: boolean
    withPaddingSide?: boolean
    withPaddingTop?: boolean
    withPaddingBottom?: boolean
    style?: React.CSSProperties
    id?: string
    className?: string
    doNotFade?: boolean
    onViewEnter?: {
        function: () => void
        delay: number
        amount: number | "some" | "all"
    }
}

const Viewport = ({
    children,
    dynamic = false,
    withPaddingSide = false,
    withPaddingTop = false,
    withPaddingBottom = false,
    style,
    id,
    className,
    doNotFade = false,
    onViewEnter
}: ViewportProps) => {
    const viewportRef = useRef<HTMLDivElement>(null)
    const bodyRef = useRef<any>(null)

    useEffect(() => {
        if (bodyRef.current == null) bodyRef.current = document.body
    }, [])

    const isView = useInView(viewportRef, {
        margin: "-1px",
    })

    const isViewFunction = useInView(viewportRef, {
        amount: onViewEnter?.amount || 0
    })

    useEffect(() => {
        let timeout: Timer

        if (isViewFunction && onViewEnter !== undefined) timeout = setTimeout(() => {
            onViewEnter.function()
            return () => clearTimeout(timeout)
        }, onViewEnter.delay)

        return () => clearTimeout(timeout)
    }, [isViewFunction])


    return (
        <motion.div
            style={style}
            ref={viewportRef}
            id={id}
            className={`
                viewport 
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
                ${(!doNotFade)
                    ? viewport_style.fadeViewport
                    : ''} 
                ${(!doNotFade)
                    ? (isView)
                        ? viewport_style.showViewport
                        : viewport_style.hideViewport
                    : ''} 
                ${' ' + className}
        `}>
            {children}
        </motion.div>
    )
}

export default Viewport