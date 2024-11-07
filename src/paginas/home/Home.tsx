// importacoes
import Heroi from '../../componentes/heroi/Heroi'
import ListaItens from '../../componentes/listaItens/ListaItens'
import { ItemProps } from '../../globais'
// imagens
import restaurante1 from '../../ativos/imagens/restaurantes/restaurante1.png'
import restaurante2 from '../../ativos/imagens/restaurantes/restaurante2.png'
import HeroiFundo from '../../ativos/imagens/fundo_heroi.png'

// objeto
const pratos: ItemProps[] = [
  {
    categorias: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: restaurante1,
    nota: 4.9,
    titulo: 'Hioki Sushi',
    tipo: 'heroi'
  },
  {
    categorias: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: restaurante2,
    nota: 4.6,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'heroi'
  },
  {
    categorias: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: restaurante2,
    nota: 4.6,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'heroi'
  },
  {
    categorias: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: restaurante1,
    nota: 4.9,
    titulo: 'Hioki Sushi',
    tipo: 'heroi'
  },
  {
    categorias: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: restaurante1,
    nota: 4.9,
    titulo: 'Hioki Sushi',
    tipo: 'heroi'
  },
  {
    categorias: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: restaurante2,
    nota: 4.6,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'heroi'
  }
]

// componente
const Home = () => {
  return (
    <>
      <Heroi
        imagem_url={HeroiFundo}
        tipo="heroi"
        espacamento="0 416px"
        tamanho={384}
      />
      <ListaItens
        itens={pratos}
        colunas={'1fr 1fr'}
        colunaGap={'80px'}
        gap={'48px'}
      />
    </>
  )
}

// exportacoes
export default Home
