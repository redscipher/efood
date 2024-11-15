// importacoes
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DadosEndereco, DadosPagamento, ItemCardapio } from '../../globais'

// tipos
type Pedido = {
  id?: string
  products?: ItemCardapio[]
  delivery?: DadosEndereco
  payment?: DadosPagamento
}

type PedidosEstado = {
  itens: Pedido[]
}

// inicia estado da parte
const initialState: PedidosEstado = {
  itens: []
}

const retornaUltimoIdx = () => {
  return initialState.itens.length
}

// parte
const pedidoParte = createSlice({
  name: 'pedido',
  initialState,
  reducers: {
    confirmarPedido: (estado, acao: PayloadAction<string>) => {
      // retorna ultimo indice
      const idx = retornaUltimoIdx()
      // adiciona endereco
      estado.itens[idx].id = acao.payload
      alert('Pedido confirmado!')
    },
    adicionarItens: (estado, acao: PayloadAction<ItemCardapio[]>) => {
      const novoPedido: Pedido = {
        products: acao.payload
      }
      // cria novo pedido
      estado.itens.push(novoPedido)
    },
    adicionarEndereco: (estado, acao: PayloadAction<DadosEndereco>) => {
      // retorna ultimo indice
      const idx = retornaUltimoIdx()
      // adiciona endereco
      estado.itens[idx].delivery = acao.payload
    },
    adicionarPagamento: (estado, acao: PayloadAction<DadosPagamento>) => {
      // retorna ultimo indice
      const idx = retornaUltimoIdx()
      // adiciona endereco
      estado.itens[idx].payment = acao.payload
    }
  }
})

// exportacoes
export default pedidoParte.reducer // redutor
// acoes
export const {
  confirmarPedido,
  adicionarItens,
  adicionarEndereco,
  adicionarPagamento
} = pedidoParte.actions
