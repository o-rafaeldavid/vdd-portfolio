import "./viewport.scss"

interface ViewportProps{
    children?: React.ReactNode,
}

export default function Viewport({children} : ViewportProps){
    return(
        <div className="viewport">{children}</div>
    )
}