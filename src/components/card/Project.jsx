import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShowProject } from '../../store/slices/infoProject.slice'

const Project = () => {
  const { isShowProject, project } = useSelector(store => store.projectSlice)

  const dispatch = useDispatch()
  const handleClickChangeProject = () => {
    dispatch(changeIsShowProject())
  }
  return (
    <main onClick={handleClickChangeProject} className={`${isShowProject ? "block" : "hidden"} bg-black/10 z-40 fixed flex justify-center items-center w-full h-full top-0`}>
      <section className='relative p-8 bg-white rounded-md grid gap-3'>
        <div className='sm:w-[500px] w-[300px]'>
          <img src={project.image} alt="" className='w-full h-full object-contain' />
        </div>
        <h2 className='text-lg font-bold'>{project.title}</h2>
        <h3 className='sm:w-[500px] w-[300px] text-sm'>{project.text}</h3>
        <h4 className='font-semibold flex flex-wrap gap-2 items-center'>
          Tecnologías:
          {
            project.technologies?.map(technologie => <span className='p-1 font-light bg-slate-400/50 rounded-md'>{technologie}</span>)
          }
        </h4>
        <div className='grid grid-cols-2 gap-4 text-center font-semibold'>
          <div className={`grid ${project.url?.length === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
            {
              project.url?.map( link =>
                  <a href={link.url} key={link.id} className='px-5 py-2 bg-blue-500 rounded-md text-white font-semibold'>{link.name}</a>
                ) 
            }
          </div>
          <a href={project.demo} className='px-5 py-2 bg-blue-500 rounded-md text-white font-semibold'>Pagina</a>
        </div>
        <button className='p-2 right-0 cursor-pointer absolute hover:text-red-500 text-xl'><i className='bx bx-x'></i></button>
      </section>
    </main>
  )
}

export default Project