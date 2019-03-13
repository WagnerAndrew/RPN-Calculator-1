import React from 'react';

function Button(props) {
  return (
    <button
      type='button'
      className='btn btn-light btn-lg'
      onClick={() => {
        props.thisClick(props.value);
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
