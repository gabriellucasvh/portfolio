import Navbar from "@/components/Navbar";
import Contato from "@/components/Sections/Contato";
import Inicio from "@/components/Sections/Inicio";
import Projetos from "@/components/Sections/Projetos";
import Sobre from "@/components/Sections/Sobre";
import Tecnologias from "@/components/Sections/Tecnologias";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="font-geistSans w-full h-full flex items-center justify-center border-x border-gray-300 dark:border-gray-700">
      <BlurFade>
        <div className="w-full h-full flex flex-col items-center justify-center space-y-3">
          <Navbar />
          <Inicio />
          <Projetos />
          <Sobre />
          <Tecnologias />
          <Contato />
        </div>
      </BlurFade>
    </div>
  );
}
