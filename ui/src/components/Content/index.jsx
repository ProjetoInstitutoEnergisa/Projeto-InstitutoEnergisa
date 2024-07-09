import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Container, Title, PainelContainer, PainelHeader, PainelButton, PainelCard, Painel, SearchInput } from './styles';
import SoliciteCard from '../SoliciteCard';
import { useAuth } from '../../hooks/useAuth'; // Importe o hook useAuth

// Define o elemento raiz da aplicação para acessibilidade
Modal.setAppElement('#root');

const Content = () => {
    const { userId } = useAuth(); // Obtenha o userId do contexto de autenticação
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSolicitations, setFilteredSolicitations] = useState([]);

    useEffect(() => {
        if (userId) {
            fetchSolicitations();
        }
    }, [userId]);

    const fetchSolicitations = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/projetosAcoes/usuario/${userId}`); // Endpoint do seu backend para listar projetos/solicitações por ID de usuário
            setFilteredSolicitations(response.data);
        } catch (error) {
            console.error('Erro ao buscar solicitações:', error);
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        filterSolicitations(searchTerm);
    };

    const filterSolicitations = (searchTerm) => {
        const filtered = filteredSolicitations.filter((solicitation) =>
            solicitation.nome_projetoacao.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSolicitations(filtered);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <Container>
            <Title>
                <h4>Bem Vindo, Usuário!</h4>
            </Title>

            <PainelContainer>
                <Painel>
                    <PainelHeader>
                        Suas Solicitações
                    </PainelHeader>

                    <PainelButton>
                        <SearchInput
                            type="text"
                            placeholder="Buscar Por Nome"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </PainelButton>
                </Painel>

                <PainelCard>
                    {filteredSolicitations.map((solicitation, index) => (
                        <SoliciteCard
                            key={index}
                            cardTitle={solicitation.nome_projetoacao}
                            subTitle={solicitation.linguagem_artistica}
                            cidadeTitle={solicitation.nome_espaco}
                            status={solicitation.status}
                            data={new Date(solicitation.data_criacao).toLocaleDateString()} // Adjust the date format here
                        />
                    ))}
                </PainelCard>
            </PainelContainer>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Solicitações"
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
                        width: '80%',
                        maxHeight: '80%',
                        overflow: 'auto',
                        padding: '12px',
                    }
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '34px' }}>
                    <h3>Suas Solicitações</h3>
                    <button onClick={closeModal} style={{
                        position: 'absolute',
                        padding: '8px',
                        right: '8px',
                        background: 'none',
                        border: 'none',
                        color: '#3D978F',
                        fontSize: '20px',
                    }}>X</button>
                    <SearchInput
                        type="text"
                        placeholder="Buscar por nome"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                {filteredSolicitations.map((solicitation, index) => (
                    <SoliciteCard
                        key={index}
                        cardTitle={solicitation.nome_projetoacao}
                        subTitle={solicitation.descricao_proposta}
                        cidadeTitle={solicitation.cidade}
                        status={solicitation.status}
                        data={new Date(solicitation.data).toLocaleDateString()} // Adjust the date format here
                    />
                ))}
            </Modal>
        </Container>
    );
}

export default Content;
