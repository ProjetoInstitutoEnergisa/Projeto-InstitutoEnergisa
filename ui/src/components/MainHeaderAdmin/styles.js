import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    color: #3D978F;
    background-color: #F2F2F2;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 3px solid #3D978F;
    height: 60px; /* Ajuste conforme necessário */

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 10px;
    }
`;

export const MenuItem = styled.li`
    list-style-type: none;
    padding: 2px; 
    font-size: 1rem; 
    cursor: pointer;
    border-radius: 5px; 
    
    &:hover {
        background-color: #F2F2F2; 
    }

    @media (max-width: 768px) {
        font-size: 0.875rem;
        padding: 10px;
    }
`;

export const CardPerfil = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding-top: 1rem;
    }
`;

export const LogoInst = styled.img`
    height: 60px;

    @media (max-width: 768px) {
        height: 40px; /* Ajuste conforme necessário */
    }
`;

export const RelativeContainer = styled.div`
    position: relative;
    display: flex;
`;

export const UserImg = styled.img`
    height: 2rem; 
    width: 2rem; 
    object-fit: cover;
    margin-right: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 1.5rem; /* Ajuste conforme necessário */
        width: 1.5rem; /* Ajuste conforme necessário */
    }
`;

export const Menu = styled.div`
    border-radius: 10px;
    background-color: #FFFFFF; 
    padding: 1rem; 
    width: 10rem; 
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); 
    position: absolute;
    left: -8rem; 
    top: 3.3rem; 
    z-index: 1000;

    @media (max-width: 768px) {
        left: 0;
        top: 3rem; /* Ajuste conforme necessário */
        width: 100%;
        box-shadow: none;
        padding: 0.5rem;
    }
`;
