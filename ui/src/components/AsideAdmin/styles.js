import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Container = styled.div`
    grid-area: AS;
    color: #F2F2F2;
    background-color: #3D978F;
    padding-left: 22px;
    position: relative;

    @media (max-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const MenuContainer = styled.nav`
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        display: ${(props) => (props.isOpen ? 'flex' : 'none')};
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #3D978F;
        z-index: 1000;
        padding: 10px;
    }
`;

export const MenuItemLink = styled.a`
    color: #F2F2F2;
    text-decoration: none;
    margin: 3px 0;
    display: flex;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 22px;
        margin-right: 10px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #000;
    font-size: 20px;
    cursor: pointer;

    @media (min-width: 769px) {
        display: none;
    }
`;

export const HamburgerButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        color: #F2F2F2;
        font-size: 24px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;
