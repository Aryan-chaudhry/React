import { useState} from "react"

function App() {
 
  const [count, setCount] = useState(0);
  
  function Counter(){
    setCount(count+1);
  }

  function Erase(){
    setCount(0)
  }

  function Decrement(){
    if(count >= 1){
      setCount(count-1);
    }
    else{
      alert('Hey your counter never be negative');
    }
  }

  return (
    <>
      <div className=" bg-slate-950 h-screen flex items-center justify-center ">
        <div className=" bg-blue-10 w-[600px] h-[300px] rounded-2xl flex items-center justify-center gap-2 ">
        <h1 className="items-center text-green-400"> Your Count is {count} </h1>
        <button className="h-[30px] w-[90px]  rounded-sm bg-blue-50 hover:bg-blue-300 transition delay-20 cursor-pointer" onClick={Counter}>Count</button>
        <button className="h-[30px] w-[90px]  rounded-sm bg-blue-50 hover:bg-blue-300 transition delay-20 cursor-pointer" onClick={Erase}>Clear</button>
        <button className="h-[30px] w-[90px]  rounded-sm bg-blue-50 hover:bg-blue-300 transition delay-20 cursor-pointer" onClick={Decrement}>Decrease</button>
        </div>
        
      </div>
    </>
  )
}

export default App
