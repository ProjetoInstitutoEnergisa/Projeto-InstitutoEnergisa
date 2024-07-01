import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    );
}

export default AuthRoutes;