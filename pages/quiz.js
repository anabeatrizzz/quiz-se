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
  // Para lidar com roteamento
  const router = useRouter();
  
  // Se a aplicação está na tela de carregamento ou não
  const [carregando, setCarregando] = useState(true);

  // Numero da pergunta
  const [nrPergunta, setNrPergunta] = useState(0);

  // Total de perguntas corretas
  const [total, setTotal] = useState(0);

  function handleSetTotal(){
    setTotal(total + 1)
  }

  function handleSubmit(){
    // Se não chegou na ultima pergunta
    if(nrPergunta+1 < db.perguntas.length){
      // Mostre a proxima
      setNrPergunta(nrPergunta + 1)
    // Se é a ultima pergunta,
    } else {
      // Vá para a página de resultado
      router.push('/resultado');
      // Espere 1 segundo
      setTimeout(() => {
        // Volte para a primeira pergunta
        setNrPergunta(0)
      }, 1000)
    }
  }

  // Simulando carregamento
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
                handleTotal={handleSetTotal}
              />
            )
          }
        </QuizConteiner>
        <GitHubIcon link="#" />
      </FundoQuiz>
    
  )
}

function Pergunta({ pergunta, indice, onSubmitFunction, handleTotal }){
  // Indice da alternativa selecionada
  const [selecao, setSelecao] = useState(undefined);

  // Se o formulario foi enviado ou não
  const [enviado, setEnviado] = useState(false);

  // Valor para o name dos inputs
  const nameInput = `pergunta${indice}`;

  // Se a alternativa selecionada é a correta ou não
  const correto = selecao === pergunta.resposta;

  function handleSubmit(e){
    e.preventDefault();

    // Formulario foi enviado
    setEnviado(true);

    // Adicionando mais uma pergunta correta
    if(correto){
      handleTotal()
    }
    
    // Espere 2 segundos
    setTimeout(() => {
      // Função que mostra proxima pergunta
      onSubmitFunction();

      // Formulario não enviado
      setEnviado(false);
      
      // Nenhuma alternativa selecionada
      setSelecao(undefined);
    }, 2 * 1000)

    
  }

  return(
    <Card>
      <Card.Cabecalho>
        <h3>Pergunta {indice + 1} de {db.perguntas.length}</h3>
      </Card.Cabecalho>
      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "190px",
          objectFit: "cover",
          objectPosition: "0px -70px"
        }}
        src={pergunta.imagem}
      />
      <Card.Conteudo>
        <h2>{pergunta.titulo}</h2>
        <form onSubmit={handleSubmit}>
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
                    onChange={() => setSelecao(indice)}
                  />
                  {alternativa}
                </Card.Topico>
              )
            })
          }

          <Botao type="submit" disabled={!(selecao !== undefined)}>
            {'Confirmar'}
          </Botao>
        </form>
        {
          enviado && correto && (
            <h3>Você acertou!</h3>
          )
        }
        {
          enviado && !correto && (
            <h3>Você errou!</h3>
          )
        }
      </Card.Conteudo>
    </Card>
  )
}