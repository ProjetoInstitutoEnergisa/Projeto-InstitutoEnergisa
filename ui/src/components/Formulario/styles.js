import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  width: 100%;

  & > div {
    flex: 1;
    min-width: 200px;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  strong {
    color: #333;
    font-size: 1rem;
  }
  .paragrafo {
    margin-top: 5px;
    margin: auto ;
    font-size: 0.875rem;
    color : #737373;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const RadioButton = styled.input`
  margin-right: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #3d978e;
  margin: auto;
  width: 20%;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #3d978f;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
`;