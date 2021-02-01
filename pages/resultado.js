// --- Pacotes ---
import { useRouter } from 'next/router';
import Link from 'next/link';

// Componente que simula a tag <head></head>
import Head from 'next/head';

// --- Componentes ---
import FundoQuiz from '../src/componentes/FundoQuiz.js';
import GitHubIcon from '../src/componentes/GitHubIcon.js';
import Card from '../src/componentes/Card.js';
import QuizConteiner from '../src/componentes/QuizConteiner.js';

export default function PaginaResultado(){
  const router = useRouter();
  return(
    <FundoQuiz>
      <Head>
        <title>Quiz Sex Education</title>
      </Head>
      <QuizConteiner>
        <Card>
          <Card.Cabecalho>
            <h1 title="Mas você pode mudar seu resultado alterando o número na barra de endereço.">Você acertou {router.query.c} pergunta(s)!
              {' '}
              <Link href="/">
                <a style={{ color: "white" }}>Jogue de novo</a>
              </Link>
            </h1>
          </Card.Cabecalho>
            <img style={{ objectFit: "cover", width: "100%" }} src="https://m.media-amazon.com/images/M/MV5BZjIyOWY2M2UtZjNmMy00YjBjLThhOTMtNDEyMzAzNzQ4Y2VhXkEyXkFqcGdeQXVyNjYyNDMwOQ@@._V1_.jpg" />
          <Card.Cabecalho>
            <h1>Se puder, assista <a style={{ color: "white" }} href="https://www.netflix.com/title/80197526" target="_blank">Sex Education na Netflix!</a> Esse ano tem a terceira temporada!</h1>
          </Card.Cabecalho>
        </Card>
      </QuizConteiner>
      
      <GitHubIcon link="#" />
    </FundoQuiz>
  )
}