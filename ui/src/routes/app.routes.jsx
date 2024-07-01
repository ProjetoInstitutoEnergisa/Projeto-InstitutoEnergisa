import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";

const AppRoutes = () => {
    // Retorna a estrutura de roteamento do aplicativo.

    return (
        // Envolve todo o roteamento dentro do componente 'Layout'.
        // 'Switch' é utilizado para renderizar apenas uma rota de cada vez.
        // 'Container' é um componente estilizado que envolve as rotas.
        // Define uma rota para o caminho raiz '/' que renderiza o componente 'Home'.
        <Layout>
            <Routes>
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;