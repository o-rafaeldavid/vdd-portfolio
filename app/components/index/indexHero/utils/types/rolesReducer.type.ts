import { COUNT_ACTION_KIND } from "../enums/rolesReducer.enum"
import { PHASE_ACTION_KIND } from "../enums/rolesReducer.enum"

export type stateProps = {
    count: number,
    phase: PHASE_ACTION_KIND
}
export type actionProps = {
    type: PHASE_ACTION_KIND | COUNT_ACTION_KIND
}