import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce App',
      description: 'Uma loja virtual completa desenvolvida com React, Redux e TailwindCSS.',
      tech: ['React', 'Redux', 'TailwindCSS', 'Firebase'],
      image: 'bg-gray-700',
    },
  ];

  return (
    <section id="projetos" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Meus Projetos</h2>
        
        <div className="flex justify-center items-center gap-8" data-aos="fade-left">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-800">
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-gray-400 text-xl font-bold">Imagem do Projeto</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300"
                  >
                    Ver Demo
                  </a>
                  <a
                    href="#"
                    className="border border-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition duration-300"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 