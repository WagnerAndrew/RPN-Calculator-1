import React from 'react';

export default function Column(props) {
  return (
    <div className='col d-flex justify-content-center'>{props.children}</div>
  );
}
