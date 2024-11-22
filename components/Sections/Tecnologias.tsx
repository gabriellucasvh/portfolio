import Section from '@/layout/Section';
import React from 'react';
import Titulo from '../Titulo';
import Image from 'next/image';

const tecnologias = [
  { src: '/tecnologias/javascript.svg', alt: 'Javascript', name: 'Javascript' },
  { src: '/tecnologias/typescript.svg', alt: 'Typescript', name: 'Typescript' },
  { src: '/tecnologias/react.svg', alt: 'React', name: 'React' },
  { src: '/tecnologias/html5.svg', alt: 'HTML', name: 'HTML5' },
  { src: '/tecnologias/git.svg', alt: 'Git', name: 'Git' },
  { src: '/tecnologias/github-dark.svg', alt: 'GitHub', name: 'GitHub' },
  { src: '/tecnologias/nextjs_icon_dark.svg', alt: 'Next.js', name: 'Next.js' },
  { src: '/tecnologias/tailwindcss.svg', alt: 'Tailwind CSS', name: 'Tailwind CSS' },
  { src: '/tecnologias/vue.svg', alt: 'Vue.js', name: 'Vue.js' },
  { src: '/tecnologias/nodejs.svg', alt: 'Node.js', name: 'Node.js' },
];

const Tecnologias = () => {
  return (
    <Section>
      <div className="flex flex-col items-center">
        <Titulo>Tecnologias</Titulo>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {tecnologias.map((tec, index) => (
            <div key={index} className="flex flex-row items-center text-center border-2 border-white/25 hover:border-white rounded-2xl p-4 transition-all duration-300 hover:scale-105">
              <Image src={tec.src} alt={tec.alt} width={40} height={40} />
              <span className="mt-2 text-sm font-medium ml-2">{tec.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Tecnologias;
