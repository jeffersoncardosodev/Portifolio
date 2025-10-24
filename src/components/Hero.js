import React from 'react';
import heroImage from '../assets/minha-foto.jpeg';
import background from '../assets/foto-codigo1.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white px-4">
      <div className="absolute inset-0 bg-cover bg-center opacity-30"
           style={{backgroundImage: `url(${background})`}}>
        
      </div>
      <div className="container relative px-4 py-4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center mx-auto gap-6px-4 py-10 md:w-1/2 md:mb-0 mt-0">
          <img src={heroImage} alt="Hero Image" className="w-60 h-60 rounded-full mb-6 mt-0" 
               data-aos="fade-down"/>
          <h1 className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-right">Jefferson Cardoso</h1>
          <h2 className="text-1xl md:text-2xl mb-4"
              data-aos="fade-right">Desenvolvedor <span className="text-yellow-500">Front-end</span></h2>
          <p className="text-lg mb-6 text-gray-300"
              data-aos="fade-left">
            Transformo boas ideias em interfaces que conectam pessoas.
          </p>
          <div className="flex space-x-4"
          data-aos="fade-left">
            <a 
              href="#contato" 
              className="bg-yellow-500 text-black hover:text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition duration-300"
              >
              Contate-me
            </a>
            <a 
              href="#projetos" 
              className="border-2 border-yellow-500 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition duration-300"
              >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 