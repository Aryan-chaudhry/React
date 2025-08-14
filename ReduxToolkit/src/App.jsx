import {useDispatch, useSelector} from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/Counter/CounterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmout] = useState(0);

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncAmount(){
    dispatch(incrementByAmount(amount))
  }

  return (
    
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input type="Number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmout(e.target.value)} />
      <br />
      <br />
      <button onClick={handleIncAmount}>Increment By Amount</button>
    </div>
  )
}

export default App
