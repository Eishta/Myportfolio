import React from 'react';
import './KeyPad.css';
import KeyPad from './KeyPad';
import Output from './Output';
import { create, all } from 'mathjs'

const config = { };
const math = create(all, config);

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ''
        }
    }
    handleClick = (i) => {
        if(i=== '='){
            const output = math.evaluate(this.state.output);
            this.setState({output});
        }else if(i==='C'){
            this.setState({output : ''})
        }
        else {
            this.setState((prevState) => {
                return {
                    output: `${prevState.output}${i}` 

                }
            })
        }
     
    }
    render() {
        // const winner = calculateWinner(this.state.squares);
        // if(winner){
        //     alert('Winner ');        }
        return (<div className='game'>
            <div className='game-board'>
            <KeyPad onClick={(i)=> {this.handleClick(i)}} />
            <Output value={this.state.output}/>
            {/* onClick={(i) => this.handleClick(i)}
                squares={this.state.squares}  */}
               
                </div>
        </div>)
    }
}
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
//     ];

//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) { return squares[a]; }
        
//     }
//      return null;
// }
export default Calculator;