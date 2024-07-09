"use client"
import GradientSpan from "../../global/gradientSpan"
import Viewport from "../../global/viewport"
import indexHeroStyle from "./.module.scss"
import MyRoles from "./myRoles"

const IndexHero = () => {
    return (
        <Viewport
            id={indexHeroStyle.mensagemHero}
            withPaddingTop
            withPaddingBottom
            withPaddingSide
        >
            <div>
                <br /><br />
                <h2>Searching for<br /><GradientSpan>value</GradientSpan> on web?</h2>
                <br /><br />
                <MyRoles />
            </div>
        </Viewport>
    )
}

export default IndexHero