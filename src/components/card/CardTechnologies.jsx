import React from 'react'

const CardProject = ({props}) => {
  return (
    <section className={`w-[180px] h-[120px] hover:animate-bounce rounded-md relative`}>
      <div className='absolute text-9xl flex flex-col justify-center items-center left-1/2 -translate-x-1/2 hover:pt-2 transition-all duration-700'>
        <div className='w-[80px]'>
          <img src={props.img} alt="" className='w-full object-contain' />
        </div>
        <span className='text-2xl font-bold'>{props.name}</span>
      </div>
    </section>
  )
}

export default CardProject
