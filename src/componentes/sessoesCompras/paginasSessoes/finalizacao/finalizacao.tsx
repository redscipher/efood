// importacoes
import { useDispatch, useSelector } from 'react-redux'
import { Botao, Descritivo, Titulo } from '../../../../globais'
import * as E from './estilos'
import { abrirFechar, esvaziar } from '../../../../armazem/redutores/carrinho'
import { confirmarPedido } from '../../../../armazem/redutores/pedidos'
import { useComprarMutation } from '../../../../servicos/api'
import { RootReducer } from '../../../../armazem'

const Finalizacao = () => {
  const { itens, idAtual } = useSelector(
    (estado: RootReducer) => estado.pedidos
  )
  // despacho de acoes p/ armazem
  const despacho = useDispatch()

  // constante com funcao 'POST' p/ compra
  const [comprar, { data, isSuccess }] = useComprarMutation()

  // funcoes
  // busca o indice do id atual
  const retornaIdxAtual = () => {
    return itens.findIndex((item) => item.id === idAtual)
  }

  const idx = retornaIdxAtual()

  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(false))
  }

  const finalizarPedido = () => {
    // efetua o 'POST' do pedido carregado
    comprar(itens[idx])
    // confirma o pedido com o novo ID
    despacho(confirmarPedido(itens[idx].id as string))
    // esvazia + fecha modal
    despacho(esvaziar())
  }

  // def retorno
  return (
    <E.default>
      {isSuccess ? (
        <Titulo>Pedido realizado - {data.orderId}</Titulo>
      ) : (
        <Titulo>Pedido - 0000000</Titulo>
      )}
      <div>
        {isSuccess ? (
          <Descritivo tamanho={14}>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </Descritivo>
        ) : (
          <Descritivo tamanho={14}></Descritivo>
        )}
        {isSuccess ? (
          <Botao type="button" onClick={fecharCarrinho}>
            Fechar
          </Botao>
        ) : (
          <Botao type="button" onClick={finalizarPedido}>
            Concluir
          </Botao>
        )}
      </div>
    </E.default>
  )
}

// exportacoes
export default Finalizacao
