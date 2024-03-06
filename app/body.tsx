"use client"

interface BodyProps{
    children: React.ReactNode,
    className: string
}

export default function Body({children, className} : BodyProps){
    return(
        <body className={className}>
            {children}
        </body>
    )
}