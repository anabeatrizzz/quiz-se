// --- Pacotes ---
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Arquivo com informações sobre o quiz
import db from '../../db.json';

// Tipo de dado das props recebidas
Input.propTypes = {
  ph: PropTypes.string.isRequired,
  ocf: PropTypes.func.isRequired,
  n: PropTypes.string.isRequired,
  v: PropTypes.string.isRequired
}

export default function Input({ ph, ocf, n, v }){
  return(
    <>
      <InputBase
        autoFocus={true}
        placeholder={ph}
        onChange={ocf}
        name={n}
        value={v}
      />
    </>
  )
}

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  text-transform: capitalize;
  color: ${ db.tema.cores.textoContraste };
  border: 2px solid ${ db.tema.cores.primaria };
  border-radius: ${ db.tema.borderRadius };
  background-color: transparent;
  outline: 0;
  margin-bottom: 25px;
  
  ::placeholder {
    color: ${ db.tema.cores.textoContraste }
  }
`