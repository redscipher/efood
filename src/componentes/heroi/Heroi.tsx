// importacoes
import HeroiContainer, { Imagem, Titulo } from './estilos'
// imagens
import logo from '../../ativos/imagens/logo_heroi.png'

// componente
const Heroi = () => {
  // def retorno
  return (
    <HeroiContainer>
      <div className="container">
        <Imagem src={logo} alt="Logo do E-FOOD" />
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </HeroiContainer>
  )
}

// exportacao
export default Heroi
