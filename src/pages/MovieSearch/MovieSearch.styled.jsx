import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.card};
  grid-template-areas: 'button . .';
`;

export const ErrorTitle = styled.h2`
  padding: 30px;
  text-align: center;
`;
