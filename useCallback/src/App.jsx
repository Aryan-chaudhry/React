import Child from './components/Child'
import { useCallback, useState } from 'react'
import './App.css'

function App() {
 
  const [counter, setcounter] = useState(0);

  
  // it dont create as a new function in new render
  const handleClick = useCallback(() => {
    setcounter(counter+1);
  },[counter]);

  return (
    <div>
      <h3>Counter : {counter}</h3>
      <button onClick={handleClick}>
        increment
      </button>
      <br /><br/>
      
      <Child buttonName={"i am child button"}
      handleClick = {handleClick}
      />
      
    </div>
  )
}

export default App
