// importacoes
import { ItemProps } from '../../globais'
import Item from '../item/Item'
import ListaContainer from './estilos'

// tipo
type Props = {
  itens: ItemProps[]
  colunas: string
  colunaGap: string
  gap: string
}

// componente
const ListaItens = ({ itens, colunas, colunaGap, gap }: Props) => {
  // def retorno
  return (
    <div className="container">
      <ListaContainer colunas={colunas} colunaGap={colunaGap} gap={gap}>
        {/* loop / renderizar os itens */}
        {itens.map((i, ind) => {
          // def retorno
          return (
            <Item
              key={ind}
              imagem={i.imagem}
              titulo={i.titulo}
              categorias={i.categorias}
              nota={i.nota}
              descricao={i.descricao}
              tipo={i.tipo}
            ></Item>
          )
        })}
      </ListaContainer>
    </div>
  )
}

// exportacoes
export default ListaItens
