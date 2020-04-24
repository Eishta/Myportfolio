import React from 'react';
import Button from './Button'

class KeyPad extends React.Component {
    renderSqaure(i) {
        return <Button onClick={() => this.props.onClick(i)} value={i} />

    }
    render() {
        return (<div>
            <div className='board-row'>
                {this.renderSqaure('C')}
                {this.renderSqaure('<-')}
                {this.renderSqaure('%')}
                {this.renderSqaure('/')}
            </div>
            <div className='board-row'>
                {this.renderSqaure(7)}
                {this.renderSqaure(8)}
                {this.renderSqaure(9)}
                {this.renderSqaure('*')}
            </div>
            <div className='board-row'>
                {this.renderSqaure(4)}
                {this.renderSqaure(5)}
                {this.renderSqaure(6)}
                {this.renderSqaure('-')}
            </div>
            <div className='board-row'>
                {this.renderSqaure(1)}
                {this.renderSqaure(2)}
                {this.renderSqaure(3)}
                {this.renderSqaure('+')}
            </div>
            <div className='board-row'>
                {this.renderSqaure('.')}
                {this.renderSqaure(0)}
                {this.renderSqaure('=')}
            </div>
        </div>)
    }

}

export default KeyPad;