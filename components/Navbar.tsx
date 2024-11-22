'use client';

import React, { useState } from 'react';
import Inicio from './Sections/Inicio';
import Sobre from './Sections/Sobre';
import Tecnologias from './Sections/Tecnologias';
import Projetos from './Sections/Projetos';
import Contato from './Sections/Contato';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('home'); // Estado inicial definido como 'home'

  const menuItems = [
    { id: 'home', label: 'Home', content: <Inicio /> },
    { id: 'sobre-mim', label: 'Sobre', content: <Sobre /> },
    { id: 'tecnologias', label: 'Tecnologias', content: <Tecnologias /> },
    { id: 'projetos', label: 'Projetos', content: <Projetos /> },
    { id: 'contato', label: 'Contato', content: <Contato /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Menu */}
      <ul className="fixed z-50 top-0 mt-5 flex flex-row items-center justify-between gap-5 py-2 px-3 bg-background border-2 border-white/25 rounded-2xl font-medium">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              className={`focus:text-orange-600 hover:opacity-70 transition-all duration-300 text-[15px] ${
                activeSection === item.id ? 'text-orange-600' : ''
              }`}
              onClick={() => setActiveSection(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Conteúdo dinâmico */}
      <div className="w-full min-h-screen">
        {menuItems.find((item) => item.id === activeSection)?.content}
      </div>
    </div>
  );
};

export default Navbar;
