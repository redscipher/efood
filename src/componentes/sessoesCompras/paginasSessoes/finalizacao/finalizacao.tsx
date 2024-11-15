// importacoes
import { useDispatch } from 'react-redux'
import { Botao, Descritivo, Titulo } from '../../../../globais'
import * as E from './estilos'
import { abrirFechar } from '../../../../armazem/redutores/carrinho'

const Finalizacao = () => {
  // despacho de acoes p/ armazem
  const despacho = useDispatch()
  // variaveis
  const ID: string = '1'

  // funcoes
  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(false))
  }

  const confirmarPedido = () => {
    alert('Pedido confirmado!')
    fecharCarrinho()
  }

  // def retorno
  return (
    <E.default>
      <Titulo>Pedido realizado - {ID}</Titulo>
      <div>
        <Descritivo tamanho={14}>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido. <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.{' '}
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </Descritivo>
        <Botao type="button" onClick={confirmarPedido}>
          Concluir
        </Botao>
      </div>
    </E.default>
  )
}

// exportacoes
export default Finalizacao