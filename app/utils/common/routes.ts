import { Url } from "next/dist/shared/lib/router/router";

export const routeHelper: { href: Url, nome: string }[] = [
    { href: "/", nome: "About" },
    { href: "/works", nome: "Works" },
    { href: "/contact", nome: "Contact" }
]