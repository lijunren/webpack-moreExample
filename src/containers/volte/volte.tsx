import * as React from "react";
import Votle from "../../component/votle/index"
import Buttons from "../../component/button/index"
import { connect } from "react-redux"
import store from "../../redux/index"
import action from  "../../redux/action/index"

export interface Istate {
    title?: any;
}
export default class VotleComponent extends React.Component<Istate, {}> {
    constructor(props: any) {
        super(props);
    }
    private states = store.getState();
    public render() {
        return <div>
            <Votle/>
            <Buttons/>
        </div>;
    }
}
