// importacoes
import { Route, Routes } from 'react-router-dom'
// paginas
import Home from './home/Home'

// componente
const Rotas = () => {
  // def retorno
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

// exportacoes
export default Rotas
