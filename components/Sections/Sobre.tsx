import Section from '@/layout/Section'
import React from 'react'
import Titulo from '../Titulo'

const Sobre = () => {
    return (
        <Section>
            <div className='flex flex-col items-center w-1/2'>
            <Titulo>Sobre mim</Titulo>
                <p className="indent-5 text-break">
                    Comecei minha jornada na programação em 2020, quando vi os famosos bots do Discord e me perguntei:
                    {/* Mudança: As aspas foram escapadas */}
                    &quot;Como é possível isso atender às minhas necessidades?&quot;.
                    Decidi criar meu próprio bot e conheci o <b>JavaScript</b>. Desde então, tenho me dedicado arduamente ao aprendizado e à prática, buscando sempre aperfeiçoar minhas habilidades e expandir meu conhecimento no vasto universo da programação.
                </p>
                <p className="indent-5 py-5 text-break">
                    Estudar <i>Análise e Desenvolvimento de Sistemas</i> foi um desafio constante, mas me proporcionou aprendizados valiosos em tecnologia e colaboração. Estou ansioso para explorar as oportunidades que surgirão após a graduação.
                </p>
                <p className="indent-5 text-break">
                    Atualmente, meu foco está em desenvolvimento <b>Front-end</b>, estou imerso em Sectionersas linguagens e frameworks. Essas tecnologias fascinantes têm me proporcionado experiências enriquecedoras e desafiadoras, à medida que mergulho em projetos cada vez mais complexos e inovadores.
                </p>
            </div>
        </Section>
    )
}

export default Sobre