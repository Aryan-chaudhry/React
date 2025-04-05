
import './App.css'
import userContextProvider from './context/userContextProvider'

function App() {

  return (
    <userContextProvider>
      <h1>React with Chai and share is important</h1>
    </userContextProvider>
  )
}

export default App
