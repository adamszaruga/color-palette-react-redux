let initialState = {
    proposedColor: "#000000",
    palette: []
}

let reducer = (state = initialState, action) => {
    // return a new state, given the old state and the current action
    let { type } = action;
    if (type === "ADD_COLOR") {
        return {
            palette: state.palette.concat(state.proposedColor),
            proposedColor: '#' + Math.random().toString(16).slice(2, 8)
        }
    } else if ( type === "SKIP_COLOR") {
        return {
            ...state,
            proposedColor: '#' + Math.random().toString(16).slice(2, 8)
        }
    } else {
        return state;
    }
}

export default reducer;
