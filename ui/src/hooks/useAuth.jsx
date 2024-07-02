import { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [role, setRole] = useState('');

    const login = () => setLogged(true);
    const logout = () => {
        setLogged(false);
        setRole('');
    };

    return (
        <AuthContext.Provider value={{ logged, role, login, logout, setRole }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
