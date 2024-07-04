import React from "react";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FormLogin from "./pages/Login";
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin"; // Certifique-se de ter esta página
import { AuthProvider, useAuth } from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard"; // Corrigido o nome da página
import Request from "./pages/Request";

const App = () => {
    return (
        <>
         <GlobalStyles />
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<FormLogin />} />
                        <Route path="/home" element={<ProtectedRoute role="user"><Home /></ProtectedRoute>} />
                        <Route path="/homeadmin" element={<ProtectedRoute role="admin"><HomeAdmin /></ProtectedRoute>} />
                        <Route path="/dashboard" element={<ProtectedRoute role="admin"><Dashboard /></ProtectedRoute>} />
                        <Route path="/request" element={<ProtectedRoute role="admin"><Request /></ProtectedRoute>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
};

const ProtectedRoute = ({ children, role }) => {
    const { logged, role: userRole } = useAuth();
    if (!logged) {
        return <Navigate to="/login" />;
    }
    if (role && userRole !== role) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default App;
