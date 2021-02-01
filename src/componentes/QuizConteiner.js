import styled from 'styled-components';

// Definindo um componente junto com o estilo dele
const QuizConteiner = styled.article`
  padding-left: 20%;
  padding-right: 20%;
  padding-top: auto;
  
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`

export default QuizConteiner;