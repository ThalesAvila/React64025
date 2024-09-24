import { useState } from 'react';
import './App.css';
import FixedCounter from './assets/FixedCounter';
import StateObject from './assets/StateObject';
import BrokenCounter from './BrokenCounter';
import { Clock, useTime } from './Clock';
import CounterAlert from './CounterAlert';
import CounterSetTimeout from './CounterSetTimeout';
import Form from './Form';

function App() {
  const time = useTime();

  const [counter, setCounter] = useState(0);
  return (
    <>
      <StateObject />
    </>
  );
}

export default App;
