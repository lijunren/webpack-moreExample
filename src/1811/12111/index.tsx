import * as React from "react";
import * as ReactDom from "react-dom";

export default class Actives extends React.Component<{}, {}> {
    public render() {
        return <div>这是写的例子/我的的订单</div>;
    }
}
const app = document.createElement("div");
document.body.appendChild(app);
ReactDom.render(<Actives/>, app);
