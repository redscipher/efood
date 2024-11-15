// importacoes
import * as E from './estilos'
// -------------------------------------
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../../armazem'
// --------------------------------------
import { Titulo } from '../../../item/estilos'
import { BotaoLink, Descricao, formataNumero } from '../../../../globais'
// acoes
import { remover } from '../../../../armazem/redutores/carrinho'
// imagens
import delecao from '../../../../ativos/imagens/lixeira-de-reciclagem.png'
import { useParams } from 'react-router-dom'

// componente
const Carrinho = () => {
  // parametros da URL
  const { id } = useParams()
  // itens do carrinho + controle se esta aberto
  const { itens } = useSelector((estado: RootReducer) => estado.carrinho)
  // despacho de acoes p/ armazem
  const despacho = useDispatch()

  // funcoes
  const retornaValorTotal = (): string => {
    const valorTotal = itens.reduce((soma, atual) => {
      return (soma += atual.preco)
    }, 0)
    // def retorno
    return formataNumero(valorTotal)
  }

  const removerItem = (id: number) => {
    // executa acao
    despacho(remover(id))
  }

  // def retorno
  return (
    <E.default>
      <div>
        <ul>
          {itens.map((item, ind) => {
            return (
              <E.ItemLista key={ind}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <Titulo>{item.nome}</Titulo>
                  <Descricao tamanho={14} tipo="heroi">
                    {formataNumero(item.preco)}
                  </Descricao>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    removerItem(item.id)
                  }}
                >
                  <img src={delecao} alt="Icone para deletar um item" />
                </button>
              </E.ItemLista>
            )
          })}
        </ul>
        <E.Total>
          <p>Valor total</p>
          <span>{retornaValorTotal()}</span>
        </E.Total>
        <BotaoLink to={`/restaurante/${id}/entrega`} type="button">
          Continuar com a entrega
        </BotaoLink>
      </div>
    </E.default>
  )
}

// exportacoes
export default Carrinho
