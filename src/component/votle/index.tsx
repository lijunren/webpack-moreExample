import * as React from "react";
import store from "../../redux/index"
import { connect } from "react-redux";
import "./index.scss"

interface Iprops{
    red: any;
    blue: any;
}
interface Isates{
    width: any;
}
class Votle extends React.Component<Iprops, Isates>{
    constructor(props: any) {
        super(props);
        this.state = {
            width : '50%'
        }
    }
    public componentWillMount(){
        /* store.subscribe(() => {
        }); */
    }
    componentWillReceiveProps(nextProps:any) {
        this.computeWidth(nextProps);
    }
    private computeWidth(nextProps:any) {
        let width = "";
        if(nextProps.red !== 0 && nextProps.blue !== 0){
            width = (nextProps.red / (nextProps.red + nextProps.blue) * 100).toFixed(2) + '%';
        } else if(nextProps.red === 0 && nextProps.blue !== 0) {
            width = '0%';
        } else if(nextProps.red !== 0 && nextProps.blue === 0) {
            width = '100%';
        }
        this.setState({
            width : width,
        });
    }
    public render() {
        return <div className="spa">
            <div className="content">
                <div className="redBg" style={{width: this.state.width}}>
                    <p className="flLeft">红队({`${this.props.red}票`})</p>
                </div>
                <p className="flRight">蓝队({`${this.props.blue}票`})</p>
            </div>
        </div>;
    }
}
const mapStateToProps = (state:any) => {
    return state
};
const mapDispatchToProps = () => {
    return {
        supportR:(action:any)=>{store.dispatch(action.supportR)},
        supportB:(action:any)=>{store.dispatch(action.supportB)}
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Votle);
