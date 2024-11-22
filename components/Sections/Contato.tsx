import Section from '@/layout/Section'
import React from 'react'
import Titulo from '../Titulo'
import { BookText, Github, Linkedin, Mail, Send } from 'lucide-react'
import Link from 'next/link'

const Contato = () => {
    return (
        <Section>
            <div className='flex flex-col items-center w-full'>
                <Titulo>Contato</Titulo>
                <span className='font-semibold'>Vamos trabalhar juntos?</span>
                <div className='flex flex-col items-center p-4 space-y-3'>
                    <button className='mt-5 border-2 hover:scale-105 hover:border-red-500 rounded-xl py-3 px-6 w-full flex items-center justify-center hover:text-red-500 transition-all duration-300'
                        onClick={() => window.location.href = 'mailto:gabriellucasvg@gmail.com'}>
                        <Mail className='mr-2' />
                        Email
                    </button>
                    <button className='mt-5 border-2 hover:scale-105 hover:border-green-500 rounded-xl py-3 px-6 w-full flex items-center justify-center hover:text-green-500 transition-all duration-300'
                        onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5599991401418'}>
                        <Send className='mr-2' />
                        WhatsApp
                    </button>
                    <button className='mt-5 border-2 hover:scale-105 hover:border-blue-500 rounded-xl py-3 px-6 w-full flex items-center justify-center hover:text-blue-500 transition-all duration-300'
                        onClick={() => window.location.href = '/cv.pdf'}>
                        <BookText className='mr-2' />
                        Download CV
                    </button>
                    <div className='flex items-center gap-4'>
                        <Link className='hover:text-gray-500 transition-all hover:scale-110 duration-300' href='https://github.com/gabriellucasvh' target='_blank' rel='noreferrer noopenner'><Github className='mt-5 ' /></Link>
                        <Link className='hover:text-blue-500 transition-all hover:scale-110 duration-300' href='https://linkedin.com/in/gabriellucasvh' target='_blank' rel='noreferrer noopenner'><Linkedin className='mt-5 ' /></Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Contato