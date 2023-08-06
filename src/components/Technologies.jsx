import React from 'react'

import CardTechnologies from './card/CardTechnologies'


const Technologies = () => {
  const technologies = [
   {
      name: "HTML",
      style: "text-orange-500 bx bxl-html5",
      border: "shadow-orange-500"
    },
    {
      name: "CSS",
      style: "text-sky-500 bx bxl-css3",
      border: "shadow-sky-500"
    },
    {
      name: "JavaScript",
      style: "text-yellow-400 bx bxl-javascript",
      border: "shadow-yellow-400"
    },
    {
      name: "React",
      style: "text-sky-300 bx bxl-react",
      border: "shadow-sky-300"
    },
    {
      name: "Tailwind",
      style: "text-purple-400 bx bxl-tailwind-css",
      border: "shadow-purple-400"
    },
    {
      name: "Node.js",
      style: "text-green-400 bx bx bxl-nodejs",
      border: "shadow-green-400"
    },
    {
      name: "Php",
      style: "text-blue-400 bx bxl-php",
      border: "shadow-blue-400"
    },
    {
      name: "PostgreSQL",
      style: "text-orange-400 bx bxl-postgresql",
      border: "shadow-orange-400"
    },
    {
      name: "Typescript",
      style: "text-cyan-600 bx bxl-typescript",
      border: "shadow-cyan-600"
    },
    {
      name: "C++",
      style: "text-blue-800 bx bxl-c-plus-plus",
      border: "shadow-blue-800"
    }
  ]
    return (
    <section id='technologies' className='max-w-[800px] flex justify-center items-center mx-auto pt-16'>
      <section className='mx-6'>
        <h2 className='text-3xl font-bold my-4 border-b-[5px] border-blue-500 w-full'>Tecnologias</h2>
        <span>Estas son las tecnologías con las que he trabajado</span>
        <section className='flex flex-wrap gap-6 m-4 justify-center items-center'>
          {
            technologies.map(technology => <CardTechnologies key={technology.name} props={technology}/>)
          }
        </section>
      </section>
    </section>
  )
}

export default Technologies