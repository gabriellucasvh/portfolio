import React from 'react';
import Section from '@/layout/Section';
import Titulo from '../Titulo';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const ProjetosItems = [
    {
        title: "Prysmus",
        description: "Prysmus é uma agência focada na criação de landing pages, otimização de SEO e marketing digital. Ajudamos empresas a obter maior visibilidade online através de soluções personalizadas que promovem o crescimento orgânico e eficaz nas plataformas digitais.",
        img: "/projetos/prysmusS.png",
        tecs: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        link: { type: "website", url: "https://www.prysmus.com" },
    },
    {
        title: "Chat Online",
        description: "Chat online que utiliza a tecnologia de WebSockets para proporcionar uma comunicação em tempo real entre os usuários, permitindo troca de mensagens instantâneas e criação de salas.",
        img: "/projetos/chatWS.png",
        tecs: ["JavaScript", "WebSocket"],
        link: { type: "github", url: "https://github.com/gabriellucasvh/chat-wss" },
    },
    {
        title: "Discord Bot",
        description: "Com recursos de moderação automatizada e detalhado controle de permissões, este bot simplifica a administração de servidores, permitindo uma gestão eficiente e organizada para os administradores.",
        img: "/projetos/discordBot.png",
        tecs: ["JavaScript", "Discord.js"],
        link: { type: "github", url: "https://github.com/gabriellucasvh/discord-bot" },
    },
    {
        title: "ToDo",
        description: "Uma ToDoList que oferece uma solução simples e eficaz para o gerenciamento de tarefas, com interface intuitiva e sincronização em tempo real.",
        img: "/projetos/todoList.png",
        tecs: ["React"],
        link: { type: "github", url: "https://github.com/gabriellucasvh/to-do" },
    },
];

const Projetos = () => {
    return (
        <Section>
            <div className="flex flex-col items-center justify-center my-16 space-y-8 w-[900px]">
                <Titulo>Projetos</Titulo>
                <div className="space-y-8">
                    {ProjetosItems.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 border-2 border-white/25 rounded-2xl p-6"
                        >
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold">{item.title}</h2>
                                <p className="mt-2 text-gray-500">{item.description}</p>
                                <ul className="text-xs flex flex-wrap gap-2 mt-4">
                                    {item.tecs.map((tec) => (
                                        <li
                                            key={tec}
                                            className="bg-neutral-800 text-white px-2 py-1 rounded-md"
                                        >
                                            {tec}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4">
                                    {item.link.type === "website" ? (
                                        <Link
                                            href={item.link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-500 hover:underline gap-2"
                                        >
                                            <ExternalLink className='w-4 h-4'/> Website
                                        </Link>
                                    ) : (
                                        <Link
                                            href={item.link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-500 hover:underline gap-2"
                                        >
                                            <Github className='w-4 h-4'/> GitHub
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="flex-shrink-0 transition-all duration-300 hover:scale-105">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projetos;
