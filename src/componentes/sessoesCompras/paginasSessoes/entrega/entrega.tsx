// importacoes
import { useParams } from 'react-router-dom'
import { BotaoLink } from '../../../../globais'
import * as E from './estilos'

const Entrega = () => {
  // parametros da URL
  const { id } = useParams()
  // def retorno
  return (
    <E.default>
      <E.Titulo>Entrega</E.Titulo>
      <form action="">
        <E.Entradas>
          {/* entrada 1 */}
          <E.rotulos htmlFor="">Quem irá receber</E.rotulos>
          <E.campos type="text" required />
          {/* entrada 2 */}
          <E.rotulos htmlFor="">Endereço</E.rotulos>
          <E.campos type="text" required />
          {/* entrada 3 */}
          <E.rotulos htmlFor="">Cidade</E.rotulos>
          <E.campos type="text" required />
          <E.EntradaMeia>
            {/* entrada 4 */}
            <div>
              <E.rotulos htmlFor="">CEP</E.rotulos>
              <E.campos type="text" required />
            </div>
            {/* entrada 5 */}
            <div>
              <E.rotulos htmlFor="">Número</E.rotulos>
              <E.campos type="text" required />
            </div>
          </E.EntradaMeia>
          {/* entrada 6 */}
          <E.rotulos htmlFor="">Complemento (opcional)</E.rotulos>
          <E.campos type="text" />
        </E.Entradas>
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
