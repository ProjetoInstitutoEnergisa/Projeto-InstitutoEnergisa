import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HomeAdmin from "../pages/HomeAdmin";
import Request from "../pages/Request";
import Dashboard from "../pages/Dashboard";
// RETIREI O LAYOUT PRA TESTE;


const AppRoutes = () => {

    return (
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/HomeAdmin" element={<HomeAdmin />} />
                <Route path="/Request" element={<Request />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
    );
};

export default AppRoutes;