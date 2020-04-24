import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderSqaure(i) {
        return <Square onClick={() => this.props.onClick(i)} value={this.props.squares[i]} />

    }
    render() {
        return (<div>
            <div className='board-row'>
                {this.renderSqaure(0)}
                {this.renderSqaure(1)}
                {this.renderSqaure(2)}
            </div>
            <div className='board-row'>
                {this.renderSqaure(3)}
                {this.renderSqaure(4)}
                {this.renderSqaure(5)}
            </div>
            <div className='board-row'>
                {this.renderSqaure(6)}
                {this.renderSqaure(7)}
                {this.renderSqaure(8)}
            </div>
        </div>)
    }

}

export default Board;