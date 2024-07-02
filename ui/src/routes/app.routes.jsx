import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HomeAdmin from "../pages/HomeAdmin";
import Layout from "../components/Layout";
import Request from "../pages/Request";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {

    return (
        <Layout>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/HomeAdmin" element={<HomeAdmin />} />
                <Route path="/Request" element={<Request />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;