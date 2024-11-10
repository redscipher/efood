// importacoes
import Heroi from '../../componentes/heroi/Heroi'
import ListaItens from '../../componentes/listaItens/ListaItens'
import { ItemRestaurante } from '../../globais'
// imagens
import HeroiFundo from '../../ativos/imagens/fundo_heroi.png'
import { useEffect, useState } from 'react'

// componente
const Home = () => {
  // estados
  const [lstRestaurantes, setLstRestaurantes] = useState<ItemRestaurante[]>([])

  // efeitos
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setLstRestaurantes(res))
  }, [])

  return (
    <>
      <Heroi
        imagem_url={HeroiFundo}
        tipo="heroi"
        espacamento="0 416px"
        tamanho={384}
        titulo={''}
        subtitulo={''}
      />
      <ListaItens
        itens={lstRestaurantes}
        colunas={'1fr 1fr'}
        colunagap={'80px'}
        gap={'48px'}
        tipo="heroi"
      />
    </>
  )
}

// exportacoes
export default Home
