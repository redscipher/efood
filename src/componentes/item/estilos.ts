import styled from 'styled-components'
import { CORES } from '../../globais'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* posicao */
  position: relative;
  /* tamanho */
  width: 472px;
  height: 400px;
`

const Categorias = styled.ul`
  display: inline-flex;
  justify-content: end;
  /* posicao */
  position: absolute;
  top: 16px;
  right: 16px;

  li {
    background-color: ${CORES.vermelho_claro};
    color: ${CORES.bege_2};
    /* margens */
    margin-left: 8px;
    /* espacamentos */
    padding: 6px 4px;
  }
`

const Classe = styled.div`
  display: flex;

  img {
    width: 21px;
    height: 21px;
    /* margens */
    margin-left: 8px;
  }
`

const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Titulo = styled.h2`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
`

const Nota = styled(Titulo)`
  text-align: center;
`

const ItemInfo = styled.div`
  padding: 8px;
  /* cor */
  background-color: ${CORES.branco};
  border: 1px solid ${CORES.vermelho_claro};
`

const Botao = styled.button`
  background-color: ${CORES.vermelho_claro};
  color: ${CORES.bege_2};
  line-height: 16px;
  padding: 4px 6px;
  border: none;
  height: 24px;
`

// exportacao
export default ItemContainer
export { Categorias, Classe, TituloContainer, Titulo, Nota, ItemInfo, Botao }
