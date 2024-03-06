"use client"
import { usePathname } from "next/navigation"
import NavbarOption from "./navbarOption"
import { useEffect, useState } from "react"



const options = [
    { href: "/", nome: "About" },
    { href: "/works", nome: "Works" },
    { href: "/contact", nome: "Contact" }
]



export default function NavbarOptionGroup(){
    const pathname = usePathname()
    const [firstDirectory, setFD] = useState<String>("")
    
    useEffect(
        () => {
            setFD("/" + pathname.split("/")[1])
            console.log(pathname)
        },
        [pathname]
    )

    return(
        <>
            {
                options.map((option, index) => (
                    <NavbarOption
                        key={`optn-${index}`}
                        href={option.href}
                        nome={option.nome}
                        active={(option.href === firstDirectory) ? true : false}
                    />
                ))
            }
        </>
    )
}