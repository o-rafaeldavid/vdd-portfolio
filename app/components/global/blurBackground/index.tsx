import AbstractToBlur from '@/app/assets/global/abstractToBlur'
import blurBackgroundStyle from './.module.scss'

const BlurBackground = () => {
    return (
        <div id={blurBackgroundStyle.blurDiv}>
            <AbstractToBlur
                blur="8rem"
                opacity={0.25}
                fill="rgb(0, 255, 194)"
                top={'-5rem'}
                left={'-45rem'}
                rotate='45deg'
            />
            <AbstractToBlur
                blur="16rem"
                opacity={0.4}
                fill="rgb(0, 178, 255)"
                top={'-5rem'}
                left={'-17rem'}
            />
            <AbstractToBlur
                blur="8rem"
                opacity={0.2}
                fill="rgb(0, 178, 255)"
                top={'-20rem'}
                right={'0rem'}
                rotate='100deg'
                scale={1.7}
            />
            <AbstractToBlur
                blur="8rem"
                opacity={0.25}
                fill="rgb(0, 255, 194)"
                bottom={'5rem'}
                right={'-45rem'}
                rotate='230deg'
            />
            <AbstractToBlur
                blur="20rem"
                opacity={0.25}
                fill="rgb(0, 178, 255)"
                bottom={'-30rem'}
                right={'10rem'}
                rotate='210deg'
            />
        </div>
    )
}

export default BlurBackground