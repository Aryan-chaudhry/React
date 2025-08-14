import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Components/Home.jsx'
import DashBoard from './Components/DashBoard.jsx'
import About from './Components/About.jsx'
import Navbar from "./Components/Navbar.jsx"
import Param from "./Components/Param.jsx"
import Courses from "./Components/courses.jsx"
import MockTest from "./Components/MockText.jsx"
import Reports from "./Components/Reports.jsx"

import './App.css'


const router = createBrowserRouter(
  [
    {path:"/",
      element : <Home/>
    },
    {
      path:"/student/:id",
      element: <Param/>
    },
    {path:"/about",
      element : <About/>
    },
    {path:"/dashBoard",
      element : <DashBoard/>,
      children:[
        {
          path:'courses',
          element: <Courses/>
        },
        {
          path:'mockTest',
          element: <MockTest/>
        },
        {
          path:'reports',
          element: <Reports/>
        }
      ],
    },
  ]
)



function App() {
  
  return (
    <div>
      
      <RouterProvider router={router}>
        <Navbar/>
      </RouterProvider>
    </div>
  )
}

export default App
