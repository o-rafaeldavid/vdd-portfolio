"use client"

import DynamicHeading from "../../global/dynamicHeading";
import MyRoles from "./components/myRoles";
import { Viewports } from "../../global/viewport";
import indexHeroStyle from "./.module.scss"

const IndexHero = () => {
    return (
        <Viewports.withSafespace
            marginSafespace={true}
            marginViewport={true}
        >
            <div className={indexHeroStyle.mensagemHero}>
                <MyRoles />
                <DynamicHeading>DANDO CRIAÇÕES À WEB</DynamicHeading>
            </div>
        </Viewports.withSafespace>
    )
}

export default IndexHero
