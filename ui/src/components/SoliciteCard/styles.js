import styled from 'styled-components';

// Estilização do Container
export const Container = styled.div`
  background-color: #3d978e;  // Aplica a cor passada como prop
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 95%;
  margin: 5px auto;
  display: flex;
  justify-content : space-between;
  align-items : center;
  color: #f2f2f2;
  cursor: pointer;
  
  >div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

