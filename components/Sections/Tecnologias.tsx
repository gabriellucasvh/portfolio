import Image from 'next/image';
import React from 'react';

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
    <div className="flex flex-col items-center w-full px-6 md:px-16 py-8 select-none" id='tecnologias'>
      <div className='w-full'>
        <h1 className="text-3xl md:text-4xl font-semibold">Tecnologias</h1>
        <span className="text-lg md:text-xl text-zinc-400 font-lora mt-2">
          Aqui estão algumas tecnologias que utilizo
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10 w-full">
        {tecnologias.map((tec, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center border border-zinc-700 rounded-lg p-4 hover:scale-105 transition-transform"
          >
            <Image src={tec.src} alt={tec.alt} width={40} height={40} />
            <span className="mt-2 text-sm md:text-base font-medium">{tec.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
