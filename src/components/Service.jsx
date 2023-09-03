import React from 'react'
import CardService from './card/CardService'

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      text: 'Utilizo React y Next.js para aplicaciones frontend. Puedo trabajar con CSS, Tailwind, Styled Components para diseñar.',
      img: '/img/Fronted.png'
    },
    {
      id: 2,
      title: 'Backend Development',
      text: 'Utilizo Node para el backend. Puedo trabajar con Express, MongoDB, Postgres para Bases de Datos.',
      img: '/img/Backed.png'
    }
  ]
  return (
    <main id='service' className='flex justify-center items-center mx-auto pt-16'>
      <section className='mx-6 grid justify-center items-center text-center'>
        <h3 className='mx-auto text-3xl font-bold my-4'>¿QUÉ PUEDO CONSTRUIR?</h3>
        <span className='max-w-[800px] mx-auto'>Tengo experiencia en el desarrollo completo de aplicaciones web, abarcando tanto el frontend como el backend. Utilizo tecnologías como React para crear interfaces de usuario atractivas y funcionales, mientras que en el lado del servidor, trabajo con Node.js. Además, tengo sólidos conocimientos en HTML, CSS y JavaScript para ofrecer soluciones completas y eficientes.</span>
        <section className='max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 m-4 gap-6 items-center justify-center'>
            {
              services.map(service => (<CardService key={service.id} service={service} />))
            }
        </section>
      </section>
    </main>
  )
}

export default Service