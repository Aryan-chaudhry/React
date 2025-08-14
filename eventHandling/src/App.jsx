import { useState } from 'react'
import './App.css'

function App() {

  function handleClick(){
    alert("i am clicked");
  }

  function handleMouse(){
    alert("i am para")
  }

  function handleFormChange(e){
    console.log("Value till now is : ", e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    // i am writing my custom behaviour
    const  privateData = {
        Name : e.target.Name.value,
        Email : e.target.Email.value
    }
    e.target.Name.value = "";
    e.target.Email.value = "";
    
    console.log(privateData);
  }
  

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text"  name='Name'  placeholder='Your Name'/>
        <br />
        <br />
        <input type="text" name='Email'  placeholder='Your Email'/>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>

      <br />

      <p onMouseOver={handleMouse}>Hi i am para </p>

      <br />

      <button onClick={handleClick}>
        Click Me
      </button>


    </div>
  )
}

export default App;
