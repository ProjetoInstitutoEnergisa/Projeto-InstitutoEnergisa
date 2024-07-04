import React from 'react';
import LayoutAdmin from "../../components/LayoutAdmin";
import ContentAdmin from "../../components/ContentAdmin";

import { ContainerHeader, Title, Button } from "./styles";

const Dashboard = ( ) => {
    return (
        <LayoutAdmin>
            <ContentAdmin>

                <ContainerHeader>
                    <Title>
                        Dashboard
                    </Title>

                    <Button>
                        Exportar Relatórios
                    </Button>

                </ContainerHeader>

            </ContentAdmin>
        </LayoutAdmin>
    );
};

export default Dashboard;
