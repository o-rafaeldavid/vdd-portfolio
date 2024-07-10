import AbstractToBlur from '@/app/assets/global/abstractToBlur'
import blurBackgroundStyle from './.module.scss'
import { useWindowSize } from '@uidotdev/usehooks'

const BlurBackground = () => {
    const { width } = useWindowSize()
    const mediumDesktop = () => width! > 1400
    const biggerThanTablet = () => width! > 1024
    return (
        <div id={blurBackgroundStyle.blurDiv}>
            <AbstractToBlur
                blur='8rem'
                opacity={0.35}
                fill="rgb(0, 255, 194)"
                top={'-5rem'}
                left={mediumDesktop() ? '-45rem' : '-40rem'}
                rotate='45deg'
                scale={mediumDesktop() ? 1 : 0.7}
            />
            <AbstractToBlur
                blur="16rem"
                opacity={0.4}
                fill="rgb(0, 178, 255)"
                top={'-5rem'}
                left={mediumDesktop() ? '-17rem' : '-23rem'}
            />
            <AbstractToBlur
                blur="8rem"
                opacity={mediumDesktop() ? 0.2 : 0.1}
                fill="rgb(0, 178, 255)"
                top={'-20rem'}
                right={mediumDesktop() ? '0rem' : '-10rem'}
                rotate='100deg'
                scale={mediumDesktop() ? 1.7 : 1}
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
                opacity={mediumDesktop() ? 0.25 : 0.1}
                fill="rgb(0, 178, 255)"
                bottom={'-30rem'}
                right={'10rem'}
                rotate='210deg'
            />
            <AbstractToBlur
                blur="10rem"
                opacity={mediumDesktop() ? 1 : 0.1}
                fill="rgb(16, 16, 16)"
                bottom={'20%'}
                right={'25%'}
                rotate='230deg'
            />
        </div>
    )
}

export default BlurBackground