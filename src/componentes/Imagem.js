// --- Pacotes ---
import styled from 'styled-components';

const Imagem = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  object-position: 0px -70px;

  @media screen and (min-width: 500px){
    object-position: 0px -30px;
  }
`

export default Imagem;