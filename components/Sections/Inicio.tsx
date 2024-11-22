import Section from '@/layout/Section'
import Image from 'next/image'
import React from 'react'

const Inicio = () => {
  return (
    <Section>
      
      <div className='flex flex-col items-center w-1/2 space-y-2'>
        <Image src="/gabriel.jpg" width={150} height={150} alt="Gabriel Gonçalves" className='rounded-full mb-2' />
        <span>Hello, I'm</span>
        <h1 className='text-4xl font-bold'>Gabriel Gonçalves</h1>
        <span className='text-orange-500'>Front-end Developer</span>
        <p className='mt-5 indent-5 text-center text-gray-300'>Um desenvolvedor front-end apaixonado por tecnologia, focado em criar interfaces incríveis e resolver problemas com criatividade. Sempre em busca de novas ferramentas, aprendizado contínuo e aplicação das melhores práticas de design e código para oferecer experiências digitais memoráveis.
          Aberto a novas perspectivas, estou aqui para colaborar, compartilhar conhecimento e apoiar outros desenvolvedores ao longo da jornada.
          Vamos criar algo extraordinário juntos!</p>
      </div>
    </Section>
  )
}

export default Inicio