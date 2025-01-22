import React from 'react';
import GradualSpacing from '../ui/gradual-spacing';
import Image from 'next/image';
import Clock from '../Clock';
import { Dot } from 'lucide-react';

const Inicio = () => {
  return (
    <div
      className="flex flex-col items-center md:items-start w-full min-h-screen select-none px-4 md:px-16 py-8 md:py-16 mt-5"
      id="#menu"
    >
      <div className="relative flex flex-col items-center md:items-start justify-center space-y-3 ">
        <Image
          src="/gabriel.jpg"
          className="rounded-xl shadow-lg"
          alt="Gabriel Gonçalves"
          width={120}
          height={120}
        />
        <GradualSpacing
          className="text-center md:text-start text-xl font-bold -tracking-widest mt-5"
          text="Olá, eu me chamo"
        />
        <GradualSpacing
          className="text-center md:text-start text-3xl md:text-5xl font-bold -tracking-widest"
          text="Gabriel Gonçalves"
        />
        <GradualSpacing
          className="text-center md:text-start text-orange-600 dark:text-orange-500 text-lg md:text-xl -tracking-widest"
          text="Desenvolvedor Front-end"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full mt-8 md:mb-2 space-y-6 md:space-y-0">
        <p className="text-center md:text-start text-zinc-600 dark:text-zinc-400 md:w-1/2">
          Um desenvolvedor front-end apaixonado por tecnologia, focado em criar
          interfaces incríveis e resolver problemas com criatividade. Sempre em busca
          de novas ferramentas, aprendizado contínuo e aplicação das melhores práticas
          de design e código para oferecer experiências digitais memoráveis. Aberto a
          novas perspectivas, estou aqui para colaborar, compartilhar conhecimento e
          apoiar outros desenvolvedores ao longo da jornada. Vamos criar algo
          extraordinário juntos!
        </p>
      </div>

      <div className="w-full flex md:flex-row items-center justify-center md:justify-start">
        <Clock />
        <span className="flex items-center text-green-500 dark:text-green-400 mt-4 md:mt-0">
          <Dot />
          Disponível para trabalho
        </span>
      </div>
    </div>
  );
};

export default Inicio;
