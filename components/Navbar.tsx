import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';

const Navbar = () => {
  return (
    <div className="hidden md:flex items-center justify-center sticky top-0 left-0 w-full h-12 md:h-16 z-50 px-4">
      <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-950 rounded-md px-2 py-1 md:px-4 mt-1">
        <ul className="flex items-center justify-center gap-2 md:gap-4 text-sm md:text-base">
          <li className='hover:scale-105 transition-transform duration-500'>
            <Link
              className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-500 "
              href="#menu"
            >
              Home
            </Link>
          </li>
          <li className='hover:scale-105 transition-transform duration-500'>
            <Link
              className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-500"
              href="#projetos"
            >
              Projetos
            </Link>
          </li>
          <li className='hover:scale-105 transition-transform duration-500'>
            <Link
              className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-500"
              href="#sobre"
            >
              Sobre
            </Link>
          </li>
          <li className='hover:scale-105 transition-transform duration-500'>
            <Link
              className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-500"
              href="#tecnologias"
            >
              Tecnologias
            </Link>
          </li>
          <li className='hover:scale-105 transition-transform duration-500'>
            <Link
              className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-500"
              href="#contato"
            >
              Contato
            </Link>
          </li>
          <li>
          <ModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
