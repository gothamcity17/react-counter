import React, { useState } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';

function Counter() {
  const [count, setCount] = useState(0);

  let Increment_5 = () => setCount(count + 5);

  let Increment_1 = () => setCount(count + 1);

  let Reset = () => setCount(0);

  let Decrement_1 = () => setCount(count - 1);

  let Decrement_5 = () => setCount(count - 5);

  return (
    <div className='counter'>
      <Display display={count} />
      <ButtonPad
        Increment_5={Increment_5}
        Increment_1={Increment_1}
        Reset={Reset}
        Decrement_1={Decrement_1}
        Decrement_5={Decrement_5}
      />
    </div>
  );
}

export default Counter;
