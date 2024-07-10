import React, { useState, useRef, useEffect } from "react";
import { Container, Profile,  LogoInst, RelativeContainer, UserImg, Menu, MenuItem, CardPerfil } from "./styles"

import photoProfile from "../../assets/mode-portrait.svg";
import logo from "../../assets/logoInstituto.png"

const MainHeader = () => {
    const [open, setOpen] = useState(false);
    const Menus = ['NomeUsuário', 'Meus Dados', 'Redefinir Senha', 'Sair'];

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

            <Profile>
                <RelativeContainer>

                    <CardPerfil>
                        <UserImg
                            ref={imgRef}
                            onClick={() => setOpen(!open)}
                            src={photoProfile}
                            alt="Foto de Perfil"
                        />
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