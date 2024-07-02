import React from "react";
import { Container, Profile, NomePerfil, Perfil, LogoInst} from "./styles" 
// Importante as estilizações do CSS;

import photoProfile from "../../assets/mode-portrait.svg" 
//Importando a foto de perfil do Usuário;

import logo from "../../assets/logoInstituto.png"
// Importanto a logo do Instituto Energisa;

const MainHeader = () => {
    return (
        <Container> 
            <LogoInst src={logo} alt="Logo Insituto Energisa" />
            {/* Logo Instituto Energisa */}

            <Profile>
                <Perfil src={photoProfile} alt="Foto de Perfil" />
                <NomePerfil href="#">
                    Usuário
                </NomePerfil>
            </Profile>
        </Container>
    );
}

export default MainHeader;