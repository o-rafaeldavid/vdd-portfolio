import blurBackgroundStyle from './.module.scss'

const BlurBackground = () => {
    return (
        <div id={blurBackgroundStyle.blurDiv}>
            <div
                className="azul_eletrico_bg"
                style={{
                    top: "20%",
                    left: "20%"
                }}></div>
            <div
                className="verde_agua_bg"
                style={{
                    top: "10%",
                    left: "70%"
                }}></div>
        </div>
    )
}

export default BlurBackground