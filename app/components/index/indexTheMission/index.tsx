"use client"

import Viewport from "../../global/viewport"
import index_themission_style from "./.module.scss"

const IndexTheMission = () => {
    return (
        <Viewport
            id={index_themission_style.indexMission}
            withPaddingTop
            withPaddingSide
            onViewEnter={() => console.log("The Mission")}
        >
            <div>
                <h2>The Mission</h2>
            </div>
            <div>

            </div>
        </Viewport>
    )
}

export default IndexTheMission