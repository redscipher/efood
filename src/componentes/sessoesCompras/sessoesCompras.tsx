// importacoes
import { RootReducer } from '../../armazem'
import { useDispatch, useSelector } from 'react-redux'
// acoes
import { abrirFechar } from '../../armazem/redutores/carrinho'
// sessoes
import RotasSessoes from './paginasSessoes/rotasSessoes'
// estilos
import CarrinhoCaixa, { CarrinhoOpaco, Sessoes } from './estilos'
import { useNavigate } from 'react-router-dom'

// componente
const SessoesCompras = () => {
  // itens do carrinho + controle se esta aberto
  const { estaAberto, itens } = useSelector(
    (estado: RootReducer) => estado.carrinho
  )

  // navegacao
  const navegar = useNavigate()

  // despacho de acoes p/ armazem
  const despacho = useDispatch()

  // funcoes
  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(!estaAberto))
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
