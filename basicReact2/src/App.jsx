import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [counter, setCounter] = useState(15)

  return (
    <>
      <h1>Hooks</h1> 
      <h2>Counter value : {counter} </h2>

      <button onClick={() => setCounter(counter+1)}>Add Value</button>
      <br /><br />
      <button onClick={() => setCounter(counter-1)} >Remove Value</button>
    </>
  )
}

export default App
