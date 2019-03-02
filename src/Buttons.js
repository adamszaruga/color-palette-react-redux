import React from 'react';
import { connect } from 'react-redux'; 

let Buttons = (props) => (
    <div className="buttons">
        <button onClick={props.skip}>Skip</button>
        <button onClick={props.add}>Add</button>
    </div>
)

let mapDispatchToProps = (dispatch) => {
    return {
        skip: () => dispatch({ type: "SKIP_COLOR" }),
        add: () => dispatch({ type: "ADD_COLOR" })
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Buttons); 