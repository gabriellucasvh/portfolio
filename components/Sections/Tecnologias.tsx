import Image from 'next/image';

const tecnologias = [
  { src: '/tecnologias/javascript.svg', alt: 'Javascript', name: 'Javascript' },
  { src: '/tecnologias/typescript.svg', alt: 'Typescript', name: 'Typescript' },
  { src: '/tecnologias/react.svg', alt: 'React', name: 'React' },
  { src: '/tecnologias/html5.svg', alt: 'HTML', name: 'HTML5' },
  { src: '/tecnologias/css3.svg', alt: 'CSS', name: 'CSS3' },
  { src: '/tecnologias/git.svg', alt: 'Git', name: 'Git' },
  { src: '/tecnologias/github-dark.svg', alt: 'GitHub', name: 'GitHub' },
  { src: '/tecnologias/nextjs_icon_dark.svg', alt: 'Next.js', name: 'Next.js' },
  { src: '/tecnologias/tailwindcss.svg', alt: 'Tailwind CSS', name: 'Tailwind CSS' },
  { src: '/tecnologias/vue.svg', alt: 'Vue.js', name: 'Vue.js' },
  { src: '/tecnologias/nodejs.svg', alt: 'Node.js', name: 'Node.js' },
  { src: '/tecnologias/figma.svg', alt: 'Figma', name: 'Figma' },
  { src: '/tecnologias/postman.svg', alt: 'Postman', name: 'Postman' },
  { src: '/tecnologias/Insomnia.svg', alt: 'Insomnia', name: 'Insomnia' },
  { src: '/tecnologias/postgresql.svg', alt: 'PostgreSQL', name: 'PostgreSQL' },
  { src: '/tecnologias/docker.svg', alt: 'Docker', name: 'Docker' },
  { src: '/tecnologias/neon.svg', alt: 'Neon', name: 'Neon' },
];

const Tecnologias = () => {
  return (
    <section className="flex flex-col items-center w-full px-6 md:px-16 py-8 " id='tecnologias'>
      <div className='w-full'>
        <h1 className="text-3xl md:text-4xl font-semibold">Tecnologias</h1>
        <span className="text-lg md:text-xl text-zinc-400 font-lora mt-2">
          Aqui estão algumas tecnologias que utilizo
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10 w-full md:border dark:border-gray-700 md:p-10">
        {tecnologias.map((tec) => (
          <div
            key={tec.name}
            className="flex flex-col items-center justify-center text-center border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:scale-105 transition-transform shadow-sm shadow-black/5"
          >
            <Image src={tec.src} alt={tec.alt} width={40} height={40} />
            <span className="mt-2 text-sm md:text-base font-medium">{tec.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologias;
