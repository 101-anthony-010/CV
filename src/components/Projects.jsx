import React, { useState } from 'react'
import CardProject from './card/CardProject'

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: '/img/lucky.PNG',
      title: 'Lucky Page',
      text: 'Pagina de Galleta de la fortuna donde nos muestra un mensaje completamente alatorio',
      technologies: ['React', 'JavaScript', 'API', 'Tailwind'],
      demo: 'https://visionary-monstera-df893a.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-1'
    },
    {
      id: 2,
      image: '/img/weather.PNG',
      title: 'Weather Page',
      text: 'Pagina del clima creada con react con consumo de API y ubicacion en tiempo real',
      technologies: ['React', 'JavaScript', 'API', 'Tailwind', 'Axios'],
      demo: 'https://gilded-haupia-e48cbb.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-2'
    },
    {
      id: 3,
      image: '/img/pokedex.PNG',
      title: 'Pokedex',
      text: 'Pagina de Pokedex donde puedes ver todos los pokemones por especies o por su nombre',
      technologies: ['React', 'React Router', 'JavaScript', 'API', 'Tailwind', 'Axios'],
      demo: 'https://voluble-semifreddo-20a944.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-3'
    },
    {
      id: 4,
      image: '/img/crud.PNG',
      title: 'CRUD Web',
      text: 'Pagina creado con React donde simula Creado, Actualizacion, Lectura y Borrado de datos',
      technologies: ['React', 'JavaScript', 'Tailwind','API'],
      demo: 'https://cheery-valkyrie-8ab7fa.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-4'
    },
    {
      id: 5,
      image: '/img/rickAndMorty.PNG',
      title: 'Rick and Morty',
      text: 'Pagina de Rick and Morty creado con react donde muestra todos los personajes de la series y tambien puedes buscar',
      technologies: ['React', 'JavaScript', 'API', 'Tailwind', 'Hooks', 'Axios'],
      demo: 'https://glowing-moonbeam-28b3c6.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-5'
    },
    {
      id: 6,
      image: '/img/e-commerce.PNG',
      title: 'E-commerce',
      text: 'Un E-commerce creado con React donde simula la compra de productos en tiempo real',
      technologies: ['React', 'JavaScript', 'API', 'Tailwind', 'Axios', 'Redux'],
      demo: 'https://majestic-trifle-b1cf7e.netlify.app/',
      code: 'https://github.com/101-anthony-010/Entregable-6'
    }
]
  const projectsCount = projects.length;

  const [currentIndex, setCurrentIndex] = useState(projects.length - 1);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsCount - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsCount - 1 ? 0 : prevIndex + 1
    );
  };

  // Calcula los índices de los proyectos visibles
  const calculateVisibleProjects = () => {
    const visibleIndices = [];
    let startIndex = currentIndex;

    // Agrega el proyecto actual y los siguientes dos proyectos
    for (let i = 0; i < 3; i++) {
      visibleIndices.push(startIndex);
      startIndex = (startIndex + (projects.length - 1)) % projectsCount;
    }
    return visibleIndices;
  };

  const visibleProjectsIndices = calculateVisibleProjects();
  return (
    <main id='projects' className='flex justify-center items-center mx-auto pt-16'>
      <section className='mx-6 grid justify-center items-center text-center'>
        <h3 className='mx-auto text-3xl font-bold my-4'>Mis Proyectos</h3>
        <div className='flex flex-wrap gap-4 m-4 justify-center items-center max-w-[1000px] relative'>
          <div onClick={showNext} className='hover:cursor-pointer text-blue-500 absolute top-1/2 -left-8 -translate-y-1/2 text-3xl'>
            <i className='bx bx-skip-previous' ></i>
          </div>
          {
            visibleProjectsIndices.map((index) => (
            <CardProject key={projects[index].id} project={projects[index]} />
          ))
          }
          <div onClick={showPrevious} className='hover:cursor-pointer text-blue-500 absolute top-1/2 -right-8 -translate-y-1/2 text-3xl'>
            <i className='bx bx-skip-next'></i>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;