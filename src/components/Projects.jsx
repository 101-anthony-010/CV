import React from 'react'
import CardProject from './card/CardProject'

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: '/img/lucky.PNG',
      demo: 'https://visionary-monstera-df893a.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-1'
    },
    {
      id: 2,
      image: '/img/weather.PNG',
      demo: 'https://gilded-haupia-e48cbb.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-2'
    },
    {
      id: 3,
      image: '/img/pokedex.PNG',
      demo: 'https://voluble-semifreddo-20a944.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-3'
    },
    {
      id: 4,
      image: '/img/crud.PNG',
      demo: 'https://cheery-valkyrie-8ab7fa.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-4'
    },
    {
      id: 5,
      image: '/img/rickAndMorty.PNG',
      demo: 'https://glowing-moonbeam-28b3c6.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-5'
    },
    {
      id: 6,
      image: '/img/e-commerce.PNG',
      demo: 'https://majestic-trifle-b1cf7e.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-6'
    }
]

  return (
    <main id='projects' className='max-w-[800px] flex justify-center items-center mx-auto pt-16'>
      <section className='mx-6'>
        <h3 className='text-3xl font-bold my-4 border-b-[5px] border-blue-500'>Proyectos</h3>
        <span>Mira algunos de mis trabajos aquí</span>
        <section className='flex flex-wrap gap-6 m-4 justify-center items-center'>
          {
            projects.map(project => (<CardProject key={project.id} project={project} />))
          }
        </section>
      </section>
    </main>
  )
}

export default Projects
