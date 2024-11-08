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
const Item = ({
  imagem,
  titulo,
  categorias,
  nota,
  descricao,
  tipo
}: ItemProps) => {
  // def retorno
  return (
    <ItemContainer tipo={tipo}>
      <img src={imagem} alt={titulo} />
      <Categorias>
        {/* loop p/ renderizar as categorias */}
        {categorias !== undefined &&
          categorias.map((c, ind) => <li key={ind}>{c}</li>)}
      </Categorias>
      <ItemInfo tipo={tipo}>
        <TituloContainer>
          <Titulo>{titulo}</Titulo>
          {nota !== undefined && (
            <Classe>
              <Nota as="p">{nota}</Nota>
              <img src={estrela} alt="Classificação" />
            </Classe>
          )}
        </TituloContainer>
        <Descricao tamanho={14} tipo={tipo}>
          {descricao}
        </Descricao>
        {tipo === 'heroi' ? (
          <LinkBotao to="/restaurante" tipo={tipo}>
            Saiba mais
          </LinkBotao>
        ) : (
          <LinkBotao to="/restaurante" tipo={tipo}>
            Adicionar ao carrinho
          </LinkBotao>
        )}
      </ItemInfo>
    </ItemContainer>
  )
}

// exportacoes
export default Item
