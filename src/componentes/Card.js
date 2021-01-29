// --- Pacotes ---
import styled from 'styled-components';

// Arquivo com informações sobre o quiz
import db from '../../db.json';

const Card = styled.section`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${db.tema.cores.secundaria};
  background-color: transparent;
  backdrop-filter: blur(100px);
  border-radius: 8px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Card.Conteudo = styled.div`
  padding: 24px 32px 32px 32px;
  
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

Card.Cabecalho = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${ db.tema.cores.primaria };
  
  * {
    margin: 0;
  }
`

export default Card;