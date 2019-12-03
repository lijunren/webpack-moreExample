import * as React from "react";
import actions from  "../../redux/action/index"
import "./index.scss"
import store from "../../redux";
import { connect } from "react-redux";

interface Iprops{
    supportR:any,
    supportB:any
}
interface Isates{
    
}
class Button extends React.Component<Iprops, Isates>{
    constructor(props: any) {
        super(props);
        this.state = {
            
        }
    }
    public render() {
        return <div className="btns">
            <a href="javascript:void(0)" className="red"
            onClick={ () => {this.props.supportR()} }>支持红队</a>
            <a href="javascript:void(0)" className="blue"
            onClick={ () => {this.props.supportB()} }>支持蓝队</a>
        </div>;
    }
}
const mapStateToProps = (state:any) => {
    return state
};
const mapDispatchToProps = () => {
    const action = {...actions}
    return {
        supportR:()=>{store.dispatch(action.supportR)},
        supportB:()=>{store.dispatch(action.supportB)}
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Button);

