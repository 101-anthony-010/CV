import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShowMenu } from './../store/slices/menu.slice'

import { Link as ScrollLink } from 'react-scroll'

const Menu = () => {
    const dispatch = useDispatch()
    const { isShowMenu } = useSelector(store => store.menuSlice)

    const handleClickChangeClose = () => {
        dispatch(changeIsShowMenu())
    }
  return (
    <main className={`grid justify-end items-start fixed ${isShowMenu ? "right-0":"-right-[200%]"} transition-all duration-700 w-full top-0 h-screen z-20`}>
        <div onClick={handleClickChangeClose} className={`${isShowMenu ? "right-0" : "-right-[200%]"} transition-all duration-500 fixed top-0 w-full h-full bg-gray-500/20 dark:bg-black/50`}></div>
        <div className={`w-[350px] h-full bg-black relative rounded-md `}>
            <i onClick={handleClickChangeClose} className='top-0 right-0 absolute cursor-pointer p-2 text-xl hover:text-red-500 font-bold bx bx-x'></i>
            <div className='text-center pt-6 w-[80px] h-[80px] mx-auto'>
                <img src="/img/Toñex.png" alt="" className='rounded-full '/>
            </div>
            <div className='grid items-center justify-center h-full py-10 text-center text-xl font-bold'>
                <ScrollLink onClick={handleClickChangeClose} className='border-b-[1px] border-dark dark:border-white cursor-pointer font-semibold hover:bg-blue-500/50 px-5 py-4 rounded-md' to="home" smooth={true} duration={800}>Home</ScrollLink>
                <ScrollLink onClick={handleClickChangeClose} className='border-b-[1px] border-dark dark:border-white cursor-pointer font-semibold hover:bg-blue-500/50 px-5 py-4 rounded-md' to="about" smooth={true} duration={800}>About</ScrollLink>
                <ScrollLink onClick={handleClickChangeClose} className='border-b-[1px] border-dark dark:border-white cursor-pointer font-semibold hover:bg-blue-500/50 px-5 py-4 rounded-md' to="projects" smooth={true} duration={800}>Projects</ScrollLink>
                <ScrollLink onClick={handleClickChangeClose} className='border-b-[1px] border-dark dark:border-white cursor-pointer font-semibold hover:bg-blue-500/50 px-5 py-4 rounded-md' to="technologies" smooth={true} duration={800}>Technologies</ScrollLink>
                <ScrollLink onClick={handleClickChangeClose} className='cursor-pointer font-semibold hover:bg-blue-500/50 px-5 py-4 rounded-md' to="contact" smooth={true} duration={800}>Contact</ScrollLink>
            </div>
        </div>
    </main>
  )
}

export default Menu
