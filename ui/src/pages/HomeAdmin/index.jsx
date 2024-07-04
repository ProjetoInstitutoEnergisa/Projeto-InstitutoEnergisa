import React from 'react';
import LayoutAdmin from "../../components/LayoutAdmin";
import { Container } from "./styles";
import ContentAdmin from '../../components/ContentAdmin';

const Home = () => {
    return (
        <LayoutAdmin>
            <Container>
                <ContentAdmin />
            </Container>
        </LayoutAdmin>
    );
};

export default Home;
