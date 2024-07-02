import React, { useState, useMemo } from 'react';
import Modal from 'react-modal';
import {
    Container,
    Title,
    PainelContainer,
    PainelHeader,
    PainelButton,
    PainelCard,
    Painel,
    SearchInput
} from './styles';
import SoliciteCard from '../SoliciteCard';

// Define the app element for accessibility
Modal.setAppElement('#root');

const Content = () => {
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
        { cardTitle: "Exposição XYZ", subTitle: "Exposição", cidadeTitle: "Rio de Janeiro", data: "03/03/2022" },
        { cardTitle: "Exposição XYZ", subTitle: "Exposição", cidadeTitle: "Rio de Janeiro", data: "03/03/2022" },
        { cardTitle: "Exposição XYZ", subTitle: "Exposição", cidadeTitle: "Rio de Janeiro", data: "03/03/2022" },
        { cardTitle: "Exposição XYZ", subTitle: "Exposição", cidadeTitle: "Rio de Janeiro", data: "03/03/2022" },
        { cardTitle: "Exposição XYZ", subTitle: "Exposição", cidadeTitle: "Rio de Janeiro", data: "03/03/2022" },
        { cardTitle: "Exposição XYZ", subTitle: "Exposição", cidadeTitle: "Rio de Janeiro", data: "03/03/2022" },
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
        <Container>
            <Title>
                <h4>Bem Vindo, Admin!</h4>
            </Title>

            <PainelContainer>
                <Painel>
                    <PainelHeader>
                        Solicitações Recentes
                    </PainelHeader>
                    <PainelButton>
                    <SearchInput
                        type="text"
                        placeholder="Buscar por nome"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    </PainelButton>
                </Painel>

                <PainelCard>  
                {filteredByDateSolicitations.map((solicitation, index) => (
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
        </Container >
    );
}

export default Content;