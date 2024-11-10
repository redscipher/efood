// importacoes
import estrela from '../../ativos/imagens/estrela.png'
import { Botao, Descricao, ItemProps } from '../../globais'
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
  tipo,
  exibirModal,
  preco
}: ItemProps) => {
  // funcoes
  const confirmaExibirModal = () => {
    if (exibirModal) {
      exibirModal({
        descricao,
        imagem,
        preco: preco ?? 0,
        titulo,
        tipo: 'heroi'
      })
    }
  }

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
          <LinkBotao to="/restaurante">Saiba mais</LinkBotao>
        ) : (
          <Botao type="button" onClick={confirmaExibirModal}>
            Adicionar ao carrinho
          </Botao>
        )}
      </ItemInfo>
    </ItemContainer>
  )
}

// exportacoes
export default Item
