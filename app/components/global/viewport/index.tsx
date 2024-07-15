"use client"

import { HasReactNodeChilldren } from "@/app/utils/types/childrenTypes"
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import viewport_style from './.module.scss'

type ViewportProps = HasReactNodeChilldren & {
    dynamic?: boolean
    withPaddingSide?: boolean
    withPaddingTop?: boolean
    withPaddingBottom?: boolean
    style?: React.CSSProperties
    id?: string
    className?: string
    doNotFade?: boolean
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
    doNotFade = false
}: ViewportProps) => {
    const viewportRef = useRef<HTMLDivElement>(null)
    const bodyRef = useRef<any>(null)

    const { scrollYProgress } = useScroll({
        target: viewportRef,
        container: bodyRef,
        offset: ["0 end", "1px end"],
        layoutEffect: false
    })

    const hadShown = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1],
    )

    useEffect(() => {
        if (bodyRef.current == null) bodyRef.current = document.body
    }, [])

    const isView = useInView(viewportRef, {
        margin: "-1px"
    })


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