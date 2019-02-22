import React, {Component} from 'react'
import OutputWindow from './OutputWindow';
import InputWindow from './InputWindow';
import NumPad from './NumPad';

class Calc extends Component {
   state = {
       leftInput: '',
       symbol: null,
       rightInput: '',
       outputVal: null
   }

   addToInput = (event) => {
       const char = event.target.textContent
           this.setState((prevState)=> { 
            if (!prevState.symbol) {
                let input = prevState.leftInput + char
                return { leftInput: input }
            } else {
                let input = prevState.rightInput + char
                return { rightInput: input }
            }
        })
   }

   addToSymbol = (event) => {
       const symbol = event.target.textContent
       this.setState({ symbol })
   }

   calculate = () => {
    this.setState((prevState) => {
        let a = +prevState.leftInput
        let b = +prevState.rightInput
        let out = 0;

        switch (prevState.symbol) {
            case '+': out = a + b; break;
            case '-': out = a - b; break;
            case '/': out = a / b; break;
            case 'x': out = a * b; break;
            case null: out = a || b; break
            default: out = 'NaN'; break;
        }
        return {
            outputVal: out, 
            leftInput: '',
            symbol: null,
            rightInput: ''
        }
    })
   }

   clear = () => {
       this.setState({
            leftInput: '',
            symbol: null,
            rightInput: '',
            outputVal: null
        })
   }
   
    render() {
        console.log(this.state)
        const {leftInput, symbol, rightInput, outputVal} = this.state
        return (
            <div>
                <div className="View">
                    <OutputWindow outputVal={outputVal}/>
                    <InputWindow leftInput={leftInput} symbol={symbol} rightInput={rightInput}/>
                </div>
                <NumPad addToInput={this.addToInput} addToSymbol={this.addToSymbol} calculate={this.calculate} clear={this.clear}/>
            </div>
        )
   }
  
}


export default Calc