// O NextJS já faz o import React from 'react'
// --- Pacotes ---
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';

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

export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    router.push(`/quiz/?nome=${nome}`);
    setNome('');
  }

  return(
    <FundoQuiz>
      <Head>
        <title>Quiz Sex Education</title>
      </Head>
      <QuizConteiner>
        <Card>
          <Card.Cabecalho>
            <h1>Sex Education</h1>
          </Card.Cabecalho>
          <Card.Conteudo>
            <form onSubmit={handleSubmit}>
              <Input
                placeHolder="Digite seu nome"
                onChangeFunction={(e) => setNome(e.target.value)}
                nameInput="nome"
                valueInput={nome}
              />
              <Botao disabled={!nome} type="submit">
                {'Jogar'}
              </Botao>
            </form>
          </Card.Conteudo>
        </Card>
        <Card>
          <Card.Conteudo>
            <h1>Quizzes da galera</h1>
            <p>Conteudo Card 2</p>
          </Card.Conteudo>
        </Card>
        <Rodape />
      </QuizConteiner>
      <GitHubIcon link="#" />
    </FundoQuiz>
  )
}