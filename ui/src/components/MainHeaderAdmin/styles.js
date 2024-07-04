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

export const CardPerfil = styled.div`
    display: flex;
`;

export const Profile = styled.div`
     padding-top: 4rem; 
     display: flex;
     align-items: center;
`;

export const NomePerfil = styled.div`
     padding-top: 5rem;
     /* margin-top: 10rem; */
     text-decoration: none;
     margin-right: 15px;
     color: #3d978f;

     transition: opacity .3s;

     &:hover {
          opacity: .7;
     }
`;

// export const Perfil = styled.img`
//     height: 20px;
//     width: 20px;
//     margin-right: 10px;
// `;

export const LogoInst = styled.img`
    height: 60px;
`;

export const RelativeContainer = styled.div`
    position: relative;
    display: flex;
    
`;

export const UserImg = styled.img`
    margin-bottom: 2.7rem;
    height: 2rem; 
    width: 2rem; 
    object-fit: cover;
    /* border: 4px solid #9CA3AF;  */
    /* border-radius: 9999px;  */
    cursor: pointer;
`;

export const Menu = styled.div`
    border-radius: 20px;
    background-color: #FFFFFF; 
    padding: 1rem; 
    width: 9rem; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    position: absolute;
    left: -2.9rem; 
    top: 3.3rem; 
`;

export const MenuItem = styled.li`
    list-style-type: none;
    padding: 0.5rem; 
    font-size: 1.125rem; 
    cursor: pointer;
    border-radius: 0.375rem; 
    
    &:hover {
        background-color: #BFDBFE; 
    }
`;
