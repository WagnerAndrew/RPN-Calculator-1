import React from 'react';

export default function Notes() {
  return (
    <div>
      <h3 className='mt-4'>Notes:</h3>
      <h5 className='mt-3'>
        This calculator is designed to calculate properly formatted Reverse
        Polish Notation equations
      </h5>
      <ul>
        {' '}
        <li className='mt-4'>
          Enter a number then press the "Add Number To Equation" button <br />
          (You can only enter one number at a time -{' '}
          <i>Example: 7 or 265 or 13</i>)
        </li>
        <li>Operands will automatically populate in the equation</li>
        <li>Press the "=" button to get your result</li>
        <li>Press the "C" button to delete the last number you entered</li>
        <li>Press the "AC" button to clear all fields</li>
        <li>Press the "Q" button for a pleasant surprise</li>
      </ul>
      <h5>
        Keyboard presses work so you can enter an equation just like the
        terminal <br />
      </h5>
      <ul>
        <li>Press the "a" key for "AC"</li>
        <li>Press the "return/enter" key for "Add Number to Equation"</li>
      </ul>
    </div>
  );
}
