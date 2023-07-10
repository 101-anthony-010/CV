import TypingAnimation from "./../utils/TypingAnimation"
import React from 'react'

const Home = () => {
  return (
    <main id='home' className='flex flex-wrap m-6 pt-20 justify-center gap-8'>
      <section className='max-w-md'>
        <h1 className='font-bold text-3xl p-3'>Antony Gonzales</h1>
        <h3 className='font-semibold bg-slate-200 p-2 mx-auto my-2 text-xl dark:bg-blue-500'><TypingAnimation/></h3>
        <p>Ingeniero de Sistemas altamente motivado y apasionado por la tecnología, con un sólido conocimiento en el desarrollo de software y experiencia en liderazgo de proyectos. Actualmente en el 8vo ciclo de la carrera de Ingeniería de Sistemas. Presidente de ICANUX, una destacada comunidad de software libre. Poseo una destacada capacidad de aprendizaje y un enfoque decidido en la resolución de problemas.</p>
        <a href="#about"><button className='py-3 px-5 bg-blue-500 text-white rounded-md m-4 font-semibold grid grid-cols-[1fr_auto] text-center items-center'>Acerca de mi <i className='pl-3 text-xl bx bx-chevron-right-circle'></i></button></a>
      </section>
      <div className='w-[300px] h-[400px] hover:w-[310px] hover:h-[410px] transition-all duration-500 shadow-white rounded-full'>
        <img className='w-full h-full object-cover rounded-full' src="/img/Toñex.png" alt="" />
      </div>
    </main>
  )
}

export default Home