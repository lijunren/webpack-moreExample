import states from "../store/state"
const votle = (state = states.score, action:any) => {
    let newState = {...state};
    switch(action.type) {
        case "ADD_RED":
            newState.red++
            break;
        case "ADD_BLUE":
            newState.blue++
            break;
        default:
            newState = state
            break;
    }
    return newState;
}
export default votle