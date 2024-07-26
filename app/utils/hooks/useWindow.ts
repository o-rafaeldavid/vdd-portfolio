import { useEffect, useState } from "react"

export const useWindow = () => {
    const [window, setWindow] = useState<Window | null>(null)
    useEffect(() => {
        if (window === null) setWindow(window)
    }, [])
    return window
}