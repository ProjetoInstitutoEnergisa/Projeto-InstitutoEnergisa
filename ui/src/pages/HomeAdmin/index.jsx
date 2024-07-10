import React, { useState, useEffect, useMemo } from 'react';
import LayoutAdmin from "../../components/LayoutAdmin";
import ContentAdmin from "../../components/ContentAdmin";
import SoliciteCard from '../../components/SoliciteCard';
import Modal from 'react-modal';
import axios from 'axios';
import { Container, Title, PainelContainer, PainelButton, PainelCard, Painel, SearchInput } from './styles';

Modal.setAppElement('#root');

const Request = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [solicitations, setSolicitations] = useState([]);
    const [selectedSolicitation, setSelectedSolicitation] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null); // Estado para armazenar os dados do usuário vinculado ao projeto

    useEffect(() => {
        fetchSolicitations();
    }, []);

    const fetchSolicitations = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/projetosAcoes'); // Endpoint do seu backend para listar todos os projetos/solicitações
            setSolicitations(response.data);
        } catch (error) {
            console.error('Erro ao buscar solicitações:', error);
        }
    };

    const fetchUserDetails = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/usuarios/${userId}`); // Endpoint do seu backend para obter detalhes do usuário
            setSelectedUser(response.data);
        } catch (error) {
            console.error('Erro ao buscar detalhes do usuário:', error);
        }
    };

    // Função para filtrar por nome
    const filteredSolicitations = useMemo(() => {
        return solicitations.filter(solicitation =>
            solicitation.nome_projetoacao.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, solicitations]);

    // Função para filtrar por data
    const filteredByDateSolicitations = useMemo(() => {
        if (!filterDate) return filteredSolicitations;
        return filteredSolicitations.filter(solicitation => solicitation.data_criacao === filterDate);
    }, [filterDate, filteredSolicitations]);

    // Ordena as solicitações por status: Em análise, Aprovado, Rejeitado
    const sortedSolicitations = useMemo(() => {
        const pending = filteredByDateSolicitations.filter(solicitation => solicitation.status === 'Em análise');
        const approved = filteredByDateSolicitations.filter(solicitation => solicitation.status === 'Aprovado');
        const reenviado = filteredByDateSolicitations.filter(solicitation => solicitation.status === 'Reenviado');
        return [...pending, ...approved, ...reenviado];
    }, [filteredByDateSolicitations]);

    const openModal = async (solicitation) => {
        console.log('Abrindo modal para a solicitação:', solicitation); // Log para depuração
        setSelectedSolicitation(solicitation);
        setModalIsOpen(true);

        // Busca os detalhes do usuário vinculado ao projeto
        await fetchUserDetails(solicitation.id_usuario);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedSolicitation(null);
        setSelectedUser(null); // Limpa os dados do usuário ao fechar o modal
    };

    const handleApprove = async () => {
        try {
            // Atualiza o status do projeto no backend
            await axios.put(`http://localhost:3000/api/projetosAcoes/${selectedSolicitation.id_projetoacao}`, { status: 'Aprovado' });
            // Atualiza o status localmente
            setSelectedSolicitation(prevState => ({
                ...prevState,
                status: 'Aprovado'
            }));
            // Fecha o modal
            closeModal();
        } catch (error) {
            console.error('Erro ao aprovar projeto:', error);
        }
    };

    const handleReject = async () => {
        try {
            // Atualiza o status do projeto no backend
            await axios.put(`http://localhost:3000/api/projetosAcoes/${selectedSolicitation.id_projetoacao}`, { status: 'Rejeitado' });
            // Atualiza o status localmente
            setSelectedSolicitation(prevState => ({
                ...prevState,
                status: 'Rejeitado'
            }));
            // Fecha o modal
            closeModal();
        } catch (error) {
            console.error('Erro ao rejeitar projeto:', error);
        }
    };

    const handleResend = async () => {
        try {
            // Atualiza o status do projeto no backend
            await axios.put(`http://localhost:3000/api/projetosAcoes/${selectedSolicitation.id_projetoacao}`, { status: 'Reenviado' });
            // Atualiza o status localmente
            setSelectedSolicitation(prevState => ({
                ...prevState,
                status: 'Reenviado'
            }));
            // Fecha o modal
            closeModal();
        } catch (error) {
            console.error('Erro ao reenviar projeto:', error);
        }
    };

    return (
        <LayoutAdmin>
            <ContentAdmin>
                <Container>
                    <Title>
                        Todas Solicitações
                    </Title>
                    <PainelButton>
                        <SearchInput
                            type="text"
                            placeholder="Pesquisar Por Nome"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </PainelButton>
                </Container>

                <PainelContainer>
                    <PainelCard>
                        {sortedSolicitations.map((solicitation, index) => (
                            <SoliciteCard
                                key={index}
                                cardTitle={solicitation.nome_projetoacao}
                                subTitle={solicitation.linguagem_artistica}
                                cidadeTitle={solicitation.nome_espaco}
                                status={solicitation.status}
                                data={new Date(solicitation.data_criacao).toLocaleDateString()} // Ajuste o formato da data aqui
                                onClick={() => openModal(solicitation)} // Passa a função openModal para o SoliciteCard
                                statusColor={
                                    solicitation.status === 'Em análise' ? '#ffffff' :
                                        solicitation.status === 'Aprovado' ? '#ffffff' :
                                            solicitation.status === 'Rejeitado' ? '#ffffff' :
                                                solicitation.status === 'Reenviado' ? '#ffffff' :
                                                    '#3D978F'
                                }
                            />
                        ))}
                    </PainelCard>
                </PainelContainer>

                {selectedSolicitation && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Detalhes da Solicitação"
                        style={{
                            content: {
                                color: '#3D987F',
                                backgroundColor: '#F2F2F2',
                                top: '50%',
                                borderRadius: '15px',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                transform: 'translate(-50%, -50%)',
                                width: '50%',
                                maxHeight: '80%',
                                overflow: 'auto',
                                padding: '20px',
                                position: 'relative',
                            }
                        }}
                    >

                        <div style={{ marginBottom: '10px' }}>
                            <h3 style={{ margin: 0 }}>Detalhes do Projeto</h3>
                            <button
                                onClick={closeModal}
                                style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    height: '25px',
                                    width: '25px',
                                    background: '#3D987F',
                                    borderRadius: '50%',
                                    color: '#F2F2F2',
                                    fontSize: '16px',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}>
                                X
                            </button>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <p><strong>Nome do Projeto:</strong> {selectedSolicitation.nome_projetoacao}</p>
                            <p><strong>Linguagem Artística:</strong> {selectedSolicitation.linguagem_artistica}</p>
                            <p><strong>Nome do Espaço:</strong> {selectedSolicitation.nome_espaco}</p>
                            <p><strong>Status:</strong> {selectedSolicitation.status}</p>
                            <p><strong>Data de Criação:</strong> {new Date(selectedSolicitation.data_criacao).toLocaleDateString()}</p>
                            <p><strong>Descrição:</strong>
                                <a href={selectedSolicitation.descricao_proposta} download>
                                    <button style={{
                                        backgroundColor: '#3D987F',
                                        color: 'white',
                                        padding: '2px 10px',
                                        marginLeft: '10px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                    }}>
                                        Download Descrição
                                    </button> </a> </p>
                            {selectedUser && (
                                <div style={{ marginBottom: '20px' }} >
                                    <h3 style={{ margin: 0 }} >Dados do Usuário</h3>
                                    <p><strong>Nome Completo:</strong> {selectedUser.nome_completo}</p>
                                    <p><strong>Email:</strong> {selectedUser.email}</p>
                                    <p><strong>Telefone:</strong> {selectedUser.telefone}</p>
                                    <p><strong>Gênero:</strong> {selectedUser.genero}</p>
                                    <p><strong>Raça/Etnia:</strong> {selectedUser.raca_etnia}</p>
                                    <p><strong>Cidade:</strong> {selectedUser.cidade}</p>
                                    <p><strong>Estado:</strong> {selectedUser.estado}</p>
                                    {selectedUser.comprovante_residencia && (
                                        <p><strong>Comprovante de Residência:</strong>
                                            <a href={selectedUser.comprovante_residencia} download>
                                                <button style={{
                                                    backgroundColor: '#3D987F',
                                                    color: 'white',
                                                    padding: '2px 10px',
                                                    marginLeft: '10px',
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    textAlign: 'center',

                                                }}>
                                                    Download
                                                </button> </a> </p>
                                    )}
                                    {selectedUser.documento_identificacao && (
                                        <p><strong>Documento de Identificação:</strong> <a href={selectedUser.documento_identificacao} download>
                                            <button style={{
                                                backgroundColor: '#3D987F',
                                                color: 'white',
                                                padding: '2px 10px',
                                                marginLeft: '7px',
                                                borderRadius: '8px',
                                                border: 'none',
                                                cursor: 'pointer',
                                                textAlign: 'center',
                                            }}>
                                                Download
                                            </button> </a> </p>
                                    )}
                                    {selectedUser.documento_rne && (
                                        <p><strong>Documento RNE:</strong> <a href={selectedUser.documento_rne} download>
                                            <button style={{
                                                backgroundColor: '#3D987F',
                                                color: 'white',
                                                padding: '2px 10px',
                                                marginLeft: '10px',
                                                borderRadius: '8px',
                                                border: 'none',
                                                cursor: 'pointer',
                                                textAlign: 'center',
                                            }}>
                                                Download
                                            </button> </a> </p>
                                    )}
                                </div>
                            )}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                            <button onClick={handleApprove} style={{ backgroundColor: '#3D987F', color: 'white', padding: '10px 20px', borderRadius: '50px', border: 'none', cursor: 'pointer' }}>APROVAR</button>
                            <button onClick={handleReject} style={{ backgroundColor: '#FF6961', color: 'white', padding: '10px 20px', borderRadius: '50px', border: 'none', cursor: 'pointer' }}>REJEITAR</button>
                            <button onClick={handleResend} style={{ backgroundColor: '#4974A5', color: 'white', padding: '10px 20px', borderRadius: '50px', border: 'none', cursor: 'pointer' }}>REENVIAR</button>
                        </div>
                    </Modal>
                )}

            </ContentAdmin>
        </LayoutAdmin>
    );
};

export default Request;
