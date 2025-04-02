import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Weather from './Components/Weather/Weather.jsx'
import WeeklyWeather from './Components/WeeklyWeather/WeeklyWeather.jsx'
import Alert from './Components/Alert/Alert.jsx'
import EarthquakeAlert from './Components/Earthquick/Earthquick.jsx'






const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "Forecast",
        element: <Weather/>
      },
      {
        path: "WeeklyWeather",
        element: <WeeklyWeather/>
      },
      {
        path: "Setting",
        
      },
      {
        path: "Alert",
        element: <Alert/>
      },
      {
        path: "EarthQuick-Alert",
        element: <EarthquakeAlert/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
