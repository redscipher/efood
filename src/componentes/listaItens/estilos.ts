// importacoes
import styled from 'styled-components'

// tipos
type Props = {
  colunas: string
  colunaGap: string
  gap: string
}

// estilos
const ListaContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) => props.colunas};
  column-gap: ${(props) => props.colunaGap};
  gap: ${(props) => props.gap};
  /* margens */
  margin-top: 80px;
  margin-bottom: 120px;
  /* tamanho */
  width: 100%;
  height: 100%;

  /* == responsividades: tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    width: 95%;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    width: 90%;
  }
`

const Caixa = styled.div`
  display: flex;
  justify-content: center;
`

// exportacoes
export default ListaContainer
export { Caixa }
