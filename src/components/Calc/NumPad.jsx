import React from 'react'

function NumPad (props) {

    const numArr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    const symbols = ['+', '-', '/', 'x']

    return (
        <div>
            <div className="SymbolPad">
                {symbols.map(symbol => {
                    return <button key={symbol} onClick={props.addToSymbol}>{symbol}</button>
                })}
            </div>
            <div className="NumPad">
                {numArr.map(num => {
                    return <button key={num} onClick={props.addToInput}>{num}</button>
                })}
                <button onClick={props.calculate}>Calculate!!!!</button>
                <button onClick={props.clear}>Clear!!!!</button>
            </div>
        </div>
        )
}

export default NumPad