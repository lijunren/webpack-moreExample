import * as React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
export interface Istate {
    title?: any;
}

export default class About extends React.Component<Istate, {}> {
    public render() {
        return <div>about
            <div>
                <Route path="/about/ex" component={this.Ex}/>
            </div>
            <Link to="/about/ex">toEx</Link>
        </div>;
    }
    public Ex = () => {
        return <div>简单的例子</div>;
    }
}
