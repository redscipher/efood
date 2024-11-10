// importacoes
import ListaItens from '../../componentes/listaItens/ListaItens'
import { ItemRestaurante } from '../../globais'
// imagens
import Heroi from '../../componentes/heroi/Heroi'
import Cabecalho from '../../componentes/cabecalho'
import HeroiFundo from '../../ativos/imagens/restaurantes/restaurante2.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// componente
const Restaurante = () => {
  // parametros da URL
  const { id } = useParams()
  // estados
  const [lstCardapio, setLstCardapio] = useState<ItemRestaurante>({
    avaliacao: 0,
    capa: '',
    cardapio: [],
    descricao: '',
    destacado: false,
    id: 0,
    tipoItem: [],
    titulo: ''
  })

  // efeitos
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setLstCardapio(res))
  }, [id])

  // def retorno
  return (
    <>
      <Cabecalho />
      <Heroi
        imagem_url={HeroiFundo}
        tipo="restaurante"
        espacamento="0 171px"
        tamanho={280}
        titulo={lstCardapio.titulo}
        subtitulo={lstCardapio.titulo}
      />
      <ListaItens
        itens={lstCardapio}
        colunas={'1fr 1fr 1fr'}
        colunagap={'32px'}
        gap={'32px'}
        tipo="restaurante"
      />
    </>
  )
}

// exportacoes
export default Restaurante
