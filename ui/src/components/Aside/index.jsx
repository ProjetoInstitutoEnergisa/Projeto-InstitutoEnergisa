import React, { useState } from "react";
import Modal from 'react-modal';
import { MdArticle } from "react-icons/md";
import { Container, MenuContainer, MenuItemLink } from "./styles";
import FormularioInscricao from "../Formulario/index";

const Aside = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <MenuContainer>

        <MenuItemLink onClick={openModal}>
          <MdArticle />
          Faça Sua Solicitação
        </MenuItemLink>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Solicitação Modal"
          style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)'}
          }}>
          <FormularioInscricao closeModal={closeModal}/> 
        </Modal>
      </MenuContainer>
    </Container>
  );
};

export default Aside;