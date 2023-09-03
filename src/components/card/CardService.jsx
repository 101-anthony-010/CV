import React from 'react'

const CardService = ({ service }) => {
  return (
    <section className='grid grid-cols-[1fr_auto] justify-center items-center gap-2 m-5 p-5 hover:bg-blue-500/20 rounded-md'>
      <div className='w-[70px] rounded-full h-[70px] mx-auto'>
        <img src={service.img} alt="" className='rounded-full w-full h-full object-contain' />
      </div>
      <h2 className='font-bold text-2xl'>{service.title}</h2>
      <h3 className='text-sm col-span-2'>{service.text}</h3>
    </section>
  )
}

export default CardService