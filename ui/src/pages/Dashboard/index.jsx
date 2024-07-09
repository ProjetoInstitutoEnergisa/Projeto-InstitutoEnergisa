import React, { useRef } from 'react';
import LayoutAdmin from "../../components/LayoutAdmin";
import ContentAdmin from "../../components/ContentAdmin";
import PieChartComponent from '../../components/AreaChart/PieChart';
import BarChartComponent from '../../components/AreaChart/BarChart';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { ContainerHeader, Title, Button, ChartsAll } from "./styles";

const Dashboard = () => {
    const pieChartRef = useRef(null);
    const barChartRef = useRef(null);

    const exportPDF = () => {
        const input = document.getElementById('chartsContainer');
        
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 210;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save("relatorio.pdf");
            });
    };

    return (
        <LayoutAdmin>
            <ContentAdmin>
                <ContainerHeader>
                    <Title>
                        Dashboard
                    </Title>
                    <ChartsAll id="chartsContainer">
                        <div ref={pieChartRef}>
                            <PieChartComponent />
                        </div>
                        <div ref={barChartRef}>
                            <BarChartComponent />
                        </div>
                    </ChartsAll>
                    <Button onClick={exportPDF}>
                        Exportar Relatórios
                    </Button>
                </ContainerHeader>
            </ContentAdmin>
        </LayoutAdmin>
    );
};

export default Dashboard;
