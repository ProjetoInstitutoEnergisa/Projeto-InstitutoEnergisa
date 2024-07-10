import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdHome, MdDashboard } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Container, MenuContainer, MenuItemLink, HamburgerButton, CloseButton } from "./styles";

const AsideAdm = () => {
    const navigate = useNavigate();
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleHomeClick = () => {
        navigate('/homeadmin'); // Navegue para a página Início
        setMenuIsOpen(false); // Fechar o menu após a navegação
    }

    const handleDashboardClick = () => {
        navigate('/dashboard'); // Navegue para a página Dashboard
        setMenuIsOpen(false); // Fechar o menu após a navegação
    }

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <Container>
            <HamburgerButton onClick={toggleMenu}>
                <FaBars />
            </HamburgerButton>
            <MenuContainer isOpen={menuIsOpen}>
                <CloseButton onClick={toggleMenu}>X</CloseButton>
                <MenuItemLink onClick={handleHomeClick}>
                    <MdHome />
                    Início
                </MenuItemLink>
                <MenuItemLink onClick={handleDashboardClick}>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default AsideAdm;
