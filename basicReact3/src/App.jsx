import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="border-2 border bg-green-400 text-black-4 rounded-lg p-4 m-4">
        <h1 className="text-2xl font-bold text-center">Welcome to Vite + React</h1>
        
      </div>
    </>
  )
}

export default App
