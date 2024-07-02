import React from 'react';
import Content from "../../components/Content";
import LayoutAdmin from "../../components/LayoutAdmin";
import { Container } from "./styles";

const Request = () => {
    return (
        <LayoutAdmin>
            <Container>
                <Content/>
            </Container>
        </LayoutAdmin>
    );
};

export default Request;
