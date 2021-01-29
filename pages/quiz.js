// O NextJS já faz o import React from 'react'
// --- Pacotes ---
// Componente que simula a tag <head></head>
import Head from 'next/head';

// Arquivo com informações sobre o quiz
import db from '../db.json';

// --- Componentes ---
import Card from '../src/componentes/Card.js';
import GitHubIcon from '../src/componentes/GitHubIcon.js';
import FundoQuiz from '../src/componentes/FundoQuiz.js';
import Rodape from '../src/componentes/Rodape.js';
import Input from '../src/componentes/Input.js';
import Botao from '../src/componentes/Botao.js';
import QuizConteiner from '../src/componentes/QuizConteiner.js';

function Carregando(){
  return(
    <Card>
      <Card.Cabecalho>
        <p>Carregando...</p>
      </Card.Cabecalho>
      <Card.Conteudo>

      </Card.Conteudo>
    </Card>
  )
}

export default function Home() {
  return(
    <FundoQuiz>
      <Head>
        <title>Quiz Sex Education</title>
      </Head>
      <QuizConteiner>
        <Card>
          <Card.Cabecalho>
            <h3>Pergunta 1 de {db.perguntas.length}</h3>
          </Card.Cabecalho>
          <img
            alt="Descrição"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover"
            }}
            src="https://placehold.it/400x400"
          />
          <Card.Conteudo>
            <h2>Titulo</h2>
            <p>Descrição</p>
            <Botao type="button">
              {'Confirmar'}
            </Botao>
          </Card.Conteudo>
        </Card>
        <Rodape />
      </QuizConteiner>
      <GitHubIcon link="#" />
    </FundoQuiz>
  )
}