import { useState } from "react";
import Card from "./components/card"

function App() {
  // create state
  // manage state
  // change state
  // sabhi child em state ko  syncs karwa denge

  const [name, setName] = useState('');

  return (
    <>
      <Card title='card1' name={name} setName={setName} />
      <Card title='card2' name={name} setName={setName} />
      

      <p>I am inside parent Component and Value of name is {name} </p>
    </>
  )
}

export default App
