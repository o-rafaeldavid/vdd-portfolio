import "./viewport.scss"

interface ViewportProps{
    children?: React.ReactNode,
    margin?: boolean
}

function Viewport({children, margin = false} : ViewportProps){
    return(
        <div className={`viewport ${margin ? "margin" : ""}`}>{children}</div>
    )
}

function Safespace({children, margin = false} : ViewportProps){
    return(
        <div className={`safespace ${margin ? "margin" : ""}`}>{children}</div>
    )
}

interface ViewportWithSafespaceProps{
    children?: React.ReactNode,
    marginViewport?: boolean,
    marginSafespace?: boolean
}

function WithSafespace({children, marginViewport = false, marginSafespace = false} : ViewportWithSafespaceProps){
    return(
        <Viewport margin={marginViewport}>
            <Safespace margin={marginSafespace}>{children}</Safespace>
        </Viewport>
    )
}


export const Viewports = {
    normal: Viewport,
    safespace: Safespace,
    withSafespace: WithSafespace
}