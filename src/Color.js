import React from 'react';

let Color = ({hex}) => (
    <div style={{ backgroundColor: hex }} className="square">
        <div className="hex">{hex}</div>
    </div>
)

export default Color;