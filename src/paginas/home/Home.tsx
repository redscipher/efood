// importacoes
import Heroi from '../../componentes/heroi/Heroi'
import ListaItens from '../../componentes/listaItens/ListaItens'
import { ItemProps } from '../../globais'
// imagens
import prato1 from '../../ativos/imagens/cardapio/prato1.png'
import prato2 from '../../ativos/imagens/cardapio/prato2.png'

// objeto
const pratos: ItemProps[] = [
  {
    categorias: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: prato1,
    nota: 4.9,
    titulo: 'Hioki Sushi'
  },
  {
    categorias: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: prato2,
    nota: 4.6,
    titulo: 'La Dolce Vita Trattoria'
  },
  {
    categorias: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: prato2,
    nota: 4.6,
    titulo: 'La Dolce Vita Trattoria'
  },
  {
    categorias: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: prato1,
    nota: 4.9,
    titulo: 'Hioki Sushi'
  },
  {
    categorias: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: prato1,
    nota: 4.9,
    titulo: 'Hioki Sushi'
  },
  {
    categorias: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: prato2,
    nota: 4.6,
    titulo: 'La Dolce Vita Trattoria'
  }
]

// componente
const Home = () => {
  return (
    <>
      <Heroi />
      <ListaItens itens={pratos} />
    </>
  )
}

// exportacoes
export default Home
