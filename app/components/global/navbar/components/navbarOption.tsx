import Link from "next/link";
import type { Url } from "next/dist/shared/lib/router/router";
import navbarOption from "./navbarOption.module.scss"

interface Props{
    href: Url,
    nome: String,
    active: boolean
}

export default function NavbarOption({href, nome, active} : Props){
    return(
        <li>
            <Link href={href} className={active ? navbarOption.active : navbarOption.notActive}>
                <span>{nome}</span>
                <span className="glow">{nome}</span>
            </Link>
        </li>
    )
}