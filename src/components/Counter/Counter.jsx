import React, { useState } from 'react';
import { S } from './Counter.styles';

const Counter = () => {
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
const reset = () => setCount(0);

return (
  <S.Container>
    <S.CountValue>{count}</S.CountValue>
    <S.ButtonContainer>
      <S.Button onClick={increment}>+</S.Button>
      <S.Button onClick={reset}>0</S.Button>
      <S.Button onClick={decrement}>-</S.Button>
    </S.ButtonContainer>
  </S.Container>
);
};

export { Counter };
