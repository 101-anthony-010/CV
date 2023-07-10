import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const DEFAULT_VALUES = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = async (data) => {
    reset(DEFAULT_VALUES);

    try {
      await emailjs.send(
        'service_fzcf5dq',
        'template_esns3zr',
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'MCg2wBYdI9Yca18_y'
      );

      alert('Mensaje enviado correctamente');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <section id='contact' className='max-w-[800px] flex flex-col justify-center items-center mx-auto pt-16'>
      <h2 className='text-3xl font-bold my-4 border-b-[5px] border-blue-500 w-[94%]'>Contacto</h2>
      <section className='flex flex-col sm:flex-row gap-5 mx-4 bg-slate-200 dark:bg-black/80 rounded-md px-5 py-3 mt-1'>
        <section className='flex gap-6 flex-col justify-center items-center px-6 w-[300px]'>
          <h4 className='font-semibold text-xl'>Ponerse en contacto</h4>
          <span>Soy muy accesible y me encantaría hablar contigo. No dude en llamar, enviarme un correo electrónico. Sígueme en las redes sociales o simplemente completa el formulario de consulta</span>
          <section className='grid gap-4'>
            <div className='flex gap-2'>
              <i className='bx bx-phone text-2xl'></i>
              <span className='text-sm'>+51 960 915 888</span>
            </div>
            <div className='flex gap-2'>
              <i className='bx bx-envelope text-2xl'></i>
              <span className='text-sm'>gonzalescamposantony@gmail.com</span>
            </div>
          </section>
        </section>
        <form onSubmit={handleSubmit(submit)} className='max-w-[300px] mx-auto p-3'>
          <h4 className='text-xl font-semibold pt-1'>Enviame un mensaje</h4>
          <div className='text-sm my-6 flex flex-col gap-2'>
            <input required {...register('name')} id='name' type="text" className='dark:text-black rounded-md px-4 py-1' placeholder='Name'/>
            <input required {...register('email')} id='email' type="email" className='dark:text-black rounded-md px-4 py-1' placeholder='Email Adress'/>
            <input {...register('subject')} id='subject' type="text" className='dark:text-black rounded-md px-4 py-1' placeholder='Subject'/>
            <textarea required {...register('message')} id='message' type="text" className='dark:text-black rounded-md px-4 py-1 h-[150px]' placeholder='Your message'></textarea>
          </div>
          <button className='px-6 py-2 bg-blue-500 rounded-md text-white font-semibold'>Enviar mensaje</button>
        </form>
      </section>    
    </section>
  )
}

export default Contact
