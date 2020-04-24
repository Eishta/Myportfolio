import React from 'react';
import './KeyPad.css';
import KeyPad from './KeyPad';
import Output from './Output';
import { create, all } from 'mathjs'

const config = {};
const math = create(all, config);

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ''
        }
    }
    handleClick = (i) => {
        switch (i) {
            case '=': {
                let outputState = this.state.output;
                if (Number.isNaN(Number(outputState.slice(-1, outputState.length)))) { break; }   
                             const output = math.evaluate(this.state.output);
                this.setState({ output });
                break;
            }
            case 'C': {
                this.setState({ output: '' })
                break;
            }
            case '<=': {
                this.setState((prevState) => {
                    let prevOutput = prevState.output.substring(0, prevState.output.length - 1);
                    return { output: prevOutput }
                })
                break;
            }
            case '.':
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                {
                    let outputState = this.state.output;
                    if (Number.isNaN(Number(outputState.slice(-1, outputState.length)))) { break; }
                    else {
                        this.setState((prevState) => {
                            return {
                                output: prevState.output.concat(i)
                            }
                        })
                    }
                }
                break;
            default: {
                this.setState((prevState) => {
                    return {
                        output: prevState.output.concat(i)
                    }
                })
            }

        }
    }
    render() {
        return (<div className="container" id="background">
            <div>
                <Output value={this.state.output} />
                <KeyPad onClick={(i) => { this.handleClick(i) }} />

            </div>
        </div>)
    }
}

export default Calculator;