// importacoes
import { useState } from 'react'
import { Botao, ItemProps, ItemRestaurante } from '../../globais'
import Item from '../item/Item'
import ListaContainer, { Caixa, Modal, ModalContainer } from './estilos'
// imagens
import fechar from '../../ativos/imagens/fechar.png'

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
  // estados
  const [itemSel, setItemSel] = useState<ItemProps>()

  const fechaModal = () => {
    setItemSel({
      descricao: '',
      imagem: '',
      preco: 0,
      titulo: '',
      tipo: tipo,
      categorias: []
    })
  }

  // def retorno
  return (
    <Caixa className="container">
      <ListaContainer colunas={colunas} colunagap={colunagap} gap={gap}>
        {/* loop / renderizar os itens */}
        {Array.isArray(itens)
          ? itens.map((i, ind) => {
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
                  exibirModal={setItemSel}
                ></Item>
              )
            })
          : itens.cardapio.map((j, indCard) => {
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
                  exibirModal={setItemSel}
                ></Item>
              )
            })}
      </ListaContainer>
      {/* modal */}
      <Modal className={`modal ${itemSel?.titulo ? 'visivel' : ''}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModalContainer className="modal-body">
              <img src={itemSel?.imagem} alt={itemSel?.titulo} />
              <div>
                <h1 className="modal-title fs-5">{itemSel?.titulo}</h1>
                <p>
                  {itemSel?.descricao} <br /> <br />
                  {itemSel?.categorias?.join('') !== undefined && (
                    <>Serve: {itemSel?.categorias?.join('')}</>
                  )}
                </p>
                <Botao type="button" onClick={fechaModal}>
                  Adicionar ao carrinho - R$ {itemSel?.preco}
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
