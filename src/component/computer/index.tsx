import * as React from "react";

interface Istate {
    title?: any;
}
export default class Home extends React.Component<Istate, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return <div>
            <h4 className="">计算器</h4>
            <div>
                <input type="number" placeholder="输入薪资"/>
                <button>计算</button>
            </div>
        </div>;
    }
}