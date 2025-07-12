import { Flame, Palette, ShieldCheck } from "lucide-react";

const Sobre = () => {
	return (
		<div
			className="flex flex-col items-center w-full px-4 md:px-16 py-8 "
			id="sobre"
		>
			<div className="w-full">
				<h1 className="text-3xl md:text-4xl font-semibold">Sobre mim</h1>
				<span className="text-lg md:text-xl text-zinc-400 font-lora mt-2">
					Apaixonado por Desenvolvimento e Inovação
				</span>
			</div>
			<div className="flex flex-col md:flex-row items-center w-full">
				{/* Sobre */}
				<div className="flex flex-col items-center md:items-start w-full md:w-3/4 lg:w-1/2 mt-5 font-extralight text-base md:text-lg px-4 md:px-6 py-4">
					<p
						className="indent-5 text-justify hyphens-auto"
						style={{ wordSpacing: "-1.4px" }}
					>
						Olá, meu nome é Gabriel! Sou estudante de Análise e Desenvolvimento
						de Sistemas com foco em desenvolvimento full-stack. Estou sempre em
						busca de soluções criativas e eficientes, unindo interface e
						estrutura para entregar experiências digitais completas e
						memoráveis. Meu objetivo é me tornar um desenvolvedor de excelência,
						combinando técnicas modernas, boas práticas e pensamento crítico em
						cada projeto.
					</p>
					<p
						className="indent-5 text-justify mt-4 hyphens-auto"
						style={{ wordSpacing: "-1.4px" }}
					>
						Sou movido pelo aprendizado constante, acreditando que o crescimento
						profissional vem do equilíbrio entre prática, conhecimento e
						inovação. Caso queira saber mais sobre meu trabalho, entre em
						contato! Estou sempre aberto a novos desafios.
					</p>
				</div>
				{/* Serviços */}
				<div className="flex flex-col items-center justify-center md:items-start w-full md:w-3/4 lg:w-1/2 mt-5 font-extralight ">
					<div className="flex flex-col items-center md:items-start md:border-x dark:border-gray-700 px-4 md:px-6 py-4">
						<h2 className="text-xl font-semibold flex items-center gap-2">
							<Flame className="text-orange-600" />
							Competência Técnica
						</h2>
						<p className="text-center hyphens-auto mt-2 md:text-start">
							Minha proficiência em HTML, CSS, JavaScript e frameworks como
							React e Vue.js, aliada ao domínio de tecnologias back-end como
							PostgreSQL, garante soluções completas, escaláveis e adaptáveis
							para qualquer desafio no desenvolvimento full-stack.
						</p>
					</div>
					<div className="h-px w-full bg-gray-300 dark:bg-gray-700"></div>
					<div className="flex flex-col items-center md:items-start md:border-x dark:border-gray-700 px-4 md:px-6 py-4">
						<h2 className="text-xl font-semibold flex items-center gap-2">
							<ShieldCheck className="text-orange-600" /> Qualidade do Código
						</h2>
						<p className="text-center hyphens-auto mt-2 md:text-start">
							Produzo um código limpo, bem documentado e modular, que é fácil de
							manter e escalar. Testes automatizados e depuração rigorosa
							garantem a estabilidade e funcionalidade.
						</p>
					</div>
					<div className="h-px w-full bg-gray-300 dark:bg-gray-700"></div>
					<div className="flex flex-col items-center md:items-start md:border-x dark:border-gray-700 px-4 md:px-6 py-4">
						<h2 className="text-xl font-semibold flex items-center gap-2">
							<Palette className="text-orange-600" /> Design e Experiência do
							Usuário
						</h2>
						<p className="text-center hyphens-auto mt-2 md:text-start">
							Crio interfaces intuitivas, acessíveis e visualmente atraentes.
							Otimizo para performance e responsividade, assegurando que o
							aplicativo funcione perfeitamente.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sobre;
