// importacoes
import { Imagem } from '../../globais'
// imagens
import logo from '../../ativos/imagens/logo_heroi.png'
import CabContainer, { LinkMarca } from './estilos'

// componente
const Cabecalho = () => {
  // def retorno
  return (
    <CabContainer>
      <div className="container">
        <LinkMarca to="/">Restaurantes</LinkMarca>
        <Imagem
          margem_topo={0}
          margem_baixo={0}
          src={logo}
          alt="Logo do E-FOOD"
        />
        <LinkMarca to="">0 produto(s) no carrinho</LinkMarca>
      </div>
    </CabContainer>
  )
}

// exportacoes
export default Cabecalho
