// importacoes
import { RootReducer } from '../../armazem'
import { useDispatch, useSelector } from 'react-redux'
// acoes
import { abrirFechar } from '../../armazem/redutores/carrinho'
// sessoes
import RotasSessoes from './paginasSessoes/rotasSessoes'
// estilos
import CarrinhoCaixa, { CarrinhoOpaco, Sessoes } from './estilos'
import { retornaUltimoIdx } from '../../armazem/redutores/pedidos'

// componente
const SessoesCompras = () => {
  // itens do carrinho + controle se esta aberto
  const { estaAberto } = useSelector((estado: RootReducer) => estado.carrinho)
  const { itens: itensPedido } = useSelector(
    (estado: RootReducer) => estado.pedidos
  )

  // despacho de acoes p/ armazem
  const despacho = useDispatch()

  const idx = retornaUltimoIdx()

  // funcoes
  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(!estaAberto))
    // validacao p/ recarregar a pagina
    if (itensPedido[idx].confirmado) {
      window.location.reload()
    }
  }

  // def retorno
  return (
    <CarrinhoCaixa className={estaAberto ? 'visivel' : ''}>
      <CarrinhoOpaco onClick={fecharCarrinho} />
      <Sessoes>
        {/* rotas */}
        <RotasSessoes />
      </Sessoes>
    </CarrinhoCaixa>
  )
}

// exportacoes
export default SessoesCompras
