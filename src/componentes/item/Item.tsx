// importacoes
import estrela from '../../ativos/imagens/estrela.png'
import { Descricao, ItemProps } from '../../globais'
import ItemContainer, {
  Categorias,
  Classe,
  ItemInfo,
  Nota,
  Titulo,
  TituloContainer,
  LinkBotao
} from './estilos'

// componente
const Item = ({ imagem, titulo, categorias, nota, descricao }: ItemProps) => {
  // def retorno
  return (
    <ItemContainer>
      <img src={imagem} alt={titulo} />
      <Categorias>
        {/* loop p/ renderizar as categorias */}
        {categorias.map((c, ind) => (
          <li key={ind}>{c}</li>
        ))}
      </Categorias>
      <ItemInfo>
        <TituloContainer>
          <Titulo>{titulo}</Titulo>
          <Classe>
            <Nota as="p">{nota}</Nota>
            <img src={estrela} alt="Classificação" />
          </Classe>
        </TituloContainer>
        <Descricao tamanho={14}>{descricao}</Descricao>
        <LinkBotao to="/restaurante">Saiba mais</LinkBotao>
      </ItemInfo>
    </ItemContainer>
  )
}

// exportacoes
export default Item
