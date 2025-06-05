import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Sobre Mim</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
               data-aos="fade-up-right">
            <div className="aspect-square max-w-md mx-auto bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-6xl">Foto</span>
            </div>
          </div>
          
          <div className="md:w-1/2"
               data-aos="fade-up-left">
            <p className="text-lg mb-4 text-gray-300">
              Olá! Sou um desenvolvedor front-end apaixonado por criar experiências digitais bonitas e funcionais. 
              Com experiência em desenvolvimento web, especializo-me em construir aplicações 
              modernas utilizando React e outras tecnologias de ponta.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Quando não estou codificando, gosto de ler sobre novas tecnologias, praticar esportes e viajar para 
              conhecer novos lugares e culturas.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-600 text-gray-300 px-3 py-1 rounded-full">HTML5</span>
              <span className="bg-yellow-600 text-gray-300 px-3 py-1 rounded-full">CSS3</span>
              <span className="bg-yellow-600 text-gray-300 px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-yellow-600 text-gray-300 px-3 py-1 rounded-full">React</span>
              <span className="bg-yellow-600 text-gray-300 px-3 py-1 rounded-full">TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 