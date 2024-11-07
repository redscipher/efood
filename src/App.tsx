// importacoes
import { BrowserRouter } from 'react-router-dom'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// --------------------------------
import CSSGlobal from './globais'
import Rotas from './paginas/rotas'

// componente pai principal
function App() {
  // def retorno
  return (
    // componente p/ navegacao entre as rotas de paginas
    <BrowserRouter>
      <CSSGlobal />
      {/* componente com as paginas */}
      <Rotas />
    </BrowserRouter>
  )
}

// exportacao
export default App
