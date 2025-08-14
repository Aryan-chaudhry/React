
import Profile from "./Components/Profile"
function App() {

  const userData = {
    name: "Aryan Chaudhary",
    profileImg: "https://avatars.githubusercontent.com/u/157027129?v=4",
    github: "https://github.com/Aryan-chaudhry",
    linkedin: "https://linkedin.com/in/aryan-chaudhry"
  };

  return (
    
      
      <div className="flex items-center justify-center h-screen w-screen bg-zinc-950">
        <Profile {...userData}/>
      </div>
    
  )
}

export default App
