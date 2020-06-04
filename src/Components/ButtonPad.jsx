import React from 'react';

export default function ButtonPad({
  Increment_5,
  Increment_1,
  Reset,
  Decrement_1,
  Decrement_5,
}) {
  return (
    <div>
      <button className='number' onClick={Increment_5}>
        {' '}
        +5{' '}
      </button>
      <button className='number' onClick={Increment_1}>
        {' '}
        +1{' '}
      </button>
      <button className='reset' onClick={Reset}>
        {' '}
        Reset{' '}
      </button>
      <button className='number' onClick={Decrement_1}>
        {' '}
        -1{' '}
      </button>
      <button className='number' onClick={Decrement_5}>
        {' '}
        -5{' '}
      </button>
    </div>
  );
}
