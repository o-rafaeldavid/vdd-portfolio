"use client"

import DynamicHeading from "../../global/dynamicHeading";
import MyRoles from "./components/myRoles";
import { Viewports } from "../../global/viewport";

import indexHeroStyle from "./.module.scss"
import { getProjects } from "@/app/utils/api/getProjects";
import { Suspense } from "react";

const HeroImage = async () => {
    const projects = await getProjects()
    return (
        <img src={projects[0].metadata.hero_image.url} />
    )
}

const IndexHero = () => {
    return (
        <Viewports.withSafespace
            marginSafespace={true}
            marginViewport={true}
            className={indexHeroStyle.section}
        >
            <div className={indexHeroStyle.imagemHero}>
                <Suspense fallback={<span>Loading...</span>}>
                    <HeroImage />
                </Suspense>
            </div>
            <div className={indexHeroStyle.mensagemHero}>
                <MyRoles />
                <DynamicHeading>DANDO CRIAÇÕES À WEB</DynamicHeading>
            </div>
        </Viewports.withSafespace>
    )
}

export default IndexHero
