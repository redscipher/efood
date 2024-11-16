// importacoes
import styled from 'styled-components'
import { Botao, BotaoLink, CORES, EntradaMeia } from '../../../../globais'

// estilos
const PagamentoContainer = styled.div`
  flex: auto;

  h2 {
    margin: 32px 0 16px 8px;
  }

  form {
    margin: 8px;

    small {
      color: ${CORES.vermelho};
    }

    ${BotaoLink},
    ${Botao} {
      margin-left: 0;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }

    ${EntradaMeia} {
      margin-bottom: 16px;
    }
  }
`

// exportacoes
export default PagamentoContainer
