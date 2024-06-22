"use client"
import Link from "next/link"
import { CSSProperties, LegacyRef, useRef, useState } from "react"
import NavbarOptionGroup from "./components/navbarOptionGroup"
import Hamb from "./components/hamb"
import navbarStyle from "./.module.scss"

const Navbar = () => {
    const hambContainerRef = useRef<HTMLDivElement>()

    const show_hide_STYLES = {
        show: (width: number) => {
            return {
                width: width,
                opacity: 1,
                overflow: "visible"
            }
        },
        hide: {
            width: 0,
            opacity: 0,
            overflow: "hidden"
        }
    }
    const [hambContainerStyle, setHambContainerStyle] = useState<CSSProperties>(show_hide_STYLES.show(75))
    const [listStyle, setListStyle] = useState<CSSProperties>(show_hide_STYLES.hide)

    const showList = () => {
        setListStyle(show_hide_STYLES.show(75 * 3 + 12 * 3))
        setHambContainerStyle(show_hide_STYLES.hide)
    }

    const hideList = () => {
        setListStyle(show_hide_STYLES.hide)
        setHambContainerStyle(show_hide_STYLES.show(75))
    }

    return (
        <nav
            className={navbarStyle.nav}
            onMouseLeave={hideList}
        >
            <div><Link href="/"><span className={`glowHover ${navbarStyle.r}`}>R</span></Link></div>
            <ul style={listStyle}>
                <NavbarOptionGroup />
            </ul>
            <div
                ref={hambContainerRef as LegacyRef<HTMLDivElement>}
                style={hambContainerStyle}
            >
                <Hamb onClick={showList} />
            </div>
        </nav>
    )
}

export default Navbar