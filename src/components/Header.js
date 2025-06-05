import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black shadow-md sticky top-0 z-10 mb-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-white">Jefferson <span className='text-yellow-500'>Dev</span> </div>
        
        {/* Menu para desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-300 hover:text-yellow-500">Início</a>
          <a href="#sobre" className="text-gray-300 hover:text-yellow-500">Sobre</a>
          <a href="#habilidades" className="text-gray-300 hover:text-yellow-500">Habilidades</a>
          <a href="#projetos" className="text-gray-300 hover:text-yellow-500">Projetos</a>
          <a href="#contato" className="text-gray-300 hover:text-yellow-500">Contato</a>
        </nav>
        
        {/* Botão de menu mobile */}
        <button 
          className="md:hidden focus:outline-none text-white hover:text-yellow-500 transition duration-300" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-black px-4 py-2 shadow-md">
          <nav className="flex flex-col space-y-2 pb-3">
            <a href="#inicio" className="text-gray-300 hover:text-yellow-500 px-2 py-1">Início</a>
            <a href="#sobre" className="text-gray-300 hover:text-yellow-500 px-2 py-1">Sobre</a>
            <a href="#habilidades" className="text-gray-300 hover:text-yellow-500 px-2 py-1">Habilidades</a>
            <a href="#projetos" className="text-gray-300 hover:text-yellow-500 px-2 py-1">Projetos</a>
            <a href="#contato" className="text-gray-300 hover:text-yellow-500 px-2 py-1">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 