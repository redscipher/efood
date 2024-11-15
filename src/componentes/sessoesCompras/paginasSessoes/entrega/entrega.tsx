// importacoes
import { useParams } from 'react-router-dom'
import {
  BotaoLink,
  Campos,
  EntradaMeia,
  Entradas,
  Rotulos,
  Titulo
} from '../../../../globais'
import * as E from './estilos'

const Entrega = () => {
  // parametros da URL
  const { id } = useParams()
  // def retorno
  return (
    <E.default>
      <Titulo>Entrega</Titulo>
      <form action="">
        <Entradas>
          {/* entrada 1 */}
          <Rotulos htmlFor="">Quem irá receber</Rotulos>
          <Campos type="text" required />
          {/* entrada 2 */}
          <Rotulos htmlFor="">Endereço</Rotulos>
          <Campos type="text" required />
          {/* entrada 3 */}
          <Rotulos htmlFor="">Cidade</Rotulos>
          <Campos type="text" required />
          <EntradaMeia>
            {/* entrada 4 */}
            <div>
              <Rotulos htmlFor="">CEP</Rotulos>
              <Campos type="text" required />
            </div>
            {/* entrada 5 */}
            <div>
              <Rotulos htmlFor="">Número</Rotulos>
              <Campos type="text" required />
            </div>
          </EntradaMeia>
          {/* entrada 6 */}
          <Rotulos htmlFor="">Complemento (opcional)</Rotulos>
          <Campos type="text" />
        </Entradas>
        {/* botoes */}
        <div>
          <BotaoLink to={`/restaurante/${id}/pagamento`} type="button">
            Continuar com o pagamento
          </BotaoLink>
          <BotaoLink to={`/restaurante/${id}/carrinho`} type="button">
            Voltar para o carrinho
          </BotaoLink>
        </div>
      </form>
    </E.default>
  )
}

// exportacoes
export default Entrega
