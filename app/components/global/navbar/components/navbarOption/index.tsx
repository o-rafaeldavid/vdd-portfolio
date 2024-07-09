import Link from "next/link";
import type { Url } from "next/dist/shared/lib/router/router";
import navbarOptionStyle from "./.module.scss"
import GradientSpan from "../../../gradientSpan";

type NavbarProps = {
    href: Url,
    nome: String,
    active: boolean
}

const NavbarOption = ({ href, nome, active }: NavbarProps) => {
    return (
        <li>
            <Link href={href} className={active ? navbarOptionStyle.active : navbarOptionStyle.notActive}>
                {active ? <GradientSpan>{nome}</GradientSpan> : <span>{nome}</span>}
                <span className="glow">{nome}</span>
            </Link>
        </li>
    )
}

export default NavbarOption