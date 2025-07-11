import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Setting from '../Pages/setting';
import About from '../Pages/About';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/setting" element={<Setting/>} />
    </Routes>
  )
}

export default AppRoutes;
