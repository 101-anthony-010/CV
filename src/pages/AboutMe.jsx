import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <>
      <section className='bg-blue-500 px-4 py-2'>
        <Link to={'/'}>Regresar</Link>
        <div>
          Hola, Soy Antony Gonzales campos, Peruano de nacionalidad 
        </div>
      </section>
    </>
  )
}

export default AboutMe