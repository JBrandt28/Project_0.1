import styled from 'styled-components';

export const buttonStyles = `
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const Label = styled.label`
  margin: 10px 0 5px 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0 15px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.input`
  ${buttonStyles}
`;

export const LinkContainer = styled.div`
  ${buttonStyles}
`;
