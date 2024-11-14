// importacoes
import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

// constantes
const CORES = {
  bege: '#FFF8F2',
  vermelho_claro: '#E66767',
  bege_2: '#FFEBD9',
  branco: '#FFFFFF',
  preto: '#000',
  cinza: '#4B4B4B'
}

// tipos
type Props = {
  tamanho: number
  margem_topo: number
  margem_baixo: number
  tipo?: 'heroi' | 'restaurante'
}

type ItemProps = {
  imagem: string
  titulo: string
  categorias?: string[]
  nota?: number
  descricao: string
  tipo: 'heroi' | 'restaurante'
  preco?: number
  id?: number
}

type ItemCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type ItemRestaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipoItem: string[]
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

// estilos
const CSSGlobal = createGlobalStyle`
  *{
    /* todos elementos */
    margin: 0;
    padding: 0;
    box-sizing: border-box;   // setta limite
    /* fonte */
    font-family: Roboto, sans-serif;
    /* remove os pontos das listas */
    list-style: none;
  }

  /* elementos */
  body {
    background-color: ${CORES.bege};
    color: ${CORES.vermelho_claro};
  }

  /* classes */
  .container {
    margin: 0 auto;   // reseta as margens dentro do elemento
    /* tamanho */
    max-width: 1024px;
    width: 100%;
  }

   /* == responsividades: tablet */
   @media screen and (min-width: 768px) and (max-width: 1023px) {
    .container {
      max-width: 900px;
    }
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    .container {
      max-width: 700px;
    }
  }
`

const Descricao = styled.p<Omit<Props, 'margem_topo' | 'margem_baixo'>>`
  font-size: ${(props) => props.tamanho + 'px'};
  line-height: 22px;
  font-weight: 400;
  color: ${(props) =>
    props.tipo === 'heroi' ? CORES.vermelho_claro : CORES.bege_2};
  /* tamanho */
  max-width: 456px;
  max-height: 88px;
  /* scrolls */
  overflow-y: auto;
`

const Imagem = styled.img<Omit<Props, 'tamanho'>>`
  width: 125px;
  height: 57.5px;
  /* margens */
  margin-top: ${(props) => props.margem_topo + 'px'};
  margin-bottom: ${(props) => props.margem_baixo + 'px'};
`

const Botao = styled.button`
  line-height: 16px;
  padding: 4px 6px;
  border: none;
  height: 24px;
  text-decoration: none;
  background-color: ${CORES.bege_2};
  color: ${CORES.vermelho_claro};
  width: 100%;
  display: block;
  text-align: center;
`

const BotaoLink = styled(Link)`
  line-height: 16px;
  padding: 4px 6px;
  margin: 8px 8px;
  border: none;
  height: 24px;
  text-decoration: none;
  background-color: ${CORES.bege_2};
  color: ${CORES.vermelho_claro};
  width: 100%;
  display: block;
  text-align: center;
`

// funcoes
const formataNumbero = (valor: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

// exportacoes
export default CSSGlobal
export { CORES, Descricao, Imagem, Botao, formataNumbero, BotaoLink }
export type { ItemProps, ItemRestaurante, ItemCardapio }
