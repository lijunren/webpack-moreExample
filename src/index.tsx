import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter, HashRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import About from "../src/component/about/index";
import Home from "../src/component/home/index";
import Computer from "../src/component/computer/index"

export default class Main extends React.Component<{}, {}> {
    public render() {
        return <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/computer" exact component={Computer}/>
                <Redirect to="/"/>
            </Switch>
        </div>;
    }
}
/* const app = document.createElement("div");
document.getElementsByTagName("body")[0].append(app); */
const app = document.getElementById("app");

const App = () => (
    <HashRouter>
        <Main/>
    </HashRouter>
);
ReactDom.render(<App/>, app);
