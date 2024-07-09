import type { ReactNode } from 'react'

export type HasChilldren<T> = {
    children?: T
}

export type HasReactNodeChilldren = {
    children?: ReactNode | ReactNode[]
}
