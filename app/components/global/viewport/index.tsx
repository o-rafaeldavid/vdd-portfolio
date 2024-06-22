import "./viewport.scss"
import type { ViewportProps } from "./utils/types/viewportTypes"
import type { ViewportWithSafespaceProps } from "./utils/types/viewportTypes"

const Viewport = ({ children, margin = false }: ViewportProps) => <div className={`viewport ${margin ? "margin" : ""}`}>{children}</div>

const Safespace = ({ children, margin = false }: ViewportProps) => <div className={`safespace ${margin ? "margin" : ""}`}>{children}</div>

const WithSafespace = ({ children, marginViewport = false, marginSafespace = false }: ViewportWithSafespaceProps) => {
    return (
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