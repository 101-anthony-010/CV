import React from 'react'
import Header from '../layouts/Header'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Footer from '../layouts/Footer'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
import Service from '../components/Service'
import Project from '../components/card/Project'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Menu/>
      <Home/>
      <Service/>
      <Projects/>
      <Project/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage