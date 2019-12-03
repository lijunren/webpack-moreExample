import * as React from "react";
import Title from "../title/index";
import Votle from "../../containers/volte/volte";
import { Provider} from "react-redux";
import store from "../../redux/index";
import "./index.scss"

export interface Istate {
    title?: any;
}
export default class Home extends React.Component<Istate, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return <div>
            <Title title="首页"/>
            <Provider store={store}>
                <Votle/>
            </Provider>
            
        </div>;
    }
}
