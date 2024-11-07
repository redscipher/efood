// importacao
import styled from 'styled-components'
import { CORES } from '../../globais'

// estilos
const RodaContainer = styled.footer`
  background-color: ${CORES.bege_2};
  /* tamanho */
  height: 298px;
  /* espacamento */
  padding: 0 444px;

  /* classes */
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const Lista = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
  margin-right: 16px;

  li {
    margin-right: 8px;
  }
`

// exportacoes
export default RodaContainer
export { Lista }
