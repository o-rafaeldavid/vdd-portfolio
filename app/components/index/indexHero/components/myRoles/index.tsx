"use client"
import { LegacyRef, useEffect, useReducer, useRef, useState } from "react"
import { useAnimationFrame } from "framer-motion"
import { useRolesReducer } from "../../utils/hooks/useRolesReducer"
import { mapear } from "@/app/lib/general"
import { roles } from "../../utils/common/roles"
import { delayPhases } from "../../utils/common/delayPhases"
import { COUNT_ACTION_KIND } from "../../utils/enums/rolesReducer.enum"
import { PHASE_ACTION_KIND } from "../../utils/enums/rolesReducer.enum"
import myRolesStyle from "./.module.scss"

const maxRoles = roles.length;

const MyRoles = () => {
    let mainHeadingRef = useRef<HTMLHeadingElement>()
    let secondHeadingRef = useRef<HTMLHeadingElement>()
    const [state, dispatch] = useRolesReducer()

    const delayPhasesVals = Object.values(delayPhases)
    const delayPhasesSum = (min: number, max: number) => {
        return delayPhasesVals.slice(min, max + 1).reduce((accumulator, current) => accumulator + current)
    }
    const delayPhaseTOTALTime = delayPhasesSum(0, delayPhasesVals.length - 1)

    ////////////
    const isStaying = () => state.phase === PHASE_ACTION_KIND.STAY
    const isWhitting = () => state.phase === PHASE_ACTION_KIND.WHITTING
    const isGoing = () => state.phase === PHASE_ACTION_KIND.GOING
    const isComing = () => state.phase === PHASE_ACTION_KIND.COMING
    const [myRolesPercentage, setMyRolesPercentage] = useState<number>(0)

    //////////// ANIMAÇÕES (DELAYS E AFINS)
    const checkBetween = (variable: number, min: number, max: number) => (variable >= min && variable < max)
    useAnimationFrame((time) => {
        const actualTime = time % delayPhaseTOTALTime

        // PRIMEIRA FASE (novo apenas ficar)
        if (isStaying() && checkBetween(actualTime, delayPhasesSum(0, 0), delayPhasesSum(0, 1))) dispatch({ type: PHASE_ACTION_KIND.WHITTING })
        // SEGUNDA FASE (processo de whitting)
        else if (isWhitting()) {
            setMyRolesPercentage(mapear(actualTime, delayPhasesSum(0, 0), delayPhasesSum(0, 1), 0, 100))
            if (checkBetween(actualTime, delayPhasesSum(0, 1), delayPhasesSum(0, 2))) dispatch({ type: PHASE_ACTION_KIND.GOING })
        }
        // TERCEIRA FASE (antigo a bazar)
        else if (isGoing() && checkBetween(actualTime, delayPhasesSum(0, 2), delayPhasesSum(0, 3))) dispatch({ type: PHASE_ACTION_KIND.COMING })
        // QUARTA / ÚLTIMA FASE (novo a chegar)
        else if (isComing() && checkBetween(actualTime, 0, delayPhasesSum(0, 1))) {
            dispatch({ type: PHASE_ACTION_KIND.STAY })
            dispatch({ type: COUNT_ACTION_KIND.INCREASE })
            setMyRolesPercentage(0)
        }
    })

    const [myRolesDivWidth, setMRDIVWidth] = useState<number>(0)
    useEffect(
        () => {
            const mainHeading = mainHeadingRef.current
            const secondHeading = secondHeadingRef.current
            if (mainHeading !== undefined && secondHeading !== undefined) {
                setMRDIVWidth((mainHeading.clientWidth < secondHeading.clientWidth) ? secondHeading.clientWidth : mainHeading.clientWidth)
            }
        }, [state.count]
    )

    return (
        <div
            id={myRolesStyle.myRolesDiv}
            style={{
                width: myRolesDivWidth,
                '--myRoles-percentage': `${myRolesPercentage}%`
            } as React.CSSProperties}
        >
            <h2
                ref={mainHeadingRef as LegacyRef<HTMLHeadingElement>}
                className={`${myRolesStyle.myRolesHeadings} ${(isGoing() || isComing()) ? myRolesStyle.myRolesAnimationDown : ""}`}
            >
                {roles[state.count % maxRoles]}
            </h2>
            <h2
                ref={secondHeadingRef as LegacyRef<HTMLHeadingElement>}
                className={`${myRolesStyle.myRolesHeadings} ${myRolesStyle.myRolesNext} ${(isComing()) ? myRolesStyle.myRolesAnimationDown : ""}`}
            >
                {roles[(state.count + 1) % maxRoles]}
            </h2>
        </div>
    )
}

export default MyRoles
