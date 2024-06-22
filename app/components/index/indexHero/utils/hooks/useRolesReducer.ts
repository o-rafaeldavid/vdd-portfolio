import { useReducer } from "react"
import { COUNT_ACTION_KIND } from "../enums/rolesReducer.enum"
import { PHASE_ACTION_KIND } from "../enums/rolesReducer.enum"
import { stateProps } from "../types/rolesReducer.type"
import { actionProps } from "../types/rolesReducer.type"

////////////////
const initialState = { count: 0, phase: PHASE_ACTION_KIND.STAY }
////////////////
const reducer = (
    state: stateProps,
    action: actionProps
) => {
    const { count } = state

    const returnState = {
        changeCount: (i: number) => ({ ...state, count: count + i }),
        changePhase: (ph: PHASE_ACTION_KIND) => ({ ...state, phase: ph })
    }

    switch (action.type) {
        case COUNT_ACTION_KIND.INCREASE: return returnState.changeCount(1)
        case PHASE_ACTION_KIND.STAY: return returnState.changePhase(PHASE_ACTION_KIND.STAY)
        case PHASE_ACTION_KIND.WHITTING: return returnState.changePhase(PHASE_ACTION_KIND.WHITTING)
        case PHASE_ACTION_KIND.GOING: return returnState.changePhase(PHASE_ACTION_KIND.GOING)
        case PHASE_ACTION_KIND.COMING: return returnState.changePhase(PHASE_ACTION_KIND.COMING)

        default: return state
    }
}

export const useRolesReducer = () => useReducer(reducer, initialState)