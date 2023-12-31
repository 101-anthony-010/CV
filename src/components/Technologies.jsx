import React from 'react'

import CardTechnologies from './card/CardTechnologies'


const Technologies = () => {
  const technologies = [
   {
      name: "HTML",
      img: '/img/html-svgrepo-com.svg',
    },
    {
      name: "CSS",
      img: '/img/css-3-svgrepo-com.svg',
    },
    {
      name: "JavaScript",
      img: '/img/javascript-svgrepo-com.svg',
    },
    {
      name: "React",
      img: '/img/react-svgrepo-com.svg',
    },
    {
      name: "Tailwind",
      img: '/img/tailwind-svgrepo-com.svg',
    },
    {
      name: "Node.js",
      img: '/img/nodejs-svgrepo-com.svg',
    },
    {
      name: "Php",
      img: '/img/php-svgrepo-com.svg',
    },
    {
      name: "PostgreSQL",
      img: '/img/postgresql-svgrepo-com.svg',
    },
    {
      name: "Typescript",
      img: '/img/typescript-svgrepo-com.svg',
    },
    {
      name: "Postman",
      img: '/img/postman-icon-svgrepo-com.svg',
    },
    {
      name: "Python",
      img: '/img/python-svgrepo-com.svg',
    },
    {
      name: "Bash",
      img: '/img/bash-icon-svgrepo-com.svg',
    }
  ]
    return (
    <section id='technologies' className='flex justify-center items-center mx-auto pt-16'>
      <section className='mx-6 flex flex-col justify-center items-center gap-2'>
        <h2 className='text-3xl font-bold my-4'>Tecnologias</h2>
        <span>Estas son las tecnologías con las que he trabajado</span>
        <section className='flex flex-wrap gap-5 m-4 justify-center items-center'>
          {
            technologies.map(technology => <CardTechnologies key={technology.name} props={technology}/>)
          }
        </section>
      </section>
    </section>
  )
}

export default Technologies