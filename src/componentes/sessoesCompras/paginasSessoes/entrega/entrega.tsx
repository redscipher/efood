// importacoes
import { useNavigate, useParams } from 'react-router-dom'
import {
  Botao,
  BotaoLink,
  Campos,
  EntradaMeia,
  Entradas,
  Rotulos,
  Titulo
} from '../../../../globais'
import * as E from './estilos'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Entrega = () => {
  // parametros da URL
  const { id } = useParams()
  // cria navegacao
  const navegar = useNavigate()

  const form = useFormik({
    initialValues: {
      idRecebedor: '',
      idEndereco: '',
      idCidade: '',
      idCEP: '',
      idNumero: '',
      idComplemento: ''
    },
    validationSchema: Yup.object({
      idRecebedor: Yup.string().required('O campo é obrigatorio'),
      idEndereco: Yup.string().required('O campo é obrigatorio'),
      idCidade: Yup.string().required('O campo é obrigatorio'),
      idCEP: Yup.string().required('O campo é obrigatorio'),
      idNumero: Yup.string().required('O campo é obrigatorio')
    }),
    onSubmit: (valores) => {
      console.log(valores)
      // passa p/ proxima rota
      navegar(`/restaurante/${id}/pagamento`)
    }
  })

  const retornaMensagemErro = (campo: string, message?: string): string => {
    // variavel retorno
    let str: string = ''
    // verifica se o campo ja foi passado pelo usuario
    const estaAlterado = campo in form.touched
    // verifica se o campo esta invalido
    const estaInvalido = campo in form.errors
    // caso o campo ja foi passado e esta invalido, exibe mensagem de erro
    if (estaAlterado && estaInvalido) str = message!
    // def retorno
    return str
  }

  const validaProximaRota = () => {
    form.submitForm() // valida e submete o formulário
  }

  // def retorno
  return (
    <E.default>
      <Titulo>Entrega</Titulo>
      <form action="" onSubmit={form.handleSubmit}>
        <Entradas>
          {/* entrada 1 */}
          <Rotulos htmlFor="idRecebedor">Quem irá receber</Rotulos>
          <Campos
            type="text"
            id="idRecebedor"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            required
          />
          <small>
            {retornaMensagemErro('idRecebedor', form.errors.idRecebedor)}
          </small>
          {/* entrada 2 */}
          <Rotulos htmlFor="idEndereco">Endereço</Rotulos>
          <Campos
            type="text"
            id="idEndereco"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            required
          />
          <small>
            {retornaMensagemErro('idEndereco', form.errors.idEndereco)}
          </small>
          {/* entrada 3 */}
          <Rotulos htmlFor="idCidade">Cidade</Rotulos>
          <Campos
            type="text"
            id="idCidade"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            required
          />
          <small>{retornaMensagemErro('idCidade', form.errors.idCidade)}</small>
          <EntradaMeia id="idUltEntrada">
            {/* entrada 4 */}
            <div>
              <Rotulos htmlFor="idCEP">CEP</Rotulos>
              <Campos
                type="text"
                id="idCEP"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
              />
              <small>{retornaMensagemErro('idCEP', form.errors.idCEP)}</small>
            </div>
            {/* entrada 5 */}
            <div>
              <Rotulos htmlFor="idNumero">Número</Rotulos>
              <Campos
                type="text"
                id="idNumero"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
              />
              <small>
                {retornaMensagemErro('idNumero', form.errors.idNumero)}
              </small>
            </div>
          </EntradaMeia>
          {/* entrada 6 */}
          <Rotulos htmlFor="idComplemento">Complemento (opcional)</Rotulos>
          <Campos
            type="text"
            id="idComplemento"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </Entradas>
        {/* botoes */}
        <div>
          <Botao type="button" onClick={validaProximaRota}>
            Continuar com o pagamento
          </Botao>
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
