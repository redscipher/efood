// importacoes
import { createGlobalStyle } from 'styled-components'

// constantes
const CORES = {
  bege: '#FFF8F2',
  vermelho_claro: '#E66767'
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
`

// exportacoes
export default CSSGlobal
export { CORES }
