import React, { Component } from 'react';
import * as RPN from './RPN.js';
import Keyboard from './Keyboard';
import Notes from './Notes.js';
import Row from './Row.js';
import Column from './Column.js';
import Button from './Button.js';

export class Calculator extends Component {
  state = {
    display: '',
    equation: []
  };

  componentDidMount() {
    this.allClear();
  }

  //Calculator input
  handleInputChange = event => {
    this.setState({ display: event.target.value });
  };

  //Number button click
  addToInput = val => {
    this.setState({ display: this.state.display + val });
  };

  //Delete number entry
  backClear = () => {
    this.setState({
      display: this.state.display.substring(0, this.state.display.length - 1)
    });
  };

  //Delete display and equation field
  allClear = () => {
    this.setState({
      display: '',
      equation: []
    });
  };

  //Process to add an operand to the equation
  pushOperandToEquation = val => {
    const { equation } = this.state;
    this.setState({
      equation: [...equation, val]
    });
  };

  //Process to add a number to the equation
  pushToEquation = () => {
    const { display, equation } = this.state;
    this.setState({
      equation: [...equation, display + ' '],
      display: ''
    });
  };

  //Process to run equation when equals button is pressed
  runEquation = () => {
    this.setState({
      equation: [RPN.rpn(this.state.equation) + ' ']
    });
  };

  //Goodbye message
  goodbye = () => {
    this.setState(
      {
        display: '',
        equation: 'Goodbye!'
      },
      () => {
        setTimeout(() => {
          this.setState({
            equation: []
          });
        }, 2000);
      }
    );
  };

  render() {
    const olive = {
      background: '#72a607'
    };

    return (
      <div className='mt-3'>
        <Keyboard keyValue={'1'} addToInput={this.addToInput} />
        <Keyboard keyValue={'2'} addToInput={this.addToInput} />
        <Keyboard keyValue={'3'} addToInput={this.addToInput} />
        <Keyboard keyValue={'4'} addToInput={this.addToInput} />
        <Keyboard keyValue={'5'} addToInput={this.addToInput} />
        <Keyboard keyValue={'6'} addToInput={this.addToInput} />
        <Keyboard keyValue={'7'} addToInput={this.addToInput} />
        <Keyboard keyValue={'8'} addToInput={this.addToInput} />
        <Keyboard keyValue={'9'} addToInput={this.addToInput} />
        <Keyboard keyValue={'0'} addToInput={this.addToInput} />
        <Keyboard
          keyValue={'/'}
          pushOperandToEquation={this.pushOperandToEquation}
        />
        <Keyboard
          keyValue={'*'}
          pushOperandToEquation={this.pushOperandToEquation}
        />
        <Keyboard
          keyValue={'-'}
          pushOperandToEquation={this.pushOperandToEquation}
        />
        <Keyboard
          keyValue={'+'}
          pushOperandToEquation={this.pushOperandToEquation}
        />
        <Keyboard keyValue={'Enter'} pushToEquation={this.pushToEquation} />
        <Keyboard keyValue={'='} runEquation={this.runEquation} />
        <Keyboard keyValue={'Backspace'} backClear={this.backClear} />
        <Keyboard keyValue={'c'} backClear={this.backClear} />
        <Keyboard keyValue={'a'} allClear={this.allClear} />
        <Keyboard keyValue={'q'} goodbye={this.goodbye} />

        <div className='card'>
          <div className='card-body' style={olive}>
            <div className='row equation text-wrap overflow-auto mt-2 p-2 border rounded'>
              <span>{this.state.equation}</span>
            </div>

            <div className='row mt-2 p-2'>
              <div
                className='col d-flex display text-wrap overflow-auto border rounded'
                value={this.state.display}
                onChange={this.handleInputChange}
              >
                <span>{this.state.display}</span>
              </div>
              <div className='col d-flex justify-content-start'>
                <button className='btn btn-light' onClick={this.pushToEquation}>
                  {' '}
                  Add Number To Equation
                </button>
              </div>
            </div>

            <Row>
              <Column>
                <Button value={'1'} thisClick={this.addToInput}>
                  1
                </Button>
              </Column>
              <Column>
                <Button value={'2'} thisClick={this.addToInput}>
                  2
                </Button>
              </Column>
              <Column>
                <Button value={'3'} thisClick={this.addToInput}>
                  3
                </Button>
              </Column>
              <Column>
                <Button value={'/'} thisClick={this.pushOperandToEquation}>
                  <span>&#247;</span>
                </Button>
              </Column>
            </Row>

            <Row>
              <Column>
                <Button value={'4'} thisClick={this.addToInput}>
                  4
                </Button>
              </Column>
              <Column>
                <Button value={'5'} thisClick={this.addToInput}>
                  5
                </Button>
              </Column>
              <Column>
                <Button value={'6'} thisClick={this.addToInput}>
                  6
                </Button>
              </Column>
              <Column>
                <Button value={'*'} thisClick={this.pushOperandToEquation}>
                  <span>&#215;</span>
                </Button>
              </Column>
            </Row>

            <Row>
              <Column>
                <Button value={'7'} thisClick={this.addToInput}>
                  7
                </Button>
              </Column>
              <Column>
                <Button value={'8'} thisClick={this.addToInput}>
                  8
                </Button>
              </Column>
              <Column>
                <Button value={'9'} thisClick={this.addToInput}>
                  9
                </Button>
              </Column>
              <Column>
                <Button value={'-'} thisClick={this.pushOperandToEquation}>
                  <span>&#8722;</span>
                </Button>
              </Column>
            </Row>

            <Row>
              <Column>
                <Button thisClick={this.backClear}>C</Button>
              </Column>
              <Column>
                <Button value={'0'} thisClick={this.addToInput}>
                  0
                </Button>
              </Column>
              <Column>
                <Button thisClick={this.runEquation}>=</Button>
              </Column>
              <Column>
                <Button value={'+'} thisClick={this.pushOperandToEquation}>
                  <span>&#43;</span>
                </Button>
              </Column>
            </Row>

            <Row>
              <Column>
                <Button thisClick={this.allClear}>AC</Button>
              </Column>
              <Column>
                <Button thisClick={this.goodbye}>Q</Button>
              </Column>
              <Column />

              <Column />
            </Row>
          </div>
        </div>
        <Notes />
      </div>
    );
  }
}

export default Calculator;
