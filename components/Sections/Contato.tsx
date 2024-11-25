'use client';

import { BookUser, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Contato = () => {
  return (
    <div
      className="flex flex-col items-start w-full px-6 md:px-16 py-8 select-none"
      id="contato"
    >
      <h1 className="text-3xl md:text-4xl font-semibold">Contato</h1>
      <span className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-lora mt-2">
        Vamos trabalhar juntos?
      </span>
      <div className="flex flex-col gap-6 w-full md:w-1/2 mt-10 border-l border-gray-300 dark:border-white/10 pl-5 justify-start">
        <button
          className="flex items-center gap-3 text-lg hover:text-red-600 dark:hover:text-red-400 transition-transform hover:scale-105 w-44"
          onClick={() => (window.location.href = 'mailto:gabriellucasvh@gmail.com')}
        >
          <Mail className="w-6 h-6" />
          <span>Email</span>
        </button>
        <button
          className="flex items-center gap-3 text-lg hover:text-green-600 dark:hover:text-green-400 transition-transform hover:scale-105 w-44"
          onClick={() => window.open('https://api.whatsapp.com/send?phone=5599991401418', '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
          <span>Whatsapp</span>
        </button>
        <button
          className="flex items-center gap-3 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-105 w-44"
          onClick={() => window.open('./cv.pdf', '_blank')}
        >
          <BookUser className="w-6 h-6" />
          <span>Download CV</span>
        </button>
      </div>
      <div className="flex gap-6 mt-8 border-t border-gray-300 dark:border-white/10 pt-6">
        <Link
          href="https://github.com/gabriellucasvh"
          className="text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6" />
        </Link>
        <Link
          href="https://linkedin.com/in/gabriellucasvh"
          className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Contato;
