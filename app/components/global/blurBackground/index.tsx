import AbstractToBlur from '@/app/assets/global/abstractToBlur'
import blurBackgroundStyle from './.module.scss'

const BlurBackground = () => {
    return (
        <div id={blurBackgroundStyle.blurDiv}>
            <AbstractToBlur blur="10rem" opacity={0.4} fill="rgb(0, 178, 255)" />
        </div>
    )
}

export default BlurBackground