import { Route, Routes } from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'
function App() {

  return (
    <>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path="/about-me" element={<AboutMe/>}/>
      <Route path="/*" element={<NotFound/>}/>  
    </Routes>
    </>
  )
}

export default App
