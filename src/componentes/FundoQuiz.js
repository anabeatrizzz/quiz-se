// --- Pacotes ---
import styled from 'styled-components';

// Arquivo com informações sobre o quiz
import db from '../../db.json';

const FundoQuiz = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${ db.imagemFundo });
  background-color: ${ db.tema.cores.fundoPrincipal };
  background-repeat: repeat-y;
  flex: 1;
  
  @media screen and (max-width: 500px) {
    background-image: url(${ db.imagemFundoMobile });
  }
`;

export default FundoQuiz;