"use client"

import Link from "next/link"
import { CSSProperties, LegacyRef, useRef, useState } from "react"
import NavbarOptionGroup from "./components/navbarOptionGroup"
import Hamb from "./components/hamb"
import navbar from "./navbar.module.scss"

export default function Navbar() {
    const hambContainerRef = useRef<HTMLDivElement>()
    const listRef = useRef<HTMLUListElement>()

    const show_hide_STYLES = {
        show: (width: number) => { return { width: width, opacity: 1 } },
        hide: { width: 0, opacity: 0 }
    }
    const [hambContainerStyle, setHambContainerStyle] = useState<CSSProperties>(show_hide_STYLES.show(75))
    const [listStyle, setListStyle] = useState<CSSProperties>(show_hide_STYLES.hide)

    ///////////////////////
    const showList = () => {
        setListStyle(show_hide_STYLES.show(75 * 3 + 12 * 3))
        setHambContainerStyle(show_hide_STYLES.hide)
        const listNode = listRef.current as HTMLUListElement
        listNode.style.overflow = "visible"
    }

    const hideList = () => {
        setListStyle(show_hide_STYLES.hide)
        setHambContainerStyle(show_hide_STYLES.show(75))
        const listNode = listRef.current as HTMLUListElement
        listNode.style.overflow = "hidden"

    }

    ///////////////////////
    return (
        <nav
            className={navbar.nav}
            onMouseLeave={hideList}
        >
            <div><Link href="/"><span className={`glowHover ${navbar.r}`}>R</span></Link></div>
            {/*  */}


            <ul
                ref={listRef as LegacyRef<HTMLUListElement>}
                style={listStyle}
            >
                <NavbarOptionGroup />
            </ul>
            {/*  */}


            <div
                ref={hambContainerRef as LegacyRef<HTMLDivElement>}
                style={hambContainerStyle}
            >
                <Hamb onClick={showList} />
            </div>
        </nav>
    )
}