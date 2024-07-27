import { useMediaQuery } from "@uidotdev/usehooks"

export const useAppQueries = () => {
    const tablet = useMediaQuery('(max-width: 1024px)')
    return { tablet }
}