// importacoes
import styled from 'styled-components'
import { BotaoLink } from '../../../../globais'

// estilos
const PagamentoContainer = styled.div`
  flex: auto;

  h2 {
    margin: 32px 0 16px 8px;
  }

  form {
    margin: 8px;

    ${BotaoLink} {
      margin-left: 0;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }
  }
`

// exportacoes
export default PagamentoContainer
