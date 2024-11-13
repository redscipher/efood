// importacoes
import * as E from './estilos'
// -------------------------------------
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../armazem'
// --------------------------------------
import { Titulo } from '../item/estilos'
import { Botao, Descricao, formataNumbero } from '../../globais'
// acoes
import { abrirFechar, remover } from '../../armazem/redutores/carrinho'
// imagens
import delecao from '../../ativos/imagens/lixeira-de-reciclagem.png'

// componente
const Carrinho = () => {
  // itens do carrinho + controle se esta aberto
  const { estaAberto, itens } = useSelector(
    (estado: RootReducer) => estado.carrinho
  )
  // despacho de acoes p/ armazem
  const despacho = useDispatch()

  // funcoes
  const retornaValorTotal = (): string => {
    const valorTotal = itens.reduce((soma, atual) => {
      return (soma += atual.preco)
    }, 0)
    // def retorno
    return formataNumbero(valorTotal)
  }

  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(!estaAberto))
  }

  const removerItem = (id: number) => {
    // executa acao
    despacho(remover(id))
  }

  // def retorno
  return (
    <E.CarrinhoCaixa className={estaAberto ? 'visivel' : ''}>
      <E.CarrinhoOpaco onClick={fecharCarrinho} />
      <E.default>
        <ul>
          {itens.map((item, ind) => {
            return (
              <E.ItemLista key={ind}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <Titulo>{item.nome}</Titulo>
                  <Descricao tamanho={14} tipo="heroi">
                    {formataNumbero(item.preco)}
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
        <Botao type="button">Continuar com a entrega</Botao>
      </E.default>
    </E.CarrinhoCaixa>
  )
}

// exportacoes
export default Carrinho
