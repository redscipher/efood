// importacoes
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// tipos
type pedidoEstado = {
  item: number[]
}

// inicia estado da parte
const initialState: pedidoEstado = {
  item: []
}

// parte
const pedidoParte = createSlice({
  name: 'pedido',
  initialState,
  reducers: {
    adicionarPedido: (estado, acao: PayloadAction<number>) => {
      estado.item.push(acao.payload)
      alert('Pedido confirmado!')
    }
  }
})

// exportacoes
export default pedidoParte.reducer // redutor
// acoes
export const { adicionarPedido } = pedidoParte.actions
