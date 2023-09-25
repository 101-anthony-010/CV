import TypingAnimation from "./../utils/TypingAnimation"
import { saveAs } from 'file-saver';
import React from 'react'

const Home = () => {
  const descargarCV = () => {
    try {
      const archivoCVURL = '/cv/Antony Gonzales.pdf'; // Reemplaza con la ruta correcta

      saveAs(archivoCVURL, 'Antony_Gonzales_CV.pdf'); // Nombre del archivo que se descargará
    } catch (error) {
      console.error('Error al descargar el archivo', error);
    }
  };
  return (
    <main id='home' className='flex flex-wrap m-6 pt-20 justify-center gap-8'>
      <section className='max-w-md'>
        <h1 className='font-bold text-3xl p-3'>Antony Gonzales</h1>
        <h3 className='font-semibold p-2 mx-auto my-2 text-xl bg-blue-500 text-white'><TypingAnimation/></h3>
        <p>Ingeniero de Sistemas altamente motivado y apasionado por la tecnología, con una sólida experiencia en el desarrollo de software y destacada trayectoria en el liderazgo de proyectos. Poseo un enfoque decidido en la resolución de problemas y una capacidad de aprendizaje excepcional. Soy un profesional orientado a metas, siempre dispuesto a enfrentar nuevos retos y adaptarme a las últimas tecnologías. Además, he adquirido habilidades en el área de atención al cliente, lo cual complementa mi perfil y me brinda una perspectiva integral en el mundo empresarial.</p>
        <button onClick={descargarCV} className="bg-blue-500 rounded-md text-white px-6 py-2 m-4 animate-bounce font-semibold">Descargar CV</button>
      </section>
      <div className='w-[300px] h-[400px] hover:w-[310px] hover:h-[410px] transition-all duration-500 shadow-black rounded-full shadow-md dark:shadow-blue-500'>
        <img className='w-full h-full object-cover rounded-full' src="/img/Toñex.png" alt="" />
      </div>
    </main>
  )
}

export default Home