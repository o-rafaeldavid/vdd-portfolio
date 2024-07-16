import { createContext, useState } from 'react'

import type { HasReactNodeChildren } from '../types/childrenTypes'

interface BodyScrollContextProps {
    bodyIsScrolling: boolean,
    setBodyIsScrolling: React.Dispatch<React.SetStateAction<boolean>>
}

export const BodyScrollContext = createContext({} as BodyScrollContextProps)

const BodyScrollProvider = (
    { children }: HasReactNodeChildren
) => {
    const [bodyIsScrolling, setBodyIsScrolling] = useState<boolean>(true)
    return (
        <BodyScrollContext.Provider value={{ bodyIsScrolling, setBodyIsScrolling }}>{children}</BodyScrollContext.Provider>
    )
}

export default BodyScrollProvider
