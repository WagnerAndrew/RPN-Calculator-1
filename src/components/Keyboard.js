import React, { Component } from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';

export class Keyboard extends Component {
  //Keyboard presses to mimic terminal standard in/out
  handleKeyPress = event => {
    if (event.key === '1') {
      this.props.addToInput('1');
    }
    if (event.key === '2') {
      this.props.addToInput('2');
    }
    if (event.key === '3') {
      this.props.addToInput('3');
    }
    if (event.key === '4') {
      this.props.addToInput('4');
    }
    if (event.key === '5') {
      this.props.addToInput('5');
    }
    if (event.key === '6') {
      this.props.addToInput('6');
    }
    if (event.key === '7') {
      this.props.addToInput('7');
    }
    if (event.key === '8') {
      this.props.addToInput('8');
    }
    if (event.key === '9') {
      this.props.addToInput('9');
    }
    if (event.key === '0') {
      this.props.addToInput('0');
    }
    if (event.key === 'Enter') {
      this.props.pushToEquation();
    }
    if (event.key === '/') {
      this.props.pushOperandToEquation('/');
    }
    if (event.key === '*') {
      this.props.pushOperandToEquation('*');
    }
    if (event.key === '-') {
      this.props.pushOperandToEquation('-');
    }
    if (event.key === '+') {
      this.props.pushOperandToEquation('+');
    }
    if (event.key === '=') {
      this.props.runEquation();
    }
    if (event.key === 'c') {
      this.props.backClear();
    }
    if (event.key === 'Backspace') {
      this.props.backClear();
    }
    if (event.key === 'a') {
      this.props.allClear();
    }
    if (event.key === 'q') {
      this.props.goodbye();
    }
  };

  render() {
    return (
      <>
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue={this.props.keyValue}
          onKeyHandle={this.handleKeyPress}
        />
      </>
    );
  }
}

export default Keyboard;
