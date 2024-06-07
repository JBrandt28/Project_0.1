// style/Style.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const SwitchButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bodyBackgroundColor};
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
