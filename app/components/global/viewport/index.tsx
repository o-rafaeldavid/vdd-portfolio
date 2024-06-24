import "./viewport.scss"
import type { ViewportProps } from "./utils/types/viewportTypes"
import type { ViewportWithSafespaceProps } from "./utils/types/viewportTypes"

const Viewport = ({ children, margin = false, className }: ViewportProps) => <div className={`viewport ${margin ? "margin" : ""} ${className}`}>{children}</div>

const Safespace = ({ children, margin = false }: ViewportProps) => <div className={`safespace ${margin ? "margin" : ""}`}>{children}</div>

const WithSafespace = ({ children, marginViewport = false, marginSafespace = false, className }: ViewportWithSafespaceProps) => {
    return (
        <Viewport margin={marginViewport} className={className}>
            <Safespace margin={marginSafespace}>{children}</Safespace>
        </Viewport>
    )
}

export const Viewports = {
    normal: Viewport,
    withSafespace: WithSafespace
}