"use client"
import Viewport from "../../global/viewport"
import indexHeroStyle from "./.module.scss"

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
                <h2>Searching for<br />value on web?</h2>
                <br /><br />
                <h5>creative developer</h5>
            </div>
        </Viewport>
    )
}

export default IndexHero