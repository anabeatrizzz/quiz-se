// O NextJS já faz o import React from 'react'
// --- Pacote ---
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Componente que simula a tag <head></head>
import Head from 'next/head';

// Arquivo com informações sobre o quiz
import db from '../db.json';

// --- Componentes ---
import Card from '../src/componentes/Card.js';
import GitHubIcon from '../src/componentes/GitHubIcon.js';
import FundoQuiz from '../src/componentes/FundoQuiz.js';
import Input from '../src/componentes/Input.js';
import Botao from '../src/componentes/Botao.js';
import QuizConteiner from '../src/componentes/QuizConteiner.js';

export default function Quiz() {
  const router = useRouter();
  const [carregando, setCarregando] = useState(true);
  const [nrPergunta, setNrPergunta] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    
    if(nrPergunta+1 < db.perguntas.length){
      setNrPergunta(nrPergunta + 1)
    } else {
      router.push("/")
      setNrPergunta(0)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false)
    }, 2 * 1000)
  }, [])

  return(
    <FundoQuiz>
      <Head>
        <title>Quiz Sex Education</title>
      </Head>
      <QuizConteiner>
        {
          carregando && (
            <Card>
              <Card.Cabecalho>
                <p>Carregando...</p>
              </Card.Cabecalho>
            </Card>
          )
        }
        
        {
          !carregando && (
            <Pergunta
              pergunta={db.perguntas[nrPergunta]}
              indice={nrPergunta}
              onSubmitFunction={handleSubmit}
            />
          )
        }
      </QuizConteiner>
      <GitHubIcon link="#" />
    </FundoQuiz>
  )
}

function Pergunta({ pergunta, indice, onSubmitFunction }){
  const nameInput = `pergunta${indice}`;

  return(
    <Card>
      <Card.Cabecalho>
        <h3>Pergunta {indice + 1} de {db.perguntas.length}</h3>
      </Card.Cabecalho>
      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover"
        }}
        src={pergunta.imagem}
      />
      <Card.Conteudo>
        <h2>{pergunta.titulo}</h2>
        <form onSubmit={onSubmitFunction}>
          {
            pergunta.alternativas.map((alternativa, indice) => {
              return(
                <Card.Topico
                  key={`chave${indice}`}
                  as="label"
                  htmlFor={`alter${indice}`}
                >
                  <input
                    id={`alter${indice}`}
                    type="radio"
                    name={nameInput}
                  />
                  {alternativa}
                </Card.Topico>
              )
            })
          }

          <Botao type="submit">
            {'Confirmar'}
          </Botao>
        </form>
      </Card.Conteudo>
    </Card>
  )
}