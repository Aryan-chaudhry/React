import { useState } from 'react'
import Logout from './components/Logout';
import Login from './components/Login';


function App() {
 
  const [isLoggedin, setLoggedIn] = useState(true);

  // if(isLoggedin){
  //   return (
  //     <Logout/>
  //   )
  // }
  // else{
  //   return (
  //     <Login/>
  //   )
  // }


  // return(
  //   <div>
  //     {isLoggedin ? <Logout/> : <Login/>}
  //   </div>
  // ) 
  
  if(!isLoggedin){
    return (
      <Login/>
    )
  }

  return (
    <div>
      <h1>welcome Every one</h1>
      <div>
        {isLoggedin && <Logout/>}
      </div>
    </div>
  )

}

export default App
