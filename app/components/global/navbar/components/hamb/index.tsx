"use client"
import hambStyle from "./.module.scss"

const Hamb = (props: { onClick: () => void }) => {
    return (
        <svg
            id={hambStyle.hamb} className={`pointer glowColorHover`}
            x={0} y={0}
            viewBox="0 0 120 100"
            onClick={props.onClick}
        >
            <line x1={0} y1={8} x2={120} y2={8} />
            <line x1={0} y1={50} x2={120} y2={50} />
            <line x1={0} y1={92} x2={120} y2={92} />
        </svg>
    )
}

export default Hamb