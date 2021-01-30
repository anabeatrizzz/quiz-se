// --- Pacotes ---
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Arquivo com informações sobre o quiz
import db from '../../db.json';

// Tipo de dado das props recebidas
Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  nameInput: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired
}

export default function Input({ placeHolder, onChangeFunction, nameInput, valueInput }){
  return(
    <>
      <InputBase
        autoFocus={true}
        placeholder={placeHolder}
        onChange={onChangeFunction}
        name={nameInput}
        value={valueInput}
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