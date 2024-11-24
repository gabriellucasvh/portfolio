import { CalendarClock, Flame, Palette, ShieldCheck } from 'lucide-react';
import React from 'react';

const Sobre = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-4 md:px-16 py-8 select-none">
      <div className='w-full'>
      <h1 className="text-3xl md:text-4xl font-semibold">Sobre mim</h1>
      <span className="text-lg md:text-xl text-zinc-400 font-lora mt-2">
        Apaixonado por Desenvolvimento e Inovação
      </span>
      </div>
      <div className='flex flex-col md:flex-row items-center w-full'>
        {/* Sobre */}
        <div className="flex flex-col items-center md:items-start w-full md:w-3/4 lg:w-1/2 mt-5 font-extralight text-base md:text-lg md:border-r border-white/5 px-4 md:px-6 py-4">
          <p className="indent-5 text-justify hyphens-auto" style={{ wordSpacing: '-2px' }}>
            Olá, meu nome é <span><span className="underline underline-offset-2 decoration-orange-500">Gabriel</span></span>! Sou estudante de Análise e Desenvolvimento de Sistemas com foco em front-end. Estou sempre em busca de soluções criativas e eficientes para oferecer experiências digitais memoráveis. Tenho como objetivo me tornar um desenvolvedor excelente, combinando técnicas modernas e boas práticas do setor.
          </p>
          <p className="indent-5 text-justify mt-4 hyphens-auto " style={{ wordSpacing: '-2px' }}>
            Atualmente, sou fundador da Prysmus, uma iniciativa voltada para a criação de landing pages, SEO e marketing digital. Minhas habilidades incluem o uso de Next.js, Tailwind CSS e estratégias para otimização de sites, sempre priorizando um design responsivo, acessível e otimizado para motores de busca.
          </p>
          <p className="indent-5 text-justify mt-4 hyphens-auto" style={{ wordSpacing: '-2px' }}>
            Sou movido pelo aprendizado constante, acreditando que o crescimento profissional vem do equilíbrio entre prática, conhecimento e inovação.
          </p>
          <p className="indent-5 text-justify mt-4 hyphens-auto" style={{ wordSpacing: '-2px' }}>
            Caso queira saber mais sobre meu trabalho, entre em contato! Estou sempre aberto a novos desafios.
          </p>
        </div>
        {/* Serviços */}
        <div className='flex flex-col items-center md:items-start w-full md:w-3/4 lg:w-1/2 mt-5 font-extralight '>
          <div className='flex flex-col items-center md:items-start border-x border-white/5 px-4 md:px-6 py-4'>
            <h2 className='text-xl font-semibold flex items-center gap-2'><Flame className='text-orange-600' />Competência Técnica</h2>
            <p className='border-b border-white/5'>
              Minha proficiência em HTML, CSS, JavaScript e frameworks como React e Vue.js garante soluções eficazes e adaptáveis para qualquer desafio de desenvolvimento Front-end.
            </p>
          </div>
          <div className='flex flex-col items-center md:items-start border-x border-white/5 px-4 md:px-6 py-4'>
            <h2 className='text-xl font-semibold flex items-center gap-2'><CalendarClock className='text-orange-600' /> Planejamento e Gestão</h2>
            <p className='border-b border-white/5'>
              Definir escopos claros e prazos realistas, aliado ao uso de metodologias ágeis, mantém o projeto no caminho certo e facilita a adaptação às mudanças.
            </p>
          </div>
          <div className='flex flex-col items-center md:items-start border-x border-white/5 px-4 md:px-6 py-4'>
            <h2 className='text-xl font-semibold flex items-center gap-2'><ShieldCheck className='text-orange-600' />  Qualidade do Código</h2>
            <p className='border-b border-white/5'>
              Produzo um código limpo, bem documentado e modular, que é fácil de manter e escalar. Testes automatizados e depuração rigorosa garantem a estabilidade e funcionalidade.
            </p>
          </div>
          <div className='flex flex-col items-center md:items-start border-x border-white/5 px-4 md:px-6 py-4'>
            <h2 className='text-xl font-semibold flex items-center gap-2'><Palette className='text-orange-600' />  Design e Experiência do Usuário</h2>
            <p className='border-b border-white/5'>
              Crio interfaces intuitivas, acessíveis e visualmente atraentes. Otimizo para performance e responsividade, assegurando que o aplicativo funcione perfeitamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
