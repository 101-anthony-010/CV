import React from 'react'
import CardProject from './card/CardProject'

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: '/img/lucky.PNG',
      title: 'Lucky',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat lorem est, quis mattis felis blandit vel. Aliquam ac malesuada nisi, eu placerat ex. ',
      technologies: ['React', 'JavaScript', 'API'],
      demo: 'https://visionary-monstera-df893a.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-1'
    },
    {
      id: 2,
      image: '/img/weather.PNG',
      title: 'Lucky',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat lorem est, quis mattis felis blandit vel. Aliquam ac malesuada nisi, eu placerat ex. ',
      technologies: ['React', 'JavaScript', 'API'],
      demo: 'https://gilded-haupia-e48cbb.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-2'
    },
    {
      id: 3,
      image: '/img/pokedex.PNG',
      title: 'Lucky',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat lorem est, quis mattis felis blandit vel. Aliquam ac malesuada nisi, eu placerat ex. ',
      technologies: ['React', 'JavaScript', 'API'],
      demo: 'https://voluble-semifreddo-20a944.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-3'
    },
    {
      id: 4,
      image: '/img/crud.PNG',
      title: 'Lucky',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat lorem est, quis mattis felis blandit vel. Aliquam ac malesuada nisi, eu placerat ex. ',
      technologies: ['React', 'JavaScript', 'API'],
      demo: 'https://cheery-valkyrie-8ab7fa.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-4'
    },
    {
      id: 5,
      image: '/img/rickAndMorty.PNG',
      title: 'Lucky',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat lorem est, quis mattis felis blandit vel. Aliquam ac malesuada nisi, eu placerat ex. ',
      technologies: ['React', 'JavaScript', 'API'],
      demo: 'https://glowing-moonbeam-28b3c6.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-5'
    },
    {
      id: 6,
      image: '/img/e-commerce.PNG',
      title: 'Lucky',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat lorem est, quis mattis felis blandit vel. Aliquam ac malesuada nisi, eu placerat ex. ',
      technologies: ['React', 'JavaScript', 'API'],
      demo: 'https://majestic-trifle-b1cf7e.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-6'
    }
]

  return (
    <main id='projects' className='flex justify-center items-center mx-auto pt-16'>
      <section className='mx-6 grid justify-center items-center text-center'>
        <h3 className='mx-auto text-3xl font-bold my-4'>Mis Proyectos</h3>
        <section className='flex flex-wrap gap-4 m-4 justify-center items-center max-w-[1000px]'>
          {
            projects.map(project => (<CardProject key={project.id} project={project} />))
          }
        </section>
      </section>
    </main>
  )
}

export default Projects
