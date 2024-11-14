// importacoes
import { Route, Routes } from 'react-router-dom'
// sessoes
import Carrinho from './carrinho/carrinho'
import Entrega from './entrega/entrega'

// componente
const RotasSessoes = () => {
  // def retorno
  return (
    <Routes>
      <Route path="/restaurante/:id/carrinho" element={<Carrinho />} />
      <Route path="/restaurante/:id/entrega" element={<Entrega />} />
    </Routes>
  )
}

// exportacoes
export default RotasSessoes
