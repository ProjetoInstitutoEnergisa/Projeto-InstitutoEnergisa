import React from "react";

//Biblioteca React de Icons;
import {
    MdHome,
    MdDashboard,
    MdArticle
} from "react-icons/md";


//Importanto estilizações do Css;
import { 
    Container, 
    MenuContainer, 
    MenuItemLink } from "./styles";

const Aside = () => {
    return (
        <Container>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdHome />
                    Início
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArticle />   
                    Inscrições
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
            </MenuContainer>

        </Container>
    );
}

export default Aside;