"use client"

import { useRef } from "react"
import BlurBackground from "./components/global/blurBackground"
import DynamicText from "./components/global/dynamicText"
import Navbar from "./components/global/navbar"
import Viewport from "./components/global/viewport"
/* ref={scrollDivRef}  */
type BodyProps = {
    children: React.ReactNode,
    className: string
}

export default function Body({ children, className }: BodyProps) {
    const scrollDivRef = useRef<HTMLDivElement>(null)
    return (
        <body
            className={className}
        >
            <BlurBackground />
            <Navbar />
            <DynamicText>RAFAEL DAVID</DynamicText>
            {children}
        </body>
    )
}