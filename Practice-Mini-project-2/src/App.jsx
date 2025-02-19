import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [count, setCount] = useState(5);

  function valueAdded(){
    if(count < 20){
      setCount(count+1);
    }
    else{
      alert("your counter exceed the limit of 20");
    }
  }

  function valueDeduct(){
    if(count >= 1){
      setCount(count-1);
    }
    else{
      alert("your Counter never be negative");
    }
  }
  
  return (
    <>
     <h1>Welcome to Counter</h1>
     <div className="iamcounter">
        <h2>count: {count}</h2>
        <button onClick={valueAdded}>Add value</button>
        <br /><br />
        <button onClick={valueDeduct}>Deduct value</button> 
        
     </div>    
    </>
  )
}

export default App
