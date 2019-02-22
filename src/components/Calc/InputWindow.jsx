import React from 'react'

function InputWindow (props) {
    return (
        <div className="inputWin">
            <h3>Input</h3>
            <h2>{props.leftInput} {props.symbol} {props.rightInput}</h2>
        </div>
    )
}

export default InputWindow