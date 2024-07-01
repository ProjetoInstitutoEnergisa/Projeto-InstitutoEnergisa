import styled from 'styled-components';

export const Container = styled.div`
     grid-area: MH;
     color: #3D978F;
     background-color: #F2F2F2;

     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 10px;
     border-bottom: 3px solid  #3D978F;
`;

export const Profile = styled.div`
     display: flex;
`;

export const NomePerfil = styled.a`
     text-decoration: none;
     margin-right: 10px;
     color: #3d978f;

     transition: opacity .3s;

     &:hover {
          opacity: .7;
     };

`;

export const Perfil = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 10px;
`;

export const LogoInst= styled.img`
    height: 60px;
`;