import { createContext, useState } from 'react'
import ChildA from './Components/ChildA';
import './App.css'

// step1 create context

// step2 wroap all the child inside the provider

// step3 pass value

// step4 consumer k ander jake consume kar lo

const ThemeContext = createContext();

function App() {

  // const [user, setUser] = useState({name:"Aryan Chaudhary"});
  
  const [theme, setTheme] = useState('light');
  return (
    // <>
    //  <UserContext.Provider value={user}>
    //  <ChildA/>
    //  </UserContext.Provider> 
    // </>

    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme === "light" ? "beige" : "black"}}>
        <ChildA/>
      </div> 
    </ThemeContext.Provider>
  )
}

export default App;
export {ThemeContext}
// export {UserContext};