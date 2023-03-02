import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: button;
  max-width: 110px;
  min-width: 100px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  transition: opacity ${({ theme }) => theme.animation.default};

  :hover,
  :focus {
    opacity: 0.8;
  }
`;
