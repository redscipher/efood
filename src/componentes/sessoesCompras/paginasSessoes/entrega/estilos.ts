// importacoes
import styled from 'styled-components'
import { BotaoLink, CORES } from '../../../../globais'

// estilos
const EntregaContainer = styled.div`
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

const Entradas = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

const EntradaMeia = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;

  div {
    width: 155px;
    height: 56px;
    margin-bottom: 16px;

    label,
    input {
      width: 100%;
    }
  }
`

const Titulo = styled.h2`
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  color: ${CORES.bege_2};
`

const rotulos = styled.label`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${CORES.bege_2};
  margin-bottom: 8px;
`

const campos = styled.input`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  background-color: ${CORES.bege_2};
  color: ${CORES.cinza};
  margin-bottom: 8px;
  height: 32px;
  border: none;
  border-bottom: 2px solid ${CORES.bege};
  padding: 8px;
`

// exportacoes
export default EntregaContainer
export { Entradas, EntradaMeia, Titulo, rotulos, campos }
