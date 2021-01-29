import PropTypes from 'prop-types';
import styled from 'styled-components';

import db from '../../db.json';

const Botao = styled.button`
  background-color: ${ db.tema.cores.secundaria };
  color: ${ db.tema.cores.textoContraste };
  border-radius: ${ db.tema.borderRadius };
  border: 0;

  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    background-color: #ee99fc;
    color: grey;
    cursor: not-allowed;
  }
`;

Botao.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Botao;