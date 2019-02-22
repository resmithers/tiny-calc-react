import React from 'react'

function OutputWindow (props) {
    return (
        <div className="outputWin">
            <h3>Output</h3>
            <h2>{props.outputVal}</h2>
        </div>
    )
}

export default OutputWindow