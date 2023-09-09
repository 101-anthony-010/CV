import React from 'react'

const Footer = () => {
  return (
    <section className=' mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 py-10 '>
      <span className='cursor-pointer hover:text-blue-500'><a href="https://www.instagram.com/010.anthony.101/">@010.antony.101</a></span>
      <span>• Copyright ©2023 | All rights reserved •</span>
      <section className='flex gap-4 text-3xl'>
        <a href="https://github.com/101-anthony-010"><i className='hover:text-blue-500 animate-bounce transition-colors bx bxl-github cursor-pointer'></i></a>
        <a href="https://www.linkedin.com/in/antony-gonzales-campos-9aa335191/"><i className='hover:text-blue-500 animate-bounce transition-colors bx bxl-linkedin-square cursor-pointer'></i></a>
        <a href="https://wa.me/51960915888"><i className='hover:text-blue-500 animate-bounce transition-colors bx bxl-whatsapp cursor-pointer'></i></a>
      </section>
    </section>
  )
}

export default Footer
