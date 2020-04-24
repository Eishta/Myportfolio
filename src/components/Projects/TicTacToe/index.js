import React from 'react';
import './Game.css';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            squares: Array(9).fill(null)
        }
    }
    handleClick = (i) => {
        // const history = this.state.history.slice(0,this.state.stepNumber+1);
        // const square= history[history.length-1];
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const winner = calculateWinner(squares);
        // if(winner){
        //     alert('Winner ');
        //     return;
        // }
        this.setState((prevState) => {
            return {
                squares,
                xIsNext: !prevState.xIsNext,
                stepNumber: prevState.stepNumber + 1
            }
        })
    }
    reset = () => {
        this.setState({
            xIsNext: true,
            stepNumber: 0,
            squares: Array(9).fill(null)
        })
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        // if(winner){
        //     alert('Winner ');  
        // }
        return (<div className='container game-board'>
            <div className='header'>
                Lets play Tic Tac Toe
            </div>
            <div className='game'>
                <Board onClick={(i) => this.handleClick(i)}
                    squares={this.state.squares} />
            </div>
            <div className='winner'>{winner ? `Winner is ${winner}` : `Turn of ${this.state.xIsNext ? 'X' : 'O'}`}</div>
            <button className='reset' onClick={this.reset}>Reset</button>
        </div>)
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) { return squares[a]; }
    }
    return null;
}
export default Game;