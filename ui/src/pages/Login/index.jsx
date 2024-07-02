import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from '../../assets/logoInstituto.png';

import { Container, CadastroContainer, Form, Title, Input, Button, LoginContainer, Anchor,
    OverlayContainer, Overlay, Painel, EsquerdoPainel, DireitoPainel, Paragraph, LeftButton, SubTitle, 
    SubTitleNoMargin, ImageContainer, Body, TitleTwo  } from "./styles";
import { useAuth } from "../../hooks/useAuth";

const FormLogin = () => {
    const [login, toggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login: setLoggedIn, setRole } = useAuth();

    const handleLogin = () => {
        // Credenciais padrão
        const adminEmail = 'admin@example.com';
        const adminPassword = '12345';
        const userEmail = 'user@example.com';
        const userPassword = '12345';

        if (email === adminEmail && password === adminPassword) {
            setRole('admin');
            setLoggedIn(true);
            navigate('/homeadmin');
        } else if (email === userEmail && password === userPassword) {
            setRole('user');
            setLoggedIn(true);
            navigate('/home');
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <>
            <Body>
                <SubTitle>Bem vindo ao Formulário de Inscrição</SubTitle>
                <SubTitleNoMargin><h4>Instituto Energisa</h4></SubTitleNoMargin>
                <Container>
                    <CadastroContainer login={login}>
                        <Form>
                            <Title>Dados do Usuário</Title><br />
                            <Input type="text" placeholder="Seu Nome" />
                            <Input type="email" placeholder="Email" />
                            <Input type="email" placeholder="Confirme seu Email" />
                            <Input type="password" placeholder="Senha" />
                            <Button href="#">Cadastre-se</Button>
                        </Form>
                    </CadastroContainer>

                    <LoginContainer login={login}>
                        <Form>
                            <Title>Olá! Faça seu Login.</Title>
                            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Anchor href="#">Esqueceu sua Senha?</Anchor>
                            <Button onClick={handleLogin}>Entrar</Button>
                        </Form>
                    </LoginContainer>

                    <OverlayContainer login={login}>
                        <Overlay login={login}>
                            <EsquerdoPainel login={login}>
                                <LeftButton onClick={() => toggle(true)}>
                                    Entrar
                                </LeftButton>
                                <TitleTwo>Já Possui Cadastro?</TitleTwo>
                            </EsquerdoPainel>

                            <DireitoPainel login={login}>
                                <Title>Olá,</Title>
                                <Paragraph>
                                    Ainda não possui uma Conta?
                                </Paragraph>
                                <LeftButton onClick={() => toggle(false)}>
                                    CADASTRAR-SE
                                </LeftButton>
                            </DireitoPainel>
                        </Overlay>
                    </OverlayContainer>
                </Container>
                <ImageContainer>
                    <img src={Image} alt="Logo Instituto Energisa" style={{ width: '50%', maxWidth: '200px' }} />
                </ImageContainer>
            </Body>
        </>
    );
}

export default FormLogin;
