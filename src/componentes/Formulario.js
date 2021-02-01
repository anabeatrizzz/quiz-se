// --- Pacotes ---
import styled from 'styled-components';

// Arquivo com informações sobre o quiz
import db from '../../db.json';

const Formulario = styled.form`
  label {
    &[data-selecionado="true"] {
      background-color: ${ db.tema.cores.primaria };
      
      &[data-estado="SUCESSO"] {
        background-color: ${ db.tema.cores.respostaCerta };
      }

      &[data-estado="ERRO"] {
        background-color: ${ db.tema.cores.respostaErrada};
      }
    }

    &:focus {
      opacity: 1;
    } 
  }

  button {
    margin-top: 24px;
  }
`;

export default Formulario;