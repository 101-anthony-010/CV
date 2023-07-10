import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main id='about' className='max-w-[800px] flex justify-center items-center mx-auto pt-16'>
      <section className='mx-6'>
      <h2 className='text-3xl w-full font-bold my-4 border-b-[5px] border-blue-500'>Acerca de mi</h2>
      <p>
        Vivo en Perú, un país lleno de maravillas naturales y una rica cultura. Disfruto viajar, leer, practicar deportes y probar cosas nuevas. Mi pasión por la tecnología me mantiene interesado en los avances y la innovación que ocurren constantemente. Estas experiencias y intereses han contribuido a enriquecer mi perspectiva y mi crecimiento personal y profesional.
      </p>
      {/* <Link to='/about-me' className=' font-semibold inline-block '>
        <button className='py-3 px-5 bg-blue-500 text-white rounded-md m-4 grid grid-cols-[1fr_auto] items-center'>Ver mas ...<i className='bx bx-chevron-right-circle pl-3 text-xl'></i></button>
      </Link> */}
      </section>
    </main>
  )
}

export default About
