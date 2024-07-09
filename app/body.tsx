"use client"

import BlurBackground from "./components/global/blurBackground"
import DynamicText from "./components/global/dynamicHeading"
import Navbar from "./components/global/navbar"

type BodyProps = {
    children: React.ReactNode,
    className: string
}

export default function Body({ children, className }: BodyProps) {
    return (
        <body className={className}>
            <BlurBackground />
            <Navbar />
            <DynamicText>RAFAEL DAVID</DynamicText>
            {children}
        </body>
    )
}