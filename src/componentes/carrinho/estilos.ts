// importacoes
import styled from 'styled-components'
import { Botao, CORES } from '../../globais'
import { Titulo } from '../item/estilos'

// estilos
const CarrinhoContainer = styled.aside`
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${CORES.vermelho_claro};
  color: ${CORES.bege_2};
  /* visualizacao */
  display: flex;
  flex-direction: column;
  /* exibe scrolls */
  overflow-y: auto;

  ul {
    display: block;
    padding: 32px 8px 0 8px;
  }

  ${Botao} {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    text-align: center;
    /* margens */
    margin: 0 8px 0 8px;
    /* largura */
    width: 344px;
  }
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 8px 16px 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
`

const CarrinhoCaixa = styled.div`
  /* posicao fixa p/ ocupar a tela toda */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* visualizacao */
  display: none;
  justify-content: flex-end;
  /* exibe na frente de tudo */
  z-index: 1;

  &.visivel {
    display: flex;
  }
`

const CarrinhoOpaco = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${CORES.preto};
  opacity: 0.8;
`

const ItemLista = styled.li`
  display: flex;
  max-width: 344px;
  width: 100%;
  /* cores */
  background-color: ${CORES.bege_2};
  color: ${CORES.vermelho_claro};
  /* espacamento */
  padding: 8px;
  margin-bottom: 16px;
  /* posicao */
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    /* margem */
    margin-right: 8px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    /* fundo transparente */
    background-color: transparent;
    border: none;
  }

  ${Titulo} {
    margin-bottom: 16px;
  }
`

// exportacoes
export default CarrinhoContainer
export { CarrinhoCaixa, CarrinhoOpaco, ItemLista, Total }
