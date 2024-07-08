import { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState(''); // Estado do ID do usuário

  const login = () => setLogged(true);
  const logout = () => {
    setLogged(false);
    setRole('');
    setUserId(''); // Limpar também o ID do usuário ao fazer logout
  };

  return (
    <AuthContext.Provider value={{ logged, role, userId, setUserId, login, logout, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
