import React from 'react'

const CardProject = ({project}) => {
  return (
    <section className='grid items-center justify-center text-center grid-cols-2 w-[270px] h-[180px] bg-slate-200/10 rounded-md hover:w-[290px] hover:h-[200px] transition-all duration-500'>
      <div className='h-[140px] col-span-2 rounded-md'>
        <img className='rounded-md shadow-md shadow-blue-500 w-full h-full object-fill' src={project.image} alt="" />
      </div>
      <a href={project.demo} className='hover:font-semibold hover:text-blue-500 pt-1 h-[30px]'>Prueba</a>
      <a href={project.code} className='hover:font-semibold hover:text-blue-500 pt-1 h-[30px]'>Codigo</a>
    </section>
  )
}

export default CardProject
