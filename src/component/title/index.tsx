import * as React from "react";
import "./index.scss";

interface Istate {
    title?: any;
}
interface Iprop {
    title?: any;
}
export default class Title extends React.Component<Iprop, Istate> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "暂无标题",
        };
    }
    // public componentWillMount() {}
    public render() {
        return <div className="title">{this.props.title ? this.props.title : this.state.title}</div>;
    }
}
