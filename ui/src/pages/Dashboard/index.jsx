import React from 'react';
import Content from "../../components/Content";
import LayoutAdmin from "../../components/LayoutAdmin";
import { Container } from "./styles";

const Dashboard = () => {
    return (
        <LayoutAdmin>
            <Container>
                <Content/>
            </Container>
        </LayoutAdmin>
    );
};

export default Dashboard;
