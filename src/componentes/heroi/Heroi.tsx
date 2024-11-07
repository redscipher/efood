// importacoes
import HeroiContainer, { Titulo } from './estilos'
// imagens
import logo from '../../ativos/imagens/logo_heroi.png'
import { Imagem } from '../../globais'

// componente
const Heroi = () => {
  // def retorno
  return (
    <HeroiContainer>
      <div className="container">
        <Imagem
          margem_topo={64}
          margem_baixo={0}
          src={logo}
          alt="Logo do E-FOOD"
        />
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </HeroiContainer>
  )
}

// exportacao
export default Heroi
