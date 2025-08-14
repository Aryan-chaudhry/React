import { useState, useEffect } from 'react'
import Timer from './Components/Timer';
import './App.css'



function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  // first --> side effect function
  // second --> cleanup function
  // third --> comma seperated dependency list

  // variation1 **************************
  // runs on every render

  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // variation2 **********************
  // that run on only first render
  
  // useEffect(() => {
  //  alert(" I will run on only first render")
  // }, [])

  // variation3 ***************************
  // single dependencies

  // useEffect(() => {
  //   alert("i will run every time when count is updated")
  // }, [count])
  

  // variation4 ***************************
  // multiple dependencies

  // 
  
  // variation5 *****************************
  // now lets add cleanup function

  useEffect(() => {
    alert("Count is updated")
  
    return () => { // this is cleanup function
      alert("Count is unmounted from UI")
      // unmounted matlab --> yha par count ke purane wali value hat rahi hai new value 
      // asign ho rahi hai
    }
  }, [count])
  
  
  


  function handleClick(){
    setCount(count+1);
  }

  function handleClickTotal(){
    setTotal(total+1);
  }
  

  return (
    <div>
      <h1>Count is : {count} </h1>
      <br />
      <button onClick={handleClick}>Update Count</button> 
      <br />
      <br />
      <h1>Total is : {total} </h1>
      <br />
      <button onClick={handleClickTotal}>Update Total</button> 
      <br /><br />
      <Timer/>
    </div>
  )
}

export default App
