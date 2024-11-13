// importacoes
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// --------------------------------
import CSSGlobal from './globais'
import Rotas from './paginas/rotas'
import Rodape from './componentes/rodape'
import armazem from './armazem'
import Carrinho from './componentes/carrinho/carrinho'

// componente pai principal
function App() {
  // def retorno
  return (
    // componente p/ navegacao entre as rotas de paginas
    <Provider store={armazem}>
      <BrowserRouter>
        <CSSGlobal />
        {/* componente com as paginas */}
        <Rotas />
        <Rodape />
        <Carrinho />
      </BrowserRouter>
    </Provider>
  )
}

// exportacao
export default App
