import React, { useState, useRef, useEffect } from "react";
import { Container, Profile, NomePerfil, LogoInst, RelativeContainer, UserImg, Menu, MenuItem,CardPerfil} from "./styles" 
// Importante as estilizações do CSS;

import photoProfile from "../../assets/mode-portrait.svg" 
//Importando a foto de perfil do Usuário;

import logo from "../../assets/logoInstituto.png"
// Importanto a logo do Instituto Energisa;

const MainHeader = () => {
    const [open, setOpen] = useState(false);
    const Menus = ['Meus Dados', 'Redefinir Senha', 'Sair'];

    const menuRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target !== menuRef.current && e.target !== imgRef.current) {
                setOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <Container> 
            <LogoInst src={logo} alt="Logo Insituto Energisa" />
            {/* Logo Instituto Energisa */}

            <Profile>
            <RelativeContainer>
                <CardPerfil>
                <UserImg 
                    ref={imgRef}
                    onClick={() => setOpen(!open)}
                    src={photoProfile}
                    alt="Foto de Perfil"
                />
                <NomePerfil href="#">
                    Admin
                </NomePerfil>
                </CardPerfil>
                {open && (
                    <Menu ref={menuRef}>
                        <ul>
                            {Menus.map((menu) => (
                                <MenuItem 
                                    onClick={() => setOpen(false)}
                                    key={menu}
                                >
                                    {menu}
                                </MenuItem>
                            ))}
                        </ul>
                    </Menu>
                )}
            </RelativeContainer>
        </Profile>
        </Container>
    );
}

export default MainHeader;