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
    <div className='dark:bg-black dark:text-white'>
    <div className='grid gap-1 fixed top-1/2 -translate-y-1/2 left-0 text-white'>
      <a href="https://github.com/101-anthony-010"><i className='text-3xl transition-colors bx bxl-github cursor-pointer p-3 bg-blue-500'></i></a>
      <a href="https://www.linkedin.com/in/antony-gonzales-campos-9aa335191/"><i className='text-3xl transition-colors bx bxl-linkedin-square cursor-pointer p-3 bg-blue-500'></i></a>
      <a href="https://wa.me/51960915888"><i className='text-3xl transition-colors bx bxl-whatsapp cursor-pointer p-3 bg-blue-500'></i></a>
    </div>
    <div className='fixed right-10 bottom-10'>
      <div className='absolute w-full h-full z-0 bg-green-500 animate-ping duration-75 rounded-full'></div>
      <a href="https://wa.me/51960915888" className='z-30'><i className='text-green-500 animate-pulse text-6xl transition-colors bx bxl-whatsapp cursor-pointer'></i></a>
    </div>
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