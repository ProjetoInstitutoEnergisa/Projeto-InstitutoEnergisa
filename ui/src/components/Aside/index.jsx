import React, { useState } from "react";
import Modal from 'react-modal';
import { MdArticle } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import { Container, MenuContainer, MenuItemLink, HamburgerButton, CloseButton } from "./styles";
import FormularioInscricao from "../Formulario/index";

const Aside = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <Container>
      <HamburgerButton onClick={toggleMenu}>
        <FaBars />
      </HamburgerButton>
      <MenuContainer isOpen={menuIsOpen}>
        <CloseButton onClick={toggleMenu}>X</CloseButton>
        <MenuItemLink onClick={openModal}>
          <MdArticle />
          Faça Sua Solicitação
        </MenuItemLink>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Solicitação Modal"
          style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' } }}>
          <FormularioInscricao closeModal={closeModal} />
        </Modal>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
