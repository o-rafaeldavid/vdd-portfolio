const AbstractToBlur = ({ blur, fill, opacity }: { blur: string, fill: string, opacity: number }) => {
    return (
        <svg
            width="721"
            height="934"
            viewBox="0 0 721 934"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                filter: `blur(${blur})`,
                opacity: opacity
            }}
        >
            <path
                d="M301.715 429.5C324.115 239.5 590.381 165.333 720.715 152C669.548 109.167 562.215 21.7 542.215 14.5C517.215 5.5 17.2146 0 3.7146 0C-7.0854 0 8.2146 154.333 17.2146 231.5L3.7146 934C203.381 899 577.015 824 474.215 804C345.715 779 273.715 667 301.715 429.5Z"
                fill={fill}
            />
        </svg>
    )
}

export default AbstractToBlur