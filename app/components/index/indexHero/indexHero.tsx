"use client"

import DynamicHeading from "../../global/dynamicHeading/dynamicHeading";
import Viewport from "../../global/viewport/viewport";
import MyRoles from "./components/myRoles";
import indexHero from "./indexHero.module.scss"

export default function IndexHero(){
    return(
        <Viewport>
            <div className="safespace">
                <div className={indexHero.mensagemHero}>
                    <MyRoles/>
                    <DynamicHeading>CONSTRUINDO CRIAÇÕES NA WEB</DynamicHeading>
                </div>
            </div>
        </Viewport>
    )
}