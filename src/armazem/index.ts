// importacoes
import { configureStore } from '@reduxjs/toolkit'
import api from '../servicos/api'

// 'store' do redux
const armazem = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer // trazer a responsabilidade das conexoes p/ o redux
  },
  middleware: (gdm) => gdm().concat(api.middleware) // tratamento p/ conexoes url
})

// exportacoes
export default armazem
// exporta o tipo de dado sendo armazenado na 'store'
export type RootReducer = ReturnType<typeof armazem.getState>
