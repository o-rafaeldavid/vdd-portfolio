"use client"

import { useContext } from "react"
import BodyScrollProvider, { BodyScrollContext } from "./utils/contexts/bodyScrollContext"
import BlurBackground from "./components/global/blurBackground"
import DynamicText from "./components/global/dynamicText"
import Navbar from "./components/global/navbar"

type BodyProps = {
    children: React.ReactNode,
    className: string
}

const BodyWithoutProvider = ({ children, className }: BodyProps) => {
    const { bodyIsScrolling } = useContext(BodyScrollContext)
    return (
        <body
            className={`${className} ${bodyIsScrolling ? "" : "body-no-scroll"}`}
        >
            <BlurBackground />
            <Navbar />
            <DynamicText>RAFAEL DAVID</DynamicText>
            {children}
        </body>
    )
}

const Body = ({ children, className }: BodyProps) => {
    return (
        <BodyScrollProvider>
            <BodyWithoutProvider className={className}>{children}</BodyWithoutProvider>
        </BodyScrollProvider>
    )
}

export default Body