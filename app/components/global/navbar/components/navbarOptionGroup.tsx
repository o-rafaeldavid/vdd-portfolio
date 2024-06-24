"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import NavbarOption from "./navbarOption"
import { routeHelper } from "@/app/utils/common/routes"

const NavbarOptionGroup = () => {
    const pathname = usePathname()
    const [firstDirectory, setFD] = useState<String>("")

    useEffect(
        () => {
            setFD("/" + pathname.split("/")[1])
        },
        [pathname]
    )

    return (
        <>
            {
                routeHelper.map((option, index) => (
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

export default NavbarOptionGroup