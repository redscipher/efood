// importacoes
import { useDispatch } from 'react-redux'
import { Botao, Descritivo, Titulo } from '../../../../globais'
import * as E from './estilos'
import { abrirFechar, esvaziar } from '../../../../armazem/redutores/carrinho'
import { confirmarPedido } from '../../../../armazem/redutores/pedidos'

const Finalizacao = () => {
  // despacho de acoes p/ armazem
  const despacho = useDispatch()
  // variaveis
  const ID: string = ''

  // funcoes
  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(false))
  }

  const finalizarPedido = () => {
    despacho(confirmarPedido(ID))
    despacho(esvaziar())
    fecharCarrinho()
  }

  // def retorno
  return (
    <E.default>
      <Titulo>
        Pedido {ID !== '' ? 'realizado' : ''} - {ID.toString().padStart(7, '0')}
      </Titulo>
      <div>
        {ID !== '' && (
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
        )}
        <Botao type="button" onClick={finalizarPedido}>
          Concluir
        </Botao>
      </div>
    </E.default>
  )
}

// exportacoes
export default Finalizacao
