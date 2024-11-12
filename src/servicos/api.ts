// importacoes
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemRestaurante } from '../globais'

// controlador redux requisicao url
const api = createApi({
  // url base
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<ItemRestaurante[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<ItemRestaurante, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

// exportacoes
export default api
export const { useGetRestaurantesQuery, useGetCardapioQuery } = api
