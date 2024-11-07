// importacoes
import styled from 'styled-components'
// imagens
import fundoHeroi from '../../ativos/imagens/fundo_heroi.png'

// estilos
const HeroiContainer = styled.div`
  background-image: url(${fundoHeroi});
  /* tamanho */
  height: 384px;
  /* espacamento */
  padding: 0 416px;

  .container {
    /* tamanho */
    width: 100%;
    height: 100%;
    /* centraliza */
    display: flex;
    flex-direction: column;
    /* ---------------------------- */
    justify-content: space-between;
    align-items: center;
  }

  /* == responsividades: tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* espacamento */
    padding: 0 208px;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    /* espacamento */
    padding: 0 104px;
  }
`

const Titulo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  /* centraliza */
  text-align: center;
  /* margens */
  margin-bottom: 40px;

  /* == responsividades: tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 22px;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

// exportacoes
export default HeroiContainer
export { Titulo }
