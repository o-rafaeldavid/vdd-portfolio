import { Url } from "next/dist/shared/lib/router/router";

export const routeHelper: { href: Url, nome: string }[] = [
    { href: "/", nome: "About" },
    { href: "/projects", nome: "Projects" },
    { href: "/contact", nome: "Contact" }
]