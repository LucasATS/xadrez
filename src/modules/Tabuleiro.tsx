import { GithubIcon } from 'lucide-react';
import Branco from '../components/Branco';
import Preto from '../components/Preto';
import TabuleiroCampos from '../components/TabuleiroCampos';

const Tabuleiro = () => {
  return (
    <div className="flex flex-col gap-10">
      <a
        title="Visite nossa página no github"
        href="https://github.com/LucasATS/xadrez"
        className="fixed right-5 bottom-5 z-10"
      >
        <GithubIcon className="text-[#61dafb] w-9 h-9" />
      </a>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="z-[2px] py-1 px-4 text-7xl font-extrabold rounded-t-md text-white">
            XADREZ
          </h1>
          <h3 className="py-1 px-4 text-lg font-medium rounded-md bg-white text-primary">
            Feito por: Bárbara, Gabi e Lucas
          </h3>
        </div>
      </div>
      <div className="w-auto h-auto shadow-custom">
        <Preto />
        <TabuleiroCampos />
        <TabuleiroCampos />
        <Branco />
      </div>
    </div>
  );
};

export default Tabuleiro;
