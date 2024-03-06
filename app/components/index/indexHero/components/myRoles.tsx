"use client"
import { useEffect, useReducer, useState } from "react"
import myRoles from "./myRoles.module.scss"
import "./myRoles.css"

const roles = [
    "front-end dev",
    "ui/ux designer",
    "web designer",
    "brand designer"
]
const roleTime = 1000
const delayBetweenRoles = 500


//////////////////////////////////////////////////////////////////////
//////////////////////////////
interface stateProps{
    count: number,
    phase: string // "stayRole" | "whittingRole" | "goingRole" | "comingRole"
}
interface actionProps{
    type: "decrement" | "increment"
}
const initialState = { count: 0, phase: "stayRole" }
const reducer = (
    state : stateProps,
    action : actionProps
) => {
    const { count, phase } = state
    switch(action.type){
        case "decrement" : return {
            ...state,
            count: count - 1
        }
        case "increment" : return {
            ...state,
            count: count + 1
        }

        default: return state
    }
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////

export default function MyRoles(){
    const [state, dispatch]= useReducer(reducer, initialState)
    const maxRoles = roles.length - 1;


    useEffect(
        () => {
        }, []
    )

    /* useEffect(
        () => {
            document.documentElement.style.setProperty('--myRoles-percentage', `${rolesPercentage}%`);
        }, [rolesPercentage]
    )
 */
    return(
        <h2 className={myRoles.myRolesHeadings}>{/* front-end dev */}</h2>
    )
}