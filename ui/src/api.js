import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/projetosAcoes', // Substitua pelo URL do seu servidor
});

api.interceptors.response.use(
    response => response.data,
    error => {
        console.error('Erro ao buscar projetos/ações', error);
        throw error;
    }
);

export const getProjetosAcoes = async () => {
    return await api.get('/projetosAcoes');
};
