// importacoes
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCardapio } from '../../globais'

// tipos
type Endereco = {
  description: string
  city: string
  zipCode: string
  number: number
  complement: string
}

type DadosEndereco = {
  receiver: string
  address: Endereco
}

type DadosExpiracao = {
  month: number
  year: number
}

type DadosCartao = {
  name: string
  number: string
  code: number
  expires: DadosExpiracao
}

type DadosPagamento = {
  card: DadosCartao
}

type Pedido = {
  id: string
  products: ItemCardapio[]
  delivery: DadosEndereco
  payment: DadosPagamento
}

type PedidosEstado = {
  itens: Pedido[]
}

// inicia estado da parte
const initialState: PedidosEstado = {
  itens: []
}

// parte
const pedidoParte = createSlice({
  name: 'pedido',
  initialState,
  reducers: {
    confirmarPedido: (estado) => {
      alert('Pedido confirmado!')
    }
  }
})

// exportacoes
export default pedidoParte.reducer // redutor
// acoes
export const { confirmarPedido } = pedidoParte.actions
