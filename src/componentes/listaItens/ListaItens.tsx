// importacoes
import { useState } from 'react'
import { Botao, ItemProps } from '../../globais'
import Item from '../item/Item'
import ListaContainer, { Caixa, Modal, ModalContainer } from './estilos'
// imagens
import fechar from '../../ativos/imagens/fechar.png'

// tipo
type Props = {
  itens: ItemProps[]
  colunas: string
  colunaGap: string
  gap: string
}

// componente
const ListaItens = ({ itens, colunas, colunaGap, gap }: Props) => {
  // estados
  const [itemSel, setItemSel] = useState<ItemProps>()

  const fechaModal = () => {
    setItemSel({
      descricao: '',
      imagem: '',
      preco: 0,
      titulo: '',
      tipo: 'heroi',
      categorias: []
    })
  }

  // def retorno
  return (
    <Caixa className="container">
      <ListaContainer colunas={colunas} colunaGap={colunaGap} gap={gap}>
        {/* loop / renderizar os itens */}
        {itens.map((i, ind) => {
          // def retorno
          return (
            <Item
              key={ind}
              imagem={i.imagem}
              titulo={i.titulo}
              categorias={i.categorias}
              nota={i.nota}
              descricao={i.descricao}
              tipo={i.tipo}
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
                <p>{itemSel?.descricao}</p>
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
