import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Project from './Project';
import { useDispatch } from 'react-redux';
import { addDataSubmit } from '../../store/slices/infoProject.slice';

const CardProject = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1, // Ajusta el umbral según tus necesidades
  });

  const dispatch = useDispatch()

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDataSubmit = () => {
    dispatch(addDataSubmit(project))
  }
  return (
    <>
      <section onClick={handleDataSubmit} ref={ref} className={`grid items-center justify-center text-center grid-cols-2 w-[270px] h-[180px] bg-slate-200/10 rounded-md hover:w-[290px] hover:h-[200px] transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'} cursor-pointer ${isHovered ? 'w-[290px] h-[200px]' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='h-[160px] col-span-2 rounded-md'>
          <img className='rounded-md shadow-md shadow-blue-500 w-full h-full object-fill' src='/img/e-commerce.PNG' alt=''/>
        </div>
        {/* <a href={project.demo} className='hover:font-semibold hover:text-blue-500 pt-1 h-[30px]'>Prueba</a>
        <a href={project.code} className='hover:font-semibold hover:text-blue-500 pt-1 h-[30px]'>Codigo</a>
        <button onClick={handleDataSubmit}>more</button> */}
      </section>
    </>
  );
};

export default CardProject;
