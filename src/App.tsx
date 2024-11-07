// importacoes
import { BrowserRouter } from 'react-router-dom'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// --------------------------------
import CSSGlobal from './globais'
import Rotas from './paginas/rotas'
import Rodape from './componentes/rodape'

// componente pai principal
function App() {
  // def retorno
  return (
    // componente p/ navegacao entre as rotas de paginas
    <BrowserRouter>
      <CSSGlobal />
      {/* componente com as paginas */}
      <Rotas />
      <Rodape />
    </BrowserRouter>
  )
}

// exportacao
export default App
