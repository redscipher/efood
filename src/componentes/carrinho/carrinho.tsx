// importacoes
import * as E from './estilos'
// -------------------------------------
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../armazem'
// --------------------------------------
import { Titulo } from '../item/estilos'
import { Botao, Descricao } from '../../globais'
// acoes
import { abrirFechar } from '../../armazem/redutores/carrinho'
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
  const retornaValorTotal = (): number => {
    return itens.reduce((soma, atual) => {
      return (soma += atual.preco)
    }, 0)
  }

  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(!estaAberto))
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
                    {item.preco}
                  </Descricao>
                </div>
                <button type="button">
                  <img src={delecao} alt="Icone para deletar um item" />
                </button>
              </E.ItemLista>
            )
          })}
        </ul>
        <E.Total>
          <p>Valor total</p>
          <span>R$ {retornaValorTotal()}</span>
        </E.Total>
        <Botao type="button">Continuar com a entrega</Botao>
      </E.default>
    </E.CarrinhoCaixa>
  )
}

// exportacoes
export default Carrinho
