import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Image from '../../assets/logoInstituto.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    Container, 
    CadastroContainer, 
    Form, 
    FormCadastro, 
    Title, 
    Input, 
    Button, 
    LoginContainer, 
    Anchor, 
    OverlayContainer, 
    Overlay, 
    Painel, 
    EsquerdoPainel,
    DireitoPainel, 
    Paragraph, 
    LeftButton, 
    SubTitle, 
    SubTitleNoMargin, 
    ImageContainer, 
    Body, 
    TitleTwo, 
    Select 
} from "./styles";
import { useAuth } from "../../hooks/useAuth"; // Assumindo que você já tem este hook implementado

const FormLogin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userData, setUserData] = useState({
        nome_completo: '',
        email: '',
        senha: '',
        telefone: '',
        genero: '',
        raca_etnia: '',
        cidade: '',
        estado: '',
        comprovante_residencia: '',
        documento_identificacao: '',
        documento_rne: ''
    });
    const navigate = useNavigate();
    const { login: setLoggedIn, setRole, setUserId } = useAuth(); // Adicione setUserId ao seu hook useAuth se ainda não estiver lá

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/usuarios/login', {
                email: userData.email,
                senha: userData.senha
            });
            if (response.status === 200) {
                const { role, userId } = response.data; // Verifique se o nome do campo retornado é 'userId'
                localStorage.setItem('userId', userId); // Armazena o ID do usuário no localStorage
                console.log('ID do usuário:', userId);
                setRole(role);
                setUserId(userId); // Atualiza o ID do usuário no contexto de autenticação
                setLoggedIn(true);
                if (role === 'admin') {
                    navigate('/homeadmin');
                } else {
                    navigate('/home');
                }
            } else {
                toast.error('Credenciais inválidas. Tente novamente.');
            }
        } catch (error) {
            toast.error('Erro ao fazer login. Tente novamente.');
        }
    };

    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            console.log('Dados enviados para cadastro:', userData); // Verifica os dados que estão sendo enviados
            const response = await axios.post('http://localhost:3000/api/usuarios', userData);
            
            console.log('Resposta do servidor:', response); // Verifica a resposta do servidor
            
            if (response.status === 201) {
                toast.success(
                    `Cadastro realizado com sucesso! Seja bem-vindo(a), ${response.data.nome_completo}!`,
                    { position:'top-left', autoClose: 4000 }
                );
                setTimeout(() => navigate('/login'), 4000);
            } else {
                // Lida com respostas de erro do servidor (ex: 400 Bad Request)
                toast.error(response.data.message || 'Erro ao cadastrar usuário. Tente novamente.'); 
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error); // Exibe o erro no console
            if (error.response) {
                // Exibe mensagem de erro específica do backend, se disponível
                toast.error(error.response.data.message || 'Erro ao cadastrar usuário. Tente novamente.');
            } else if (error.request) {
                // O servidor não respondeu (ex: timeout)
                toast.error('Sem resposta do servidor. Verifique sua conexão e tente novamente.');
            } else {
                // Erro ao configurar a requisição
                toast.error('Erro ao enviar a requisição. Tente novamente mais tarde.');
            }
        }
    };
    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const toggleLogin = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <>
            <ToastContainer />
            <Body>
                <SubTitle>Bem vindo ao Formulário de Inscrição</SubTitle>
                <SubTitleNoMargin><h4>Instituto Energisa</h4></SubTitleNoMargin>
                <Container>
                    <CadastroContainer isLogin={isLogin}>
                        <FormCadastro onSubmit={handleCadastro}>
                            <Title>Dados do Usuário</Title><br />
                            <Input type="text" name="nome_completo" placeholder="Seu Nome" value={userData.nome_completo} onChange={handleInputChange} />
                            <Input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
                            <Input type="password" name="senha" placeholder="Senha" value={userData.senha} onChange={handleInputChange} />
                            <Input type="text" name="telefone" placeholder="Telefone" value={userData.telefone} onChange={handleInputChange} />
                            <Select name="genero" value={userData.genero} onChange={handleInputChange}>
                                <option value="" disabled>Selecione o Gênero</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </Select>
                            <Select name="raca_etnia" value={userData.raca_etnia} onChange={handleInputChange}>
                                <option value="" disabled>Selecione a Raça/Etnia</option>
                                <option value="Branco">Branco</option>
                                <option value="Negro">Negro</option>
                                <option value="Pardo">Pardo</option>
                                <option value="Amarelo">Amarelo</option>
                                <option value="Indígena">Indígena</option>
                                <option value="Outro">Outro</option>
                            </Select>
                            <Input type="text" name="cidade" placeholder="Cidade" value={userData.cidade} onChange={handleInputChange} />
                            <Select name="estado" value={userData.estado} onChange={handleInputChange}>
                                <option value="" disabled>Selecione o Estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Select>
                            <Input type="text" name="comprovante_residencia" placeholder="Comprovante de Residência" value={userData.comprovante_residencia} onChange={handleInputChange} />
                            <Input type="text" name="documento_identificacao" placeholder="Documento de Identificação" value={userData.documento_identificacao} onChange={handleInputChange} />
                            <Input type="text" name="documento_rne" placeholder="Documento RNE" value={userData.documento_rne} onChange={handleInputChange} />
                            <Button type="submit">Cadastre-se</Button>
                        </FormCadastro>
                    </CadastroContainer>
                    <LoginContainer isLogin={isLogin}>
                        <Form onSubmit={handleLogin}>
                            <Title>Olá! Faça seu Login.</Title>
                            <Input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
                            <Input type="password" name="senha" placeholder="Senha" value={userData.senha} onChange={handleInputChange} />
                            <Anchor href="#">Esqueceu sua Senha?</Anchor>
                            <Button type="submit">Entrar</Button>
                        </Form>
                    </LoginContainer>
                    <OverlayContainer isLogin={isLogin}>
                        <Overlay isLogin={isLogin}>
                            <EsquerdoPainel isLogin={isLogin}>
                                <LeftButton onClick={toggleLogin}>Entrar</LeftButton>
                                <TitleTwo>Já Possui Cadastro?</TitleTwo>
                            </EsquerdoPainel>
                            <DireitoPainel isLogin={isLogin}>
                                <Title>Olá,</Title>
                                <Paragraph>Ainda não possui uma Conta?</Paragraph>
                                <LeftButton onClick={toggleLogin}>CADASTRAR-SE</LeftButton>
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
