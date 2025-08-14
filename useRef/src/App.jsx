import { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0);

  function handleIncrement(){
    setcount(count+1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>
        Increment
      </button>

      <br />
      <p>count : {count} </p>
    </div>
  )
}

export default App
