// importacoes
import { selecionar } from '../../armazem/redutores/cardapio'
import { adicao } from '../../armazem/redutores/carrinho'
// ------------------------------
import { Botao, ItemCardapio, ItemProps, ItemRestaurante } from '../../globais'
import Item from '../item/Item'
import ListaContainer, { Caixa, Modal, ModalContainer } from './estilos'
// imagens
import fechar from '../../ativos/imagens/fechar.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../armazem'

// tipo
type Props = {
  itens: ItemRestaurante[] | ItemRestaurante
  colunas: string
  colunagap: string
  gap: string
  tipo: 'heroi' | 'restaurante'
}

// componente
const ListaItens = ({ itens, colunas, colunagap, gap, tipo }: Props) => {
  // busca o estado do item selecionado
  const { item: itemSel, estaSelecionado } = useSelector(
    (estado: RootReducer) => estado.itemCard
  )

  // despacho
  const despacho = useDispatch()

  // funcoes
  const fechaModal = () => {
    // cria novo objeto vazio
    const itemVazio: ItemProps = {
      descricao: '',
      imagem: '',
      preco: 0,
      titulo: '',
      tipo: tipo,
      categorias: []
    }
    // executa acao
    despacho(selecionar(itemVazio))
  }

  const adicionarItemCarrinho = () => {
    // cria um item cardapio
    const itemNovo: ItemCardapio = {
      descricao: itemSel.descricao,
      foto: itemSel.imagem,
      id: itemSel.id as number,
      nome: itemSel.titulo,
      porcao: itemSel.categorias?.join('') as string,
      preco: itemSel.preco as number
    }
    // executa acao
    despacho(adicao(itemNovo))
    fechaModal()
  }

  // def retorno
  return (
    <Caixa className="container">
      <ListaContainer colunas={colunas} colunagap={colunagap} gap={gap}>
        {itens === undefined ||
        (!Array.isArray(itens) && itens.cardapio.length === 0) ||
        (Array.isArray(itens) && itens.length === 0) ? (
          <h3>Carregando...</h3>
        ) : Array.isArray(itens) ? (
          itens.map((i, ind) => {
            // def retorno
            return (
              <Item
                key={ind}
                id={i.id}
                imagem={i.capa}
                titulo={i.titulo}
                categorias={i.tipoItem}
                nota={i.avaliacao}
                descricao={i.descricao}
                tipo={tipo}
              ></Item>
            )
          })
        ) : (
          itens.cardapio.map((j, indCard) => {
            return (
              <Item
                key={indCard}
                id={j.id}
                imagem={j.foto}
                titulo={j.nome}
                categorias={[j.porcao]}
                descricao={j.descricao}
                tipo={tipo}
                preco={j.preco}
              ></Item>
            )
          })
        )}
      </ListaContainer>
      {/* modal */}
      <Modal className={`modal ${estaSelecionado ? 'visivel' : ''}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModalContainer className="modal-body">
              <img src={itemSel.imagem} alt={itemSel.titulo} />
              <div>
                <h1 className="modal-title fs-5">{itemSel.titulo}</h1>
                <>{console.log(itemSel.categorias)}</>
                <p>
                  {itemSel.descricao} <br /> <br />
                  {itemSel.categorias?.join('') !== undefined && (
                    <>Serve: {itemSel.categorias.join(' ')}</>
                  )}
                </p>
                <Botao type="button" onClick={adicionarItemCarrinho}>
                  Adicionar ao carrinho - R$ {itemSel.preco}
                </Botao>
              </div>
              <button type="button" onClick={fechaModal}>
                <img src={fechar} alt="Icone para fechar o modal" />
              </button>
            </ModalContainer>
          </div>
        </div>
      </Modal>
    </Caixa>
  )
}

// exportacoes
export default ListaItens
