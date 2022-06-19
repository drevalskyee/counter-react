import React from 'react';
import { GlobalStyles } from './globalStyles';
import { Counter } from '../components/Counter/Counter';

const App = () => {
    GlobalStyles();
    return (
      <Counter />
    );
};
export { App };
