import React from "react";
import Image from '../../assets/logoInstituto.png';

import { Container, CadastroContainer, Form, Title, Input, Button, LoginContainer, Anchor,
    OverlayContainer, Overlay, Painel, EsquerdoPainel, DireitoPainel, Paragraph, LeftButton, SubTitle,SubTitleNoMargin,ImageContainer  } from "./styles";


const FormLogin = () => {

    const [login, toggle] = React.useState(true);
    return (
        <>
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
                    <Button>Cadastre-se</Button>
                </Form>
            </CadastroContainer>

            <LoginContainer login={login}>
                <Form>
                    <Title>Olá,</Title>
                    <Title>Acesse sua conta.</Title>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Senha" />
                    <Anchor href="#">Esqueceu sua Senha?</Anchor>
                    <Button>Entrar</Button>
                </Form>
            </LoginContainer>

            <OverlayContainer login={login}>
                <Overlay login={login}>
                    <EsquerdoPainel login={login}>
                        <Title>Bem Vindo de Volta!</Title>
                        <Paragraph>
                            Para se manter conectado conosco, faça login com suas informações pessoais.
                        </Paragraph>
                        <LeftButton onClick={() => toggle(true)}>
                            Entrar
                        </LeftButton>
                    </EsquerdoPainel>

                    <DireitoPainel login={login}>
                    <Title>Olá,</Title>
                        <Paragraph>
                            Ainda não possui uma Conta?
                        </Paragraph>
                        <LeftButton onClick={() => toggle(false)}>
                            Se Cadastrar
                        </LeftButton>
                    </DireitoPainel>
                </Overlay>
            </OverlayContainer>
        </Container>
         {/* <div style={{  marginTop: '70px' }}>
                <img src={Image} alt="Image" style={{ width: '50%', maxWidth: '200px' }} />
            </div> */}
            <ImageContainer>
                <img src={Image} alt="Image" style={{ width: '50%', maxWidth: '200px' }} />
            </ImageContainer>
        </>
    );

}

export default FormLogin;