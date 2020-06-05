import React, {useState} from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';

function Counter() {
  const [display, setDisplay] = useState(0);

  const Increment_5 = () => {
    setDisplay(display + 5)
  };

  const Increment_1 = () => {
    setDisplay(display + 1)
  };

  const Reset = () => {
    setDisplay(0)
  };

  const Decrement_1 = () => {
    setDisplay(display - 1)
  };

  const Decrement_5 = () => {
    setDisplay(display - 5)
  };

  return (
    <div className="counter">
      <Display counter={display} />
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