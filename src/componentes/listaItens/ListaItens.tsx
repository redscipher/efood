// importacoes
import { ItemProps } from '../../globais'
import Item from '../item/Item'
import ListaContainer from './estilos'

// tipo
type Props = {
  itens: ItemProps[]
}

// componente
const ListaItens = ({ itens }: Props) => {
  // def retorno
  return (
    <div className="container">
      <ListaContainer>
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
            ></Item>
          )
        })}
      </ListaContainer>
    </div>
  )
}

// exportacoes
export default ListaItens
