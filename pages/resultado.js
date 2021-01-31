// --- Pacotes ---
import { useRouter } from 'next/router';

// Componente que simula a tag <head></head>
import Head from 'next/head';

// --- Componentes ---
import FundoQuiz from '../src/componentes/FundoQuiz.js';

export default function PaginaResultado(){
  const router = useRouter();
  
  return(
    <FundoQuiz>
      <Head>
        <title>Quiz Sex Education</title>
      </Head>
      <p>Você acertou X perguntas!</p>
    </FundoQuiz>
  )
}