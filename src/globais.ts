// importacoes
import styled, { createGlobalStyle } from 'styled-components'

// constantes
const CORES = {
  bege: '#FFF8F2',
  vermelho_claro: '#E66767',
  bege_2: '#FFEBD9',
  branco: '#FFFFFF'
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
`

const Imagem = styled.img<Omit<Props, 'tamanho'>>`
  width: 125px;
  height: 57.5px;
  /* margens */
  margin-top: ${(props) => props.margem_topo + 'px'};
  margin-bottom: ${(props) => props.margem_baixo + 'px'};
`

// exportacoes
export default CSSGlobal
export { CORES, Descricao, Imagem }
export type { ItemProps }
