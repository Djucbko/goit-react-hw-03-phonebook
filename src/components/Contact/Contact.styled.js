import styled from 'styled-components';

export const ContactBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
`;

export const DeleteButton = styled.button`
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