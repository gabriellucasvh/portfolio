import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';

const MenuLinks = [
  { name: 'Home', href: '#menu' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Tecnologias', href: '#tecnologias' },
  { name: 'Contato', href: '#contato' },
]
const Navbar = () => {
  return (
    <div className="hidden md:flex items-center justify-center sticky top-0 left-0 w-full h-12 md:h-16 z-50 px-4">
      <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-950 rounded-md px-3 py-2 mt-1">
        <ul className="flex items-center justify-center text-sm md:text-base gap-4">
          {MenuLinks.map((link) => (
            <li key={link.name}>
              <Link className='hover:text-orange-500 transition-all duration-300' href={link.href}>{link.name}</Link>
            </li>
          ))}
          <ModeToggle />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
