import { useMemo } from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);

  function handleCounter(){
    setCounter(counter+1);
  }

  function expensiveTask(num){
    console.log("Inside expensive task");
    for(let i=0; i<=10000000; i++){}
    return num*=2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input])

  
  return (
    <div>
      <p>Counter : {counter}</p>
      <br />
      <button onClick={handleCounter} >
        increment
      </button>

      <br /><br />

      <input type='number' placeholder='Enter Number' value={input} onChange={(e) => {setInput(e.target.value)}}/>

      <div>
        Double : {doubleValue}
      </div>

    </div>
  )
}

export default App
