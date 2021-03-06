// O NextJS já faz o import React from 'react'
// --- Pacote ---
import { useEffect, useState } from 'react';
import Link from 'next/link';

// --- Componentes ---
import Card from '../src/componentes/Card.js';
import GitHubIcon from '../src/componentes/GitHubIcon.js';
import FundoQuiz from '../src/componentes/FundoQuiz.js';
import Input from '../src/componentes/Input.js';
import Botao from '../src/componentes/Botao.js';
import QuizConteiner from '../src/componentes/QuizConteiner.js';
import Imagem from '../src/componentes/Imagem.js';
import Formulario from '../src/componentes/Formulario.js';

// Arquivo com informações sobre o quiz
import db from '../db.json';

export default function Quiz() {
  // Se a aplicação está na tela de carregamento ou não
  const [carregando, setCarregando] = useState(true);

  // Numero da pergunta
  const [nrPergunta, setNrPergunta] = useState(0);

  // Se é a ultima pergunta
  const [lastQuestion, setLastQuestion] = useState(false);

  // Total de perguntas corretas
  const [total, setTotal] = useState(0);

  function handleSetTotal(){
    setTotal((valorAnterior) => {
      return(valorAnterior+1)
    })
  }

  function handleSubmit(){
    // Se não chegou na ultima pergunta
    if(nrPergunta+1 < db.perguntas.length){
      // Mostre a proxima
      setNrPergunta(nrPergunta + 1)
    // Se é a ultima pergunta,
    } else {
      setLastQuestion(true)
    }
  }

  // Simulando carregamento
  useEffect(() => {
    setTimeout(() => {
      setCarregando(false)
    }, 1000)
  }, [])

  return(
      <FundoQuiz>
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
            !carregando && !lastQuestion && (
              <Pergunta
                pergunta={db.perguntas[nrPergunta]}
                indice={nrPergunta}
                onSubmitFunction={handleSubmit}
                handleTotal={handleSetTotal}
              />
            )
          }

          {
            lastQuestion && !carregando && (
              <Resultado qtd={total} />
            )
          }
        </QuizConteiner>
        <GitHubIcon link="https://github.com/anabeatrizzz/quiz-se" />
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

  // Se alguma alternativa foi selecionada ou não
  const radioSelecionado = selecao !== undefined;

  function handleSubmit(e){
    e.preventDefault();

    // Formulario foi enviado
    setEnviado(true);

    // Adicionando mais uma pergunta correta
    if(correto){ handleTotal() }
    
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
      <Imagem alt="Descrição" src={pergunta.imagem} />
      <Card.Conteudo>
        <h2>{pergunta.titulo}</h2>
        <Formulario onSubmit={handleSubmit}>
          {
            pergunta.alternativas.map((alternativa, indice) => {
              // Recebe um valor diferente dependendo se a alternativa selecionada é a correta ou não
              const estadoRadio = correto ? 'SUCESSO' : 'ERRO';
              
              const selecionado = selecao === indice;

              return(
                <Card.Topico
                  key={`chave${indice}`}
                  as="label"
                  htmlFor={`alter${indice}`}
                  data-selecionado={selecionado}
                  data-estado={enviado && estadoRadio}
                >
                  <input
                    style={{ display: "none" }}
                    id={`alter${indice}`}
                    type="radio"
                    name={nameInput}
                    onChange={() => setSelecao(indice)}
                    checked={selecionado}
                  />
                  {alternativa}
                </Card.Topico>
              )
            })
          }

          <Botao type="submit" disabled={!radioSelecionado}>
            Confirmar
          </Botao>
        </Formulario>
      </Card.Conteudo>
    </Card>
  )
}

function Resultado({ qtd }){
  return(
    <Card>
      <Card.Cabecalho>
        <h1>Você acertou {qtd} pergunta(s)!
          {' '}
          <Link href="/">
            <a style={{ color: "white" }}>
              Jogue de novo
            </a>
          </Link>
        </h1>
      </Card.Cabecalho>
        <img
          style={{ objectFit: "cover", width: "100%" }}
          src="https://i.ibb.co/bF9Sz4J/last-img.jpg"
        />
      <Card.Cabecalho>
        <h1>
          Se puder, assista <a
            style={{ color: "white" }}
            href="https://www.netflix.com/title/80197526"
            target="_blank"
          >
            Sex Education na Netflix!
          </a> Esse ano tem a terceira temporada!
        </h1>
      </Card.Cabecalho>
    </Card>
  )
}