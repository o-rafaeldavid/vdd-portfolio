"use client"
import { useWindowSize } from "@uidotdev/usehooks"
import GradientSpan from "../../global/gradientSpan"
import Viewport from "../../global/viewport"
import indexHeroStyle from "./.module.scss"
import MyRoles from "./myRoles"

const IndexHero = () => {
    const { width } = useWindowSize()
    const biggerThanMobile = () => width! > 550
    return (
        <Viewport
            id={indexHeroStyle.mensagemHero}
            withPaddingTop
            withPaddingBottom
            withPaddingSide
        >
            <div>
                <br /><br />
                <h2>
                    Searching
                    {!biggerThanMobile() ? <br /> : <> </>}for
                    {biggerThanMobile() ? <br /> : <> </>}<GradientSpan>value</GradientSpan>
                    {!biggerThanMobile() ? <br /> : <> </>}on web?
                </h2>
                <br /><br />
                <MyRoles />
            </div>
        </Viewport>
    )
}

export default IndexHero