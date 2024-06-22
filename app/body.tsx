"use client"

import Navbar from "./components/global/navbar"

type BodyProps = {
    children: React.ReactNode,
    className: string
}

export default function Body({ children, className }: BodyProps) {
    return (
        <body className={className}>
            <Navbar />
            {children}
        </body>
    )
}