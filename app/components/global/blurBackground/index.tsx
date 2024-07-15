import { useWindowSize } from '@uidotdev/usehooks'
import AbstractToBlur from '@/app/assets/global/abstractToBlur'
import blurBackgroundStyle from './.module.scss'

const BlurBackground = () => {
    const { width, height } = useWindowSize()
    const mediumDesktop = () => width! > 1400
    const biggerThanTablet = () => width! > 1024
    const biggerThanMobile = () => width! > 550
    const mediumHeight = () => height! > 800
    return (
        <div id={blurBackgroundStyle.blurDiv}>
            {/* Azul Cima Esquerda */}
            <AbstractToBlur
                blur={biggerThanTablet() ? '16rem' : (biggerThanMobile() && mediumHeight()) ? '10rem' : '14rem'}
                opacity={biggerThanTablet() ? 0.5 : (biggerThanMobile() && mediumHeight()) ? 0.3 : 0.4}
                fill='azul-eletrico'
                top={biggerThanTablet() ? '-5rem' : (biggerThanMobile() && mediumHeight()) ? '-10rem' : '0rem'}
                left={mediumDesktop() ? '-17rem' : biggerThanTablet() ? '-23rem' : (biggerThanMobile() && mediumHeight()) ? '-15rem' : '-17rem'}
                rotate={biggerThanTablet() ? '0deg' : (biggerThanMobile() && mediumHeight()) ? '5deg' : '13deg'}
                scale={(biggerThanMobile() && mediumHeight()) ? 1 : 1.3}
                radius={biggerThanTablet() ? 7 : (biggerThanMobile() && mediumHeight()) ? 3 : 1.5}
                cicleTime={13000}
            />
            {/* Verde Cima Esquerda */}
            <AbstractToBlur
                blur={biggerThanTablet() ? '8rem' : (biggerThanMobile() && mediumHeight()) ? '6rem' : '10rem'}
                opacity={biggerThanTablet() ? 0.35 : (biggerThanMobile() && mediumHeight()) ? 0.2 : 0.4}
                fill='verde-agua'
                top={biggerThanTablet() ? '-5rem' : '-30rem'}
                left={mediumDesktop() ? '-45rem' : biggerThanTablet() ? '-40rem' : '-10rem'}
                rotate={biggerThanTablet() ? '45deg' : '55deg'}
                scale={mediumDesktop() ? 1 : biggerThanTablet() ? 0.7 : 0.8}
                radius={biggerThanTablet() ? 3 : 1}
            />
            {/* Azul Cima Direita */}
            {biggerThanTablet() && <AbstractToBlur
                blur="8rem"
                opacity={mediumDesktop() ? 0.2 : 0.1}
                fill='azul-eletrico'
                top={'-20rem'}
                right={mediumDesktop() ? '0rem' : '-10rem'}
                rotate='100deg'
                scale={mediumDesktop() ? 1.7 : 1}
                radius={2}
                cicleTime={5000}
                clockWise
            />}
            {/* Verde Meio Direita */}
            {(biggerThanMobile() && mediumHeight()) && <AbstractToBlur
                blur={biggerThanTablet() ? '8rem' : '4rem'}
                opacity={biggerThanTablet() ? 0.25 : 0.15}
                fill='verde-agua'
                bottom={biggerThanTablet() ? '5rem' : '-12rem'}
                right={biggerThanTablet() ? '-45rem' : '-25rem'}
                rotate={biggerThanTablet() ? '230deg' : '200deg'}
                scale={1}
                radius={biggerThanTablet() ? 3 : 1.5}
            />}
            {/* Azul Baixo Direita */}
            {(biggerThanMobile() && mediumHeight()) && <AbstractToBlur
                blur={biggerThanTablet() ? '20rem' : '8rem'}
                opacity={mediumDesktop() ? 0.25 : biggerThanTablet() ? 0.2 : 0.1}
                fill='azul-eletrico'
                bottom={biggerThanTablet() ? '-30rem' : '-25rem'}
                right={biggerThanTablet() ? '10rem' : '-10rem'}
                rotate={biggerThanTablet() ? '210deg' : '-70deg'}
                scale={biggerThanTablet() ? 1 : 0.8}
                radius={biggerThanTablet() ? 2 : 1.5}
                cicleTime={8000}
            />}
            {/* Background Centro Centro */}
            <AbstractToBlur
                blur={biggerThanTablet() ? '10rem' : (biggerThanMobile() && mediumHeight()) ? '20rem' : '5rem'}
                opacity={mediumDesktop() ? 1 : biggerThanTablet() ? 0.2 : 0.5}
                fill='background'
                bottom={(biggerThanMobile() && mediumHeight()) ? '20%' : '-5rem'}
                right={(biggerThanMobile() && mediumHeight()) ? '25%' : '-10rem'}
                rotate={(biggerThanMobile() && mediumHeight()) ? '230deg' : '190deg'}
                radius={(biggerThanMobile() && mediumHeight()) ? 3 : 2}
                clockWise
            />
        </div>
    )
}

export default BlurBackground