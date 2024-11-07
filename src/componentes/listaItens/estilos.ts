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
`

// exportacoes
export default ListaContainer
