// importacoes
import ListaItens from '../../componentes/listaItens/ListaItens'
import { ItemProps } from '../../globais'
// imagens
import prato1 from '../../ativos/imagens/cardapio/prato1.png'
import Heroi from '../../componentes/heroi/Heroi'
import Cabecalho from '../../componentes/cabecalho'
import HeroiFundo from '../../ativos/imagens/restaurantes/restaurante2.png'

const pratos: ItemProps[] = [
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prato1,
    titulo: 'Pizza Marguerita',
    tipo: 'restaurante'
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prato1,
    titulo: 'Pizza Marguerita',
    tipo: 'restaurante'
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prato1,
    titulo: 'Pizza Marguerita',
    tipo: 'restaurante'
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prato1,
    titulo: 'Pizza Marguerita',
    tipo: 'restaurante'
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prato1,
    titulo: 'Pizza Marguerita',
    tipo: 'restaurante'
  },
  {
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: prato1,
    titulo: 'Pizza Marguerita',
    tipo: 'restaurante'
  }
]

// componente
const Restaurante = () => {
  // def retorno
  return (
    <>
      <Cabecalho />
      <Heroi
        imagem_url={HeroiFundo}
        tipo="restaurante"
        espacamento="0 171px"
        tamanho={280}
      />
      <ListaItens
        itens={pratos}
        colunas={'1fr 1fr 1fr'}
        colunaGap={'32px'}
        gap={'32px'}
      />
    </>
  )
}

// exportacoes
export default Restaurante
