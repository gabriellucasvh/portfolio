import GradualSpacing from '../ui/gradual-spacing';
import Image from 'next/image';
import Clock from '../Clock';
import { Dot } from 'lucide-react';
import ShinyText from '../ShinyText';
import TrueFocus from '../TrueFocus';

const Inicio = () => {
  return (
    <div
      className="flex flex-col items-center md:items-start w-full  px-4 md:px-16 py-8 md:py-16 mt-5"
      id="#menu"
    >
      <div className="relative flex flex-col items-center md:items-start justify-center space-y-3">
        <Image
          src="/gabriel.jpg"
          className="rounded-xl shadow-lg"
          alt="Gabriel Gonçalves"
          width={120}
          height={120}
        />
        <GradualSpacing
          className="text-center md:text-start text-3xl md:text-5xl font-bold -tracking-widest"
          text="Gabriel Gonçalves"
        />
          <TrueFocus
            sentence="Desenvolvedor Front-end"
            manualMode={false}
            blurAmount={2}
            borderColor="rgb(249 115 22)"
            animationDuration={1}
            pauseBetweenAnimations={1}
            glowColor="rgb(249 115 22)"
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
          <ShinyText text="Disponível para trabalho" className='text-green-500 dark:text-green-400' speed={1} />
        </span>
      </div>
    </div>
  );
};

export default Inicio;
