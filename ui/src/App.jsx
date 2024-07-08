import React from "react";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FormLogin from "./pages/Login";
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/home" element={<ProtectedRoute role="user"><Home /></ProtectedRoute>} />
          <Route path="/homeadmin" element={<ProtectedRoute role="admin"><HomeAdmin /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute role="admin"><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
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
