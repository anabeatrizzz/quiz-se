import styled from 'styled-components';
import db from '../db.json';
import Card from '../src/componentes/Card.js';
import GitHubIcon from '../src/componentes/GitHubIcon.js';
import FundoQuiz from '../src/componentes/FundoQuiz.js';
import Rodape from '../src/componentes/Rodape.js';

export default function Home() {
  return(
    <FundoQuiz>
      <QuizConteiner>
        <Card>
          <Card.Cabecalho>
            <h1>Sex Education</h1>
          </Card.Cabecalho>
          <Card.Conteudo>
            <p>Conteudo Card 1</p>
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

// Definindo um componente junto com o estilo dele
// const Titulo = styled.h1`
//   font-size: 50px;
//   // theme é o atributo de ThemeProvider que está em _app.js
//   color: ${({ theme }) => theme.cores.primaria};
// `

// const ImagemFundo = styled.main`
//   background-image: url(${db.imagemFundo});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

const QuizConteiner = styled.article`
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 8%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`