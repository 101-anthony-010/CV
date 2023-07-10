import React from 'react'
import { useDispatch } from 'react-redux'
import { Link as ScrollLink } from 'react-scroll';
import { changeIsShowMenu } from '../store/slices/menu.slice'

const Header = () => {
  const dispatch = useDispatch()

  const handleClickChangeIsShowMenu = () => {
    dispatch(changeIsShowMenu())
  }

  return (
    <section className={`gap-10 py-4 shadow-md fixed top-0 w-full z-10`}>
      {/* <div className='absolute top-0 left-0 text-2xl z-30'>
        <i onClick={handleClinkThemeChange} className={`transition-all duration-200 absolute top-5 left-5 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'} cursor-pointer bx bx-moon`}></i>
        <i onClick={handleClinkThemeChange} className={`transition-all duration-200 absolute top-5 left-5 opacity-0 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} cursor-pointer bx bx-sun`}></i>
      </div> */}
      <div className='flex justify-center gap-4 mx-auto opacity-0 sm:opacity-100 z-20'>
        <ScrollLink className='text-xl cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="home" smooth={true} duration={800}>Home</ScrollLink>
        <ScrollLink className='text-xl cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="about" smooth={true} duration={800}>About</ScrollLink>
        <ScrollLink className='text-xl cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="projects" smooth={true} duration={800}>Projects</ScrollLink>
        <ScrollLink className='text-xl cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="technologies" smooth={true} duration={800}>Technologies</ScrollLink>
        <ScrollLink className='text-xl cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="contact" smooth={true} duration={800}>Contact</ScrollLink>
      </div>
      <div className='relative'>
        <div className='absolute -top-7 sm:opacity-0 right-10 text-2xl'>
          <i onClick={handleClickChangeIsShowMenu} className='bx bx-menu cursor-pointer'></i>
        </div>
      </div>
    </section>
    // <section className="bg-black text-white flex gap-5 h-[50px] justify-center items-center font-semibold text-xl">
    //   <h3 className='hover:font-bold hover:cursor-pointer'>Home</h3>
    //   <h3 className='hover:font-bold hover:cursor-pointer'>Acerca de mi</h3>
    //   <h3 className='hover:font-bold hover:cursor-pointer'>Proyectos</h3>
    //   <h3 className='hover:font-bold hover:cursor-pointer'>Tecnologias</h3>
    //   <h3 className='hover:font-bold hover:cursor-pointer'>Contacto</h3>
    // </section>
  )
}

export default Header