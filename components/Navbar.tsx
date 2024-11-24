import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="hidden sticky top-0 left-0 w-full h-12 md:h-16 m-0 z-50 md:flex items-center justify-center px-4 bg-zinc-950">
      <div className="border border-white/5 bg-zinc-950 rounded-md px-2 py-1 md:px-4 md:py-2">
        <ul className="flex items-center justify-center gap-2 md:gap-4 text-sm md:text-base">
          <li>
            <Link
              className="hover:text-orange-600 transition-colors duration-300"
              href="#menu"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-600 transition-colors duration-300"
              href="#projetos"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-600 transition-colors duration-300"
              href="#sobre"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-600 transition-colors duration-300"
              href="#tecnologias"
            >
              Tecnologias
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-600 transition-colors duration-300"
              href="#contato"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
