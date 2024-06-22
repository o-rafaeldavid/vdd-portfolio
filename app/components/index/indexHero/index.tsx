"use client"

import DynamicHeading from "../../global/dynamicHeading";
import { Viewports } from "../../global/viewport/viewport";
import MyRoles from "./components/myRoles";
import styleModule from "./.module.scss"

export default function IndexHero() {
    return (
        <Viewports.withSafespace
            marginSafespace={true}
            marginViewport={true}
        >
            <div className={styleModule.mensagemHero}>
                <MyRoles />
                <DynamicHeading>CONSTRUINDO CRIAÇÕES NA WEB</DynamicHeading>
            </div>
        </Viewports.withSafespace>
    )
}