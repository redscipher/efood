// importacoes
import { useParams } from 'react-router-dom'
import {
  BotaoLink,
  Campos,
  EntradaMeia,
  Entradas,
  formataNumero,
  Rotulos,
  Titulo
} from '../../../../globais'

import * as E from './estilos'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../armazem'

const Pagamento = () => {
  // parametros da URL
  const { id } = useParams()

  // itens do carrinho + controle se esta aberto
  const { itens } = useSelector((estado: RootReducer) => estado.carrinho)

  // funcoes
  const retornaValorTotal = (): string => {
    // variavel temp
    let qtdTemp: number
    // ----------------------------------------------
    const valorTotal = itens.reduce((soma, atual) => {
      // quantidade
      qtdTemp = atual.qtd ? atual.qtd : 1
      // def retorno
      return (soma += qtdTemp * atual.preco)
    }, 0)
    // def retorno
    return formataNumero(valorTotal)
  }

  // def retorno
  return (
    <E.default>
      <Titulo>Pagamento - Valor a pagar {retornaValorTotal()}</Titulo>
      <form action="">
        <Entradas>
          {/* entrada 1 */}
          <Rotulos htmlFor="">Nome no cartão</Rotulos>
          <Campos type="text" required />
          {/* --------------------------------------- */}
          <EntradaMeia>
            {/* entrada 2 */}
            <div>
              <Rotulos htmlFor="">Número do cartão</Rotulos>
              <Campos type="number" required />
            </div>
            {/* entrada 3 */}
            <div>
              <Rotulos htmlFor="">CVV</Rotulos>
              <Campos type="number" required />
            </div>
          </EntradaMeia>
          {/* --------------------------------------- */}
          <EntradaMeia>
            {/* entrada 4 */}
            <div>
              <Rotulos htmlFor="">Mes do vencimento</Rotulos>
              <Campos type="number" required />
            </div>
            {/* entrada 5 */}
            <div>
              <Rotulos htmlFor="">Ano do vencimento</Rotulos>
              <Campos type="number" required />
            </div>
          </EntradaMeia>
        </Entradas>
        {/* botoes */}
        <div>
          <BotaoLink to={`/restaurante/${id}/finalizar`} type="button">
            Finalizar pagamento
          </BotaoLink>
          <BotaoLink to={`/restaurante/${id}/entrega`} type="button">
            Voltar para a edição de endereço
          </BotaoLink>
        </div>
      </form>
    </E.default>
  )
}

// exportacoes
export default Pagamento
