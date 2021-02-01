// --- Pacotes ---
import styled from 'styled-components';

const Imagem = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  object-position: 0px -70px;

  /* Extra pequenos (600px pra baixo) */
  @media only screen and (max-width: 600px) {
    object-position: 0px -20px;
  }

  /* Pequenos (600px pra mais) */
  @media only screen and (min-width: 600px) {
    object-position: 0px -30px;
  }

  /* Extra largos (1200px pra mais) */
  @media only screen and (min-width: 1200px) {
    object-position: 0px -60px;
  }
`

export default Imagem;