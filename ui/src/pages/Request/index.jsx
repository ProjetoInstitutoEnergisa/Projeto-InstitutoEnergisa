import React, { useState, useMemo } from 'react';
import LayoutAdmin from "../../components/LayoutAdmin";
import ContentAdmin from "../../components/ContentAdmin";

import { Container, Title, PainelContainer, PainelButton, PainelCard, Painel, SearchInput } from './styles';
import SoliciteCard from '../../components/SoliciteCard';
import Modal from 'react-modal';

// Define the app element for accessibility
Modal.setAppElement('#root');

const Request = () => {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDate, setFilterDate] = useState('');

    // Exemplo de dados de solicitação
    const solicitations = [
        { cardTitle: "Nos do morro", subTitle: "Cinema", cidadeTitle: "Cataguases", data: "01/01/2021" },
        { cardTitle: "Nos do morro", subTitle: "Cinema", cidadeTitle: "Cataguases", data: "01/01/2021" },
        { cardTitle: "Nos do morro", subTitle: "Cinema", cidadeTitle: "Cataguases", data: "01/01/2021" },
        { cardTitle: "Exposição XYZ", subTitle: "Exposição", cidadeTitle: "Rio de Janeiro", data: "03/03/2022" },
        { cardTitle: "Exposição XYZ", subTitle: "Exposição", cidadeTitle: "Rio de Janeiro", data: "03/03/2022" },

    ];

    // Função para filtrar por nome
    const filteredSolicitations = useMemo(() => {
        return solicitations.filter(solicitation =>
            solicitation.cardTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, solicitations]);

    // Função para filtrar por data
    const filteredByDateSolicitations = useMemo(() => {
        if (!filterDate) return filteredSolicitations;
        return filteredSolicitations.filter(solicitation => solicitation.data === filterDate);
    }, [filterDate, filteredSolicitations]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <LayoutAdmin>
            <ContentAdmin>

                <Container>
                    <Title>
                        SOLICITAÇÕES
                    </Title>

                    <PainelContainer>
                        <Painel>
                            <PainelButton>
                                <SearchInput
                                    type="text"
                                    placeholder="PESQUISAR POR NOME"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </PainelButton>
                        </Painel>


                        <PainelCard>
                            {filteredSolicitations.map((solicitation, index) => (
                                <SoliciteCard
                                    key={index}
                                    cardTitle={solicitation.cardTitle}
                                    subTitle={solicitation.subTitle}
                                    cidadeTitle={solicitation.cidadeTitle}
                                    data={solicitation.data}
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
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {filteredByDateSolicitations.map((solicitation, index) => (
                            <SoliciteCard
                                key={index}
                                cardTitle={solicitation.cardTitle}
                                subTitle={solicitation.subTitle}
                                cidadeTitle={solicitation.cidadeTitle}
                                data={solicitation.data}
                            />
                        ))}
                    </Modal>
                </Container >
            </ContentAdmin>
        </LayoutAdmin>
    );
};

export default Request;