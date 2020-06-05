import React from 'react';

export default function ButtonPad(props) {
  return (
    <div>
      <button className='number' onClick={props.Increment_5}>
        {' '}
        +5{' '}
      </button>
      <button className='number' onClick={props.Increment_1}>
        {' '}
        +1{' '}
      </button>
      <button className='reset' onClick={props.Reset}>
        {' '}
        Reset{' '}
      </button>
      <button className='number' onClick={props.Decrement_1}>
        {' '}
        -1{' '}
      </button>
      <button className='number' onClick={props.Decrement_5}>
        {' '}
        -5{' '}
      </button>
    </div>
  );
}