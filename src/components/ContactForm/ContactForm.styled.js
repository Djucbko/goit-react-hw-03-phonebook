import styled from 'styled-components';

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 16px;
  max-width: 300px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 4px;
  font: inherit;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  &:active {
    background-color: #43b0f1;
  }
  &:hover {
    background-color: #43b0f1;
  }
`;