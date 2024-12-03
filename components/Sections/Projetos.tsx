import { Github, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjetosItems = [
  {
    title: "Prysmus",
    description:
      "Prysmus é uma iniciativa focada na criação de landing pages, otimização de SEO e marketing digital. Ajudamos empresas a obter maior visibilidade online através de soluções personalizadas que promovem o crescimento orgânico e eficaz nas plataformas digitais.",
    img: "/projetos/prysmusS.png",
    tecs: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    link: { type: "website", url: "https://www.prysmus.com" },
  },
  {
    title: "Chat Online",
    description:
      "Chat online que utiliza a tecnologia de WebSockets para proporcionar uma comunicação em tempo real entre os usuários, permitindo troca de mensagens instantâneas e criação de salas.",
    img: "/projetos/chatWS.png",
    tecs: ["JavaScript", "WebSocket"],
    link: { type: "github", url: "https://github.com/gabriellucasvh/chat-wss" },
  },
  {
    title: "Discord Bot",
    description:
      "Com recursos de moderação automatizada e detalhado controle de permissões, este bot simplifica a administração de servidores, permitindo uma gestão eficiente e organizada para os administradores.",
    img: "/projetos/discordBot.png",
    tecs: ["JavaScript", "Discord.js"],
    link: { type: "github", url: "https://github.com/gabriellucasvh/discord-bot" },
  },
  {
    title: "Planner Master",
    description:
      "Um gerenciador de tarefas simples e eficaz, com interface intuitiva e suporte ao salvamento local para manter suas tarefas sempre acessíveis",
    img: "/projetos/plannermaster.png",
    tecs: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    link: { type: "website", url: "http://plannermaster.vercel.app" },
  },
];

const Projetos = () => {
  return (
    <section className="flex flex-col items-center w-full min-h-screen px-4 md:px-16 py-8" id='projetos'>
      <div className='w-full'>
        <h1 className="text-3xl md:text-4xl font-semibold">Projetos</h1>
        <span className="text-lg md:text-xl text-zinc-400 font-lora mt-2">
          Selecionei alguns projetos que fiz
        </span>
      </div>
      <div className="w-full mt-8 space-y-12 md:border md:p-10 md:dark:border-gray-700">
        {ProjetosItems.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="flex flex-col max-w-full md:max-w-xl text-center md:text-left">
              <h1 className="text-2xl font-semibold select-none border-b dark:border-gray-700">
                {item.title}
                <div>
                  {item.link.type === "website" && (
                    <Link
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Acessar Website"
                      className="mt-4 inline-flex items-center gap-1 text-blue-600 font-light text-base hover:text-blue-500 transition-colors duration-300"
                    >
                      Acessar Website
                      <SquareArrowOutUpRight className="w-4 h-4" />
                    </Link>
                  )}
                  {item.link.type === "github" && (
                    <Link
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Acessar Github"
                      className="mt-4 inline-flex items-center gap-1 text-blue-600 font-light text-base hover:text-blue-500 transition-colors duration-300"
                    >
                      Acessar Github
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </h1>
              <span className="text-zinc-400 mt-4 font-lora select-none">
                {item.description}
              </span>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4 select-none">
                {item.tecs.map((tec, idx) => (
                  <span key={idx} className="px-3 py-1 text-white bg-neutral-700 dark:bg-zinc-800 rounded-sm text-xs">
                    {tec}
                  </span>
                ))}
              </div>
            </div>
            {item.img && (
              <div className="w-full md:w-auto flex-shrink-0 md:mr-10 flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg hover:scale-105 transition-transform shadow-lg shadow-black/30"
                  width={400}
                  height={400}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
